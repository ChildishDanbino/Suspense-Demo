Suspense Demo For React - Tech Talk

## General Suspense Info

From React Docs:

Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

From LogRocket:

Suspense allows you to defer rendering part of your application tree until some condition is met (for example, data 
from an endpoint or a resource is loaded) -- Note data fetching is currently not available YET but is on the horizon.

## Useful Links / Videos

React Code Splitting Docs: https://facebook.github.io/create-react-app/docs/code-splitting

Dan Abramov "The Future" Talk: https://www.youtube.com/watch?v=nLF0n9SACd4

Jared Palmer Suspense: https://www.youtube.com/watch?v=SCQgE4mTnjU&t=1183s

## Run this "Demo"

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


