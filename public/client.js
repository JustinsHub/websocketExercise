const ws = new WebSocket('ws://localhost:5000/websocket')

ws.onmessage = e => {
    console.log("got", e.data)
}

