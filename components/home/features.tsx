import Image from "next/image";
import HomeLandingImage from "../../assets/homePageMockup.png"

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
      <div className="lg:py-14 px-0 lg:px-52 flex flex-col lg:flex-row gap-10 items-center">
        <div>
          <p className="text-lg font-light text-[#595675]">Header</p>
          <p className="text-2xl font-medium text-black mt-2">Feature Name</p>
          <p className="text-lg font-light text-black mt-4">
            Here will go an explanation of the feature, what it does, why its
            important, how it impacts the users.
          </p>
        </div>
        <div className="w-full lg:w-[40vw] h-[450px] lg:h-[510px] overflow-hidden p-14 bg-stone-100 rounded-3xl">
          <Image
            src={HomeLandingImage}
            alt="Home"
            width={320} // px
            height={200} // px
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
      <div className="lg:py-14 px-0 lg:px-52 flex flex-col lg:flex-row gap-10 items-center">
        {/* Desktop Image */}
        <div className="hidden lg:block w-full lg:w-[40vw] h-[450px] lg:h-[510px] overflow-hidden p-14 bg-stone-100 rounded-3xl">
          <Image
            src={HomeLandingImage}
            alt="Home"
            width={320}
            height={200}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-lg mt-10 lg:mt-0 font-light text-[#595675]">
            Header
          </p>
          <p className="text-2xl font-medium text-black mt-2">Feature Name</p>
          <p className="text-lg font-light text-black mt-4">
            Here will go an explanation of the feature, what it does, why its
            important, how it impacts the users.
          </p>
        </div>

        {/* Mobile Image */}
        <div className="block lg:hidden w-full h-[450px] overflow-hidden p-14 bg-stone-100 rounded-3xl">
          <Image
            src={HomeLandingImage}
            alt="Home"
            width={320}
            height={200}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
