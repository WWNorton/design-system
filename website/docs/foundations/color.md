---
title: Color
---

import { AllFamilies, ColorChip } from "../../src/theme/Color";

The Norton color system ensures that colors can be used in a predictable way
across your application and content.

:::note Terms
A color **family** is a collection of colors of the same hue.
Individual colors within the family have different brightness and/or saturation.
A color family is referred to by its generic hue name, such as `red`, `teal`, or `gray`.
By default, every color family contains `10` total **grades**.

A color **grade** is numbered a step corresponding to the brightness of that color.
A higher number corresponds to a darker color and a lower number corresponds to a lighter color.
By default, grades start at `10` and increase by increments of `10` up to `100`.
:::

## Accessibility

The Norton color system is designed to ensure consistent color contrast across all color families.
To accomplish this, grades are normalized across color families to have a similar level of color contrast against black or white.

Grades of `60` and higher are designed to meet [the minimum color contrast ratio for WCAG AA](https://www.w3.org/TR/WCAG21/#contrast-minimum) when used with pure white (`#fff`).
Conversely, grades of `50` and lower are designed to meet WCAG AA requirements against pure black (`#000`).

## Design Tokens

The Norton color system uses [role tokens](design-tokens#role-tokens) for theming and [system tokens](design-tokens#system-tokens) as a basis for all color families.
Color system tokens use a naming pattern of `{family}-{grade}`, such as `cyan-30`.
Color role tokens use a naming pattern of `{role}-color-{grade}`, such as `primary-color-70`.

### System Tokens

The following table lists all the system colors in the Norton Design System, as well as their contrast ratio against pure white and pure black.

:::caution Avoid direct use
Using system color tokens directly will make your application more difficult to theme.
Rather than using system colors directly, use [role colors](#role-tokens) in your designs.
Role colors can be mapped to system colors to modify your design more broadly and consistently.

For instance, if you want a component's border color to be <ColorChip>gray-40</ColorChip>, set your `base-color` to use the gray family and then set your border color to <ColorChip color="var(--nds-gray-40)">base-color-40</ColorChip>.
The role&mdash;or purpose&mdash;of the `base-color` is to be used for backgrounds, borders, and other neutral design features.
:::

<AllFamilies />

### Role Tokens

All color roles reference either a single color or a family of colors.
When a role color references an entire family, its grades will map one-to-one.

#### Single-value role tokens

The following role tokens map to a single value.

| Token                        | Default value                             | Usage                                                         |
| ---------------------------- | ----------------------------------------- | ------------------------------------------------------------- |
| `background-color`           | <ColorChip>white</ColorChip>              | The main background color                                     |
| `text-color`                 | <ColorChip>base-color-90</ColorChip>      | The main text color                                           |
| `text-color-inverse`         | <ColorChip>background-color</ColorChip>   | A contrasting text color                                      |
| `subdued-color`              | <ColorChip>base-color-60</ColorChip>      | De-emphasized, muted, or subdued content                      |
| `selection-background-color` | <ColorChip>primary-color</ColorChip>      | The background color of user-selected text (`::selection`)    |
| `selection-text-color`       | <ColorChip>text-color-inverse</ColorChip> | The text color of user-selected text (`::selection`)          |
| `focus-color`                | <ColorChip>blue-50</ColorChip>            | The color used when an element has been focused (`:focus`)    |
| `focus-halo-inner-color`     | <ColorChip>background-color</ColorChip>   | The inner color of the [focus halo](accessibility#focus-halo) |
| `focus-halo-outer-color`     | <ColorChip>focus-color</ColorChip>        | The outer color of the [focus halo](accessibility#focus-halo) |

#### Family role tokens

Role tokens that map to an entire family use two configuration options to determine the mapping:

- A `family` that references a color family's name (e.g., "cyan").
  - Configured with the `${role}-family` Sass option.
- An optional `grade` that defines the midpoint of the [shade map](#shade-maps).
  - Configured with the `${role}-grade` Sass option.

| Role                                                                    | Default family | Default grade | Usage                                                   |
| ----------------------------------------------------------------------- | -------------- | ------------- | ------------------------------------------------------- |
| <ColorChip color="var(--nds-primary-color)">primary-color</ColorChip>   | `"teal"`       | `60`          | The family used in components that have a default color |
| `base-color`                                                            | `"navy"`       | undefined     | Background, border, or shadow gradients                 |
| <ColorChip color="var(--nds-disabled-color)">disabled-color</ColorChip> | `"base"`       | `30`          | Not currently usable, non-interactive                   |
| <ColorChip color="var(--nds-error-color)">error-color</ColorChip>       | `"red"`        | `60`          | Error, danger, or incorrect                             |
| <ColorChip color="var(--nds-success-color)">success-color</ColorChip>   | `"green"`      | `60`          | Success, passing, or correct                            |
| <ColorChip color="var(--nds-warning-color)">warning-color</ColorChip>   | `"yellow"`     | `60`          | Warning or caution                                      |

The result will include an entire 10-grade family for the role, plus a [shade map](#shade-maps) if a midpoint grade is defined.

For example, setting `$primary-family` to `"purple"` and `$primary-grade` to `70` results in the following shade and family map.

<div class="example-shade">

| Shade                   | Value                                   |
| ----------------------- | --------------------------------------- |
| `primary-color-lighter` | <ColorChip>primary-color-50</ColorChip> |
| `primary-color-light`   | <ColorChip>primary-color-60</ColorChip> |
| `primary-color`         | <ColorChip>primary-color-70</ColorChip> |
| `primary-color-dark`    | <ColorChip>primary-color-80</ColorChip> |
| `primary-color-darker`  | <ColorChip>primary-color-90</ColorChip> |
| `primary-color-10`      | <ColorChip>purple-10</ColorChip>        |
| `primary-color-20`      | <ColorChip>purple-20</ColorChip>        |
| `primary-color-30`      | <ColorChip>purple-30</ColorChip>        |
| `primary-color-40`      | <ColorChip>purple-40</ColorChip>        |
| `primary-color-50`      | <ColorChip>purple-50</ColorChip>        |
| `primary-color-60`      | <ColorChip>purple-60</ColorChip>        |
| `primary-color-70`      | <ColorChip>purple-70</ColorChip>        |
| `primary-color-80`      | <ColorChip>purple-80</ColorChip>        |
| `primary-color-90`      | <ColorChip>purple-90</ColorChip>        |
| `primary-color-100`     | <ColorChip>purple-100</ColorChip>       |

</div>

In Sass, these options can be configured globally on use:

```scss
@use '@wwnds/core' with (
	$primary-family: 'purple',
	$primary-grade: 70,
);
```

Or you can apply them with the provided Sass utilities:

```scss
@use '@wwnds/core' as nds;

.my-purple-element {
	// .set() applies a list or map of values as CSS custom properties
	@include nds.set(
		$nds-primary-color: nds.family("primary-color", "purple", 70)
	);
}
```

#### Shade maps

When mapping color families to other color families, you can choose to include a midpoint grade, resulting in a 5-grade shade map.

| Shade            | Description                | Example                 |
| ---------------- | -------------------------- | ----------------------- |
| `{role}-lighter` | two grades lighter (`-20`) | `primary-color-lighter` |
| `{role}-light`   | one grade lighter (`-10`)  | `primary-color-light`   |
| `{role}`         | the midpoint shade         | `primary-color`         |
| `{role}-dark`    | one grade darker (`+10`)   | `primary-color-dark`    |
| `{role}-darker`  | two grades darker (`+20`)  | `primary-color-darker`  |

### Color Schemes

Customizing the color system's [role tokens](design-tokens#role-tokens) is one of the easiest ways to begin theming an application.
We ship default light and dark and color schemes, but you are encouraged to create your own scheme(s) to suit your needs.
By default, the dark color scheme uses the same color families as the light scheme but simply inverts the grade scale.

See the `$light-scheme` and `$dark-scheme` maps in the
[color tokens stylesheet](https://github.com/wwnorton/design-system/blob/main/packages/core/src/color/tokens.scss)
for a closer look at how this is accomplished.

:::caution Work in progress
The dark color scheme is still being tested and must be turned on with the `$enable-dark-scheme` flag at this time.

```scss
@use '@wwnds/core' as nds with (
	$enable-dark-scheme: true,
);
```

:::
