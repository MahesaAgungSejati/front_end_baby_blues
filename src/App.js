import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Beranda } from './Pages/Beranda';
import { LoginSignUp } from './Pages/LoginSignUp';
import { Rubrik } from './Pages/Rubrik';
import { Forum } from './Pages/Forum';
import { Terapis } from './Pages/Terapis';
import { SOS } from './Pages/SOS';
import QuizForm from './Components/QuizForm/QuizForm';
import QuizForm_2 from './Components/QuizForm_2/QuizForm_2';
import PilihanQuiz from './Components/PilihanQuiz/PilihanQuiz';
import HasilQuiz from './Components/QuizForm/HasilQuiz';
import HasilQuiz_2 from './Components/QuizForm_2/HasilQuiz_2';

import React from 'react';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='/konsul' element={<Terapis category="konsultasi online" />} />
          <Route path='/forums' element={<Forum category="forum diskusi ibu" />} />
          <Route path='/rubriks' element={<Rubrik category="rubriks mom" />} />
          <Route path='/SOSS' element={<SOS category="sos" />} />
          <Route path='/terapis' element={<Terapis />}>
            <Route path=':terapisId' element={<Terapis />} />
          </Route>
          <Route path='/QuizForm' element={<QuizForm />} />
          <Route path='/QuizForm_2' element={<QuizForm_2 />} />
          <Route path='/PilihanQuiz' element={<PilihanQuiz />} />
          <Route path='/HasilQuiz' element={<HasilQuiz />} />
          <Route path='/HasilQuiz_2' element={<HasilQuiz_2 />} />
          <Route path='/login' element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
