import Footer from "@/components/footer";
import Image from "next/image";
import HarjotSinghImage from "../../assets/HarjotSinghImage.jpeg";
import stockPerson from "../../assets/stockPerson.jpg"

export default function Team () {
    return (
      <div className="w-full fade-in-up bg-white">
        <div className="px-6 pt-28 lg:px-20 lg:pt-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="">
              <p className="text-base lg:text-lg font-light text-[#595675] mb-2">
                Our Team
              </p>
              <h1 className="text-2xl lg:text-4xl font-medium text-black">
                Let's take a look at the Roominate team
              </h1>
            </div>
          </div>
        </div>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-8 lg:gap-y-14">
          <div className="flex flex-col items-center">
            <div className="w-40 h-auto rounded-full overflow-hidden">
              <Image alt="Harjot Singh" src={stockPerson} />
            </div>
            <p className="mt-4 font-medium text-xl">Allison Lee</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-40 h-auto rounded-full overflow-hidden">
              <Image alt="Harjot Singh" src={stockPerson} />
            </div>
            <p className="mt-4 font-medium text-xl">Andrea Park</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-40 h-auto rounded-full overflow-hidden">
              <Image alt="Harjot Singh" src={stockPerson} />
            </div>
            <p className="mt-4 font-medium text-xl">Arousha Mohammad-Hassani</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-40 h-auto rounded-full overflow-hidden">
              <Image alt="Harjot Singh" src={HarjotSinghImage} />
            </div>
            <p className="mt-4 font-medium text-xl">Harjot Singh</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-40 h-auto rounded-full overflow-hidden">
              <Image alt="Harjot Singh" src={stockPerson} />
            </div>
            <p className="mt-4 font-medium text-xl">Lih Chin Yeo (Rachel)</p>
          </div>
        </div>
        <Footer />
      </div>
    );
}