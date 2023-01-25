import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SaveBooks from './components/SaveBooks';
import NotFound from './Components/NotFound';
import Navigation from './Components/Navigation';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/navigation' element={<Navigation/>}/>
          <Route exact path='/save' element={<SaveBooks/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
