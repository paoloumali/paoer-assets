paoloumali/paoer-assets
============

Just a bunch of commonly used bower components with starter template

## installation/run

1. get components
    - $ bower install
2. install node modules
    - $ npm install -g grunt-cli
    - $ npm install
3. run tasks
    - $ grunt
4. serve at localhost:5000
    - $ node server.js

## public folder

* root
    - index.html
    - favicon.ico
* images
    - img/apple-touch-icon-144x144.png
    - img/apple-touch-icon-114x114.png
    - img/apple-touch-icon-72x72.png
    - img/apple-touch-icon-57x57.png
    - img/apple-touch-icon.png
* css
    - css/_components.css # all the css needed by components
    - css/_app.css # app-specific styles
    - css/_dynamic.css # stylesheet rendered by server
* js
    - js/shim_respond.js # html5shiv and respond
    - js/_header.js # must be in the html head
    - js/_footer.js # must be before html body's closing tag
    - js/_app.js # goes after _footer.js
    - js/_dynamic.js # script rendered by server

