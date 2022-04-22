import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(

React.createElement('a', { href: 'https://www.google.com'},'google it up bozo'),

document.getElementById('root')
);

ReactDOM.render(
  React.createElement(
    'ul',
    {},
    React.createElement('li', {}, 'Apples'),
    React.createElement('li', {}, 'Oranges'),
    React.createElement('li', {}, 'Mangos')
  ),
  document.getElementById('blah')
);

ReactDOM.render(
    React.createElement(
      'ul',
      {},
      React.createElement(
        'li',
        {},
        'Apples',
        React.createElement(
          'ul',
          {},
          React.createElement('li', {}, '$1.00 per lb')
        )
      ),
      React.createElement(
        'li',
        {},
        'Oranges',
        React.createElement(
          'ul',
          {},
          React.createElement('li', {}, '$.70 per lb')
        )
      ),
      React.createElement(
        'li',
        {},
        'Mangos',
        React.createElement('ul', {}, React.createElement('li', {}, '$2.00 per lb'))
      )
    ),
    document.getElementById('bongo')
  );

  const applesPrice = React.createElement('li', {}, '$1.00 per lb');
const apples = React.createElement('ul', {}, applesPrice);

const orangesPrice = React.createElement('li', {}, '$.70 per lb');
const oranges = React.createElement('ul', {}, orangesPrice);

const mangosPrice = React.createElement('li', {}, '$2.00 per lb');
const mangos = React.createElement('ul', {}, mangosPrice);

ReactDOM.render(
  React.createElement(
    'ul',
    {},
    React.createElement('li', {}, 'Apples', apples),
    React.createElement('li', {}, 'Oranges', oranges),
    React.createElement('li', {}, 'Mangos', mangos)
  ),
  document.getElementById('chicken')
);

