import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";

export default function Layout({ children }) {
  return (
    <section>
        <Menu></Menu>
        {children}
        <Footer></Footer>
    </section>
  );
}
