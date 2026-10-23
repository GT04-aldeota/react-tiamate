import BannerDinamico from "../components/BannerDinamico";
import Diferenciais from "../components/Diferenciais";
import QuemSomos from "../components/QuemSomos";
import TipoCafeteria from "../components/TipoCafeteria";
import TiamateMidia from "../components/TiamateMidia";
import Video from "../components/Video";

const Franquia = () => {
    return (
        <>
            <BannerDinamico 
                descricao={<>Abra sua Franquia<br />Tiamate Coffee.</>}
                imagem="/BannerFranquia.png"
                posicaoTopo="top-[151px]"
                alinhamento="right-[46px]"
            />
            <QuemSomos />
            <TipoCafeteria />
            <Video />
            <Diferenciais />
            <TiamateMidia />
        </>
    );
}

export default Franquia;