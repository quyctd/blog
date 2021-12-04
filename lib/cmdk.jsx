/*
Forked from https://www.npmjs.com/package/cmdk
Using reverse engineering to reverse *some part* of this package
Fixed the order of command items to fit the purpose of my blog
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
var y = ['select', 'button', 'textarea'],
  useCommand = function (e) {
    var a = void 0 === e ? {} : e,
      l = a.search,
      search = void 0 === l ? '' : l,
      o = a.selected,
      selected = void 0 === o ? 0 : o,
      u = a.ordering,
      ordering = void 0 === u || u,
      s = a.filter,
      filter = void 0 === s ? defaultFilter : s,
      f = a.loop,
      loop = void 0 !== f && f,
      h = a.element,
      g = E(a, ['search', 'selected', 'ordering', 'filter', 'loop', 'element']),
      descendants = useDescendants(),
      w = descendants.ref,
      C = E(descendants, ['ref']),
      k = useState(selected),
      S = k[0],
      N = k[1],
      A = useState(search),
      searchKeyword = A[0],
      R = A[1],
      L = useRef(),
      D = useRef(S)

    D.current = S
    var P = filter(C.map, searchKeyword)
    return (
      I({
        setSelected: N,
        listProps: C,
        selectedRef: D,
        loop: loop,
        element: h || L.current,
      }),
      b(
        {
          search: searchKeyword,
          selected: S,
          setSelected: N,
          setSearch: useCallback(function (e) {
            R(e ? e.target.value : e)
          }, []),
          filterList: P,
          ordering: ordering,
          listRef: w,
          commandRef: L,
        },
        C,
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
            return (null == e ? void 0 : e.value) || null
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
              n = null == (t = l.list.current[r.current]) ? void 0 : t.callback
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
            return null == o ? void 0 : o.removeEventListener('keydown', m)
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
  },
  N = createContext({}),
  useCommandContext = function () {
    return useContext(N)
  },
  Command = forwardRef(function (t, r) {
    var n = t.label,
      a = t.className,
      l = t.children,
      i = t.commandRef,
      o = E(t, ['label', 'className', 'children', 'commandRef']),
      u = useId(),
      d = useId(),
      s = useMemo(
        function () {
          return b(
            {
              listId: u,
              inputId: d,
            },
            o
          )
        },
        [u, d, o]
      )
    return React.createElement(
      N.Provider,
      {
        value: s,
      },
      React.createElement(
        'div',
        {
          'data-command': '',
          className: a,
          ref: mergeRefs([r, i]),
        },
        n &&
          React.createElement(
            'label',
            {
              htmlFor: d,
              style: M,
            },
            n
          ),
        l
      )
    )
  })
Command.displayName = 'Command'
var R = createDescendants(),
  CommandList = forwardRef(function (t, r) {
    var n = t.children,
      a = E(t, ['children']),
      l = useCommandContext(),
      i = l.listId,
      ordering = l.ordering,
      d = l.listRef,
      s = l.map,
      m = l.list,
      p = l.force
    F(function () {
      if (ordering && d.current) {
        var e = new Map()
        Array.from(d.current.querySelectorAll('[data-descendant]'))
          .sort(function (e, t) {
            return e.getAttribute('data-order') - t.getAttribute('data-order')
          })
          .forEach(function (t) {
            if (t.parentElement) {
              t.parentElement.appendChild(t)
              var r = t.closest('[data-command-list] > *')
              if (!r || r === t || r === d.current) return
              if (e.has(r)) return
              d.current.appendChild(r), e.set(r, !0)
            }
          })
      }
    })
    var v = useMemo(
      function () {
        return {
          list: m,
          map: s,
          force: p,
        }
      },
      [m, s, p]
    )
    return React.createElement(
      Fragment,
      null,
      React.createElement(
        'ul',
        b(
          {
            ref: mergeRefs([d, r]),
            role: 'listbox',
            id: i,
            'data-command-list': '',
            'data-command-list-empty': 0 === m.current.length ? '' : void 0,
          },
          a
        ),
        React.createElement(
          R.Provider,
          {
            value: v,
          },
          n
        )
      ),
      m.current.length > 0 &&
        React.createElement(
          'div',
          {
            'aria-live': 'polite',
            role: 'status',
            style: M,
          },
          m.current.length,
          ' result',
          m.current.length > 1 ? 's' : '',
          ' ',
          'available.'
        )
    )
  })
CommandList.displayName = 'CommandList'
var CommandItem = forwardRef(function (t, r) {
  var l,
    i,
    o,
    c = t.children,
    u = E(t, ['children']),
    d = useCommandContext(),
    m = d.selected,
    p = d.setSelected,
    filterList = d.filterList,
    g = d.search,
    y = d.ordering,
    w = d.map,
    x = d.itemClass,
    C = d.selectedItemClass,
    k = useDescendant(
      R,
      b(
        {
          value: 'string' == typeof c ? c : void 0,
        },
        u
      )
    ),
    I = k.index,
    S = k.ref,
    N = k.id,
    O = !!w.current[N],
    L = m === I,
    D = useCallback(
      ((i = function () {
        requestAnimationFrame(function () {
          p(I)
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
      [p, I]
    )

  useEffect(
    function () {
      L &&
        S.current &&
        S.current.scrollIntoView({
          block: 'nearest',
        })
    },
    [L]
  )
  var P =
    filterList && O
      ? filterList.findIndex(function (commandItem) {
          return commandItem._internalId === N
        })
      : void 0
  return (
    useEffect(
      function () {
        0 === P && p(I)
      },
      [g, I, P, p]
    ),
    y && -1 === P
      ? null
      : React.createElement(
          'li',
          {
            ref: mergeRefs([S, r]),
            onClick: u.callback,
            'data-order': P,
            className: clsx(x, ((l = {}), (l[C] = L), l)),
            onMouseMove: D,
            'aria-selected': L || void 0,
            role: 'option',
            'data-command-item': '',
            'data-command-selected': L ? '' : void 0,
          },
          c
        )
  )
})
CommandItem.displayName = 'CommandItem'
var CommandInput = forwardRef(function (t, r) {
  var n = b({}, t),
    a = useCommandContext()
  return React.createElement(
    'input',
    b(
      {
        ref: r,
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
var CommandGroup = function (n) {
    var a = n.children,
      l = n.heading,
      i = n.separator,
      o = E(n, ['children', 'heading', 'separator']),
      c = useId(),
      d = useRef(),
      s = useState(!0),
      f = s[0],
      p = s[1]
    return (
      F(function () {
        d.current && p(0 !== d.current.children.length)
      }),
      React.createElement(
        Fragment,
        null,
        i && React.createElement(q, null),
        React.createElement(
          'li',
          b(
            {
              'data-command-group': '',
              role: 'presentation',
            },
            o,
            {
              style: f
                ? void 0
                : {
                    display: 'none',
                  },
            }
          ),
          React.createElement(
            'div',
            {
              'aria-hidden': !0,
              id: c,
            },
            l
          ),
          React.createElement(
            'ul',
            {
              role: 'group',
              'aria-labelledby': c,
              ref: d,
            },
            a
          )
        )
      )
    )
  },
  q = function () {
    return React.createElement('li', {
      'data-command-separator': '',
      role: 'separator',
    })
  },
  M = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  },
  F =
    'undefined' != typeof window &&
    (null == (C = window) || null == (k = C.document)
      ? void 0
      : k.createElement)
      ? useLayoutEffect
      : useEffect
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
