import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Form } from 'react-router-dom';
import HeaderPage from './Components/Pages/header/HeaderPage';
import LoginPage from './Components/Pages/loginpage/LoginPage';
import RegistrationPage from './Components/Pages/registration/RegistrationPage';
import ExampleComponent from './Components/ExampleComponent';
import Challenges from './Components/Challenges';
import Card from './Components/Card';
import Header from './Components/Header';
import ChallengesPage from './Components/Pages/ChallengesFolder/ChallengesPage';
import UserPage from './Components/Pages/UserPage/UserPage';
import ScoreBoardpage from './Components/Pages/ScoreBoardPage/ScoreBoardpage';
import HomePage from './Components/Pages/HomePage/HomePage';
import PageNotFound from './Components/PageNotFound';


function App() {
 
  
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
    <Routes>
   
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegistrationPage></RegistrationPage>}></Route>
      <Route path="/challenges" element={<ChallengesPage></ChallengesPage>}></Route>
      <Route path="/users" element={<UserPage></UserPage>}></Route>
      <Route path="/scoreboard" element={<ScoreBoardpage></ScoreBoardpage>}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </BrowserRouter>

    
   
   
    </div>
  );
}

export default App;
