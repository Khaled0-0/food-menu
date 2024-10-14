import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <Slider />
      <Featured />
      <Offer />
    </div>
  );
}
