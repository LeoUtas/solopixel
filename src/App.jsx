import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Blogs } from "./components/Blogs";

const App = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <Hero />
                <Products />
                <Services />
                <Blogs />
                <Footer />
            </div>

            <ButtonGradient />
        </>
    );
};

export default App;
