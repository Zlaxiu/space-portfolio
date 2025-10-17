import { useEffect, useRef } from "react";
import {ProjectCard} from "./ProjectCard";
import {projects} from "../constants/index"
import {Rocket} from "./Rocket";
import {Planet} from "./Planet"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import type {WorkProps} from "../sections/Work"
import type {JSX} from 'react'
type ProjectCardsProps  = Omit<WorkProps,"sectionRef"> 
export const ProjectCards = ({mobile,activeSection}:ProjectCardsProps):JSX.Element => {
    const swiperRef = useRef<any>(null);
    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (!swiperInstance) return;

        if (activeSection === "Projects") {
        swiperInstance.autoplay.start();
        } else {
        swiperInstance.autoplay.stop();
        }
    }, [activeSection]);


    return (  
        <div className="max-w-7xl relative w-full h-full py-20 z-10 px-6 lg:px-3">
            <Planet ktora={1}/>
            <h2 className="text-6xl font-bold text-white mb-10 z-10">Projects:</h2>
            <h3 className="relative md:text-2xl text-lg font-medium text-white mb-5 z-10">Each of these projects is a small universe of its own—designed to show how I tackle challenges, blend creativity with code, and bring ideas to life using a variety of technologies.</h3>
            <Rocket/>
            {projects.length > 3 ? (
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, Pagination]}
                pagination={{
                    clickable: true,
                  }}
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                }}
                className="mySwiper !z-10 !px-6 !pt-6 !pb-12">
                {projects.map((item, i) => (
                    <SwiperSlide key={item.id}>
                        <ProjectCard
                        {...item}
                        karta={i}
                        mobile={mobile}
                        moreThan3={[i, true]}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((item, i) => (
                <ProjectCard
                    key={item.id}
                    {...item}
                    karta={i}
                    mobile={mobile}
                    moreThan3={[i, false]}
                />
                ))}
            </div>
            )}
        </div>
    );
}
 
