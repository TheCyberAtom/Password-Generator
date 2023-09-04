import React, { useState } from 'react';
import './App.css';
import PasswordGenerator from './components/PasswordGenerator';
import PasswordDisplay from './components/PasswordDisplay';

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('');

  return (
    <div className="app">
      <h1>Password Generator App</h1>
      <PasswordDisplay password={generatedPassword} />
      <PasswordGenerator setGeneratedPassword={setGeneratedPassword} />
    </div>
  );
}

export default App;
