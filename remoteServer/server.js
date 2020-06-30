console.log('pini 123')

import express from "express"

import {renderToString} from "react-dom/server"

import SomeComponent from './SomeComponent'
import React from 'react'

const app = express()

app.get("*", (req, res, next) => {

    const html = renderToString(<div>server Remote from react 123456  - <SomeComponent/></div>)
    //const html = renderToString(<div>server Remote from react 123456  - </div>)

    console.log('req.url: ', req.url, html)
    res.send(html)

})

app.listen(3001, () => {
    console.log(`Server is listening on port: 3001`)
})
