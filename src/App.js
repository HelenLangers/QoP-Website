import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import FAQs from './Pages/FAQs/FAQs'
import Events from './Pages/Events/Events'
import About from './Pages/About/About'
import Login from './Pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
