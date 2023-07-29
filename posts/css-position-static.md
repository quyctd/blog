---
title: Positioned Layout - Static
description: The default value of position property.
slug: css-static-position
date: Dec 19, 2021
---

Normally, when start working with HTML and CSS, the default Flow Layout will be applied.
But there are multiple other layout modes, and this post talked about: **Positioned Layout**.
The Flow Layout algorithm tries very hard to make sure that multiple elements never occupy the same pixels (Unless you use negative margins).
With the positioned layout, we can break through it.

To use Positioned Layout, we need to use `position` property. This property can be set to: `relative`, `absolute`, `fixed` or `sticky`. There are a few more values, but these 4 values are the values that can change the way layout works.
Each of them works in a unique way, like a _mini layout algorithm_ within the layout algorithm.

## Static Positioning

`static` is the default value of `position` property.
That means that all these elements with the `static position` _not_ use Positioned Layout; they're using some other layout mode, like Flow Layout, Flexbox or Grid.
When referring to `static` elements, they are also called `statically-positioned` elements.

If an element currently using Positioned Layout, you can cancel it by changing the `position` property to `static` or `initial`

```css highlight=2
.box {
  position: initial;
}
```

There are the values `unset`, `revert` and `inherit`

- `unset` will cancel the current position property and change to parent position or initial position.
- `revert` to reset to user-agent stylesheet
- `inherit` to make the value same as the parent value

Although these values are rarely used.
