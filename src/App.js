import React from 'react';
import Potato from './Potato';

function Dragon() {
    return <h4>Dragon</h4>;
}

function App() {
    return (
        <div className='App'>
            안녕 <Potato />
            <Dragon />
        </div>
    );
}

export default App;
