import AlgumaDuvida from "../components/AlgumaDuvida";
import BannerDinamico from "../components/BannerDinamico";
import Enderecos from "../components/Enderecos";

const Contato = () => {
    return ( 
        <>
            <BannerDinamico
                descricao={<>Depois do café eu <br className="lg:inline"/>me expresso.</>}
                imagem="/BannerContato.png"
                posicaoTopo="top-[151px]"
                alinhamento=" left-4 md:left-[133px]"
            />
            <Enderecos/>
            <AlgumaDuvida/>
        </>
     );
}
 
export default Contato;