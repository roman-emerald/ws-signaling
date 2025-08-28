import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: process.env.PORT || 8080 })

console.log(process.env.PORT)

wss.on('connection', function connection(ws) {

  ws.onerror = (e) => {
    console.error(e)
  }

  ws.onmessage = (e) => {
    console.log('received: %s', e.data)
    ws.send(e.data)
  }

})