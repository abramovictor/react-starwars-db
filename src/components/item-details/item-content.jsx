import React from 'react';
const ItemContent = ({ children }) => {
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            {children}
        </div>
    );
};

export default ItemContent;