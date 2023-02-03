import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Average from "./Average";
import MessageBoard from "./MessageBoard";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <App/> } />
                <Route path='/messageboard' element={ <MessageBoard/> } />
                <Route path='/average' element={ <Average/> } />
            </Routes>
        </Router>
    );
};

export default AppRoutes;