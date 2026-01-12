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

      <div className="p-5 bg-white" style={{ maxHeight: "90vh" }}>
        {imageUrl ? (
          <div className="w-full flex justify-center items-center">
            <img
              src={imageUrl}
              alt={name}
              className="max-w-full h-auto object-contain rounded"
              style={{ maxHeight: "calc(90vh - 80px)" }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export const ImageWindow = WindowWrapper(Image, "imgfile");
