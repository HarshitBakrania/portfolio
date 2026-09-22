import { WindowControls } from "@components/WindowControls";
import { WindowWrapper } from "@hoc/WindowWrapper";
import { useWindowStore } from "@store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="bg-white overflow-hidden" style={{ maxHeight: "90vh" }}>
        {imageUrl ? (
          <div className="w-full flex justify-center items-center">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto object-cover"
              style={{ maxHeight: "calc(90vh - 80px)" }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export const ImageWindow = WindowWrapper(Image, "imgfile");
