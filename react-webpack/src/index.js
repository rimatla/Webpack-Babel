import React from 'react';
import { render } from 'react-dom'
import { hello, goodbye } from './lib'


//styles
const styleApp = {
    backgroundColor: '#222222',
    color: '#00d8ff',
    fontFamily: 'verdana',
    width: '400px',
    borderRadius: '2px',
    textAlign: 'center',
    margin: '0 auto'
};

render (
    <div>
        {hello}
        {goodbye}
    </div>,
    document.getElementById('react-container')
);