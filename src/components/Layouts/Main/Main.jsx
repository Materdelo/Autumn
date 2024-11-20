import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

export default function Main({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
