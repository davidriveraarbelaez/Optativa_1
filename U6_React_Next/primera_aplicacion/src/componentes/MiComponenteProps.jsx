import React from 'react';
const MiComponenteProps = ({ nombre }) => {
    return (
        <div>
            <h2>Hola, soy un componente de React con props</h2>
            <p>Mi nombre es: {nombre}</p>
        </div>
    );
};
export default MiComponenteProps;