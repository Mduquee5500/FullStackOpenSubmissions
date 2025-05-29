const Note = ({ note, toggleImportace }) => {
  const label = note.important ? "set not-important" : "set important";

  return (
    <>
      <li className="note">{note.content}</li>
      <button onClick={toggleImportace}>{label}</button>
    </>
  );
};

export default Note;
