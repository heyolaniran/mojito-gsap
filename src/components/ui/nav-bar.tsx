import { navLinks } from "../../constants"; 
export default function NavBar() {

    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
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