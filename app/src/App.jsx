import React, { useState } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import Header from './components/Header/Header';
import Variantspage from './components/pages/Variantspage/Variantspage';
import Homepage from './components/pages/Homepage/Homepage';
import Theorypage from './components/pages/Theorypage/Theorypage';
import Exercisepage from './components/pages/Exercisepage/Exercisepage';
import Loginpage from './components/pages/Loginpage/Loginpage';
import Scorm from './scorm';

function App() {
  const location = useLocation();
	let isLogin = false
	let surname = '';
	let name = '';
	let patronimic = '';
	let variant = '';

  if (location.state) {
		isLogin = true;
		surname = location.state.from[0];
		name = location.state.from[1];
		patronimic = location.state.from[2];
		variant = location.state.from[3];
	}

  Scorm.init();

  return (
    <>
      <Header isLogin={isLogin} surname={surname} name={name}/>
      <main className="main">
        <Routes>
          <Route path="/*" element={<Homepage />} />
          <Route path="/auth" element={<Loginpage />} />
          <Route path="/theory" element={<Theorypage />} />
          <Route path="/exercises" element={<Variantspage surname={surname} name={name} patronymic={patronimic} variant={variant}/>} />
          <Route path="/exercise" element={<Exercisepage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
