import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { heroIcons } from "../constants/data";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const Hero = () => {
    const parallaxRef = useRef(null);

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero"
        >
            <div className="container relative mt-[10vh]" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">Hey! Welcome to</h1>
                    <h1 className="h1 mb-6">Solo Pixel Universe</h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        A place where you can unleash the power of AI within
                        Brainwave. Upgrade your productivity with Brainwave, the
                        open AI chat app.
                    </p>
                </div>

                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1">
                        <div className="aspect-[33/40] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                            <ScrollParallax isAbsolutelyPositioned>
                                <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                                    {heroIcons.map((icon, index) => (
                                        <li className="p-5" key={index}>
                                            <img
                                                src={icon}
                                                width={24}
                                                height={25}
                                                alt={icon}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </ScrollParallax>
                        </div>
                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"></div>

                    <BackgroundCircles />
                </div>
            </div>
            <BottomLine />
        </Section>
    );
};

export default Hero;
