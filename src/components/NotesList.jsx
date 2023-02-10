const NotesList = ({ notes }) => {
  if (!notes) return <p>No hay notas...</p>

  return notes &&
    (
      <ul>
        {notes.map(note => (
          <li key={note.id_Reg_Destino} className='note'>
            <h4>{note.ds_detalle}</h4>
            <p>Estado: {note.ds_lectura_estado}</p>
            <p>Hora: {note.dh_alta}</p>
          </li>))}
      </ul>
    )
}

export default NotesList
