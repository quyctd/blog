---
title: CSS Position Absolute
description: CSS Position Absolute
slug: css-relative-absolute
date: Jan 03, 2022
---

Some notes about CSS Position Absolute.

Normally, elements will be ordered follow the order of the HTML. This is referred to as Flow layout.
These days, it's also can be referred to as Flex layout, because Flex is too popular.

But when we want to break the rules, take elements out of flow, in these cases, `absolute position` is the option.

## Placement based on the frame
When applying `position: absolute`, we can place the element based on **the box it's being constrained by** and **ignore its "natural" position**.

The placement based on 4 properties: `top`, `left`, `right`, `bottom`.
These properties can be set to `px`, `%`.

## Default Placement
When we setting `position: absolute`, and doesn't apply any anchor `top`, `left`,... The element will **sit in its default in-flow position**.
We can think of it as "inheriting" the position from the Flow layout.

## Effect on layout
When setting `position: absolute`, we pull the element **out of the flow**.
When the browser laying out elements, it will ignore the absolute elements. The absolute elements kind of a ghost, stick in specificed spot.

## Collapsing parents
It can be quite annoying when we need to setting up the parents and the child.
When we set `position: absolute`, the parent will ignore the child, and sometimes can cause collapse.
Example:
```html
<style>
  .parent {
    border: 4px solid;
  }
  
  .child {
    position: absolute;
    width: 200px;
    height: 200px;
    background: green;
    opacity: 0.5;
  }
</style>

<div class="parent">
  <div class="child"></div>
</div>
```

## Absolute sizes
The thing is, when we apply absolute positioning, the display value will be ignored. The same happen for position `fixed`, `sticky`,.. except the `relative` and `static`, which is the default position.
And to determine the size of the element, `absolute` position will try to fit the content as small as it can and also still fit in the containing block. It will try its best to follow the rules defined in the CSS spec.

## Centering Trick
Because the `absolute` position is trying the best to follow the rules in CSS spec, so we can center element with the following spec:
```css
.box {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100px;
  height: 100px;
  margin: auto;
  background: lightgreen;
}
```
The trick works by 4 following properties:
- Absolute position `position: absolute`
- equal distance from each edge `top`, `left`, `right`, `bottom`
- a fixed size
- Hungry margins `margin: auto`

