# Trust over IP Specification Template

A base template.

### How to use this template

The contents of this template can be used to create a ToIP specification.

### Getting Started

You need a [GitHub](https://github.com) account.

When creating a new specification, you can select 'trustoverip/toip-spec-template' from the Repository template list.

#### Set up GitHub pages

1. Under your repository name, click  Settings.
2. In the "Code and automation" section of the sidebar, click  Pages.
3. Under "GitHub Pages", use the drop-down menu and select 'main' as the publishing source.
4. Use the drop-down menu to select '/docs' for your publishing source.
5. Click save

### Editing

1. Edit the [specification](spec.md) using markdown.
2. Commit and push your changes

A HTML version of the spec is automatically generated and available at https://trustoverip.github.io/your-spec-name


#### Previewing locally

This requires [node.js](https://nodejs.dev) to be installed.

Install development dependencies:

```shell
npm install
```

To generate and preview the specification run:

```shell
npm run preview
```