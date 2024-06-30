import React, { useState } from "react";

function Encryptor() {
  const [message, setMessage] = useState("");
  const [prime1, setPrime1] = useState("");
  const [prime2, setPrime2] = useState("");
  const [publicExponent, setPublicExponent] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handlePrime1Change = (event) => {
    setPrime1(event.target.value);
  };

  const handlePrime2Change = (event) => {
    setPrime2(event.target.value);
  };

  const handlePublicExponentChange = (event) => {
    setPublicExponent(event.target.value);
  };

  return (
    <>
      <div className="px-10 bg-[#003057] text-white rounded-lg my-6 mx-3">
        <h1 className="font-mono mb-8 text-center pt-6">Encryptor</h1>
        <form className="flex flex-col text-xl font-mono">
          <label> Message (M):</label>
          <input
            className="mb-10 mt-3 text-black px-3"
            value={message}
            onChange={handleMessageChange}
          />
          <label> Prime 1 (p):</label>
          <input
            className="mb-10 mt-3 text-black px-3"
            value={prime1}
            onChange={handlePrime1Change}
          />
          <label> Prime 2 (q):</label>
          <input
            className="mb-10 mt-3 text-black px-3"
            value={prime2}
            onChange={handlePrime2Change}
          />
          <label> Public Exponent (e):</label>
          <input
            className="mb-10 mt-3 text-black px-3"
            value={publicExponent}
            onChange={handlePublicExponentChange}
          />
        </form>
        <hr />
        <p className="font-mono mb-4 py-6 text-xl">
          Ciphertext: {prime1 + prime2}
        </p>
      </div>
    </>
  );
}

export default Encryptor;
