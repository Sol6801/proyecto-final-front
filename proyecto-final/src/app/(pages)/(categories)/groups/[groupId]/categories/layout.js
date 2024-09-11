import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function CategoryLayout ({ children }) {
return (
  <>
  <Navbar/>
  {children}
  <Footer/>
  </>
);

}