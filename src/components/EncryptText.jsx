function EncryptText() {
  return (
    <>
      <div>
        <ul className="pl-1 text-2xl">
          <li>
            {" "}
            Message to Encrypt:{" "}
            <span className="font-mono">
              <strong>08</strong>
            </span>
          </li>
          <li>
            {" "}
            Prime One:{" "}
            <span className="font-mono">
              <strong>05</strong>
            </span>
          </li>
          <li>
            {" "}
            Prime Two:{" "}
            <span className="font-mono">
              <strong>11</strong>
            </span>
          </li>
          <li>
            {" "}
            Public Exponent:{" "}
            <span className="font-mono">
              <strong>03</strong>
            </span>
          </li>
          <br />
          <li>
            Decrypted Message:{" "}
            <span className="font-mono">
              <strong>17</strong>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default EncryptText;
