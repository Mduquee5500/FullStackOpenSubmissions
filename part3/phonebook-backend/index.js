const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static("dist"))

let persons = [
    {
        id: "1",
        name: "John",
        number: "123456789"
    },
    {
        id: "2",
        name: "John Smith",
        number: "987654321"
    }
]

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

app.use(requestLogger)

const generateId = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(n => Number(n.id))) : 0
    return String(maxId + 1)
}

app.get('/api/persons', (request, response) => {
    response.send(persons);
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id;
    const person = persons.find((person) => person.id === id);
    if (person) {
        response.send(person);
    } else {response.status(404).end();}
})

app.post('/api/persons', (request, response) => {
    const body = request.body;

    if (!body) {
        return response.status(400).json({
            error: 'Bad Request',
        });
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,
    }

    persons = persons.concat(person)
    response.json(person);
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id;
    persons = persons.filter((person) => person.id !== id);

    response.status(204).end();
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server started on port ${PORT}`)