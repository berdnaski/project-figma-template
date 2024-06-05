import { Header } from "../../components/Header/Index";
import person from "../../assets/person.png"
import { FiArrowUpRight } from "react-icons/fi";
import { ServiceYou } from "../../components/ServiceYou/Index";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { Contact } from "../../components/Contact/Index";
import { Footer } from "../../components/Footer/Index";

export function Home() {
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <Header />
            <main className="flex md:flex-row flex-col items-center justify-center w-full">
                <section className="flex flex-col w-full max-w-md">
                    <div className="w-[75%] mx-2 md:w-full">
                        <h1 className="text-white md:text-6xl text-5xl font-bold mb-4">Build Your Awesome Platform</h1>
                        <p className="text-zinc-400 text-md">
                            Enver studio is a digital studio that offers several services such as UI/UX Design to developers,
                            we will provide the best service for those of yout who use our services.
                        </p>
                    </div>

                    <a href="#" className="flex mx-2 flex-row w-36 text-center justify-center items-center gap-1 bg-[#5454D4] hover:bg-[#3f3fa8] text-white mt-4 px-3 py-2 rounded-md">
                        Our Services
                        <FiArrowUpRight />
                    </a>
                </section>

                <section className="max-w-md flex items-center justify-center">
                    <img className="h-78 w-78" src={person} alt="Logo Pessoa" />
                </section>
            </main>
            <aside className="flex flex-col w-full md:max-w-4xl mt-20 items-center justify-center mb-10">
                    <section className="flex flex-col md:flex-row gap-6 mx-4 md:justify-center md:items-center md:mb-12">
                        <h1 className="text-white font-bold text-4xl md:text-5xl md:w-full md:max-w-lg">Why Enver Is the Best Choise?</h1>
                        <p className="text-zinc-400 text-sm md:text-md md:w-full md:max-w-lg mb-8">Watch this one minute video so you understand why you should use our services!</p>
                    </section>

                    <section>
                        <iframe className="hidden md:block" width="850" height="450" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        <iframe className="md:hidden" width="370" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </section>
            </aside>

            <ServiceYou />
            <div className="mt-10 w-full">
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}