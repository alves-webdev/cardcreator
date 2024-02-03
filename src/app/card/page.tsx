"use client";

import Image from "next/image";
import RDimage from "../../../public/images/RD.svg";
import logoM from "../../../public/images/logoM.svg";
import ArrowDown from "../../../public/images/ArrowDown.svg";
import ArrowR from "../../../public/images/ArrowR.svg";
import { useSearchParams } from 'next/navigation'

export default function Card() {
  
  const searchParams = useSearchParams()
  const phone = searchParams.get('phone')
  const name = searchParams.get('name')
  const email = searchParams.get('email')

  return (
    <div className="min-h-screen bg-background flex flex-col items-center ">
      <div
        className="md:w-full md:mt-8 md:flex md:flex-row md:p-6
          flex flex-col justify-center items-center

      "
      >
        <div className="md:w-1/2 w-full md:p-0 p-4 md:block hidden">
          <Image src={RDimage} alt="Business Logo" className="h-96" />
        </div>
          <div className="md:w-1/2 w-full p-6 md:p-0">
            <div className="flex flex-col gap-4 text-white">
              <a href="/"> &lt;  Gerar outro cartão</a>
              <div className="bg-white flex flex-row p-6 rounded-3xl
              md:w-[30rem] md:h-[15rem] text-black
              items-center gap-3">
                <div className="border-r-4 h-44 w-22 p-2 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={logoM}
                    alt="Business Logo"
                    className="h-12 object-cover pr-2 w-full"
                  />
                </div>
                <div className="flex flex-col gap-5 flex-grow pl-4 md:pl-6 text-lg">
                  <p>{name || 'Nome e Sobrenome'}</p>
                  <p>{ phone || '00 00000-0000'}</p>
                  <p>{email || 'email@email.com'}</p>
                </div>
              </div>
            </div>
            <button
              
              className="bg-btn-disabled cursor-default w-full mt-4 p-4 font-bold text-txt-disabled group justify-center
              md:w-[30rem]
          shadow-[0px_5px_0px_0px_rgba(151,161,172)] flex items-center gap-2"
            >
                <Image
                src={ArrowDown}
                alt="Arrow"
                height={30}
                width={30}
              />
              BAIXAR CARTÃO
            </button>
            <a href='https://app.rdstation.com.br/signup' className="flex flex-row pt-8 text-white gap-2">
              <h1>
                FAZER UM TESTE GRÁTIS DO RD STATION MARKETING
              </h1>
              <Image
                src={ArrowR}
                alt="Arrow"
                height={20}
                width={20}
              />
            </a>
          </div>
      </div>
    </div>
  );
}
