const express = require('express')
const router = express.Router()
const expressWs = require('express-ws')(router);


router.ws('/', (ws, req)=>{
    ws.on('message', (data)=>{
        console.log('server message', data)
    })
})

module.exports = router