import { useState } from "react";

function Decryptor() {
  // All for calculating d
  const [prime1, setPrime1] = useState(0);
  const [prime2, setPrime2] = useState(0);
  const [publicExponent, setPublicExponent] = useState(0);

  // All for decrypting message
  const [ciphertext, setCiphertext] = useState(0);
  const [privateExponent, setPrivateExponent] = useState(0);
  const [publicKey, setPublicKey] = useState(0);

  // Handle Changes
  function handleCiphertextChange(event) {
    setCiphertext(event.target.value);
  }

  function handlePublicKeyChange(event) {
    let N = parseInt(event.target.value, 10);
    let p1 = smallestDivisor(N);
    let p2 = N / p1;
    setPrime1(p1);
    setPrime2(p2);
    setPublicKey(N);
  }

  function handlePublicExponentChange(event) {
    let e = parseInt(event.target.value);
    let N = prime1 * prime2;
    setPublicExponent(e);
    setPrivateExponent(calculateD(N, e));
  }

  // Set final text
  function updateFinalMessage() {
    if (ciphertext && privateExponent && publicKey) {
      return modExp(parseInt(ciphertext, 10), privateExponent, publicKey);
    }
    return "";
  }

  // Helper methods
  function smallestDivisor(num) {
    if (num < 2) {
      return NaN;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return i;
      }
    }

    return num;
  }

  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  function modInverse(e, phi) {
    let m0 = phi,
      t,
      q;
    let x0 = 0,
      x1 = 1;

    if (phi === 1) {
      return 0;
    }

    while (e > 1) {
      q = Math.floor(e / phi);
      t = phi;

      phi = e % phi;
      e = t;
      t = x0;

      x0 = x1 - q * x0;
      x1 = t;
    }

    if (x1 < 0) {
      x1 += m0;
    }

    return x1;
  }

  function calculateD(N, e) {
    let p = prime1;
    let q = prime2;

    let phi = (p - 1) * (q - 1);

    let d = modInverse(e, phi);

    return d;
  }

  function modExp(base, exp, mod) {
    if (mod === 1) return 0;
    let result = 1;
    base = base % mod;
    while (exp > 0) {
      if (exp % 2 === 1) result = (result * base) % mod;
      exp = exp >> 1;
      base = (base * base) % mod;
    }
    return result;
  }

  return (
    <>
      <div className="px-10 bg-[#B3A369] text-white rounded-lg my-6 mx-3">
        <h1 className="font-mono mb-8 text-center pt-6">Decryptor</h1>
        <form className="flex flex-col text-xl font-mono">
          <label> Ciphertext (C):</label>
          <input
            className="mb-10 mt-3 text-black px-3"
            placeholder="Encrypted Message as Integer"
            onChange={handleCiphertextChange}
          />
          <label> Public Key (N):</label>
          <input
            className="mb-10 mt-3 text-black px-3"
            placeholder="Prime 1 * Prime 2"
            onChange={handlePublicKeyChange}
          />
          <label> Public Exponent (e):</label>
          <input
            className="mb-10 mt-3 text-black px-3"
            placeholder="Given Public Exponent"
            onChange={handlePublicExponentChange}
          />
        </form>
        <hr />
        <p className="font-mono mb-4 py-6 text-xl">
          Original Message: {updateFinalMessage()}
        </p>
      </div>
    </>
  );
}

export default Decryptor;
