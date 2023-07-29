---
title: CSS Overflow
description: CSS Overflow
slug: css-overflow
date: Jan 10, 2022
---

`overflow` is a condition that happens when content doesn't fit into its parent's content box.

## Accepted values

`overflow` default value is `visible`. It can also be set to other values:

- `scroll`: add scroll bar
- `auto`: adds a scrollbar when one is required
- `hidden`: remove scroll bar no matter what

`overflow` is a shorthand for 2 distinct properties:

- `overflow-x`
- `overflow-y`

## Scroll container

A scroll container is a scrollable box that exists within a webpage. When we set either `overflow-x` or `overflow-y`, we turn the selected element into a scroll container.

Children of a scroll container are essentially locked inside that box. They can't ever spill outside its parent's bounds. They can't be used to allow "normal" visible overflow in one axis.

## Horizontal Overflow

By default, in flow layout, browser will break the line when the next element can't fit in the current line.
So we don't have the horizontal scroll bar.
To fix that, we can opt in the `white-space: nowrap` property.

## Overflow with absolute positioned elements

Absolutely-positioned elements act just like static-positioned elements when it comes to overflow. If the parent sets `overflow: auto`, _as long as that parent is the containing block_, it will allow that child to be scrolled into view.

## Overflow with fixed positioned elements

When it's come to fixed positioned elements, we need to remember that the fixed elements is contained by the viewport. It's doesn't care about the parent's overflow.
So even when the parent has `overflow: auto`, the child will still out of flow and doesn't have any effect to the parent.
