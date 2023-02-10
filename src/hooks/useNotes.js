import { useEffect, useState } from 'react'
import fetchNotes from '../services/fetchNotes'

export default function useNotes () {
  const [pending, setPending] = useState(false)
  const [notes, setNotes] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    setNotes([])
    setPending(!pending)
  }

  useEffect(() => {
    fetchNotes(pending).then(({ notes }) => setNotes(notes))
  }, [pending])

  return { pending, notes, handleClick }
}
