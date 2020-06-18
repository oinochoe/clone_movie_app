import React from 'react';
import PropTypes from 'prop-types';
import Potato from './Potato';

// 구조 분해 할당으로 props 사용하면 . 연산자를 사용하지 않아도 됩니다.
function Food({ name, picture, rating }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating} / 5.0</h4>
            <img src={picture} alt={name} />
        </div>
    );
}

const foodLike = [
    {
        id: 1,
        name: 'Kimchi',
        image: 'http://aeriskitchen.com/wp-content/uploads/2020/06/ChapSsalTteok2_01-.jpg',
        rating: 5,
    },
    {
        id: 2,
        name: 'sunpong',
        image: 'http://aeriskitchen.com/wp-content/uploads/2020/05/Cucumber_and_Crab_Stick_Salad_01-.jpg',
        rating: 4.9,
    },
    {
        id: 3,
        name: 'bibimp',
        image: 'http://aeriskitchen.com/wp-content/uploads/2020/05/Spicy_Tiny_Anchovy_Side_01-.jpg',
        rating: 3,
    },
];

function App() {
    return (
        <div className='App'>
            안녕 <Potato />
            {foodLike.map((dish) => (
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
            ))}
        </div>
    );
}
Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export default App;
