import { useEffect } from "react";
import { WindowControls } from "@components/WindowControls";
import { locations } from "@constants";
import { WindowWrapper } from "@hoc/WindowWrapper";
import { useLocationStore } from "@store/location";
import { useWindowStore } from "@store/window";
import clsx from "clsx";
import { Search } from "lucide-react";

const Safari = ({ windowData }) => {
  const { openWindow, focusWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  useEffect(() => {
    if (windowData && windowData.location) {
      setActiveLocation(windowData.location);
    } else {
      setActiveLocation(locations.projects);
    }
  }, [windowData, setActiveLocation]);

  const openItem = (item) => {
    if (item.fileType === "pdf") {
      openWindow("resume");
      return focusWindow("resume");
    }

    if (item.kind === "folder") return setActiveLocation(item);

    if (item.fileType === "txt") {
      openWindow("txtfile", item);
      return focusWindow("txtfile");
    }

    if (item.fileType === "img" && item.imageUrl) {
      openWindow("imgfile", item);
      return focusWindow("imgfile");
    }

    if (item.fileType === "url" && item.href) return window.open(item.href, "_blank");
  };

  const renderList = (items) =>
    items.map((item) => (
      <li
        key={item.id}
        onClick={() => setActiveLocation(item)}
        className={
          clsx(item.id) === activeLocation.id ? "active" : "not-active"
        }
      >
        <img src={item.icon} className="w-4" alt={item.name} />
        <p className="text-sm font-medium truncate">{item.name}</p>
      </li>
    ));

  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favourites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>

          <div>
            <h3>Projects</h3>
            <ul>{renderList(locations.projects.children)}</ul>
          </div>
        </div>

        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => {
                openItem(item);
              }}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const SafariWindow = WindowWrapper(Safari, "safari");
