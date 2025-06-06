const express = require('express')
const morgan = require('morgan');
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(morgan('tiny'));
app.use(cors())
app.use(express.static('dist')) // levantar el front dentro del servidor back

let notas = [
    {
        "id": "1",
        "content": "HTML is easy",
        "important": true
    },
    {
        "id": "2",
        "content": "Browser can execute only JavaScript",
        "important": true
    },
    {
        "id": "3",
        "content": "GET and POST are the most important methods of HTTP protocol",
        "important": false
    },
    {
        "id": "0fd4",
        "content": "La abejita maya",
        "important": true
    },
    {
        "id": "fe98",
        "content": "Las puertas del cielo",
        "important": false
    },
    {
        "id": "36f7",
        "content": "El infierno de dante",
        "important": true
    }
]

/* GET: Obtiene todo el listado */
app.get('/api/notes', (request, response) => {
    response.json(notas)
})



//-------------------------------------------------------
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})