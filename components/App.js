// What are the variables wrapped in braces doing?
import React, { Component } from 'react';
import { v4 } from 'uuid'
import NoteMenu from './NoteMenu'
import NoteList from './NoteList'

class App extends Component {
  constructor(props) {
    super(props)
    // Add initial state with key of notes and value of empty array
    this.state = {
      notes: [{noteId: 1, desc: 'a note'}, {noteId: 2, desc: 'another note'}]
    }

    // You'll have to bind functions here or before passing them down as props
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  addNote (text) {
    // add new note to state as an object with the keys:
    // `noteId` using `v4` method above
    // `desc` as a string
    var note = {
      noteId: v4(),
      desc: text
    };
    this.setState({notes: [...this.state.notes, note]});
    console.log('Adding new note with text: ' + text);
  };

  deleteNote (id) {
    // delete note from state using the given `id`
    for (var i = 0; i < this.state.notes.length; i++) {
      if (this.state.notes[i].noteId === id) {
        this.state.notes.splice(i, 1);
      }
    }
    console.log('Deleting note with id: ' + id);
  };

  updateNote (text, id) {
    // update note with given `id` in state with `desc`
    for (var i = 0; i < this.state.notes.length; i++) {
      if (this.state.notes[i].noteId === id) {
        this.state.notes[i].desc = text;
      }
    }
    console.log('Updating note id: ' + id  + 'with text: ' + '\"' + text + '\"');
    };

  render() {
    return (
      <div>
        <h1>HackReact</h1>
        <NoteMenu addNote={this.addNote}/>
        <NoteList notes={this.state.notes} deleteNote={this.deleteNote} updateNote={this.updateNote} />
      </div>
    )
  }
}

export default App;
