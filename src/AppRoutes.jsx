import React from 'react';

import { Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Average from "./averageNumber/Average.jsx";
import MessageBoard from "./messageBoard/MessageBoard.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <App/> } />
            <Route path='/messageboard' element={ <MessageBoard/> } />
            <Route path='/average' element={ <Average/> } />
        </Routes>
    );
};

export default AppRoutes;