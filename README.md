# ModuleFederationSSR
Module Federation Server Side Rendering example :)

Remote server exposes "SomeComponent", and Host server consume and render it in Server Side.

This line creates an error in run time:

`import SomeComponent from "website2/SomeComponent";`

(hostServer/LocalComponent.js)



## Install
 npm i
## Run
1. npm run buildHost
2. npm run startHost (http://localhost:3000/)
3. npm run buildRemote
4. npm run startRemote (http://localhost:3001/)
