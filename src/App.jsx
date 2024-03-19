import About from "./pages/About";
import Home from "./pages/Home";
import BussinesPage from "./pages/BussinesPage";
import SportsPage from "./pages/SportsPage";
import TransportPage from "./pages/TransportPage";
import TaskiesPage from "./pages/TaskiesPage";
import OrganizationPage from "./pages/OrganizationPage";
import EventPage from "./pages/EventPage";
import Header from "./components/Header"

import { BrowserRouter,Routes , Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter >
          <Header/>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="sport" element={<SportsPage/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="business" element={<BussinesPage/>}/>
            <Route path="transport" element={<TransportPage/>}/>
            <Route path="taskies" element={<TaskiesPage/>}/>
            <Route path="organization" element={<OrganizationPage/>}/>
            <Route path="events" element={<EventPage/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
