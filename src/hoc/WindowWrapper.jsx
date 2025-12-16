import { useWindowStore } from "@store/window";
import { useRef } from "react";

export const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const windowRef = useRef(null);

    return (
      <section
        id={windowKey}
        ref={windowRef}
        style={{ zIndex }}
        className="absolute"
      >
        <Component {...props}/>
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};
