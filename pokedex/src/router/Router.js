import App from "../App";
import Detalhes from '../pages/Detalhes/Detalhes';
import Pokedex from "../components/Pokedex";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App/>}/>
                <Route path='detalhes/:id' element={<Detalhes/>}/>
                <Route path='pokedex' element={<Pokedex/>}/>
            </Routes>
        </BrowserRouter>
    );
  }
  
  export default Router;