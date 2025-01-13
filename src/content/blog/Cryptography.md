---
title: "Cryptography: A Comprehensive Cryptosystem Implementation"
description: "A C++ project to develop a cryptography system inspired by PGP, integrating symmetric and asymmetric algorithms."
pubDate: 'Jun 11 2023'
heroImage: "../img/cryptography.webp"
---

## Cryptography: A Comprehensive Cryptosystem Implementation

<div style="margin-bottom: 50px;">
  <img src="/img/cryptography.webp" alt="Weather App Image">
</div>

In this project, I developed a complete cryptosystem named **Cryptography**, designed to secure data exchanges using advanced cryptographic techniques. Inspired by the well-known PGP (Pretty Good Privacy) protocol, this project required mastery of symmetric and asymmetric encryption algorithms, as well as handling prime numbers and data conversions.

### Project Objectives

The main goal was to create a robust encryption and decryption tool that could:<br>
\- **Secure messages** using advanced algorithms like RSA and AES.<br>
\- **Support multiple modes**: stream mode and block mode.<br>
\- **Combine symmetric and asymmetric methods** for practical cryptographic applications.<br><br>

### Project Features

1\. **Programming Language**: Fully developed in **C++**.<br><br>
2\. **Compilation**: Utilized a **Makefile** with `re`, `clean`, and `fclean` rules.<br><br>
3\. **Cryptographic Algorithms**:<br>
&nbsp;&nbsp;   \- **Symmetric**: XOR and AES (128-bit).<br>
&nbsp;&nbsp;   \- **Asymmetric**: RSA with public and private key generation.<br><br>
4\. **Operating Modes**:<br>
&nbsp;&nbsp;   \- **Block Mode**: Processes data in fixed-size blocks (equal to the key size).<br>
&nbsp;&nbsp;   \- **Stream Mode**: Encrypts and decrypts data streams of variable length.<br><br>

### Technical Details

#### **Symmetric Encryption**<br>
\- **XOR**: Implemented a simple algorithm to encrypt a message by applying a XOR operation with a key.<br>
\- **AES (128-bit)**: Used a more robust and performant method for securing data.<br><br>

#### **Asymmetric Encryption**<br>
\- **RSA**: Generated public and private key pairs from prime numbers.<br>
&nbsp;&nbsp;  \- Calculated the `e` and `d` exponents using Euler’s totient function.<br>
&nbsp;&nbsp;  \- Supported data as little-endian numbers.<br><br>

#### **Combining Symmetric and Asymmetric Cryptography (PGP)**<br>
\- Generated a random symmetric key.<br>
\- Encrypted the message with the symmetric key.<br>
\- Encrypted the symmetric key with the RSA public key.<br><br>

### Key Learnings<br>

\- **Cryptography**:<br>
&nbsp;&nbsp;  \- Mastered symmetric algorithms (XOR, AES) and asymmetric algorithms (RSA).<br>
&nbsp;&nbsp;  \- Gained a strong understanding of underlying mathematical concepts (prime numbers, Euler’s totient, little-endian).<br><br>

\- **Performance Optimization**:<br>
&nbsp;&nbsp;  \- Efficiently handled data in stream and block modes.<br>
&nbsp;&nbsp;  \- Reduced errors with clear error messaging and consistent exit codes (`84` for errors).<br><br>

\- **Modular Development**:<br>
&nbsp;&nbsp;  \- Organized the codebase to enable easy expansion (e.g., support for AES 192/256-bit keys, digital signatures).<br><br>

### Results

The **Cryptography** project resulted in a fully functional tool capable of:<br>
\- Encrypting and decrypting messages using advanced techniques.<br>
\- Generating RSA key pairs to secure communications without a shared initial key.<br>
\- Providing a robust experience with an intuitive command-line interface.<br><br>

---

### Conclusion

The **Cryptography** project highlights my skills in **cryptography**, **C++ development**, and **secure system design**. It stands as a significant addition to my portfolio, showcasing my ability to solve complex problems and implement high-performance solutions.