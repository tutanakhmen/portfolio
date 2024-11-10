import About from "../component/About"
import Beranda from "../component/Beranda"
import Coding from "../component/Work"
import Experience from "../component/Experience"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"

const Home = () => {
  return (
    <div>
    <Navbar />
    <Beranda />
    <About />
    <Experience />
    <Coding />
    <Footer />
    </div>
    )
}

export default Home