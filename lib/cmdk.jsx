/*
Forked from https://www.npmjs.com/package/cmdk and reverse it using reverse engineering
*/

/*
MIT License
Copyright (c) 2021 Paco Coursey
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  createContext,
  useContext,
  forwardRef,
  useMemo,
  Fragment,
  useLayoutEffect,
} from 'react'
import clsx from 'classnames'
import { useId } from '@reach/auto-id'
import mergeRefs from 'react-merge-refs'
import {
  useDescendants,
  createDescendants,
  useDescendant,
} from 'use-descendants'
import { matchSorter } from 'match-sorter'

const IGNORE_PRESS_TAGS = ['select', 'button', 'textarea']

const useCommand = (props) => {
  let { search, selected, ordering, filter, loop, element, ...others } = props

  search = props.search ?? ''
  selected = props.selected ?? 0
  ordering = true || props.ordering
  filter = props.filter ?? defaultFilter
  loop = false || props.loop
  element = props.element

  const { ref: listRef, ...listProps } = useDescendants()

  const [selectedItem, setSelectedItem] = useState(selected)
  const [searchKeyword, setSearchKeyword] = useState(search)
  const commandRef = useRef()
  const selectedRef = useRef(selectedItem)
  selectedRef.current = selectedItem
  const filterList = filter(listProps.map, searchKeyword)

  useInjectKeyPress({
    setSelected: setSelectedItem,
    listProps: listProps,
    selectedRef: selectedRef,
    loop: loop,
    element: element || commandRef.current,
  })

  return {
    search: searchKeyword,
    selected: selectedItem,
    setSelected: setSelectedItem,
    setSearch: useCallback((e) => {
      setSearchKeyword(e ? e.target.value : e)
    }, []),
    filterList: filterList,
    ordering: ordering,
    listRef: listRef,
    commandRef: commandRef,
    ...listProps,
    ...others,
  }
}

const defaultFilter = (listRef, keyword) => {
  var filterItems = Object.values(listRef.current)
  if (!keyword) return filterItems

  return filterItems.length
    ? matchSorter(filterItems, keyword, {
        keys: [(e) => e?.value],
      })
    : null
}

const useInjectKeyPress = (props) => {
  const { setSelected, selectedRef, listProps, loop, element } = props

  const onKeyEnd = useCallback(() => {
    setSelected(listProps.list.current.length - 1)
  }, [listProps.list, setSelected])

  const onKeyHome = useCallback(() => {
    setSelected(0)
  }, [setSelected])

  const onArrowDown = useCallback(() => {
    setSelected((idx) => {
      const listLength = listProps.list.current.length
      return idx === listLength - 1
        ? loop
          ? (idx + 1) % listLength
          : idx
        : idx + 1
    })
  }, [listProps.list, loop, setSelected])

  const onArrowUp = useCallback(() => {
    setSelected((idx) => {
      return idx === 0
        ? loop
          ? listProps.list.current.length - 1
          : idx
        : idx - 1
    })
  }, [listProps.list, loop, setSelected])

  const handleKeyPress = useCallback((e) => {
    // eslint-disable-next-line default-case
    switch (e.key) {
      case 'Home':
        e.preventDefault()
        onKeyHome()
        break
      case 'End':
        e.preventDefault()
        onKeyEnd()
        break
      case 'ArrowDown':
        e.preventDefault()
        onArrowDown()
        break
      case 'ArrowUp':
        e.preventDefault()
        onArrowUp()
        break
      case 'Enter':
        const selectedItem = listProps.list.current[selectedRef.current]
        const selectCallback = selectedItem?.callback
        if (!selectCallback) return

        const activeElement = document.activeElement
        if (activeElement) {
          if (IGNORE_PRESS_TAGS.includes(activeElement.tagName.toLowerCase()))
            return
          if (activeElement.contentEditable === 'true') return
          if (!activeElement.hasAttribute('data-command-input')) return
        }
        selectCallback()
    }
  }, [listProps, onArrowDown, onArrowUp, onKeyEnd, onKeyHome, selectedRef])

  useEffect(() => {
    element && element.addEventListener('keydown', handleKeyPress)
    return () => {
      if (element) element.removeEventListener('keydown', handleKeyPress)
    }
  }, [element, handleKeyPress])
}

const usePages = (commandProps, items) => {
  const setSearch = commandProps.setSearch
  const [pages, setPages] = useState([items])

  useEffect(() => {
    setSearch('')
    const commandInputEle = document.querySelector('[data-command-input]')
    if (commandInputEle) commandInputEle.focus()
  }, [pages, setSearch])

  return [pages, setPages]
}

const CommandContext = createContext({})

const useCommandContext = () => {
  return useContext(CommandContext)
}

const Command = forwardRef((props, ref) => {
  const { label, className, children, commandRef, ...others } = props
  const listId = useId()
  const inputId = useId()

  const contextValue = useMemo(() => {
    return {
      listId: listId,
      inputId: inputId,
      ...others,
    }
  }, [listId, inputId, others])

  return (
    <CommandContext.Provider value={contextValue}>
      <div
        data-command=""
        className={className || ''}
        ref={mergeRefs([ref, commandRef])}
      >
        {label && (
          <label htmlFor={inputId} style={a11yHidden}>
            {label}
          </label>
        )}
        {children}
      </div>
    </CommandContext.Provider>
  )
})

const DescendantsContext = createDescendants()

const CommandList = forwardRef((props, ref) => {
  const { children } = props
  const { listId, ordering, listRef, map, list, force } = useCommandContext()

  useIsomorphicLayoutEffect(() => {
    if (ordering && listRef.current) {
      const elementsMap = new Map()
      const allCommandEles = listRef.current.querySelectorAll('[data-descendant]')
      
      allCommandEles.sort((eleA, eleB) => {
          return eleA.getAttribute('data-order') - eleB.getAttribute('data-order')
        })
        .forEach((element) => {
          if (element.parentElement) {
            element.parentElement.appendChild(element)
            const closetElement = element.closest('[data-command-list] > *')
            if (!closetElement || closetElement === element || closetElement === listRef.current) return
            if (elementsMap.has(closetElement)) return

            listRef.current.appendChild(closetElement)
            elementsMap.set(closetElement, true)
          }
        })
    }
  })

  const decendantsValue = useMemo(() => {
    return {
      list: list,
      map: map,
      force: force,
    }
  }, [list, map, force])

  return (
    <>
      <ul
        ref={mergeRefs([listRef, ref])}
        role="listbox"
        id={listId}
        data-command-list=""
        data-command-list-empty={list.current.length === 0 ? '' : undefined}
      >
        <DescendantsContext.Provider value={decendantsValue}>
          {children}
        </DescendantsContext.Provider>
      </ul>
      {list.current.length > 0 && (
        <div aria-live="polite" role="status" style={a11yHidden}>
          {`${list.current.length} result${
            list.current.length > 1 ? 's' : ''
          } available.`}
        </div>
      )}
    </>
  )
})

const CommandItem = forwardRef((props, ref) => {
  const {
    selected,
    setSelected,
    filterList,
    search,
    ordering,
    map,
    itemClass,
    selectedItemClass,
  } = useCommandContext()
  const { children, ...others } = props
  const {
    index: descendantIndex,
    ref: descendantRef,
    id: descendantId,
  } = useDescendant(DescendantsContext, {
    value: typeof children === 'string' ? children : undefined,
    ...others,
  })
  const [isSelectedViaMouseMove, setSelectedViaMouseMove] = useState(false)

  const isCurrentSelected = selected === descendantIndex
  const existInMap = !!map.current[descendantId]

  const updateSelectedDescendant = useCallback(() => {
    requestAnimationFrame(() => {
      setSelected(descendantIndex)
    })
  }, [descendantIndex, setSelected])

  const onMouseMove = () => {
    if (isSelectedViaMouseMove) return

    setSelectedViaMouseMove(true)
    updateSelectedDescendant()
  }

  useEffect(() => {
    if (!isCurrentSelected) return

    descendantRef.current?.scrollIntoView({
      block: 'nearest',
    })
  }, [isCurrentSelected, descendantRef])

  const indexInList =
    filterList && existInMap
      ? filterList.findIndex(
          (commandItem) => commandItem._internalId === descendantId
        )
      : undefined

  useEffect(() => {
    if (indexInList === 0) setSelected(descendantIndex)
  }, [search, descendantIndex, indexInList, setSelected])

  return ordering && indexInList === -1 ? null : (
    <li
      ref={mergeRefs([descendantRef, ref])}
      onClick={props.callback}
      data-order={indexInList}
      className={clsx(itemClass, { [selectedItemClass]: isCurrentSelected })}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setSelectedViaMouseMove(false)}
      aria-selected={isCurrentSelected || undefined}
      role="option"
      data-command-item=""
      data-command-selected={isCurrentSelected ? '' : undefined}
    >
      {children}
    </li>
  )
})

const CommandInput = forwardRef((props, ref) => {
  const { search, setSearch, listId, inputId } = useCommandContext()

  const inputAttrs = useMemo(
    () => ({
      type: 'text',
      'aria-expanded': true,
      'aria-autocomplete': 'list',
      'aria-haspopup': 'listbox',
      autoComplete: 'off',
      role: 'combobox',
      'aria-owns': listId,
      id: inputId,
      'data-command-input': '',
    }),
    [inputId, listId]
  )

  return (
    <input
      ref={ref}
      value={search}
      onChange={setSearch}
      {...inputAttrs}
      {...props}
    />
  )
})

const CommandGroup = (props) => {
  const { children, heading, className } = props

  const commandId = useId()
  const groupRef = useRef()
  const [hasChild, setHasChild] = useState(true)

  useIsomorphicLayoutEffect(() => {
    groupRef.current && setHasChild(groupRef.current.children.length !== 0)
  })

  return (
    <li
      role="presentation"
      data-command-group=""
      className={className || ''}
      style={hasChild ? null : { display: 'none' }}
    >
      <div aria-hidden={true} id={commandId}>
        {heading}
      </div>
      <ul role="group" aria-labelledby={commandId} ref={groupRef}>
        {children}
      </ul>
    </li>
  )
}

const a11yHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: '0',
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  useCommand,
  useCommandContext,
  usePages,
}
