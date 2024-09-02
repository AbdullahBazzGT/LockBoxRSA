import Dropdown from "./components/Dropdown";
import DecryptProcess from "./components/DecryptProcess";
import EncryptProcess from "./components/EncryptProcess";
import EncryptText from "./components/EncryptText";
import DecryptText from "./components/DecryptText";
import Encryptor from "./components/Encryptor";
import Decryptor from "./components/Decryptor";
import rsaProcessImage from "./images/RSAProcess.png";
import ReactGA from "react-ga4";

ReactGA.initialize("G-31NXFEC27G"); // Replace with your GA4 Measurement ID

ReactGA.send("pageview"); // To track the initial pageview

function App() {
  return (
    <>
      <div className="Georgia Tech Header bg-[#003057] text-white shadow-lg w-full">
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
        <h3 className="px-6 pt-10 pb-3 text-5xl text-center">
          What is RSA cryptology?
        </h3>
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
          <p className="text-center">
            Plaintext --{">"} Public Key --{">"} Ciphertext --{">"} Private Key
            --{">"} Plaintext
          </p>
        </p>
      </div>
      <div className="rounded-lg shadow-lg m-6 bg-[#ff8383]">
        <h4 className="text-center p-4">
          {" "}
          <strong>Possible RSA Restriction - Block Size</strong>
        </h4>
        <p className="px-6 pb-10 text-2xl">
          Block size refers to the size of the data block that can be encrypted
          using the RSA algorithm. RSA operates on blocks of data that are
          <strong> smaller </strong> than the key size. For instance, if you
          have a 2048-bit RSA key, the maximum size of data you can encrypt in
          one block is slightly less than 2048 bits. Basically the message can
          never be bigger than the public key!
        </p>
      </div>
      <div className=" ServiceBox flex flex-col sm:flex-row">
        <div className="bg-white text-black py-6 my-3 mx-6 rounded-lg shadow-lg w-full max-w-[59vh] md:max-w-full md:w-1/2">
          <EncryptProcess />
          <Dropdown children={<EncryptText />} />
        </div>
        <div className="w-full sm:w-1/2">
          <Encryptor />
        </div>
      </div>
      <div className="ServiceBox flex flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-1/2">
          <Decryptor />
        </div>
        <div className="bg-white text-black py-6 my-3 mx-6 rounded-lg shadow-lg w-full max-w-[59vh] md:max-w-full md:w-1/2">
          <DecryptProcess />
          <Dropdown children={<DecryptText />} />
        </div>
      </div>
      <div className="footer bg-[#003057] h-[20vh] w-full mr-0 pr-0 mt-16 flex items-center justify-center">
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
