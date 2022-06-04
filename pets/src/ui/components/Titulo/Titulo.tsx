import { TituloEstilizado,Subtitulo } from "./Titulo.style";
interface TituloProps{
    titulo: string;
    subTitulo?:string | JSX.Element;
}
export default function Titulo(props:TituloProps){
    return (
        <>
            <TituloEstilizado>{props.titulo}</TituloEstilizado>
            <Subtitulo>{props.subTitulo}</Subtitulo>
        </>
    )
}