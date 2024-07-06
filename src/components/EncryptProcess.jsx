import React, { Fragment } from "react";

function EncryptProcess() {
  return (
    <>
      <h3 className="pl-6 pt-6 pb-3 text-5xl">How do we encrypt?</h3>
      <ol className="list-decimal list-inside text-left space-y-2 text-2xl pr-6 text-pretty">
        <li>
          Select any two large prime numbers, <em>p</em> and <em>q</em>.
        </li>
        <li>
          Compute <strong>N = p * q</strong>, where <strong>N</strong> is used
          as the modulus for both the public and private keys.
        </li>
        <li>
          Compute the totient function, <strong>&phi;(N) = (p-1)(q-1)</strong>.
        </li>
        <li>
          Choose an integer <strong>e</strong> such that <strong>e</strong> is
          any integer that is positive and coprime with{" "}
          <strong>&phi;(N)</strong>. The integer <strong>e</strong> is the
          public key exponent.
        </li>
        <li>
          The public key is <strong>(N, e)</strong>. Anyone can see these two
          values but no one knows what two integers make up <strong>N</strong>.
        </li>
        <li>
          To encrypt a message <strong>M</strong>, compute the ciphertext{" "}
          <strong>
            C ≡ M<sup>e</sup> (mod N)
          </strong>
          .
        </li>
        <li>
          <strong>C</strong>, is the final encrypted message.
        </li>
      </ol>
    </>
  );
}

export default EncryptProcess;
