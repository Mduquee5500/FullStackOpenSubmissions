import { useEffect, useState } from 'react'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import axios from 'axios'

const App = () => {
   const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() =>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('Fulfilled the promise')
        setPersons(response.data)
      })
  }, [])

  const personsToShow = filter ?
    persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())
    ) : persons

  return (
    <>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <AddPerson 
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <PersonsForm persons={personsToShow}/>
    </>
  )
}

export default App