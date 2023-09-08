import Navbar from "./Navbar";
import MDBFooter from "./Footer";
import "../../App.css";
import Content from "./Content";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <Content />
      <MDBFooter />
    </div>
  );
}
