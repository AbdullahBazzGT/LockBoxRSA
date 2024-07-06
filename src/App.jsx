import Dropdown from "./components/Dropdown";
import DecryptProcess from "./components/DecryptProcess";
import EncryptProcess from "./components/EncryptProcess";
import EncryptText from "./components/EncryptText";
import DecryptText from "./components/DecryptText";
import Encryptor from "./components/Encryptor";
import Decryptor from "./components/Decryptor";

function App() {
  return (
    <>
      <div className="Georgia Tech Header bg-[#003057] text-white shadow-lg">
        {" "}
        <p className="pl-6 py-4 text-balance text-7xl">
          RSA cryptology as{" "}
          <span className="block">
            taught by
            <span className="text-[#B3A369]"> Georgia Tech</span>
          </span>
        </p>
      </div>{" "}
      {/* END OF GT HEADER */}
      <div className="bg-white text-black py-6 mx-6 rounded-lg shadow-lg">
        <h3 className="pl-6 pt-10 pb-3 text-5xl">What is RSA cryptology?</h3>
        <p className="px-6 text-2xl">
          {" "}
          RSA Encryption is a simple encryption technique that utilizes the
          properties of prime numbers! In RSA, there is a public encryption key.
          Anyone can access this encryption key, 'N' (where N is just the
          product of two primes). Decrypting, however, requires you to know the
          two primes that make up 'N'. In practicality, you would use two very
          large primes (hundreds of digits each) making it impossible to break
          'N' up into the two primes. Thats all there is too it! You can look
          below to see how to encrypt, decrypt, and even create your own key
          using RSA!
          <br />
          <br />
          <h4 className="text-center mt-4 pb-2"> The RSA Process:</h4>
          <img
            alt="RSA Process Image"
            className="border-1 border-gray-300 m-auto"
            src="src/images/RSAProcess.png"
          ></img>
        </p>
      </div>
      <div className="flex">
        <div className="bg-white text-black py-6 mx-3 rounded-lg shadow-lg my-6 w-1/2">
          <EncryptProcess />
          <Dropdown children={<EncryptText />} />
        </div>
        <div className="w-1/2">
          <Encryptor />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <Decryptor />
        </div>
        <div className="bg-white text-black py-6 mx-3 rounded-lg shadow-lg my-6 w-1/2">
          <DecryptProcess />
          <Dropdown children={<DecryptText />} />
        </div>
      </div>
      <div className="footer bg-[#003057] h-[20vh] mt-28 flex items-center justify-center">
        <p className="text-[#dfcb83] text-xl mb-0">
          © Copyright{" "}
          <a
            href="https://github.com/AbdullahBazzGT"
            target="_blank"
            title="My github!"
            className="text-[#dfcb83] hover:opacity-70"
          >
            Abdullah Bazz
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
