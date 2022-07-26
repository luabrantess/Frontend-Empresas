import PropTypes from "prop-types";
import React, {useEffect, useState} from "react"
import styles from "../css/EmpresaList.module.css"
import {useNavigate} from "react-router-dom";
import {findAllByDisplayValue} from "@testing-library/react";


export default function EmpresaLista(props) {
    const areas = [
        {
            id: 1,
            label: "Software",
            color: "#f55"
        },
        {
            id: 2,
            label: "Satélites",
            color: "#0095ff"
        },
        {
            id: 3,
            label: "Hardware",
            color: "green"
        }

    ]
    const [area, setArea] = useState(-1)
    const navigate = useNavigate()
    const [pesquisa, setPesquisa] = useState("")

    useEffect(function (){
        props.setEmpresa(undefined)
    },[])

    return (
        <div className={styles.big}>
            <div className={styles.container}>
                <div className={styles.conteinerHeader}>
                    <h2>Empresas</h2>
                    <div className={styles.search}>

                        <input id={"pesquisa"} value={pesquisa}
                               onChange={event => {
                                   setPesquisa(event.target.value)

                               }} placeholder={"Procurar"}/>
                        <span className="material-icons-round">
search
</span>

                    </div>
                    <button onClick={() => {
                        navigate("/cadastro")
                    }}>Nova Empresa
                    </button>
                </div>
                <div className={styles.label}>
                    <div>Nome</div>
                    <div>Site</div>
                    <div>Estado</div>
                </div>
                <div className={styles.cards}>
                    {props
                        .toRender
                        .filter((empresa)=>{
                            return empresa.nome.toLowerCase().includes(pesquisa.toLowerCase())

                            }
                        )
                        .map(function (empresa, index) {
                            return (
                                <div className={styles.card} onClick={()=>{
                                    props.setEmpresa(empresa)
                                    navigate("/cadastro")
                                }}>
                                    <div>
                                        {empresa.nome}
                                    </div>
                                    <div>
                                        {empresa.site}
                                    </div>
                                    <div>
                                        {empresa.cidade?.uf}
                                    </div>
                                </div>

                            )
                        })}
                </div>

            </div>
        </div>
    )
}


EmpresaLista.propTypes = {
    setEmpresa: PropTypes.func,
    toRender: PropTypes.array.isRequired,
    title: PropTypes.string,
    onCreate: PropTypes.func,
    onCreateButtonLabel: PropTypes.string
}


