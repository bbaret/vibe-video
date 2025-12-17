import { Composition } from "remotion";
import { MistralPresentation } from "./MistralPresentation";

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="MistralPresentation"
        component={MistralPresentation}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
