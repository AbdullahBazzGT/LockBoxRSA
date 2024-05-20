import React from "react";
import Dropdown from "./Dropdown"; // Adjust the import path as necessary

function EncryptExample() {
  return (
    <Dropdown title="Encryption Example">
      <ol className="list-decimal list-inside space-y-2">
        <li>
          Select two large prime numbers, <em>p</em> and <em>q</em>.
        </li>
        <li>
          Compute <strong>N = p * q</strong>, where <strong>N</strong> is used
          as the modulus for both the public and private keys.
        </li>
        <li>
          Compute the totient function, <strong>&phi;(N) = (p-1)(q-1)</strong>.
        </li>
        <li>
          Choose an integer <strong>e</strong> such that{" "}
          <strong>1 &lt; e &lt; &phi;(N)</strong> and <strong>e</strong> is
          coprime with <strong>&phi;(N)</strong>. The integer <strong>e</strong>{" "}
          is the public key exponent.
        </li>
        <li>
          Determine <strong>d</strong> as{" "}
          <strong>
            d ≡ e<sup>-1</sup> (mod &phi;(N))
          </strong>
          , which is the modular multiplicative inverse of <strong>e</strong>{" "}
          modulo <strong>&phi;(N)</strong>. The integer <strong>d</strong> is
          the private key exponent.
        </li>
        <li>
          The public key is <strong>(e, N)</strong> and the private key is{" "}
          <strong>(d, N)</strong>.
        </li>
        <li>
          To encrypt a message <strong>M</strong>, compute the ciphertext{" "}
          <strong>
            C ≡ M<sup>e</sup> (mod N)
          </strong>
          .
        </li>
        <li>
          To decrypt the ciphertext <strong>C</strong>, compute the original
          message{" "}
          <strong>
            M ≡ C<sup>d</sup> (mod N)
          </strong>
          .
        </li>
      </ol>
    </Dropdown>
  );
}

export default EncryptExample;
