import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage';
import FAQs from './Pages/FAQs'
import Events from './Pages/Events'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/events" element={<Events/>}/>
      </Routes>
    </Router>
  );
}

export default App;
