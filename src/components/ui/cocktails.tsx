import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../constants";
import { gsap } from "gsap";

export default function Cocktails() {

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger:  {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true
            }
        })

        timeline.from('#c-left-leaf', { xPercent: -100, yPercent: -100}).from('#c-right-leaf', { xPercent: 100, yPercent: 100})

    })

    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="left-leaf"  id="left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails:</h2>
                    <ul>
                        {cocktailLists.map((item) => (
                            <li key={item.name}>
                                <div className="md:me-28">
                                    <h3>
                                        {item.name}
                                    </h3>
                                    <p>{item.country} | {item.detail}</p>
                                </div>

                                <span>- {item.price} </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most loved mocktails:</h2>
                    <ul>
                        {mockTailLists.map((item) => (
                            <li key={item.name}>
                                <div className="me-28">
                                    <h3>{item.name}</h3>
                                    <p>{item.country} | {item.detail}</p>
                                </div>
                                <span>- {item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}