const express = require('express')
const websocketRoute = require('./routers/websocketRoute')
const app = express()
const expressWs = require('express-ws')(app)

//MIDDLEWARE
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res, next)=>{
    return res.render('index.html')
})

app.ws('/websocket',(ws, req)=>{
    ws.send('hello from server')
    ws.on('message', (data)=>{
        console.log('server message', data)
    })
})

module.exports = app;