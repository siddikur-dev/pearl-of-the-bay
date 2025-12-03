import React from 'react';

const Button = ({ label, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`${className} bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded cursor-pointer`}>
            {label}
        </button>
    );
};

export default Button;