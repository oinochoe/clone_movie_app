import React from 'react';
import Potato from './Potato';

function Dragon(props) {
    console.log(props);
    return <h4>Dragon</h4>;
}

function App() {
    return (
        <div className='App'>
            안녕 <Potato />
            <Dragon fav='kimchi' something={true} papapapa={['hello', 1, 2, 3, 4, true]} />
        </div>
    );
}

export default App;
