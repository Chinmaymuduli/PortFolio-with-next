import { ARROW_DOWN } from "@/assets/animation";
import Link from "next/link";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ARROW_DOWN,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const BannerButton = () => {
  return (
    <Link href={"/#about"} className="absolute bottom-10 ">
      <Lottie options={defaultOptions} height={60} width={60} />
    </Link>
  );
};

export default BannerButton;
