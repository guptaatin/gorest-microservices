const gateway = require('fast-gateway');
const port = 9001;

const server = gateway({
    routes: [
        {
            prefix: '/users-micro',
            target: 'http://localhost:8081/'
        },
        {
            prefix: '/users-micro-particular',
            target: 'http://localhost:8082/'
        },
        {
            prefix: '/users-micro-update',
            target: 'http://localhost:8083/'
        }
    ]
})

server.get('/gorest-micro', (req, res) => {
    res.send('gateway is called')
})

server.start(port).then(server => {
    console.log("Api Gateway is running 9001 port")
})