import React from 'react';
import Potato from './Potato';

// 구조 분해 할당으로 props 사용하면 . 연산자를 사용하지 않아도 됩니다.
function Dragon({ fav }) {
    return <h4>I like {fav}</h4>;
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
