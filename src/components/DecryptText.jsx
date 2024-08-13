function DecryptText() {
  return (
    <>
      <div>
        <ul className="pl-1 text-2xl">
          <li>
            {" "}
            Ciphertext:{" "}
            <span className="font-mono">
              <strong>17</strong>
            </span>
          </li>
          <li>
            {" "}
            Public Key:{" "}
            <span className="font-mono">
              <strong>55</strong>
            </span>
          </li>
          <li>
            {" "}
            Public Key:{" "}
            <span className="font-mono">
              <strong>03</strong>
            </span>
          </li>
          <br />
          <li>
            {" "}
            Original Text:{" "}
            <span className="font-mono">
              <strong>08</strong>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DecryptText;
