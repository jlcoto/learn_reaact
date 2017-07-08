import React, { Component } from 'react';
import AddNote from './AddNotes.js'
import Entry from './Entry.js'
import './bootstrap.min.css'
import './App.css';

class App extends Component {

  state = {
    entries: [{
      id: 1,
      content: "Hoy quiero jugar"
    }]
  }

  onAddNote = (newEntry) => {
    var id = this.state.entries.length;
    id += 1;
    this.state.entries.push({
      id: id,
      content: newEntry
    })
    this.setState(this.state.entries)
  }

  onRemoveNote = (id) => {
    this.setState((state) => ({
        entries: state.entries.filter((c) => c.id !== id)
    }))
  }

  // onRemoveNote = function(index) {
  //   console.log(index)
  // }

  render() {
    return (
      <div className = 'container'>
        <div className='row'>
          <div className="notes col-xs-8 col-xs-offset-4">
              My Notes
          </div>
        </div>
        <div className='row'>
          <AddNote
            onAdd={this.onAddNote}
          />
          <div className='row'>
            <div className='col-md-6 col-xs-offset-2'>
              <ol>
              {this.state.entries.map((entry) => (
                <Entry
                  key={entry.id}
                  entry={entry.content}
                  onClick={() => {this.onRemoveNote(entry.id)}}
                  />
                ))}
              </ol>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
