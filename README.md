# sidenote-client

Renders list of messages and the associated profile of the poster.

Install dependencies with `npm install`

Run watchify to monitor js files and transpile down to ES5 as you write by running `npm start`

For prod env run `npm run build-min` to transpile and minify bundle.

## Loading into chrome

`npm run dist` - builds `dist/` folder that can be loaded into chrome manually or uploaded to webstore
`npm run open-dist` - **EXPERIMENTAL** does same thing as `npm run dist` but also opens a single use (isolated) chrome browser to test
