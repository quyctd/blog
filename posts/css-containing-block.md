---
title: CSS Containing Blocks
description: CSS Containing Blocks
slug: css-containing-blocks
date: Jan 05, 2022
---

Some notes about containing blocks and positioned elements.
In CSS, every HTML element has a “containing block”. A containing block is a rectangle that forms the bounds of the element's container.

## Flow Layout

In Flow layout, containing block of an element is the parent element.

## Absolute positioning

In Absolute positioning, containing block isn't the parent element.
**Absolute elements can only be contained by other elements using the Positioned layout.**

Here's how the algorithm works: When deciding where to place an absolutely-positioned element, it crawls up through the tree, looking for a Positioned ancestor. The first one it finds will provide the containing block.
If it doesn't find one, it uses the viewport as the containing block.

When deciding the containing block, the containing block can be any value that is a valid CSS position value, including: `relative`, `absolute`, `fixed`, `sticky`.

### Small note

When applying positioned layout, the padding will be ignored. Padding is used in Flow layout calculations, and absolute elements are taken out-of-flow. Those rules don't apply.
