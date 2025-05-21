const PreventDuplicates = (persons, newName, newNumber) => {
    return persons.reduce(( exists, person ) => {
      return exists || person.name === newName || person.number === newNumber
    }, false)
}

export default PreventDuplicates