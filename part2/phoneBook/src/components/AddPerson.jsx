import PreventDuplicates from "./PreventDuplicates";
import numberServices from "../services/numbers";
import axios from "axios";
import Notification from "./Notification";
import { useState } from "react";

const baseUrl = "http://localhost:3001/persons";

const AddPerson = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setNotificationMessage,
  setNotificationStatus,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((p) => p.name === newName);

    if (PreventDuplicates(persons, newName, newNumber)) {
      if (existingPerson) {
        if (
          window.confirm(
            `${newName} is already added to phonebook, replace the old number with the new one?`
          )
        ) {
          const updatedPerson = { ...existingPerson, number: newNumber };
          axios
            .put(`${baseUrl}/${existingPerson.id}`, updatedPerson)
            .then((response) => {
              setPersons(
                persons.map((p) =>
                  p.id !== existingPerson.id ? p : response.data
                )
              );
              setNotificationMessage(`Updated ${newName}'s number`);
              setNotificationStatus("successfull");
            })
            .catch(() => {
              setNotificationMessage(
                `Information of ${newName} has already been removed from server`
              );
              setNotificationStatus("error");

              setTimeout(() => {
                setNotificationMessage(null);
                setNotificationStatus("");
              }, 5000);
            });
        }
      }

      setNewName("");
      setNewNumber("");

      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    numberServices
      .create(personObject)
      .then((returnedNumber) => {
        setPersons(persons.concat(returnedNumber));
        setNotificationMessage(`Added ${newName}`);
        setNotificationStatus("successfull");
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        setNotificationMessage("Failed to add person");
        setNotificationStatus("error");
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
