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
/* eslint-disable */
/* tslint-disable */

import React, {
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
import clsx from 'clsx'
import { useId } from '@reach/auto-id'
import mergeRefs from 'react-merge-refs'
import {
  useDescendants,
  createDescendants,
  useDescendant,
} from 'use-descendants'
import { matchSorter } from 'match-sorter'

function b() {
  return (b =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t]
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
      }
      return e
    }).apply(this, arguments)
}

function E(e, t) {
  if (null == e) return {}
  var r,
    n,
    a = {},
    l = Object.keys(e)
  for (n = 0; n < l.length; n++) t.indexOf((r = l[n])) >= 0 || (a[r] = e[r])
  return a
}

var y = ['select', 'button', 'textarea']

const useCommand = function (userConfigs) {
  const configs = userConfigs || {}
  const search = configs.search ?? ''
  const selected = configs.selected ?? 0
  const ordering = true || configs.ordering
  const filter = configs.filter ?? defaultFilter
  const loop = false || configs.loop
  const element = configs.element

  var g = E(configs, [
      'search',
      'selected',
      'ordering',
      'filter',
      'loop',
      'element',
    ]),
    descendants = useDescendants(),
    listRef = descendants.ref,
    listProps = E(descendants, ['ref'])

  const [selectedItem, setSelectedItem] = useState(selected)
  const [searchKeyword, setSearchKeyword] = useState(search)
  const commandRef = useRef()
  const selectedRef = useRef(selectedItem)
  selectedRef.current = selectedItem
  const filterList = filter(listProps.map, searchKeyword)

  return (
    I({
      setSelected: setSelectedItem,
      listProps: listProps,
      selectedRef: selectedRef,
      loop: loop,
      element: element || commandRef.current,
    }),
    b(
      {
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
      },
      listProps,
      g
    )
  )
}

function defaultFilter(listRef, keyword) {
  var filterItems = Object.values(listRef.current)
  if (!keyword) return filterItems

  return filterItems.length
    ? matchSorter(filterItems, keyword, {
        keys: [
          function (e) {
            return (e == null ? undefined : e.value) || null
          },
        ],
      })
    : null
}

var C,
  k,
  I = function (e) {
    var t = e.setSelected,
      r = e.selectedRef,
      l = e.listProps,
      i = e.loop,
      o = e.element,
      c = useCallback(function () {
        t(l.list.current.length - 1)
      }, []),
      u = useCallback(function () {
        t(0)
      }, []),
      d = useCallback(function () {
        t(function (e) {
          return e === l.list.current.length - 1
            ? i
              ? (e + 1) % l.list.current.length
              : e
            : e + 1
        })
      }, []),
      s = useCallback(function () {
        t(function (e) {
          return 0 === e ? (i ? l.list.current.length - 1 : e) : e - 1
        })
      }, []),
      m = useCallback(function (e) {
        switch (e.key) {
          case 'Home':
            e.preventDefault(), u()
            break
          case 'End':
            e.preventDefault(), c()
            break
          case 'ArrowDown':
            e.preventDefault(), d()
            break
          case 'ArrowUp':
            e.preventDefault(), s()
            break
          case 'Enter':
            var t,
              n =
                null == (t = l.list.current[r.current]) ? undefined : t.callback
            if (!n) return
            if (document.activeElement) {
              if (
                -1 !==
                  y.indexOf(document.activeElement.tagName.toLowerCase()) ||
                'true' === document.activeElement.contentEditable
              )
                return
              if (!document.activeElement.hasAttribute('data-command-input'))
                return
            }
            n()
        }
      }, [])
    useEffect(
      function () {
        return (
          o && o.addEventListener('keydown', m),
          function () {
            return o == null ? undefined : o.removeEventListener('keydown', m)
          }
        )
      },
      [o, m]
    )
  },
  usePages = function (e, r) {
    var n = e.setSearch,
      l = useState([r]),
      i = l[0],
      o = l[1]
    return (
      useEffect(
        function () {
          n('')
          var e = document.querySelector('[data-command-input]')
          null == e || e.focus()
        },
        [i, n]
      ),
      [i, o]
    )
  }
const CommandContext = createContext({})

const useCommandContext = () => {
  return useContext(CommandContext)
}

