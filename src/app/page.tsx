"use client";

import Image from "next/image";
import RDimage from "../../public/images/RD.svg";
import Arrow from "../../public/images/Arrow.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { z } from "zod";
import { IMaskInput } from "react-imask";

const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^\(\d{2}\) \d{4}(\d{1})?-\d{4}$/),
  email: z.string().email(),
});

const mask = [{ mask: "(00) 0000-0000" }, { mask: "(00) 00000-0000" }];

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        console.log(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const result = formSchema.safeParse({ name, phone, email });
    setIsValid(result.success);
    if (!result.success) {
      setErrorMessage("Por favor, preencha todos os campos.");
    } else {
      setErrorMessage("");
    }
  }, [name, phone, email]);

  useEffect(() => {
    console.log(name, phone, email);
    const result = formSchema.safeParse({ name, phone, email });
    setIsValid(result.success);
    console.log(result);
  }, [name, phone, email]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <section className="w-full mt-8 text-center">
        <h1 className="text-4xl font-bold pb-4 text-white">
          Gerador de Cartão de Visita
        </h1>
        <p className="mt-2 text-lg text-white">
          Crie grátis seu cartão de visita em passos rápidos! Você o insere no
          Instagram e demais canais digitais.
        </p>
      </section>
      <div
        className="md:w-full md:mt-8 md:flex md:flex-row md:p-6

          flex flex-col justify-center items-center

      "
      >
        <div className="md:w-1/2 w-full md:p-0 p-4">
          <Image src={RDimage} alt="Business Logo" className="h-96" />
        </div>
        <div className="md:w-1/2 w-full p-6 md:p-0">
          <form className="space-y-4 flex flex-col text-white">
            <div>
              <label>Name*</label>
              <input
                name="name"
                type="name"
                placeholder="Fulano de tal"
                className="block w-full text-black border border-gray-300  p-2"
                onChange={handleChange}
              />
            </div>

            <div className="flex md:flex-row flex-col w-full justify-between gap-3 md:gap-12 ">
              <div className="flex flex-col w-full">
                <label>Telefone*</label>
                <IMaskInput
                  mask={mask}
                  name="phone"
                  className="block w-full text-black border border-gray-300  p-2"
                  onAccept={(value) => {
                    setPhone(value);
                    console.log(value);
                  }}
                  placeholder="(99) 99999-9999"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Email*</label>
                <input
                  name="email"
                  type="email"
                  placeholder="nome@email.com"
                  className="block w-full border text-black border-gray-300 p-2"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4 text-white font-light">
              <ul className="list-disc">
                <li>
                  Ao preencher o formulário, concordo * em receber comunicações
                  de acordo com meus interesses.
                </li>
                <li>
                  Ao informar meus dados, eu concordo com a{" "}
                  <a
                    className="underline"
                    href="https://legal.rdstation.com/pt/privacy-policy/"
                  >
                    Política de privacidade.
                  </a>
                </li>
              </ul>
              <p>
                * Você pode alterar suas permissões de comunicação a qualquer
                tempo.
              </p>
            </div>
            <p className="text-red-300">{errorMessage}</p>
            <Link
              href={
                isValid
                  ? `/card?name=${encodeURIComponent(
                      name
                    )}&phone=${encodeURIComponent(
                      phone
                    )}&email=${encodeURIComponent(email)}`
                  : "#"
              }
              className={`${
                isValid
                  ? "bg-btn-enabled cursor-pointer hover:bg-btn-hover text-txt-btn-text hover:shadow-[0px_5px_rgba(0,_0,_0,_0.4),_0px_10px_rgba(0,_0,_0,_0.3),_0px_15px_rgba(0,_0,_0,_0.2),_0px_20px_rgba(0,_0,_0,_0.1),_0px_25px_rgba(0,_0,_0,_0.05)] hover:translate-y-[-0.5rem]"
                  : "bg-btn-disabled cursor-default"
              } transition-all font-bold p-4 border border-black group justify-center
          shadow-[0px_5px_0px_0px_rgba(0,0,0)] flex items-center gap-2`}
            >
              <span>GERAR CARTÃO GRÁTIS</span>
              <Image
                src={Arrow}
                alt="Arrow"
                height={20}
                width={20}
                className={`${isValid ? "group-hover:animate-point" : ""}`}
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
