---
title: CSS Position Sticky
description: CSS Position Sticky
slug: css-sticky-position
date: Jan 13, 2022
---

`position: sticky` is a new CSS property that allows you to make an element sticky.
The idea is that as you scroll, an element can "stick" to the edge. At that moment, it transitions from being relatively-positioned to being fixed-positioned.

In addition to setting position: sticky, you also need to pick at least one edge to stick to (top, left, right, bottom). 

## Stay in the box
Unlike other positioned layout, sticky position will never follow the scroll outside of its parent element.
Sticky elements only stick while their container is in the view.

## Offset
As we've seen, every position value changes the way top/left/right/bottom work:
- With relative positioning, the element is shifted from its natural, in-flow position
- With absolute positioning, the element is distanced from its containing block's edge
- With fixed positioning, the element is adjusted based on the viewport

With sticky positioning, the value controls the minimum gap between the element and the edge of the viewport while the container is in-frame.

## Not incorporeal
Sticky elements are like relative or static elements, they're laid out in-flow. They take up real space, and that space remains taken even when the element is stuck to an edge during scrolling.

Sticky elements are considered "in-flow", while fixed elements aren’t.

## Horizontal stickiness
Sticky positioning is almost always used with vertical scrolling, but it also works with horizontal scrolling.

## Browser support
Happily, position: sticky is [supported across all major browsers](https://caniuse.com/css-sticky).

