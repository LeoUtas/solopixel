import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { products } from "../constants/data";
import { check2, grid, loading1, product0 } from "../assets";
import { Gradient } from "./design/Roadmap";

export const Products = () => (
    <Section className="overflow-hidden" id="products">
        <div className="container mb-[10vh]">
            <Heading
                title="What we’re working on"
                text="Another exciting project is under development"
            />

            <div className="relative">
                <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                        <img
                            className="w-full h-full object-cover md:object-right"
                            width={800}
                            alt="Smartest AI"
                            height={730}
                            src={product0}
                        />
                    </div>
                </div>

                <Gradient />
            </div>
        </div>

        <div className="container mt-[20vh] md:pb-10">
            <Heading
                tag=""
                title="Available Products"
                text="Applications that are currently available"
            />

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {products.map((item) => {
                    const status =
                        item.status === "done" ? "Done" : "In progress";

                    return (
                        <div
                            className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                                item.colorful ? "bg-conic-gradient" : "bg-n-6"
                            }`}
                            key={item.id}
                        >
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <img
                                        className="w-full"
                                        src={grid}
                                        width={550}
                                        height={550}
                                        alt="Grid"
                                    />
                                </div>
                                <div className="relative z-1">
                                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                        <Tagline>{item.date}</Tagline>

                                        <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                            <img
                                                className="mr-2.5"
                                                src={
                                                    item.status === "done"
                                                        ? check2
                                                        : loading1
                                                }
                                                width={16}
                                                height={16}
                                                alt={status}
                                            />
                                            <div className="tagline">
                                                {status}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-10 -my-10 -mx-15">
                                        <img
                                            className="w-full"
                                            src={item.imageUrl}
                                            width={628}
                                            height={426}
                                            alt={item.title}
                                        />
                                    </div>
                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <p className="body-2 text-n-4">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <Gradient />
            </div>
        </div>
    </Section>
);
