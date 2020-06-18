import React from 'react';
import Potato from './Potato';

// 구조 분해 할당으로 props 사용하면 . 연산자를 사용하지 않아도 됩니다.
function Food({ name, picture }) {
    return (
        <div>
            <h4>I like {name}</h4>
            <img src={picture} alt='' />
        </div>
    );
}

const foodLike = [
    {
        name: 'Kimchi',
        image: 'http://aeriskitchen.com/wp-content/uploads/2020/06/ChapSsalTteok2_01-.jpg',
    },
    {
        name: 'sunpong',
        image: 'http://aeriskitchen.com/wp-content/uploads/2020/05/Cucumber_and_Crab_Stick_Salad_01-.jpg',
    },
    {
        name: 'bibimp',
        image: 'http://aeriskitchen.com/wp-content/uploads/2020/05/Spicy_Tiny_Anchovy_Side_01-.jpg',
    },
];
/*
function renderFood(dish) {
    return <Food name={dish.name} picture={dish.image} />;
} */

const renderFood = (dish) => <Food name={dish.name} picture={dish.image} />;

function App() {
    console.log(foodLike.map(renderFood));
    return (
        <div className='App'>
            안녕 <Potato />
            {foodLike.map(renderFood)}
        </div>
    );
}

export default App;
