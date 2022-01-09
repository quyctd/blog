---
title: CSS Fixed Positioning
description: A close cousin of absolute positioning
slug: css-fixed-position
date: Jan 09, 2022
---

- Fixed positioning is a cousin of absolute positioning.
- Fixed positioning can only contain by the viewport, no matter what the containing block is.
- Fixed positioning is immune to scroll.

### Fixed without anchor points?
It'll do the same as absolute positioning, **the element sit in their in-flow position** but, the different is, it won't be affected by the scroll.

### The transform exception
If parent or grandparent uses the `transform` property, **it becomes the containing block for the fixed element**.
Also, the `will-change: transform` declaration has the same effect.
