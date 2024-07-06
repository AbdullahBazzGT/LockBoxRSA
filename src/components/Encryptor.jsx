import React, { useState } from "react";

// Syntax Errors
function stringToHash(string) {
  let hash = 0;

  if (string.length === 0) return hash;

  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash;
}

function Encryptor() {
  const [message, setMessage] = useState(0);
  const [prime1, setPrime1] = useState(0);
  const [prime2, setPrime2] = useState(0);
  const [publicExponent, setPublicExponent] = useState(0);
  // const [value, setValue] = useState(0); // changes to "value" via "setValue" WILL update DOM

  // when message inputBox changes: state needs to be set
  const handleMessageChange = (event) => {
    // if you used "message", you'd be referencing the previous value of the state
    const inputBoxValue = event.target.value; // referencing the value of inputBox on the screen
    let value = inputBoxValue;
    setMessage(value); // updates "message", which is scoped to component
  };

  const handlePrime1Change = (event) => {
    setPrime1(event.target.value);
  };

  const handlePrime2Change = (event) => {
    setPrime2(event.target.value);
  };

  const handlePublicExponentChange = (event) => {
    let p = prime1;
    let q = prime2;
    let totient = (p - 1) * (q - 1);
    let e = event.target.value;
    if (areCoprime(e, totient)) {
      setPublicExponent(event.target.value);
    }
  };

  const CipherTextOutput = () => {
    const m = parseInt(message);
    const e = parseInt(publicExponent);
    const p = parseInt(prime1);
    const q = parseInt(prime2);

    if (isNaN(m) || isNaN(e) || isNaN(p) || isNaN(q)) {
      return "";
    }

    if (!message || !publicExponent || !prime1 || !prime2) {
      return "";
    }

    const n = p * q;
    return rsaEncrypt(m, e, n);
  };

  function rsaEncrypt(message, e, n) {
    message = BigInt(message);
    e = BigInt(e);
    n = BigInt(n);

    let encryptedMessage = message ** e % n;

    return encryptedMessage.toString(); // Return as string for convenience
  }

  function areCoprime(a, b) {
    function gcd(x, y) {
      while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
      }
      return x;
    }
    return gcd(a, b) === 1;
  }

  return (
    <>
      <div className="px-10 bg-[#003057] text-white rounded-lg my-6 mx-3">
        <h1 className="font-mono mb-8 text-center pt-6">Encryptor</h1>
        <form className="flex flex-col text-xl font-mono">
          <label> Message (M):</label>
          <input
            className="mb-10 mt-3 text-black px-3"
            placeholder="Text or Integer"
            onChange={handleMessageChange}
          />
          <label> Prime 1 (p):</label>
          <input
            className="mb-10 mt-3 text-black px-3"
            onChange={handlePrime1Change}
          />
          <label> Prime 2 (q):</label>
          <input
            className="mb-10 mt-3 text-black px-3"
            onChange={handlePrime2Change}
          />
          <label> Public Exponent (e):</label>
          <input
            className="mb-10 mt-3 text-black px-3"
            onChange={handlePublicExponentChange}
          />
        </form>
        <hr />
        <p className="font-mono mb-4 py-6 text-xl">
          Ciphertext: {CipherTextOutput()}
        </p>
      </div>
    </>
  );
}

export default Encryptor;
