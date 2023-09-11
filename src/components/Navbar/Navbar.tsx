import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-screen bg-white h-10">
      <ul className="flex justify-center items-center gap-10 h-[100%] w-[100%]">
        <Link href={"#"} className="m-auto">LANGUAGE</Link>
        <Image
        className='mr-4'
          alt="Linkedin Logo"
          width={20}
          height={20}
          src="../../images/linkedin.svg"
        ></Image>
      </ul>
    </nav>
  );
}

export default Navbar