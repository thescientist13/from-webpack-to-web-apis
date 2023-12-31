# from-webpack-to-web-apis

[![Netlify Status](https://api.netlify.com/api/v1/badges/e8924f63-090f-4f6a-87ae-e7c34420d33e/deploy-status)](https://app.netlify.com/sites/lively-lollipop-a20857/deploys)

Slides and demo for my [Cloud RI meetup talk](https://www.meetup.com/cloudri/events/297053982/).  [Hosted on Netlify](https://lively-lollipop-a20857.netlify.app) and built using [GreenwoodJS](https://greenwoodjs.io) with the [**greenwood-starter-presentation** theme pack plugin](https://github.com/thescientist13/greenwood-starter-presentation/)

> _To operate the deck in full screen, click the "Presenter mode" button and use the left and right arrows keys to navigate through the slides.  Hit `ESC` to exit presenter mode._

## Local Setup

If you would like to run this project locally
1. Have [NodeJS](https://nodejs.org/) LTS installed
1. Clone or fork this repo
1. Install dependencies
    ```sh
    $ npm ci
    ```

## Presentation
To run the slides locally, run `npm start`

You can now view the slide deck by opening `localhost:8080` in your browser.

## Demo

The demo covers the following examples and can be seen in _src/demo_
1. [ES Modules (ESM)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
1. [Import Maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap)
1. [Import Attributes (JSON)](https://github.com/tc39/proposal-import-attributes)
1. [`new URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) + [`import.meta.url`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta)
1. [CSS Nesting](https://developer.chrome.com/articles/css-nesting/)
1. [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

You can run it locally with the following command
```sh
$ npm run demo
```