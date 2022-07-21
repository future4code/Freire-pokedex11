import Detalhes from './pages/Detalhes/Detalhes';
import { GlobalStyled } from './styled';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyled/>
      <BrowserRouter>
        <Routes>
          <Route path="detalhes/:id" element={<Detalhes />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
