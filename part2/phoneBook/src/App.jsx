import { useState } from 'react'

const App = () => {
   const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('Button clicked', event.target)
    if (preventDuplicates(persons, newName, newNumber)) {
      alert(newName + ' is already added to phonebook')
      setNewName('')
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleChangeFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const preventDuplicates = (persons, newName, newNumber) => {
    return persons.reduce(( exists, person ) => {
      return exists || person.name === newName || person.number === newNumber
    }, false)
  }

  const personsToShow = filter ?
    persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())
    ) : persons

  return (
    <>
      <h2>Phonebook</h2>
      <form>
        Filter shown with <input onChange={handleChangeFilter}/>
      </form>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} type='text' />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} type='tel' />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{listStyleType: 'none'}}>
        {personsToShow.map(( person, index ) => (
          <li key={index}>{person.name} {person.number}</li>
        ))}
      </ul>
    </>
  )
}

export default App