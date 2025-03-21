import Section from "./Section";
import Heading from "./Heading";
import { service2, service3 } from "../assets";
import { brainwaveServicesIcons } from "../constants/data";
import {
    PhotoChatMessage,
    Gradient,
    VideoBar,
    VideoChatMessage,
} from "./design/Services";

export const Services = () => {
    return (
        <Section id="services" className="mb-[20vh]">
            <div className="container">
                <Heading title="Services" text="services available" />

                <div className="relative">
                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src={service2}
                                    className="h-full w-full object-cover"
                                    width={630}
                                    height={750}
                                    alt="robot"
                                />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4">Photo editing</h4>
                                <p className="body-2 mb-[3rem] text-n-3">
                                    Automatically enhance your photos using our
                                    AI app&apos;s photo editing feature. Try it
                                    now!
                                </p>
                            </div>

                            <PhotoChatMessage />
                        </div>

                        <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">Video generation</h4>
                                <p className="body-2 mb-[2rem] text-n-3">
                                    The world’s most powerful AI photo and video
                                    art generation engine. What will you create?
                                </p>

                                <ul className="flex items-center justify-between">
                                    {brainwaveServicesIcons.map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className={`rounded-2xl flex items-center justify-center ${
                                                    index === 2
                                                        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                                                        : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                                                }`}
                                            >
                                                <div
                                                    className={
                                                        index === 2
                                                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                                                            : ""
                                                    }
                                                >
                                                    <img
                                                        src={item}
                                                        width={24}
                                                        height={24}
                                                        alt={item}
                                                    />
                                                </div>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                                <img
                                    src={service3}
                                    className="w-full h-full object-cover"
                                    width={520}
                                    height={400}
                                    alt="Scary robot"
                                />

                                <VideoChatMessage />
                                <VideoBar />
                            </div>
                        </div>
                    </div>

                    <Gradient />
                </div>
            </div>
        </Section>
    );
};
