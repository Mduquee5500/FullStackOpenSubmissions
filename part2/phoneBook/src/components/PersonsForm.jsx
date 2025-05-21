const PersonsForm = ({ persons }) => {
    return (
        <ul style={{listStyleType: 'none'}}>
        {persons.map(( person, index ) => (
          <li key={index}>{person.name} {person.number}</li>
        ))}
      </ul>
    )
}

export default PersonsForm