import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [notes, setNotes] = useState([]);
  const [markdown, setMarkdown] = useState('# Welcome to Notes App\nType your Markdown here...');
  const [tag, setTag] = useState('');
  const [search, setSearch] = useState('');
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const response = await fetch('http://localhost:5000/notes');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  };

  const saveNote = async () => {
    try {
      const response = await fetch('http://localhost:5000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ markdown, tag }),
      });
      const result = await response.json();
      alert('Note saved!');
      loadNotes(); // Refresh the list
      setSelectedNoteId(result.id);
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await fetch(`http://localhost:5000/notes/${id}`, {
        method: 'DELETE',
      });
      loadNotes();
      if (selectedNoteId === id) {
        setMarkdown('# Welcome to Notes App\nType your Markdown here...');
        setTag('');
        setSelectedNoteId(null);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const selectNote = (note) => {
    setMarkdown(note.markdown);
    setTag(note.tag);
    setSelectedNoteId(note.id);
  };

  const filteredNotes = notes.filter(note =>
    note.markdown.toLowerCase().includes(search.toLowerCase()) ||
    note.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '30%', padding: 20, borderRight: '1px solid #ccc', overflowY: 'auto' }}>
        <h2>All Notes</h2>
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', marginBottom: 20, padding: 10 }}
        />
        <button onClick={() => { setMarkdown('# New Note\nType here...'); setTag(''); setSelectedNoteId(null); }} style={{ marginBottom: 20 }}>New Note</button>
        {filteredNotes.map(note => (
          <div key={note.id} style={{ marginBottom: 10, padding: 10, border: '1px solid #ddd', cursor: 'pointer', backgroundColor: selectedNoteId === note.id ? '#f0f0f0' : 'white' }} onClick={() => selectNote(note)}>
            <h4>{note.markdown.split('\n')[0]}</h4>
            <p>Tag: {note.tag}</p>
            <small>{new Date(note.timestamp).toLocaleString()}</small>
            <button onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }} style={{ marginLeft: 10, color: 'red' }}>Delete</button>
          </div>
        ))}
      </div>
      <div style={{ width: '70%', padding: 20 }}>
        <textarea
          style={{ width: '100%', height: 200, marginBottom: 20 }}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Type your Markdown here..."
        />
        <input
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          style={{ marginBottom: 20, width: '100%' }}
        />
        <button onClick={saveNote} style={{ marginBottom: 20 }}>Save Note</button>
        <div>
          <h2>Preview</h2>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
