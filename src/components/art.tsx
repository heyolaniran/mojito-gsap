import { useMediaQuery } from "react-responsive";
import { featureLists, goodLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export default function Art() {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';

        const maskedTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#art",
                start: start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })

        maskedTimeLine.to(".will-fade", { opacity: 0, stagger: 0.2, ease: 'power1.inOut'})
        .to(".masked-img", { scale: 1.3, maskPosition: 'center', maskSize: '400%', ease: 'power1.inOut', duration: 1})
        .to("#masked-content", { opacity: 1, ease: 'power1.inOut', duration: 1})
    })

    return (
        <div id="art">
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade">THE ART</h2>
                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {
                            goodLists.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <img src="/images/check.png" alt="check" />
                                    <p>{item}</p>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="cocktail-img">
                        <img src="/images/under-img.jpg" alt="cocktail" className="abs-center masked-img size-full object-contain" />
                        
                    </div>

                     <ul className="space-y-4 will-fade">
                        {
                            featureLists.map((item, index) => (
                                <li key={index} className="flex  justify-start items-center gap-2">
                                    <img src="/images/check.png" alt="check" />
                                    <p className="md:w-fit w-60">{item}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="masked-container">
                    <h2 className="will-fade">Sip-Worthy Perfection</h2>
                    <div id="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn't just a drink. It's careffuly crafted moment just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}