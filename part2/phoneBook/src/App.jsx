import { useEffect, useState } from "react";
import AddPerson from "./components/AddPerson";
import Filter from "./components/Filter";
import PersonsForm from "./components/PersonsForm";
import numbersServices from "./services/numbers";
import axios from "axios";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationStatus, setNotificationStatus] = useState("");

  useEffect(() => {
    numbersServices.getAll().then((initialNumbers) => {
      setPersons(initialNumbers);
    });
  }, []);

  const deletePerson = (id) => {
    const personToDelete = persons.find((p) => p.id === id);
    if (personToDelete && window.confirm(`Delete ${personToDelete.name} ?`)) {
      axios.delete(`http://localhost:3001/persons/${id}`).then(() => {
        setPersons((prevPersons) => prevPersons.filter((p) => p.id !== id));
      });
    }
  };

  const personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} status={notificationStatus} />
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <AddPerson
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setNotificationMessage={setNotificationMessage}
        setNotificationStatus={setNotificationStatus}
      />
      <h2>Numbers</h2>
      <PersonsForm persons={personsToShow} handleDelete={deletePerson} />
    </>
  );
};

export default App;
