---
sidebar_position: 3
---

# Contribute

Want to contribute to the documentation? Here's how!

## Requirements

- A GitHub account
- Knowing how to use Markdown syntaxes
- Knowing how to use Docusaurus 2

## Editing Markdown Pages

1. Click on the *EDIT THIS PAGE* button and fork the repository.
2. Add your changes to pages.
3. Make pull request to the [original repository](https://github.com/raymond-1227/rmcommunity/).
4. I will review your changes and update the documentation.

## Adding Translations

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Add your the i18n language code to `docusaurus.config.js` under `i18n.locales`.
4. Run `npm run write-translations -- --locale LANGUAGE_CODE` to generate the translation files so you don't have to generate each file one by one.
5. Translate the files in `i18n/LANGUAGE_CODE`.
6. Make pull request to the [original repository](https://github.com/raymond-1227/rmcommunity/).
7. I will review your changes and update the translation.

Done! Thanks for contributing to the documentation!