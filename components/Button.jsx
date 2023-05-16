import React from 'react';

const Button = (props) => {
    return (
        <button className='btn transition-colors duration-500 transform hover:bg-gray-600  bg-gray-900 py-1 px-4 rounded-lg text-white text-lg'>
            {props.children}
        </button>
    );
};

export default Button;