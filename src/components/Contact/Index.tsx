export function Contact() {
    return (
        <main className="flex flex-col md:flex-row bg-[#1E1E20] px-6 mx-auto items-center justify-center md:h-[420px] h-[320px]">
            <div className="flex flex-col md:w-3/4 gap-8 md:flex-row md:items-center justify-center h-full">
                <h1 className="text-white flex justify-center items-center md:h-[100%] font-bold md:w-3/4 text-4xl md:text-6xl">Contact us for the service you want to use</h1>

                <button type="submit" className="bg-[#5454D4] w-2/4 md:w-1/6 items-center hover:bg-blue-700 font-medium text-white py-2 px-4 rounded">
                    Contact us
                </button>
            </div>
        </main>
    )
}