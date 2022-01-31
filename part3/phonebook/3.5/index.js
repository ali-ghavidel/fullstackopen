const { request, response, application } = require("express");
const express = require("express");

const app = express();

app.use(express.json())

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  number = persons.length;
  date = new Date();

  response.send(`<p>Phonebook has info for ${number} people</p>
        <p>${date}</p>`);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((user) => user.id === id);
  if (person) {
    response.json(person);
  }else {
      response.status(404).end()
  }
});

app.delete('/api/persons/:id', (request,response) => {
    id = Number(request.params.id)
    persons = persons.filter(e => e.id !== id)

    response.status(204).end()

})

const makeId = () => {
    max = Math.round(Math.random() * 100)
    return max + 1
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    const newPerson = {
        id: makeId(),
        name: body.name,
        number: body.number
    }
    persons = persons.concat(newPerson)

    response.json(newPerson)
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`serve is running on port ${PORT}`);
});
