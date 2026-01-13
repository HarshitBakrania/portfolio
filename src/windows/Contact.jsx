import { WindowControls } from "@components/WindowControls";
import { socials } from "@constants";
import { WindowWrapper } from "@hoc/WindowWrapper";

const Contact = () =>{
    return (
        <>
        <div id="window-header">
            <WindowControls target="contact" />
            <h2>Contact me</h2>
        </div>

        <div className="p-5 space-y-5">
            <h3>Let's Connect!</h3>
            <p>Ideas, bugs, or tech chats? I'm in.</p>
            <p>harshit.bakrania@gmail.com</p>
            <ul>
                {socials.map(({ id, bg, link, icon, text}) =>(
                    <li key={id} style={{ backgroundColor: bg }}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img src={icon} alt={text} className="size-5" />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
};

export const ContactWindow = WindowWrapper(Contact, "contact");