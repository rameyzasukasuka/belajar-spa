import React from "react";
import "./App.css";

function App() {
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
    <div className="app">
      {/* Bagian Biodata */}
      <section className="bio">
        <h1>Selamat Datang di Website Rameyza</h1>
        <img src="/src/assets/rrr.jpg" alt="Foto rameyza" className="profil" />
        <p>Perkenalkan nama saya <b>Rameyza Abrar Athailah</b></p>
        <p>Kalian bisa panggil aku <b>Reza</b></p>
        <p>Keterampilan yang saya miliki adalah di bidang olahraga, yaitu di pencak silat</p>
        <p>Bahasa yang saya kuasai saat ini adalah bahasa Indonesia</p>
        <p>Project yang sekarang saya lakukan adalah menurunkan berat badan</p>
        <p>Alasan saya memilih RPL adalah untuk mempelajari beberapa program di jurusan RPL</p>
        <p>Hobi saya adalah berenang</p>
        <p>Genre kesukaan saya saat ini adalah horor</p>
        <p>Hal yang ingin saya pelajari adalah desain</p>
        <p>Hal yang saya tidak suka adalah hewan tikus</p>
        <p>Warna yang saya sukai adalah biru</p>
      </section>

      {/* Bagian Stack */}
      <section className="stack">
        <h2>Bahasa Pemrograman / Stack yang Pernah dipelajari</h2>
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
    </div>
  );
}

export default App;
