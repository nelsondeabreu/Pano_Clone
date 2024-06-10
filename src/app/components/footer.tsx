import Image from "next/image";
import Link from "next/link";

export function Footer(){
  return(
    <footer className="bg-[#F3EEE3]">
      <div className="flex items-center justify-between p-4 max-w-[1200px] m-auto">
        <div className="flex items-center gap-4">
          <Image src='/public/logo.svg' alt="pano logo image"/>
          <p className="font-medium">© 2024 Pano by Plain Sight Ventures</p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="" className="text-lg font-medium hover:text-[#04DA00] duration-200">Privacy</Link>
          <Link href="" className="text-lg font-medium hover:text-[#04DA00] duration-200">Terms</Link>
          <Link href="" className="text-lg font-medium hover:text-[#04DA00] duration-200">Security</Link>
          <button className="bg-black text-white font-medium w-[151.13px] h-[54px] rounded-full hover:bg-[#04DA00] transition-all duration-300">Try it free</button>
        </div>
      </div>
    </footer>
  )
}