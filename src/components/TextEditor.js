import React from 'react';

class TextEditor extends React.Component {
  constructor () {
    super()
    this.state = {
      finalTextMsg: '',
      inputText: ''
    };
  }

  handleAppend = (e) => {
    e.preventDefault();
    this.setState({ 
      finalTextMsg: `${this.state.finalTextMsg} ${this.state.inputText}`,
      inputText: ''
    });
  }

  handleUndo = (e) => {
    e.preventDefault();
    const lastSpaceIndex = this.state.finalTextMsg.lastIndexOf(' ');
    const finalTextMsg = this.state.finalTextMsg.substring(0, lastSpaceIndex);

    this.setState({ finalTextMsg: finalTextMsg });
  }

  handleChange = (e) => {
    e.preventDefault();
    const inputText = e.target.value
    this.setState({ inputText: inputText });
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input
            className="word-input"
            type="text"
            data-testid="word-input" 
            onChange={e => this.handleChange(e)}
            value={this.state.inputText}/>
          <button
            data-testid="append-button"
            onClick={e => this.handleAppend(e)}
            disabled={!this.state.inputText ? "disabled": ""}
            >Append</button>
          <button
            data-testid="undo-button"
            onClick={e => this.handleUndo(e)}
            disabled={!this.state.finalTextMsg ? "disabled" : ""}
            >
              Undo</button>
        </div>
    <div className="text-field" data-testid="text-field" value={this.state.finalTextMsg}>{this.state.finalTextMsg}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
