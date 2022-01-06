---
title: CSS Stacking Contexts
description: Understand z-index of CSS
slug: css-z-index
date: Jan 06, 2022
---

How does the browser decide which element to render "on top" when elements overlap?

## Default Behavior
- When all siblings are rendered in Flow layout, the DOM order controls how the background elements overlap, but the content will always float to the front.
- If one sibling uses positioned layout, it will appear above its non-positioned sibling, no matter what the DOM order is.
- If both siblings use positioned layout, the DOM order controls which element will be on top. Unlike in Flow layout, the content does not float to the front.

## Using z-index
- `z-index` is a CSS property that allows you to control the order of elements in the stacking context.
- `z-index` only works with positioned elements.
- `z-index` can also be used with flex/grid children.
- The `z` in `z-index` refers to the `z` axis in 3D space.
- Default value of `z-index` is `auto`, which equates to `0`.

### Negative z-indexes
`z-index` values must be integers, and they are allowed to be negative.
Even though it won't offer much benefit.

## Stacking Contexts
`z-index` isn't a global value, it's a value applied to a stacking context.
An website is collection of stacking contexts. Stacking contexts can be contained in other stacking contexts, and together create a hierarchy of stacking contexts.

- Each stacking context is completely independent of its siblings: only descendant elements are considered when stacking is processed.
- Each stacking context is self-contained: after the element's contents are stacked, the whole element is considered in the stacking order of the parent stacking context.

### Creating new contexts
Here are some declarations that create a new stacking context:
- Setting `opacity` to a value less than `1`
- Setting `position` to `absolute` or `relative` and `z-index` value other than auto.
- Setting `position` to `fixed` or `sticky` (No `z-index` needed for these values!)
- Applying a `mix-blend-mode` other than `normal`
- Adding a `z-index` to a child inside a display: `flex` or display: `grid` container
- Using `transform`, `filter`, `clip-path`, or `perspective`
- Explicitly creating a context with `isolation: isolate`

More info on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)

### Debugging stacking contexts
Here is a super awesome tool to help you debug stacking contexts: [Stacking Contexts Inspector](https://github.com/andreadev-it/stacking-contexts-inspector)
