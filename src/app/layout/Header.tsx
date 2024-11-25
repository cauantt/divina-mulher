import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="ms:h-[708px] flex justify-center w-screen bg-gradient-to-b from-[#720000]  to-[#330F0F] p-5   ">
      <div className="w-[1100px] h-full text-black flex justify-between   items-center rs:flex-col gap-6 rs:justify-center">
        <div className="flex flex-col gap-6 rs:items-center rs:justify-center w-full ">

          <div className="flex flex-col rs:items-center  gap-6">

          <img src="../images/logo.png" className="w-12/12 rs:w-5/12" alt="Rosa" />
              <h1 className="text-white font-semibold text-xl w-[420px] lg:w-[300px]">
                Este é um programa para mulheres que desejam evoluir no caminho do
                desenvolvimento pessoal, espiritual e emocional.
              </h1>
          </div>
 
          <div className="flex flex-col gap-6 ">
              <h1 className="text-white font-extralight  w-[420px] sr:w-[100%] lg:w-[300px]">
              Uma jornada de profundo autoconhecimento, onde você será guiada por temas como sexualidade feminina, fertilidade, prosperidade, feminilidade, autoestima, poder pessoal e os códigos do tempo. Tudo para ajudar você a expandir suas fronteiras e se conectar com sua essência divina.
              </h1>
              <Link href="#alvo"><button className="h-10 w-72 bg-white rounded-lg font-semibold cursor-pointer">Aproveitar Black Friday</button></Link>
          </div>

        </div>

        <img src="../images/mulher.png" className="w-9/12  lg:w-11/12"  alt="Rosa" />
      </div>
    </div>
  );
}

export default Header;