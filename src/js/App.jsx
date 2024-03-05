import React from "react";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Body/Main.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Main />
      </main>
      <Footer />
    </>
  );
}
