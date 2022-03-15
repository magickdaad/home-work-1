import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PersonalInfoForms from './component/forms/PersonalInfoForms.jsx';
import AddressForm from './component/forms/AddressForm';
import Result from './component/Result'

function App() {
  const [filds, setFilds] = useState({});
  const navigate = useNavigate();
  const nextStep = (namePage) => {
    navigate(namePage);
  };

  console.log(filds);

  // useEffect(()=>{
  //   console.log(filds);
  // },[filds])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PersonalInfoForms nextStep={nextStep} setFilds={setFilds} />} />
        <Route path="/address" element={<AddressForm nextStep={nextStep} setFilds={setFilds} />} />
        <Route path="/result" element={<Result formFilds={filds} />} />
      </Routes>
    </div>
  );
}

export default App;
