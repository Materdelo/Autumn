import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

export default function Main({ children }) {
  return (
    <>
      <Header />
      <main style={{ maxWidth: "2140px", width: "100%", margin: "0 auto" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
