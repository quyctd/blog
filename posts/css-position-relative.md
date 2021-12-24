---
title: CSS Position Relative
description: CSS Position Relative
slug: css-relative-position
date: Dec 24, 2021
---

Some notes about CSS Position Relative.

`relative` is the most subtle position, you can slap `position: relative` on any element, and see zero difference. It looks like to have no effect.

What `relative` does?
- Constrains certain children
- Enables additional CSS properties to be used.

New CSS properties can be used with `relative` position:
- top
- left
- right
- bottom

We can use these properties to shift elements around **without impacting the layout** (That the different compared to shift elements using margin).
These properties accept negative values too.
Relative positioning also works with both *block and inline elements*.

Relative positioning really opens some interesting doors for us 💯
