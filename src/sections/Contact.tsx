import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"
import { useRef,useState } from "react";
import earth from "../assets/planet4.png"
import rocket from "../assets/rocket2.png"
import rocketLanded from "../assets/rocket-landed.png"
import type {ChangeEvent, FormEvent} from 'react'
import type {JSX} from 'react'

interface ContactProps {
    sectionRef: React.RefObject<HTMLDivElement | null>;
}
type FormData = {
    name: string
    email: string
    message: string
  }
export const Contact = ({ sectionRef }:ContactProps):JSX.Element => {
    const isMobile:boolean = window.innerWidth < 768;
    const formRef = useRef<HTMLFormElement | null>(null);
    const [form, setForm] = useState<FormData>({
        name:'',
        email:'',
        message:''
    })
    const [loading, setLoading] = useState(false)
    const [landing, setLanding] = useState(false)
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = e.target;
        setForm({...form, [name]:value,})
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>):void =>{
        e.preventDefault();
        if(form.name !== '' && form.email !== '' && form.message !== ''){
            console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_SERVICE_ID)
            setLoading(true);
            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                {
                  from_name: form.name,
                  to_name: "Bartek",
                  from_email: form.email,
                  to_email: "bbanas797@gmail.com",
                  message: form.message,
                },
                import.meta.env.VITE_EMAILJS_SERVICE_ID
              ).then(() => {
                setLoading(false);
                alert("Message sent!");
                setForm({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                alert("Something went wrong. Please try again.");
            });
        }
        else{
            alert("Please complete all fields")
        }
    }

    return (
        <section ref = {sectionRef} id="contact" className="relative w-full h-max  lg:h-screen flex items-center justify-center overflow-hidden mt-40 lg:mt-0">
            <div className="max-w-7xl relative w-full h-max z-15 px-6 xl:px-3 py-15 flex flex-col md:flex-row items-start justify-between gap-12">
                <div className="w-full sm:w-2/3 lg:w-2/3 md:w-3/5 z-10 bg-white/10 rounded-3xl p-5">
                    <motion.p 
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }} className="text-white text-lg mb-1"
                    >Get in touch
                    </motion.p>
                    <motion.h2
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-4xl md:text-5xl font-bold mb-10"
                    >
                    Contact.
                    </motion.h2>
                    <form ref={formRef} onSubmit={handleSubmit}className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className=" bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className=" bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <textarea
                        rows={5}
                        name="message"
                        placeholder="Your Message"
                        className=" bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
                        value={form.message}
                        onChange={handleChange}
                    ></textarea>
                    <button
                        type="submit"
                        className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition-all w-fit px-6 cursor-pointer"
                    >
                        {loading ? "Sending...":"Send"} 
                    </button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 z-10 h-[50px] md:h-0">
                    
                    
                <img
                    src={earth}
                    alt="Earth"
                    className="absolute bottom-[-50px] md:bottom-[-200px] md:right-0 right-5 w-64 md:w-[650px] z-10 drop-shadow-[0_0_30px_rgba(0,255,255,0.6)] pointer-events-none"
                />

                <motion.img
                    src={landing ? rocketLanded : rocket}
                    alt="Rocket"
                    className="absolute w-32 md:w-52 z-20 right-20 md:right-48 duration-500"
                    initial={{ y:isMobile ? -550 : -200, rotate: -17, opacity: 0 }}
                    whileInView={{
                            y: isMobile ? -100 : 120,
                            rotate: 0,
                            opacity: 1,
                            transition: {
                            duration: 5,
                            type: 'spring',
                            stiffness: 80,
                            damping: 10,
                            },
                        }}
                    viewport={{ once: true}}
                    onAnimationComplete={() => setLanding(true)}
                />





                </div>
            </div>
        </section>
    );
}
 
