// Exercise 3.1
const express = require('express');
const app = express()

app.use(express.json())

let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

const getNumberOfPersons = (persons) => {
    let result = 0;
    for (let person of persons) {
        result += 1;
    }
    return result;
}

const getFullDate = () => {
    const now = new Date()
    return now.toString()
}

const duplicatedName = (name, persons) => {
    for (let person of persons) {
        if (person.name === name) {
            return true;
        }
    }
    return false;
}

app.get('/api/persons', (request, response) => {
    response.send(persons);
})

// Exercise 3.2
app.get('/api/info', (request, response) => {
    response.send(`<span>Phonebook has info for ${getNumberOfPersons(persons)} people</span> <br> <span>${getFullDate()}</span>`);
})

// Exercise 3.3
app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id;
    const person = persons.find(person => person.id === request.params.id);
    if (person) {
        response.json(person);
    } else {
        response.status(404).end();
    }
})

// Exercise 3.4
app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id;
    persons = persons.filter(person => person.id !== request.params.id);

    response.status(204).end();
})

// Exercise 3.5
app.post('/api/persons', (request, response) => {
    const body = request.body;

    if (!body.name) {
        return response.status(400).json({
            error: 'name is missing'
        })
    } else if (!body.number) {
        return response.status(400).json({
            error: 'number is missing'
        })
    } else if (duplicatedName(body.name, persons)) { // Exercise 3.6
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        id: Math.floor(Math.random() * 1000000).toString(),
        name: body.name,
        number: body.number,
    }

    persons = persons.concat(person)
    response.json(person);
})

const PORT = 3001;
app.listen(PORT)
console.log(`Server running on port ${PORT}`)