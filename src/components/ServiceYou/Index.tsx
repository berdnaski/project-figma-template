import startImg from "../../assets/start.png"
import addImg from "../../assets/add.png"
import { FaLaptopCode, FaPallet, FaVideo } from "react-icons/fa"
import { TbGraph } from "react-icons/tb";
import { MdMotionPhotosAuto } from "react-icons/md";
import { FaPhotoFilm } from "react-icons/fa6";

const services = [
    {
        icon: <FaLaptopCode size={30} color="844fd8" />,
        title: "Development",
        description: "Create a platform with the best and coolest quality from us."
    },
    {
        icon: <FaPallet size={30} color="F04037" />,
        title: "UI/UX Designer",
        description: "We provide UI/UX Design services, and of course with the best quality."
    },
    {
        icon: <TbGraph size={30} color="FEDC5A" />,
        title: "Graphik Designer",
        description: "We provide Graphic Design services, with the best designers."
    },
    {
        icon: <MdMotionPhotosAuto size={30} color="FEDC5A" />,
        title: "Motion Graphik",
        description: "Create a platform with the bestr and coolest quality from us."
    },
    {
        icon: <FaPhotoFilm size={30} color="5454D4" />,
        title: "Photography",
        description: "We provide Photography services, and of course with the best quality."
    },
    {
        icon: <FaVideo size={30} color="F04037" />,
        title: "Videography",
        description: "Create a platform with the best and coolest quality from us."
    }
];

export function ServiceYou() {
    return (
        <main className="flex flex-col mt-10">
            <header className="mb-10">
                <div className="flex flex-col justify-center text-center items-center md:flex-row md:gap-8">
                    <img className="md:hidden w-16 h-16 flex" src={startImg} alt="" />
                    <h1 className="text-white font-bold text-4xl md:text-6xl md:w-2/4">
                        The Service We Provide For You
                    </h1>
                </div>
                <div className="md:hidden flex justify-end px-1 mt-4 md:ml-10">
                    <img src={addImg} alt="" />
                </div>
            </header>

            <section className="flex flex-col md:flex-row md:grid md:grid-rows-2 md:grid-flow-col w-[75%] mx-auto  items-center justify-center">
                {services.map((service, index) => (
                    <article key={index} className="flex flex-col items-center my-6">
                        <div className="bg-[#2d2b4d] p-4 rounded-full">
                            {service.icon}
                        </div>
                        <div className="flex flex-col w-3/4 items-center text-center gap-4 mt-4">
                            <h2 className="text-white text-xl font-medium">{service.title}</h2>
                            <p className="text-zinc-400 font-sans text-lg">
                                {service.description}
                            </p>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}
