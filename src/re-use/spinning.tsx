import { PiSpinnerGapBold } from "react-icons/pi";

export default function Spinning() {
  return (
    <div className="flex  items-center text-lg   text-(--main-color) w-25">
        <PiSpinnerGapBold className="animate-spin"/>
        <span>loading...</span>
    </div>
  )
}
