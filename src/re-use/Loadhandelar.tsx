import load from "../lottifiles/loading.json";
import load2 from "../lottifiles/loadingpage (1).json";
import { Lottie } from "lottie-react";

type Tprops = {
  status: "main" | "page";
};

export default function Loadhandelar({ status }: Tprops) {

  const animation = status === "main" ? load : load2;

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Lottie
        src={animation}
        autoplay
        loop
        className="w-[250px] h-[250px]"
      />
    </div>
  );
}