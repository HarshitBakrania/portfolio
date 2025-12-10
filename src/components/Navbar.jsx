import { navLinks } from "@constants"

export const Navbar = () =>{
    return (
        <nav>
            <div>
                <img src={"/images/logo.svg"} alt="logo"/>
                <p className="font-bold">Harshit's Portfolio</p>

                <ul>
                    {navLinks.map((links) => (
                        <li key={links.id}>
                            <p>{links.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}