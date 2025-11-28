import Image from "next/image";
import HomeLandingImage from "../../assets/homePageMockup.png"
import DonationFeatures from "./DonationFeatures";

export default function Features() {
  return (
    <div className="relative w-full h-max px-6 lg:px-20 py-10 lg:py-20">
      {/* <div className="px-4.5 py-1.5 rounded-full border border-[#595675] w-max mx-auto">
        <p className="font-light text-sm">Features</p>
      </div> */}
      {/* <p className="mx-auto w-1/2 mt-6 font-light text-center text-lg">
        Here are the features we designed in order to support users in cleaning,
        donating, and keeping their memories forever.
      </p> */}
      <DonationFeatures />
    </div>
  );
}
