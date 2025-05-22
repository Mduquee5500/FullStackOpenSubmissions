import PreventDuplicates from "./PreventDuplicates";
import numberServices from "../services/numbers";

const AddPerson = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (PreventDuplicates(persons, newName, newNumber)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    numberServices.create(personObject).then((returnedNumber) => {
      setPersons(persons.concat(returnedNumber));
      setNewName("");
      setNewNumber("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default AddPerson;
