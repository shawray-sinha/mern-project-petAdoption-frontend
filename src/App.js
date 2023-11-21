import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { HashRouter, Routes, Route, } from 'react-router-dom';
import Header from './components/Header.js';
import DogAdoption from './components/DogAdoption.js';
import CatAdoption from './components/CatAdoption.js';
import Nav from './components/Nav.js';
import Home from './components/Home';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import PetFoodAndMedicine from './components/petfood/PetFoodAndMedicine.js';
import './components/Style/style.css';
import PetDoctor from './components/Doctor/PetDoctor.js';
import CreateAdoption from './components/CreateAdoption.js';
import Footer from './components/footer/Footer.js'
import AppointmentList from './components/Doctor/AppoinmentList.js';
import EditAppoinment from './components/Doctor/EditAppoinment.js';
import Login from './components/Login';
import Signup from './components/Signup';
import SuccessPage from './components/sucesspage/SuccessPage.js';


function App() {

  return (
    <div>
      <HashRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/successpage" element={<SuccessPage />} />
          <Route path="/dog-adoption" element={<DogAdoption />} />
          <Route path="/cat-adoption" element={<CatAdoption />} />
          <Route path="/createadoption" element={<CreateAdoption />} />
          <Route path="/petfood" element={<PetFoodAndMedicine />} />
          <Route path="/petdoctor" element={<PetDoctor />} />
          <Route path="/appoinmentlist" element={<AppointmentList />} />
          <Route path="/editappoinment/:id" element={<EditAppoinment />} />
        </Routes>
        <Footer />
      </HashRouter>

    </div>
  );
}
export default App;
