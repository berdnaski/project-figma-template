import logoImg from "../../assets/logo.svg"

export function Footer() {
    return (
        <main className="flex flex-col md:flex-row px-6 mt-8 mx-auto items-center justify-center h-[220px] md:h-[100px] gap-4 md:justify-between md:w-3/4">
            <section className="flex gap-1 items-center justify-center">
                <img src={logoImg} alt="Logo Enver" />
                <h1 className="text-white font-bold text-xl">Enver</h1>
            </section>

            <section className="flex flex-col">
                <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-zinc-400 font-medium">
                    <li>Support</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                </ul>
            </section>

            <footer>
                <p className="text-zinc-400 font-sans mb-8 md:mb-0">© 2021 Enver. All rights reserved.</p>
            </footer>   
        </main>
    )
}