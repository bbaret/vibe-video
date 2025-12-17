import { useCurrentFrame, interpolate, staticFile } from "remotion";
import { Slide1 } from "./slides/Slide1";
import { Slide2 } from "./slides/Slide2";
import { Slide3 } from "./slides/Slide3";

export const MistralPresentation: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <div style={{ flex: 1, backgroundColor: "white" }}>
      {frame < 100 && <Slide1 opacity={opacity} />}
      {frame >= 100 && frame < 200 && <Slide2 opacity={opacity} />}
      {frame >= 200 && <Slide3 opacity={opacity} />}
    </div>
  );
};
