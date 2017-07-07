import React, { Component } from 'react';
import Entries from './Entries'
import './bootstrap.min.css'
import './App.css';

class App extends Component {

  state = {
    entries: [{
      key: 1,
      content: "Hoy quiero jugar"
    }]
  }

  onAddNote = (newEntry) => {
    var key = this.state.entries.length;
    key += 1;
    this.state.entries.push({
      key: key,
      content: newEntry
    })
  }

  render() {
    return (
      <div className = 'container'>
        <div className='row'>
          <div className="notes col-xs-8 col-xs-offset-4">
              My Notes
          </div>
        </div>
        <div className='row'>
          <Entries
            entries={this.state.entries}
            onAdd={this.onAddNote}
          />
        </div>
      </div>
    );
  }
}

export default App;
