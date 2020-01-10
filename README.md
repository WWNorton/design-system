# design-system

> The Norton Design System

Styles, components, and utilities for building accessible, responsive user interfaces.

## Structure

This repository uses [lerna](https://lerna.js.org/) to manage design system packages as a [monorepo](https://en.wikipedia.org/wiki/Monorepo).

- [@nds/core](packages/core) is the foundation of the design system. It contains modular [Sass](https://sass-lang.com/) declarations, mixins, functions, and design tokens (variables). It is the source of truth for the theming system and default styles. It has no dependencies.
- [@nds/react](packages/react) is a [React](https://reactjs.org/) component library implementation of the design system. It depends on `@nds/core`.
- [nds-docs](docs) is the documentation website where usage guides and examples live. It depends on `@nds/core` and uses [Vuepress](https://vuepress.vuejs.org/) as its static site generator. It does not use the `@nds` scope because it is not a library and is not published to the NPM registry.

## Contributing

Any and all contributions are welcome from anyone who would like to help.
To learn more about contributing, please read [the contribution guide](CONTRIBUTING.md).

Because this is a monorepo, a couple extra steps are required to get your local environment ready.

### Setup

The following assumes that you already have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed locally.

1. Clone the repository
2. Install top-level dependencies via `npm install`
3. Install package-level dependencies and symlink them via `npm run bootstrap` (or `lerna bootstrap` if you have Lerna installed globally)

```sh
git clone https://gitlab.com/wwnorton/platform/design-system.git && cd design-system
npm install
npm run lerna bootstrap
```

### Developing

All development commands should be run from the root of the repository, though they are also available within each individual package.

#### Docs & Core

Since the documentation uses the design system foundation, it's recommended that you use it for your live development environment when making changes to `@nds/core`.

```sh
npm run dev:docs
```

This will run the Vuepress dev task, which itself uses [Webpack](https://webpack.js.org/) and is [fully configurable from Vuepress](https://vuepress.vuejs.org/config/#configurewebpack).
Any Sass imported into the `nds-docs` markdown files will be transpiled to CSS and rendered in the dev environment.
To import Sass, simply add a `style` tag with `lang="scss"` anywhere to your markdown and import the `~@nds/core` module that you want to be included on that page (note that the `~` alias will be interpreted as `node_modules` by Webpack).

The following example resembles how [the button docs](docs/components/button.md) work:

```markdown
# Button

Lorem, ipsum dolor sit amet consectetur adipisicing elit...

## Examples

<button class="button button--solid">Solid</button>

<style lang"scss">
@import '~@nds/core/src/components/button/index';
</style>
```
