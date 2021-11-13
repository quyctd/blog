---
title: CSS Termninology
description: Some of the most common terms used in CSS, but not all of us familiar with them.
slug: css-terminology
date: Nov 12, 2021
---

When I decided to switch from Back-end developer to Front-end developer, I was attracted by React.js and JS ecosystem.
But now, after 1.5 year in Front-end, I realized that Front-end not just about JS, it's also include CSS, HTML, Accessibility, etc. We all know that, but most of us just forcus on JS. Me too. But lately, I do feel that my CSS skills are not enough. I believe many JS developers feel the same way as me in some point of their career.
We all know CSS enough to make website, but we not understand it. If we need something, just copy from Stackoverflow, and that's it. This kind of the same as _we don't know JS_ when we start learning it.

So I decided to take a deep dive into CSS, and first, go with CSS terminology. Even it just some most common terms, I believe not everyone know, and myself included, the below terms also has something that I don't know before.

## CSS Hello world

```css
.error-text {
  color: red;
}
```

This code is just a simple CSS code. Everyone comfortable with it.
But there is some thing that me and you may don't know.
Let's start by play some questions.

## What is _property_ in this code?

```css
p {
  margin: 32px;
}
```

Take some time to guess it.
And the answer is `margin`.

> Properties in CSS are the attributes you can specify values for, like "color" and "font-size".

## Next, what is _selector_?

```css
.apple {
  background-color: red;
  border-radius: 50%;
}
```

This is easy for any JS developer, we select element alot. The answer is: `.apple`.

> A selector is a descriptor that lets you target specific elements on the page. In this case, we're selecting all nodes with the “apple” class.

Another sample:

```css
h1 {
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.1em;
}
```

And yes, it's `h1`. In this case, we're selecting all 'h1' tags _(though a page should generally only have one h1!)_

## What is the _first declaration_ in this code?

```css
.code-snippet {
  padding: 32px;
  white-space: pre-wrap;
}
```

It's another hard question for me. I even don't know that in CSS has the term `declaration`.
But turns out, it is `padding: 32px;`.

> A declaration is a combination of a property and a value. In this case, the first declaration has a property of "padding", and a value of "32px".

## What is the _rule_?

```css
p {
  color: red;
  font-family: sans-serif;
}
```

Well, I also don't know what is `rule` in CSS.
The answer will be all of the above CSS.

> A rule, also known as a style, is a collection of declarations, targeting one or more selectors. A stylesheet is made up of multiple rules.

## What is the _unit_ in CSS?

```css
p {
  padding-top: 24px;
}
```

That you will know. It's `px`.

> Some values have units, like px, %, or em. In this case, our padding-top has a value of 24px, which is measured in the "px" unit.

---

Below are 2 more questions to test your knowledge.

## Select the _second declaration_ below

```css
main {
  max-width: 65ch;
  margin: 0 auto;
}
```

the second declaration is `margin: 0 auto;`

## Select the _first rule_ below

```css
p {
  font-size: 1rem;
}
.big-paragraph {
  font-size: 1.25rem;
  font-weight: 500;
}
```

the first block is the first rule.

---

That some first knowledge when I re-learn CSS. More in the next section 🤔