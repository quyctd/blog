---
title: CSS Inheritance
description: CSS Built-in declarations and inheritance.
slug: css-inheritance
date: Dec 4, 2021
---

As everyone knows, CSS allow us to control the appearance and layout of the web-app content.

But, by default, your HTML do have some minimal styles of their own. These styles come from the browsers. For example, the styles of `<a>` tag, in Chrome:

```css
a {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
```

These styles are called `user-agent stylesheets`. And each browser has they own styles. So that why our apps do look a little different across browsers.

Even now, the browsers do look a bit more consistent, we still shouldn't expect our web apps to look identically across browsers.

> Here is source of Chrome styles: [Chromium HTML Source](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/html/resources/html.css)

## CSS Inheritance

A cool thing that everyone may know, but it's kind of weird when you think about it, it's `inheritance` in CSS.

For example:

```html
<style>
  p {
    color: green;
  }
</style>

<p>How do I <em>look</em>?</p>
```

For sure, the `<em>` tag has green color. But how?

The answer is that _certain_ CSS properties **\*inherit**.\* When you apply `color` properties, it's passed down to all children and grand-child.

Not all CSS properties are inheritable, though, for example: border, padding,... Most of inheritable properties are typography-related, like: color, font-size, text-shadow,...

There is a list of inheritable properties on [SitePoint](https://www.sitepoint.com/css-inheritance-introduction/#list-css-properties-inherit)

## CSS Prototype

A cool thing is, CSS inheritance is kind of like JS Prototype.

For example, the below HTML:

```html
<main style="color: black;">
  <p style="color: red;">Hello <span>World</span></p>
</main>
```

If we convert it to JS, it'll be like:

```jsx
class Main {
  color = 'black'
}
class Paragraph extends Main {
  backgroundColor = 'red'
}
class Span extends Paragraph {}
const s = new Span()

console.log(s.color)
```

When browsers look for `<span>` color, it'll check the color of span, if don't have then check the color of `<p>` , and so on.

Event it's looks like JS Prototype, but it's not exactly like JS.

When JS find the matching property, it'll stop looking, but in CSS, we all know there is a `!important` property, so the implementation can be a bit different.

## Forcing Inherit

Even CSS is inheritable, there still some cases the inheritance not working.

A common example is the `<a>` tag color.

In Chrome, base on the `user-agent stylesheet`, `<a>` tag has default blue color

```jsx
a {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
```

And even if we do like that, the `color: -webkit-link` is still here.

```jsx
<p style="color: red;">
  This paragraph with a <a href="#">red</a> link!
</p>
```

If we really looking into this case, it's kind of confusing, the color `-webkit-link` doesn't have `!important` but still override the `red` color.

To fix this issue, we can use:

```jsx
a {
  color: inherit;
}
```

That'll fix the inherit problem, and the `a` tag is now inheritable.
