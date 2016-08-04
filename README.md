# Simple inbox test with live reloading and build/watch commands

```
    npm install
    npm start
    open localhost:3000/
```

A simple prototype for a basic mailbox component, in which the
provided messages are listed, can be read and deleted.

## The specs
Create a prototype mailbox example. It should comprise of two sections, 
a navigation section on the left, in which all provided messages are listed.
Each message in the navigation section should display the following fields from the message:

```javascript
    /**
     *   @param {string} sender
     *   @param {string} subject
     *   @param {number} time_sent
     **/
```

The `time_sent` should be presented in the form "Mon 06 July, 10:53", in local time.

When a message entry in the left-hand navigation is clicked, the contents of the field `message` from
the entry that was clicked should be displayed in the section on the right.

When a message has not yet been read, the entry in the left-hand navigation should be highlighted
in some form. After it has been read i.e. clicked on, it should no longer be highlighted.

In addition to the fields provided, it should be possible to remove each of the messages by clicking
on an 'X' character, in the top right hand corner of a navigation entry.

## Commands 
```
    npm start           # Start up dev environment and do a first build
    npm run lint        # Lint the source/development folder with eslint
    npm run test        # All the files in the 'test' folder will go through mocha and chai to be testes
    npm run build       # Build a dist for production use (unminified, check webpack.config file for more info)
    npm run watch       # Watch the development environment for changes
    npm run clean       # Clean up the dist folder for a clean start
    ...                 # Other commands are visible in the package.json file, mostly combined use of above commands
```

## The approach
Started with a development setup for react with webpack and webpack-dev-server. Since it is only a
 local prototype. There is an included file with data and the data/changes are only kept for the session.

The server is setup with [Nodemon](https://github.com/remy/nodemon) and [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html).
 The idea is to keep track of the state when something happens and not to re-render too much for the DOM, optimize
 where possible and necessary. Since ReactJS follows this goal, I went to use it together with ES6. Gave me more structure
 than I would have in regular ES5. Although classes are just sugar coating, it looks a lot cleaner and highly cohesive.
 
As this is a prototype, minimal setup is used, the `less` files are being compiled to 1 `css` file. I only added the necessary requested styling,
 but went ahead and made it more structured already for further development later. Components have 1 directory for now, but might
 need to create separate folders for the features later as well. Message folder, Home folder .. 

The idea behind this setup was to find/create a project that holds cases I will need in the future, dev setup/tools I might use.
 more research needs to be done about the dev setup. Production would need more optimization, minification, implementing files
 from outside etc.. The webpack-dev-server is also only for dev environment use. 
 
 
## To Do
* Modify action to use with Thunk
* Complete tests
* Complete documentation (JS DOC)

## Tools/Tech Used
* [Webstorm](https://www.jetbrains.com/webstorm/)
* [ReactJS](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [React-Router](https://github.com/reactjs/react-router)
* [Webpack](https://webpack.github.io/)
* [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)
* [ES6 / ES2015](https://babeljs.io/docs/learn-es2015/)
* [Babel](https://babeljs.io/)
* [Less](lesscss.org)
* [Moment](http://momentjs.com/)
* [Mocha](http://mochajs.org/)
* [Chai](http://chaijs.com/)
* [Nodemon](https://github.com/remy/nodemon)
* [JS DOC](http://usejsdoc.org/)

## Extra
Set up a better test suite, maybe use [enzyme](http://airbnb.io/enzyme/). 
Hot reloading might be better with tools like [babelify](https://github.com/babel/babelify) or
 [watchify](https://github.com/substack/watchify). Currently noticing some hickups with [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) and 
 also quite tedious process to do the setup. Watching Less through webpack would be a first improvement. Currently 
 not using the less-loader. Centralize more to webpack when possible and use a different dev server.
 