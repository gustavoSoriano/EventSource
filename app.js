const express   = require("express"),
    app         = express(),
    bodyParser  = require('body-parser')

app.use(express.static(__dirname + '/'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let pessoa = JSON.stringify( {nome:'soriano', idade:25} )

app.get('/connect', (req, res) => {
    res.writeHead(200, {'Connection': 'keep-alive','Content-Type': 'text/event-stream','Cache-Control': 'no-cache'})

    setInterval( () => {
        let n = Math.floor( Math.random() * (20 - 1) + 1 )
        console.log(n)
        
        if( n % 2 == 0 )res.write('data: '+ pessoa +'\n\n')
    }, 2000)
})


app.listen(3001, () =>  console.log("Running at Port 3001") )