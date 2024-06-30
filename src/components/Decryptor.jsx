function Decryptor() {
  return (
    <>
      <div className="px-10 bg-[#B3A369] text-white rounded-lg my-6 mx-3">
        <h1 className="font-mono mb-8 text-center pt-6">Decryptor</h1>
        <form className="flex flex-col text-xl font-mono">
          <label> Ciphertext (C):</label>
          <input className="mb-10 mt-3 text-black px-3" />
          <label> Public Key (p * q):</label>
          <input className="mb-10 mt-3 text-black px-3" />
          <label> Decryption Exponent (d):</label>
          <input className="mb-10 mt-3 text-black px-3" />
        </form>
        <hr />
        <p className="font-mono mb-4 py-6 text-xl">Original Message:</p>
      </div>
    </>
  );
}

export default Decryptor;
