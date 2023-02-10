export default function fetchNotes (pending) {
  if (pending) {
    return fetch('http://localhost:3000/getNotes').then(pendingNotes => pendingNotes.json())
  }
  return fetch('http://localhost:3000/getNotes2').then(allNotes => allNotes.json())
}
