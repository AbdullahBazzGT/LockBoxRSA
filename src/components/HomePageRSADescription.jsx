function HomePageRSADescription() {
  return (
    <div className="text-center p-12">
      <p>
        RSA Encryption is a simple encryption technique that uses the properties
        of prime numbers! In RSA, there is a public encryption key. Anyone can
        access this encryption key, 'N', which is just the product of two
        primes. Decrypting, however, requires you to know the two primes that
        make up 'N'.In practicallity, you would use two very very long primes
        making it impossible to break 'N' up into the two primes. Thats all
        there is too it!
      </p>
    </div>
  );
}

export default HomePageRSADescription;
