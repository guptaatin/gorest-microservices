const gateway = require('fast-gateway');
const port = 9001;

const server = gateway({
    routes: [
        {
            prefix: '/users',
            target: 'http://localhost:8081/'
        }
    ]
})

server.get('/gorest-micro', (req, res) => {
    res.send('gateway is called')
})

server.start(port).then(server => {
    console.log("Api Gateway is running 9001 port")
})