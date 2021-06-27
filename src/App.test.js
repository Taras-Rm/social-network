import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

it('crashiтg text', () => {
    let div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
})