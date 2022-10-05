import logo from './logo.svg';
import './App.css';
import Cart from "./components/Cart";
import {Route, Routes} from 'react-router-dom'
function App() {
    return(
        <Route>
            <Routes>
                <Route path='/' element={<Cart />}/>
            </Routes>
        </Route>
    )
}

export default App;


