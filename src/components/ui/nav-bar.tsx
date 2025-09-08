import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import { gsap } from "gsap";
export default function NavBar() {


    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
            }
        });

        navTween.fromTo("nav",
            { backgroundColor: 'transparent'}, 
            {
                backgroundColor: "#00000070", 
            backgroundFilter: "blur(10px)",
            duration: 1,
            ease: "power1.inOut",
        });
    }); 

    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {
                        navLinks.map((item) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`}>{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}