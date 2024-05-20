import React from "react";
import Dropdown from "./Dropdown"; // Adjust the import path as necessary

function DecryptExample() {
  return (
    <Dropdown title="Decryption Example">
      <ol className="list-decimal list-inside space-y-2">
        <li>
          Retrieve the ciphertext <strong>C</strong> that was previously
          encrypted using the public key.
        </li>
        <li>
          Use the private key <strong>(d, N)</strong> to decrypt the ciphertext.
        </li>
        <li>
          Compute the original message{" "}
          <strong>
            M ≡ C<sup>d</sup> (mod N)
          </strong>
          .
        </li>
        <li>
          The original message <strong>M</strong> is now obtained.
        </li>
        {/* Add more steps as needed */}
      </ol>
    </Dropdown>
  );
}

export default DecryptExample;
