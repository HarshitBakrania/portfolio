import { Tooltip } from "react-tooltip";
import { dockApps } from "@constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useWindowStore } from "@store/window";

export const Dock = () => {
  const dockRef = useRef(null);
  const { openWindow, closeWindow, windows } = useWindowStore(); 

  useEffect(() => {
    console.log('Windows updated:', windows);
  }, [windows]);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 10000);

        gsap.to(icon, {
            scale: 1 + 0.25 * intensity,
            y: -15 * intensity,
            duration: 0.25,
            ease: 'power1.out'
        })
      });
    };

    const handleMouseMovement = (e) =>{
        const { left } = dock.getBoundingClientRect();

        animateIcons(e.clientX - left);
    };

    const resetIcons = () =>{
        icons.forEach((icon) => gsap.to(icon, {
            scale: 1,
            y:0,
            duration: 0.3,
            ease: 'power1.out'
        }));
    };
    dock.addEventListener("mousemove", handleMouseMovement);
    dock.addEventListener("mouseleave", resetIcons);

    return () =>{
        dock.removeEventListener("mousemove", handleMouseMovement);
        dock.removeEventListener("mouseleave", resetIcons);
    }
  }, []);

  const toggleApp = (app) => {
    if(!app.canOpen) return;

    const window = windows[app.id];

    if(window?.isOpen){
      closeWindow(app.id);
    }else{
      openWindow(app.id);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map((app) => (
          <div key={app.id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={app.name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={app.name}
              data-tooltip-delay-show={150}
              disabled={!app.canOpen}
              onClick={() => toggleApp(app)}
            >
              <img
                src={`/images/${app.icon}`}
                alt={app.name}
                loading="lazy"
                className={app.canOpen ? "" : "opacity-40"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};
