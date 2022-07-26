import {useEffect, useState} from "react";
import EmpresaLista from "../components/EmpresaLista";


const random = (max, min) => {
    return Math.round(Math.random() * (max - min) + min);
}
export default function Empresas({setEmpresa}) {
    const [dados, setDados] = useState([])

    useEffect(() => {
        fetch("http://192.168.1.184:443/api/empresas")
            .then(resultado => resultado.json())
            .then(json => {
                setDados(json.map(j => ({...j, area: random(1, 3)})))
            })
            .catch(err => console.error(err))
    }, [])
    return (
        <EmpresaLista
            toRender={dados}
            onCreate={() => {

            }}
            setEmpresa={setEmpresa}
            keys={[
                {key: "nome", label: "Nome"}
            ]}
            onCreateButtonLabel={"Nova Empresa"}
            title={"Empresas"}
        />
    );
}
