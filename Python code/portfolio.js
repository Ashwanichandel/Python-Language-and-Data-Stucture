import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <header className="bg-green-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">A. Ashwani Chandel</h1>
        <p>Java Full Stack Developer | Ethical Hacker | Flutter Developer</p>
      </header>

      <nav className="bg-gray-800 text-white flex justify-center space-x-6 p-4">
        {['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((section) => (
          <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-green-400">
            {section}
          </a>
        ))}
      </nav>

      <main className="max-w-4xl mx-auto p-4 space-y-10">
        <section id="about">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2">I’m a Full Stack Java Developer currently working at Portl. Passionate about building secure, scalable applications with Java, Spring Boot, React.js, and Flutter. Also certified in CEH and deeply interested in cybersecurity.</p>
        </section>

        <section id="skills">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Java, Spring Boot, REST APIs</li>
            <li>React.js, HTML, CSS, JavaScript</li>
            <li>Flutter, Dart</li>
            <li>SQL, JDBC, Servlets</li>
            <li>Cybersecurity, CEH Certified</li>
            <li>ServiceNow (Learning)</li>
          </ul>
        </section>

        <section id="projects">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Student Management System</strong> – Biometric attendance system using React.js + Spring Boot.</li>
            <li><strong>Mini Banking Application</strong> – Java + JDBC + Servlets with secure fund management.</li>
            <li><strong>Flutter Projects</strong> – Multiple cross-platform apps using Dart and Firebase.</li>
          </ul>
        </section>

        <section id="experience">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p className="mt-2"><strong>Software Engineer – Portl (Feb 2025 - Present)</strong><br/>Working on Java development projects, API integration, and backend logic implementation.</p>
          <p className="mt-2"><strong>Laser Operator – Electro Equipment (2024)</strong><br/>Hands-on technical role before joining Portl.</p>
        </section>

        <section id="certifications">
          <h2 className="text-2xl font-semibold">Certifications & Workshops</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Certified Ethical Hacker (CEH) – Craw Security</li>
            <li>Security Workshop – Craw Security (2 Days)</li>
            <li>Design Patterns in Java – Scaler Workshop</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2">Email: your-email@example.com</p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>LinkedIn: <a href="#" className="text-blue-600 hover:underline">linkedin.com/in/ashwanichandel</a></p>
          <p>GitHub: <a href="#" className="text-blue-600 hover:underline">github.com/yourgithub</a></p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p>&copy; 2025 A. Ashwani Chandel | All rights reserved.</p>
      </footer>
    </div>
  );
}
