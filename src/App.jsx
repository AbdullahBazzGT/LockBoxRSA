import Header from "./components/Header";
import Intro from "./components/Intro";
import EncryptProcess from "./components/EncryptProcess";
import DecryptProcess from "./components/DecryptProcess";
import EncryptExample from "./components/EncryptExample";
import DecryptExample from "./components/DecryptExample";

function App() {
  return (
    <>
      <div className="font-mono bg-gradient-to-r from-Black to-Blue600 text-Gray100">
        <Header />
        <Intro />
        <br />
        <hr noshade />
        <br />
        <div className="flex justify-items-center">
          <EncryptProcess />
          <DecryptProcess />
        </div>
        <div className="flex justify-items-center">
          <EncryptExample />
          <DecryptExample />
        </div>
      </div>
    </>
  );
}

export default App;
