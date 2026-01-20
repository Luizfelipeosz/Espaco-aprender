import "./home.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Services />

      <a
        className="whatsapp"
        href="https://wa.me/5579999021810"
        target="_blank"
        rel="noreferrer"
      >
        💬 WhatsApp
      </a>

      <Footer />
    </>
  );
}

export default App;
