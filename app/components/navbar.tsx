'use client'

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#E2E4E9] shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/LJ lifters.jpg" alt="LJ Lifters Logo" width={50} height={50} />
        <span className="text-[#4F3D88] font-[Cinzel] text-[18px]  font-bold ml-2">LJ Lifters</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link href="/" className="text-[#333333] hover:text-[#1A1A1A]">Home</Link>
        <Link href="/generateInvoice" className="text-[#333333] hover:text-[#1A1A1A]">Generate Invoice</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;