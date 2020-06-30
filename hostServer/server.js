import express from "express"
import {renderToString} from "react-dom/server"
import LocalComponent from './LocalComponent'
import React from 'react'

const app = express()

app.get("*", (req, res, next) => {

    //const html = renderToString(<div>server Host from react 123456 - <LocalComponent/></div>)
    const html = renderToString(<div>server Host from react 123456 </div>)

    console.log('req.url: ', req.url, html)
    res.send(html)

})

app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`)
})