const Command = forwardRef(function (props, ref) {
  const { label, className, children, commandRef } = props

  var o = E(props, ['label', 'className', 'children', 'commandRef'])
  const listId = useId()
  const inputId = useId()
  const s = useMemo(() => {
    return b(
      {
        listId: listId,
        inputId: inputId,
      },
      o
    )
  }, [listId, inputId, o])

  return (
    <CommandContext.Provider value={s}>
      <div
        data-command=""
        className={className || ''}
        ref={mergeRefs([ref, commandRef])}
      >
        {label && (
          <label htmlFor={inputId} style={M}>
            {label}
          </label>
        )}
        {children}
      </div>
    </CommandContext.Provider>
  )
})

Command.displayName = 'Command'

var DescendantsContext = createDescendants()
const CommandList = forwardRef(function (props, ref) {
  const { children } = props
  const { listId, ordering, listRef, map, list, force } = useCommandContext()

  var a = E(props, ['children'])

  useIsomorphicLayoutEffect(() => {
    if (ordering && listRef.current) {
      var e = new Map()
      Array.from(listRef.current.querySelectorAll('[data-descendant]'))
        .sort(function (e, t) {
          return e.getAttribute('data-order') - t.getAttribute('data-order')
        })
        .forEach(function (t) {
          if (t.parentElement) {
            t.parentElement.appendChild(t)
            var r = t.closest('[data-command-list] > *')
            if (!r || r === t || r === listRef.current) return
            if (e.has(r)) return
            listRef.current.appendChild(r), e.set(r, !0)
          }
        })
    }
  })

  var v = useMemo(() => {
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
        <DescendantsContext.Provider value={v}>
          {children}
        </DescendantsContext.Provider>
      </ul>
      {list.current.length > 0 && (
        <div aria-live="polite" role="status" style={M}>{`${
          list.current.length
        } result${list.current.length > 1 ? 's' : ''} available.`}</div>
      )}
    </>
  )
})
CommandList.displayName = 'CommandList'

const CommandItem = forwardRef(function (props, ref) {
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
  const { children } = props

  var l,
    i,
    o,
    c = props.children,
    u = E(props, ['children']),
    k = useDescendant(
      DescendantsContext,
      b(
        {
          value: typeof children === 'string' ? children : undefined,
        },
        u
      )
    ),
    I = k.index,
    S = k.ref,
    N = k.id,
    O = !!map.current[N],
    L = selected === I,
    D = useCallback(
      ((i = function () {
        requestAnimationFrame(function () {
          setSelected(I)
        })
      }),
      (o = !1),
      function () {
        o ||
          ((o = !0),
          i.apply(void 0, [].slice.call(arguments)),
          setTimeout(function () {
            return (o = !1)
          }, 50))
      }),
      [setSelected, I]
    )

  useEffect(() => {
    L &&
      S.current &&
      S.current.scrollIntoView({
        block: 'nearest',
      })
  }, [L])

  var P =
    filterList && O
      ? filterList.findIndex(function (commandItem) {
          return commandItem._internalId === N
        })
      : undefined
  return (
    useEffect(() => {
      0 === P && setSelected(I)
    }, [search, I, P, setSelected]),
    ordering && -1 === P ? null : (
      <li
        ref={mergeRefs([S, ref])}
        onClick={u.callback}
        data-order={P}
        className={clsx(itemClass, ((l = {}), (l[selectedItemClass] = L), l))}
        onMouseMove={D}
        aria-selected={L || undefined}
        role="option"
        data-command-item=""
        data-command-selected={L ? '' : undefined}
      >
        {children}
      </li>
    )
  )
})
CommandItem.displayName = 'CommandItem'

const CommandInput = forwardRef(function (props, ref) {
  var n = b({}, props),
    a = useCommandContext()
  return React.createElement(
    'input',
    b(
      {
        ref: ref,
        value: a.search,
        onChange: a.setSearch,
      },
      n,
      {
        type: 'text',
        'aria-expanded': !0,
        'aria-autocomplete': 'list',
        'aria-haspopup': 'listbox',
        autoComplete: 'off',
        role: 'combobox',
        'aria-owns': a.listId,
        id: a.inputId,
        'data-command-input': '',
      }
    )
  )
})

CommandInput.displayName = 'CommandInput'

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
      style={hasChild ? undefined : { display: 'none' }}
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

var M = {
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
