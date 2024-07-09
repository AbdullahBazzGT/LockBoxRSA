import React, { Fragment } from "react";

function DecryptProcess() {
  return (
    <>
      <h2 className="pl-6 pt-6 pb-3 text-2xl sm:text-3xl md:text-5xl">
        How do we decrypt?
      </h2>
      <ol className="list-decimal list-inside text-left space-y-2 pr-6 text-pretty text-lg sm:text-xl md:text-2xl">
        <li>
          Retrieve the ciphertext <strong>C</strong> that was previously
          encrypted using the public key.
        </li>
        <li>
          You will use the private key <strong>(N, d)</strong> to decrypt the
          ciphertext.
        </li>
        <li>
          {" "}
          To find <strong>d</strong> solve for the following equation:
          <strong>
            {" "}
            d = e<sup>-1</sup> (mod &phi;(N))
          </strong>
          .
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
      </ol>
    </>
  );
}

export default DecryptProcess;
