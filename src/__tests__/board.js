import React from 'react';
import ReactDOM from 'react-dom';
import Board from '../components/board';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Board squares={Array(9).fill(null)}/>, div);
});