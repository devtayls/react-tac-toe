import React from 'react';
import ReactDOM from 'react-dom';
import Square from '../components/square'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Square value={'X'}/>, div);
})