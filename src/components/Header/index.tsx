import React from 'react'
import headerLogo from "../../../public/images/headerLogo.svg";
import Image from 'next/image';

function Hader() {
  return (
    <header className="w-full flex justify-between items-center p-6 bg-white">
    <Image
      src={headerLogo}
      alt="Business Logo"
      height={40}
      className="pl-6"
    />
    <span className="text-headertext font-bold text-xl">
      Gerador de Cartão de Visita
    </span>
  </header>
  )
}

export default Hader