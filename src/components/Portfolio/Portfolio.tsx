import { useEffect, useState } from "react"
import circleImg from "../../assets/double-circle.png"
import { Swiper, SwiperSlide } from "swiper/react"
export function Portfolio() {

    const [slidePerView, setSlidePerView] = useState(2);

    const data = [
        {id: "1", image: "https://pbs.twimg.com/profile_images/1591452447779831808/N5dfY0iU_400x400.jpg"},
        {id: "2", image: "https://s2-quem.glbimg.com/sxNXrWLzRM3pCb-vPE5gaxnp-dg=/0x0:1400x950/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2024/p/B/nNWr6bTxAjj32PQ8M44A/jesus-the-chosen.jpg"},
        {id: "3", image: "https://pbs.twimg.com/profile_images/1591452447779831808/N5dfY0iU_400x400.jpg"},
        {id: "4", image: "https://s2-quem.glbimg.com/sxNXrWLzRM3pCb-vPE5gaxnp-dg=/0x0:1400x950/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2024/p/B/nNWr6bTxAjj32PQ8M44A/jesus-the-chosen.jpg"},
        {id: "5", image: "https://pbs.twimg.com/profile_images/1591452447779831808/N5dfY0iU_400x400.jpg"},
    ]

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth < 720) {
                setSlidePerView(1);
            } else {
                setSlidePerView(3);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [])

    return (
        <main className="flex-col md:w-[75%] h-[620px] mx-auto">
            <div className="flex md:justify-between md:items-end items-end mb-10 justify-end p-4">
                <h1 className="text-white font-bold text-4xl md:text-5xl mx-4">Our Awesome Portfolio</h1>
                <img src={circleImg} className="w-8 h-8 justify-end flex md:mx-8" alt="Circle" />
            </div>

            <section className="mx-auto flex items-center p-4">
                <Swiper
                    slidesPerView={slidePerView}
                    navigation={true}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="relative p-2">
                                <img
                                    src={item.image}
                                    alt="Slider"
                                    className="md:w-full md:p-4 md:bg-[#1E1E20] flex items-center justify-center w-3/4 mx-auto rounded-lg h-80 object-cover cursor-pointer transform transition duration-300 hover:scale-105"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </main>
    )
}