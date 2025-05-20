import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  const numbersToShow = persons.length > 0 ? persons : ''

  const preventDuplicates = (persons, newName, newNumber) => {
    return persons.reduce(( exists, person ) => {
      return exists || person.name === newName || person.number === newNumber
    }, false)
  }

  return (
    <>
      <h2>Phonebook</h2>
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
        {numbersToShow !== '' ? 
          numbersToShow.map((person, index) => <li key={index}>{person.name} {person.number}</li>)
          : <li>...</li>}
      </ul>
    </>
  )
}

export default App