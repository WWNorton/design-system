---
title: Accessibility
---

import { Button, TextField } from '@wwnds/react';

We've taken an inclusive approach to nearly every aspect of the design system, and some of the more notable accessibility features are outlined here.

## Focus

Focus indicates the [point of regard](https://www.w3.org/WAI/IndieUI/wiki/Focus_and_Point_of_Regard) for keyboard input.
In other words, it gives you a visual clue to where keyboard input will be directed on the page.

We provide two focus indicators for you to use: a focus "halo" and a focus "ring," both of which are captured as design tokens (`focus-halo` and `focus-ring`).
Both focus indicators use the `box-shadow` property rather than the typical `outline` to ensure that the indicator matches the shape of its element.

### Focus Halo

The focus halo is our global focus indicator and should be used in most cases.
It contains two rings:

- a `2px` outer ring with a color of `focus-halo-outer-color`
- a `1px` inner ring with a color of `focus-halo-inner-color`

The resulting effect looks like a halo around the focused element.

:::note Example: focus halo
To see the focus halo in action, tab to the following button.

<Button className="nds-button nds-button--solid">
	Focus halo
</Button>
:::

Using the focus halo for most elements ensures a few things that are key to a well-designed focus indicator:

- Color contrast can always be assured against both the background and the element's background.
- It is more visually apparent than a normal outline.
  - Focus cannot be visually tracked from point to point like mouse movement can, so it needs to be more visually obvious than most visual elements on a page.
- It meets [WCAG 2.2 Focus Appearance (Enhanced)](https://www.w3.org/TR/WCAG22/#focus-appearance-enhanced) under most circumstances by including the following:
  - A focus indication area of `2px` + a `1px` offset.
  - High contrast between the background color and the element's color under nearly every scenario.
  - A high on-focus `z-index` to ensure that it is never obscured by other content.

### Focus ring

The focus ring is more akin to the typical focus outline seen on the web.
It contains a `2px` ring with a color of `focus-color`.

It is used in situations where some other focus affordance is included.
Most notably, this is seen in `<input>` fields, which provide an additional indication of focus via the [insertion caret](https://developer.mozilla.org/en-US/docs/Glossary/caret).

:::note Example: focus ring
To see the focus ring in action, tab to the following text field.

<TextField>Focus ring</TextField>
:::
