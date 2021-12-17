---
title: CSS Margin Collapse
description: What is Margin Collapse and the rules of Margin Collapse.
slug: css-margin-collapse
date: Dec 16, 2021
---

Some notes about margin collapse.

## What is Margin Collapse?

When think about margin, you can think it as a "personal space". Each object has they own personal space.
For example, we have 2 persons, one named "p1" and another named "p2", each person has 6 feet of space.
When you think about it, 6 feet can be "shared", because it's doesn't violate the 6 feet rule.

Margin works similar, and sometime they can collapse, or overlap. This can lead to surprising behavior if we not understand it correctly.

## Rules of Margin Collapse

To understand the rules of margin collapse, we need to consider many cases.

### Only vertical margins collapse

For example, we have 2 boxes A and B and place it vertially:

<div style="display: inline-block; background-color: #f6d088">
    <div style="padding: 12px; margin: 24px; display: inline-block; background-color: white; border: 2px solid black;">box 1</div>
    <div style="padding: 12px; margin: 24px; display: inline-block; background-color: white; border: 2px solid black;">box 2</div>
</div>

You can see that the distance between 2 boxes is far away, but the distance between the boxes and the container is close.
If we place it vertically, the distance between the boxes will the same as the distance between the container.

<div style="display: inline-block; background-color: #f6d088">
    <div style="padding: 12px; margin: 24px; display: block; background-color: white; border: 2px solid black;">box 1</div>
    <div style="padding: 12px; margin: 24px; display: block; background-color: white; border: 2px solid black;">box 2</div>
</div>

That when margin collapse happens, you can try inspect to see the weird behavior.

## Only conllapse in Flow Layout

The web have many layout modes, for example: flexbox, grid, positioned layout. But the margin collapse only happens in flow layout.
For example, below is the flexbox layout:

<div style="display: flex; flex-direction: column; background-color: #f6d088">
    <div style="padding: 12px; margin: 24px; display: block; background-color: white; border: 2px solid black;">box 1</div>
    <div style="padding: 12px; margin: 24px; display: block; background-color: white; border: 2px solid black;">box 2</div>
</div>

The margin didn't collapse.

## Collapse between siblings

There the weird things happen. Try inspect the web to see:

<div style="display: inline-block; flex-direction: column; background-color: #f6d088">
    <div>
        <p style="padding: 12px; margin: 24px; display: block; background-color: white; border: 2px solid black;">box 1</p>
    </div>
    <div>
        <div>
            <p style="padding: 12px; margin: 24px; display: block; background-color: white; border: 2px solid black;">box 2</p>
        </div>
    </div>
</div>

There are many `div`s between 2 boxes, but somehow the margin collapse still happens. Turns out, the collapse **happen for siblings element, even if it means transferring margin to the parent element!**
But we do experiment some time margin can use to increase the distance between elements. That because margin collapse only works when the siblings element are _touching_ each other.

There are some example of not touched siblings:

### Blocked by <br/>

Putting a `<br>` between 2 elements and the collapse go away.

<div style="display: inline-block; flex-direction: column; background-color: #f6d088">
    <p style="padding: 12px; margin: 24px; display: block; background-color: white; border: 2px solid black;">box 1</p>
    <br />
    <p style="padding: 12px; margin: 24px; display: block; background-color: white; border: 2px solid black;">box 2</p>
</div>

The `<br/>` tag is invisible and empty, but it's still a wall between 2 boxes, so the margin collapse cannot happen.

### Blocked by padding or border of parrent

The parent is wrapping around the child, so their padding and border also wrapped the child.
That will create a wall between 2 boxes, and the collapse cannot happen.

<div style="display: inline-block; flex-direction: column; background-color: #f6d088">
    <div style="border: 2px solid black;">
        <p style="padding: 12px; margin: 24px 0; display: block; background-color: white; border: 2px solid black;">box 1</p>
    </div>
    <p style="padding: 12px; margin: 24px 0; display: block; background-color: white; border: 2px solid black;">box 2</p>
</div>

Here is the example using border to create a _wall_ between 2 boxes. The same happens with padding.

### Blocked by a gap

If we fixed the height of the parent, then the child also cannot touch the sibling.

<div style="display: inline-block; flex-direction: column; background-color: #f6d088">
    <div style="height: 200px;">
        <span>I'm height: 200px</span>
        <p style="padding: 12px; margin: 24px 0; display: block; background-color: white; border: 2px solid black;">box 1</p>
    </div>
    <p style="padding: 12px; margin: 24px 0; display: block; background-color: white; border: 2px solid black;">box 2</p>
</div>

So we end up with a rule:
**Margins must be touching in order for them to collapse.**

## Bigger margin wins

That for sure, the bigger margin wins. If we think it as personal space, it's make sense.

<div style="display: inline-block; flex-direction: column; background-color: #f6d088">
    <p style="padding: 12px; margin: 48px 0; display: block; background-color: white; border: 2px solid black;">box 1</p>
    <p style="padding: 12px; margin: 24px 0; display: block; background-color: white; border: 2px solid black;">box 2</p>
</div>

## Same direction margins

Margins can collapse in the same direction too. The child margin get "absorbed" by the parent margin. Then the 2 margins compare to each other, the bigger margin wins.

<div style="display: inline-block; background-color: lightgreen;">
    <div style="margin-top: 72px; background-color: #f6d088">
    <p style="margin-top: 24px; ">Paragraph One</p>
    </div>
</div>

The green color is the margin of parent element, and it's override the margin top 24px of the child.

## More than 2 margins can collapse

It's very hard to visually the collapse when there are more than 2 margins. But it's simply is combine of the above rules.
Try inspect the below example and you will get it.

<div style="padding: 12px; border: 2px solid black;">
    <header style="margin-bottom: 10px;">
        <h1 style="margin-bottom: 20px;">My Project</h1>
    </header>
    <section style="margin-top: 30px;">
        <p style="margin-top: 40px;">Hello World</p>
    </section>
</div>

By combining the margin, the distance between `h1` and `p` is 40px.

## Negative margins

This is the one that I used a lot, and you probally used it before.
The negative margin quite simple, a negative margin will pull an element to the opposite direction. If there are the mix between positive and negative margin, the 2 will be added together. Very intuitive.

<div style="display: inline-block; background-color: #f6d088">
    <p style="padding: 12px; margin: 24px 0 -24px; display: block; background-color: white; border: 2px solid black;">box 1</p>
    <p style="padding: 12px; margin: 12px 0 24px; display: block; background-color: white; border: 2px solid black;">box 2</p>
</div>

The box 2 was above box 1 and there is some overlap between them.

---

That's a lot, I never though I could done that.
