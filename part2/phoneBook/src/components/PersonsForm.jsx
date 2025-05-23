const PersonsForm = ({ persons, handleDelete }) => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {persons.map((person, index) => (
        <li key={index}>
          {person.name} {person.number}
          <button style={{ paddingLeft: '10px 20px', marginLeft: '10px' }} onClick={() => handleDelete(person.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PersonsForm;