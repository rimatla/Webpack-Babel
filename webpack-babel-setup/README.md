## Initial bundle set with either babel or webpack.

```
*************
Ps: Make sure to check package.json for needed packages

*************
Option 1 (Bigger Projects)
Webpack Bundle

1 create webpack.config.js file
1b source bundle.js in your index.html accordingly as assets/bundle.js
*On terminal
2 $ webpack

"Per your webpack.config.js configurations , webpack will create an 'assets dir' with a  bundle.js file"

3- No more page reloads while developing! Run
$ webpack-dev-server

"all ready for development!" No?

ps: Hack in case webpack-dev-server is not auto refreshing after each change
$ webpack-dev-server --watch-poll




*************
Option 2 (Small Projects)
Babel Bundle

1a create .babelrc file

2a create index.html on dist dir
2b source bundle.js in your index.html
2c create index.js on src dir


3 run
$ babel ./src/index.js --out-file ./dist/bundle.js

"It may look like nothing has happened, but something has happened. We've actually transpiled everything into this file called bundle.js. All worked on by Babel."


```