import  {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import Students from './components/Students';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="">
    <Router>
      <Routes>
        <Route path='/' element = {<Students/>}></Route>
        <Route path='/create' element = {<Create/>}></Route>
        <Route path='/update/:id' element = {<Update/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
