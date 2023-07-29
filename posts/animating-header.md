---
title: Animate header when scrolling
description: Animate header when scrolling
slug: animate-header
date: Oct 01, 2022
---

When working on UI development, one problem that I faced a lot was the Animating header.
To be precise, do some animations for the header when the user scrolls down, scrolls up, stops the scroll, or reaches the top or bottom of the page,...
Even though I have done it 4-5 times now, but still can't remember how I do it. But, then, sure, searching all over the source code I have access to.
I'm tired of it, so I wrote this post about how I do this kind of animation.

## Defined the variables

No words, it's easier when looking at the code:

```ts
enum DIRECTION {
  INIT,
  UP,
  DOWN,
}'
```

```ts
const prevScroll = useRef(0)
const curScroll = useRef(0)
let timeout: ReturnType<typeof setTimeout>

const [direction, setDirection] = useState<DIRECTION>(DIRECTION.INIT)
const [isScrolling, setIsScrolling] = useState(false)

/**
 * Check the scroll direction and get the corresponding state.
 */
const scrollListener = useCallback(() => {
  setIsScrolling(true)

  curScroll.current = window.scrollY || document.documentElement.scrollTop
  //   80 is the height of header
  if (curScroll.current < 80) return

  if (curScroll.current > prevScroll.current) {
    setDirection(DIRECTION.DOWN)
  } else if (curScroll.current < prevScroll.current) {
    setDirection(DIRECTION.UP)
  }

  prevScroll.current = curScroll.current
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    setIsScrolling(false)
  }, 500)
}, [])

useEffect(() => {
  prevScroll.current = window.scrollY || document.documentElement.scrollTop
  document.addEventListener('scroll', scrollListener)
  return () => {
    document.removeEventListener('scroll', scrollListener)
  }
}, [scrollListener])
```

## Using the state

For example:

```ts
<header
  className={clsx(
    'fixed z-50 w-full bg-white',
    'transition-all duration-500 ease-in-out',
    direction === DIRECTION.DOWN && '-top-20',
    direction === DIRECTION.UP && 'top-0',
    isScrolling && 'some-css-for-scroll'
  )}
>
  // some code
</header>
```
