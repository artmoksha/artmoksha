import React from 'react';
import ReactDOM from 'react-dom';
import MokshaApp from './MokshaApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MokshaApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
