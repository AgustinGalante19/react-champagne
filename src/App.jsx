import useNotes from './hooks/useNotes'
import NotesList from './components/NotesList'

function App () {
  const { notes, pending, handleClick } = useNotes()

  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <header className='btn-ctn'>
          <button
            className={`btn ${!pending && 'active'}`} onClick={handleClick}
          >Todas
          </button>
          <button
            className={`btn ${pending && 'active'}`} onClick={handleClick}
          >Pendientes
          </button>
        </header>
        <main className='notes-ctn'>
          <NotesList notes={notes} />
        </main>
      </div>
    </div>
  )
}

export default App
