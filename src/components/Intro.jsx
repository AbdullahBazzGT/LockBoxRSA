function Intro() {
  return (
    <p className="text-center px-3 text-xl">
      RSA Encryption is a simple encryption technique that utilizes the
      properties of prime numbers! In RSA, there is a public encryption key.
      Anyone can access this encryption key, 'N' (where N is just the product of
      two primes). Decrypting, however, requires you to know the two primes that
      make up 'N'. In practicality, you would use two very large primes
      (hundreds of digits each) making it impossible to break 'N' up into the
      two primes. Thats all there is too it! You can look below to see how to
      encrypt, decrypt, and even create your own key using RSA!
    </p>
  );
}

export default Intro;
