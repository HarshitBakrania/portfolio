import dayjs from "dayjs"
import { navIcons, navLinks, locations } from "@constants"
import { useWindowStore } from "@store/window"

export const Navbar = () =>{
    const { openWindow } = useWindowStore();

    const handleNavClick = (links) => {
      if (links.type === "finder") {
        openWindow("finder", { location: locations.projects });
      } else {
        openWindow(links.type);
      }
    };

    return (
        <nav>
            <div>
                <img src={"/images/logo.svg"} alt="logo"/>
                <p className="font-bold">Harshit's Portfolio</p>

                <ul>
                    {navLinks.map((links) => (
                        <li key={links.id} onClick={() => handleNavClick(links)}>
                            <p>{links.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map((icons) =>(
                        <li key={icons.id}>
                            <img src={icons.img} alt={`icon-${icons.id}`}></img>
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format("ddd MMM D h:mm a")}</time>
            </div>
        </nav>
    )
}