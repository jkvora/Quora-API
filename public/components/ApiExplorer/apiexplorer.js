import React, { Component } from 'react';
import { render } from 'react-dom';
import { UnControlled as CodeMirror } from 'react-codemirror2';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export default class ApiExplorer extends Component {
  render() {
    return (
      <div>
        <CodeMirror
          value="<h1>I ♥ react-codemirror2</h1>"
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {}}
        />
      </div>
    );
  }
}
