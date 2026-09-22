import { locations } from "@constants";
import { useGSAP } from "@gsap/react";
import { useLocationStore } from "@store/location";
import { useWindowStore } from "@store/window";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";

export const Home = () => {
  const projects = locations.projects?.children ?? [];
  const clientWork = locations.clientwork?.children ?? [];
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const openProjectWindow = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onDoubleClick={() => openProjectWindow(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
        {clientWork.map((item) => (
          <li
            key={`cw-${item.id}`}
            className={clsx("group folder", item.windowPosition)}
            onDoubleClick={() => openProjectWindow(item)}
          >
            <img src="/images/folder.png" alt={item.name} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
