import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});