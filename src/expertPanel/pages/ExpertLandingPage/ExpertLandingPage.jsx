import Navbar from "../../layout/Navbar/Navbar";
import Cards from "../../components/LandingPageCards/LandingPageCards";
import Footer from "../../layout/Footer/Footer";
function ExpertLandingPage() {
  return (
    <div className="bg-[#EAE1E1] h-screen py-4">
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
}

export default ExpertLandingPage;
