
import React, {useState} from "react"
import Input from "./Input";
import {Link} from "react-router-dom";

export default function InputEmpresa(props){

    const [dados, setDados] = useState(props.obj === undefined?{}:props.obj)
    function onChange(key,value){

    setDados({...dados,[key]:value})
    }

    // em posição 0 = estado atual
    // posição 1 é a função para atualizar  estado.

    return (

        // só recebe o jsx

        <div style={{padding:"1.5%"}}>
                    <h2 style={{textAlign:"center"}}> Cadastro de Empresas </h2>
                    <Input label={"Nome ou Razão Social"} state={[dados.nome,(v)=>onChange("nome",v)]}/>
                    <Input label={"Cidade"} state={[dados.cidade,(v)=>onChange("cidade",v)]}/>
                    <Input label={"Endereço"} state={[dados.endereco,(v)=>onChange("endereco",v)]}/>
                    <Input label={"E-mail"} type={"email"} state={[dados.email,(v)=>onChange("email",v)]}/>
                     <Input label={"Site"} state={[dados.site,(v)=>onChange("site",v)]}/>
                     <Input label={"Slogan"} state={[dados.slogan,(v)=>onChange("slogan",v)]}/>
                    <Input label={"Descrição"} type={"area"} state={[dados.slogan,(v)=>onChange("descricao",v)]}/>
                    <Input label={"Descrição (Inglês)"} state={[dados.descricao_ingles,(v)=>onChange("descricao_ingles",v)]} type={"area"}/>
                    <Input label={"Ponto de Contato"} state={[dados.ponto_contato,(v)=>onChange("ponto_contato",v)]}/>

                <Link to={"/"}>
                      <button>Continuar</button>
                </Link>
        </div>
    )

}