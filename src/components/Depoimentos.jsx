import { useState, useRef, useEffect } from "react";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { BiSolidLeftArrowCircle } from "react-icons/bi";
import { MdStarRate } from "react-icons/md";
import { AXIOS } from "../services";


const Depoimentos = () => {
  const [depoimentos, setDepoimentos] = useState([]);

  const carrossel = useRef(null)

  const handleLeftClick = (event) => {
    event.preventDefault()

    carrossel.current.scrollLeft -= 385

  }
  const handleRightClick = (event) => {
    event.preventDefault()

    carrossel.current.scrollLeft += 385
  }

  async function buscarDepoimentos() {
    try {
      const resposta = await AXIOS.get("/depoimentos");
      setDepoimentos(resposta.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    buscarDepoimentos();
  }, [])


  return (
    <div className="mb-40 mt-20">

      <div className="mb-20 text-center ">
        <p>Depoimentos</p>
        <h1 className="text-5xl lg:text-6xl text-[#A97744] font-bold">
          Tuso sobre Tiamate Coffee
        </h1>
      </div>

      <img className="lg:absolute lg:left-0 max-w-full m-auto rounded" src="./Rectangle.png" alt="" />

      <div id="container" className="lg:relative z-50 top-10 lg:ml-auto lg:m-0 m-auto flex max-w-[90%] md:max-w-[80%] lg:max-w-[75%] lg:justify-end">

        <div ref={carrossel} className="flex mt-8 gap-4 overflow-x-auto scrollbar-none overflow-auto scroll-smooth">
          {depoimentos.map((depoimento) => (

            <div key={`d-${depoimento.id}`} className="h-80.75 lg:w-100 w-90 shrink-0 rounded-lg bg-[#E7E1DF] px-8 pt-[58px] flex flex-col">
                <div className="flex mb-2">
                    {[...Array(depoimento.nota)].map((nota)=>(
                        <MdStarRate   className="w-[26px] h-[26px] mb-2 fill-[#A97744]" />
                    ))
                    }
                </div>
                <p className="leading-none text-justify text-[#3B2416] text-[14px]"> {depoimento.depoimento} </p>

              <div className="flex items-center gap-4 my-auto mb-[32px]">
                <img className="w-16.25" src={depoimento.foto} alt="" />
                <h1 className="font-semibold text-[#64221D]">{depoimento.nome}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:relative z-50 top-15 flex justify-center mt-10 lg:justify-end gap-5 lg:pr-20">
        <BiSolidLeftArrowCircle onClick={handleLeftClick} className="h-10 w-10 fill-amber-600" />
        <BiSolidRightArrowCircle onClick={handleRightClick} className="h-10 w-10 fill-amber-600" />
      </div>

    </div>
  );
}

export default Depoimentos;