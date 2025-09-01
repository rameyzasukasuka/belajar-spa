import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [page, setPage] = useState("home");

  const stacks = [
    { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ];

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      {/* Navbar */}
      <nav className="navbar">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("contact")}>Contact</button>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Halaman Home */}
      {page === "home" && (
        <>
          <section className="bio">
            <h1>Selamat Datang di Website Rameyza</h1>
            <img src="/rrr.jpg" alt="Foto rameyza" className="profil" />
            <p>Perkenalkan nama saya <b>Rameyza Abrar Athailah</b></p>
            <p>Kalian bisa panggil aku <b>Reza</b></p>
            <p>Keterampilan: pencak silat</p>
            <p>Bahasa: Indonesia</p>
            <p>Project saat ini: menurunkan berat badan</p>
            <p>Hobi: berenang</p>
            <p>Genre favorit: horor</p>
            <p>Hal yang ingin dipelajari: desain</p>
            <p>Hal yang tidak disukai: tikus</p>
            <p>Warna favorit: biru</p>
          </section>

          <section className="stack">
            <h2>Bahasa Pemrograman / Stack yang Pernah Dipelajari</h2>
            <p>
              Dikarenakan aku ini bersekolah di SMK Negeri 8 Malang dan masuk di jurusan RPL
              (Rekayasa Perangkat Lunak), jadi aku haruslah belajar yang namanya bahasa pemrograman.
              Nah ada banyak sekali bahasa pemrograman / stack yang sudah pernah aku pelajari,
              seperti dibawah ini iya.
            </p>
            <div className="grid">
              {stacks.map((stack, i) => (
                <div key={i} className="card">
                  <img src={stack.icon} alt={stack.name} />
                  <span>{stack.name}</span>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Halaman Contact */}
      {page === "contact" && (
        <section className="contact">
          <h2>Connect with me</h2>
          <h3>Get in touch</h3>
          <p>
            I'd love to hear from you! If you have any questions, comments, or feedback,
            please use the form below.
          </p>

          <form className="contact-form">
            <div className="row">
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter your email" required />
            </div>
            <textarea placeholder="Enter your message" required></textarea>
            <button type="submit">Submit now →</button>
          </form>
        </section>
      )}
    </div>
  );
}

export default App;
