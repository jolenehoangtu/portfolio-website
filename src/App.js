import React, { Component } from 'react';
import Header from './components/Header';
class App extends Component {
  constructor() {
    super();
    this.state = {
      resumeData: {}
    };
  }
  /// fetch the resume data and make it new state
  componentDidMount() {
    fetch('/resumeData.json')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ resumeData: data });
        console.log(this.state.resumeData);
      });
  }
  render() {
    return (
      <div className="container">
        <Header data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
