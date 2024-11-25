
import Card from "../components/Card";
import Link from "next/link";

function Content6() {

  return (
    <div className="h-[1000px] flex w-full bg-gradient-to-b from-[#720000] to-[#330F0F] justify-center items-center pt-16">
      <div className="w-[1100px] h-full flex flex-col gap-10 items-center justify-center text-white text-center">
        <p className="text-2xl smm:text-xl font-semibold">O QUE VOCÊ VAI TER ACESSO</p>

        <div className="flex flex-col gap-5 justify-center items-center">
        
          <Card text="Cursos gravados" icon={"\\images\\icon2.png"} />
          <Card text="Acesso por 2 anos" icon={"\\images\\icon3.png"} />
        
          <Card text="Meditações guiadas" icon={"\\images\\icon6.png"} />
          <Card text="Biblioteca com materiais complementares" icon={"\\images\\icon7.png"} />

          <div className="w-[400px] h-10 mt-10 border border-yellow bg-vermelho flex items-center justify-center p-2 smm:w-[300px]">
  <p className="font-bold text-3xl relative">
    DE R$864
    <span className="absolute top-1/2 left-[-10px] w-40 h-[2px] bg-yellow transform -translate-y-1/2"></span>
  </p>
</div>


          <div className="font-semibold text-xl mt-2">POR APENAS</div>
          <div className='w-[400px] h-[170px] border border-yellow bg-vermelho flex items-center justify-center p-2 smm:w-[300px]'>

            <div className="h-full flex justify-end items-end mb-10">
              <p className="font-semibold text-4xl">R$</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-2xl mb-[-15px]">10x de</p>
              <p className="font-semibold text-9xl">24</p>
              <p className="font-light mt-[-10px] text-xs">ou R$247 à vista</p>
            </div>
            <p className="font-semibold text-3xl">,70</p>
          </div>

          <Link href="https://chk.eduzz.com/E0DBPGNY91" id="alvo" target="blank">
            <div className='w-[250px] mt-5 rounded-lg h-[50px] border border-yellow bg-vermelho flex items-center justify-center p-2 smm:w-[300px] font-semibold'>
              Clique aqui para garantir!
            </div>
          </Link>

          <hr className="w-11/12 bg-white text-white mt-5"></hr>

          <div className="flex gap-10 smm:gap-5 w-full justify-center items-center text-center ">
            <img src="../images/logo.png" className="w-2/12" alt="Rosa" />
            <div className="flex flex-col text-center justify-center items-center">
              <p className="smm:text-xs">Copyright Anieli Talon - All rights reserved</p>
              <p className="smm:text-xs">Produzido por Alura Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content6;
