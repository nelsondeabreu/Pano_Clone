import Image from "next/image";
import customers from '/public/customers.svg'
import { Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#F3EEE3] space-y-10">
      <section className="flex flex-col items-center h-[400px]">
        <h1 className="text-6xl text-center font-extrabold mt-56">
          Let’s find the customers who <br />
          need your <span className="text-[#04DA00]">attention</span>
        </h1>
        <p className="text-xl text-center mt-9 font-medium">
          Upsell, renew, or resolve — get the data you need to reach out at the <br />
          perfect time.
        </p>
      </section>
      <section className="bg-[url('/hero-img.svg')] w-full h-[1799.06px] flex flex-col items-center">
        <button className="bg-black text-white text-center font-semibold w-[250px] h-[68px] rounded-full hover:bg-[#04DA00] transition-all duration-300 mt-24 mb-20">
          Get started free
        </button>
        <div className="mb-20">
          <Image src={customers} alt="customers image" className="rounded-2xl border-8 border-[#04DA00] shadow-md shadow-[#04DA00]"/>
        </div>
        <div className="max-w-[1200px] p-8 m-auto bg-[url('/integration.svg')] flex items-center h-[780px] gap-4 rounded-[80px]">
          <div className="flex flex-col">
            <div className="w-12 h-12 p-2 rounded-full bg-[#04DA00] mt-10 mb-6">
              <Zap className="w-8 h-8"/>
            </div>
            <h1 className="text-5xl font-bold mb-8">Get setup <br /> <span className="text-[#04DA00]">quickly</span></h1>
            <p className="text-lg mb-24">
              No more coding or lengthy onboarding requirements. <br />
              Pano integrates directly with your tech stack, so you <br /> can launch in a matter of minutes, not months.
            </p>
            <p className="font-bold">See all integrations</p>
          </div>
          <div className="w-[639px]">
            
          </div>
        </div>
      </section>
    </main>
  );
}
