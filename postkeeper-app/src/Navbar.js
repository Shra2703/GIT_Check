import React from 'react';
import { useCustomContext } from './postkeeperContext';

function Navbar(props) {
    let {countSavedPost, resetFunctionality} = useCustomContext();
    return (
        <>
            <h1>{countSavedPost}</h1>
            <button onClick={resetFunctionality}>Reset</button>

        </>
    );
}

export default Navbar;