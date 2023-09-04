import React, { useState } from "react";

const PasswordGenerator = ({ setGeneratedPassword }) => {
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(12); // Default length is 12

  const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    specialSymbols: "!@#$%^&*()_+[]{}|;:,.<>?",
  };

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";

    if (includeUppercase) {
      charset += characters.uppercase;
      newPassword += characters.uppercase.charAt(
        Math.floor(Math.random() * characters.uppercase.length)
      );
    }
    if (includeLowercase) {
      charset += characters.lowercase;
      newPassword += characters.lowercase.charAt(
        Math.floor(Math.random() * characters.lowercase.length)
      );
    }
    if (includeNumbers) {
      charset += characters.numbers;
      newPassword += characters.numbers.charAt(
        Math.floor(Math.random() * characters.numbers.length)
      );
    }
    if (includeSpecialSymbols) {
      charset += characters.specialSymbols;
      newPassword += characters.specialSymbols.charAt(
        Math.floor(Math.random() * characters.specialSymbols.length)
      );
    }

    if (charset.length === 0) {
      setGeneratedPassword("Please select at least one character type.");
      return;
    }

    // Generate the remaining characters of the password
    for (let i = newPassword.length; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset.charAt(randomIndex);
    }

    setGeneratedPassword(newPassword);
  };

  const handleLengthChange = (event) => {
    const length = parseInt(event.target.value);
    if (length >= 5 && length <= 30) {
      setPasswordLength(length);
    }
  };

  return (
    <div className="password-generator">
      <h2>Select Password Options</h2>
      <label>
        <input
          type="number"
          value={passwordLength}
          onChange={handleLengthChange}
          min="6"
          max="26"
        />
        Password Length:
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
        Include Uppercase Letters
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
        Inlude Lowercase Letters
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeSpecialSymbols}
          onChange={() => setIncludeSpecialSymbols(!includeSpecialSymbols)}
        />
        Include Special Symbols
      </label>
      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        Include Numbers
      </label>
      <div className="pass_generate">
        <button onClick={generatePassword}>Generate Password</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
