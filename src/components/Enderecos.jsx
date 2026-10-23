
import {useEffect, useRef, useState} from "react";
import { AXIOS } from "../services";

const Enderecos = () => {

    const infoEndereco = useRef(null)

    const [enderecos, setEnderecos] = useState([]);

    async function buscarEnderecos(){
        try {
            const resposta = await AXIOS.get("./unidades");
            setEnderecos(resposta.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        buscarEnderecos();
    }, [])


    return ( 
        <div className="my-30 flex flex-col justify-center items-center">
            <div className="flex flex-col">
                <p className="text-center mb-3">Endereços</p>
                <h1 className="text-center text-5xl font-extrabold text-[#CF9A5A] mb-24">Vem tomar um café</h1>

                <div ref={infoEndereco} className="flex justify-between gap-45">
                    {enderecos.map((unidades)=>(
                        <div key={`id-${unidades.id}`}>
                            <img className="mb-6" src="/iconeMapa.png" alt=""/>

                            <p className="text-lg text-[#CF9A5A]">Unidade</p>
                            <h1 className="text-2xl text-[#3B2416]">{unidades.cidade}</h1>
                            <hr className="w-70 mb-7 mt-7 border-[#E7E1DF]"/>

                            <div  className="flex flex-rol gap-2">
                                <div>
                                    <img className="mb-17" src="\enderecoMapa.png" alt=""/>
                                    <img className="mb-18" src="\enderecoRelogio.png" alt=""/>
                                    <img className="" src="\enderecoWhatsapp.png" alt=""/>
                                </div>
                                <div className="w-58">
                                    <div className="mb-5">
                                        <h1 className="font-bold text-[#A97744]">endereço:</h1>
                                        <p>{unidades.endereco}</p>
                                        <div className="flex">
                                            <h2 className="font-bold text-[#A97744]">cep:</h2>
                                            <p>{unidades.cep}</p>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h1 className="font-bold text-[#A97744]">Horário de funcionamento:</h1>
                                        <p>{unidades.horario}</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <h1 className="font-bold text-[#A97744]">contato:</h1>
                                        <p>{unidades.contato}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            
        </div>

     );
}
 
export default Enderecos;