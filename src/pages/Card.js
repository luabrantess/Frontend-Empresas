import styles from "../css/CardEmp.module.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Card({empresa}) {
    const [focado, atualizaFocado] = useState(0)
    const history = useNavigate();
console.log(empresa)
    useEffect(() => {
        if(!empresa)
            history.push("/")
    }, [])
    if(!empresa)
        return null
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src="https://fujifilm-x.com/wp-content/uploads/2019/08/x-t30_sample-images02.jpg" alt="img"/>
                <h2>{empresa.nome}</h2>
            </div>
            <div className={styles["info-container"]} data-focado={`${focado}`}>
                <div className={styles.column}>
                    <h4>Informações</h4>
                    <button onClick={() => atualizaFocado(0)}>
                        <span className="material-icons-round">account_circle</span>
                    </button>
                    {/*<InputEmpresa/>*/}
                </div>
                <div className={styles.column}>
                    <h4>Contato</h4>
                    <button onClick={() => atualizaFocado(1)}>
                        <span className="material-icons-round">account_circle</span>
                    </button>
                </div>
                <div className={styles.column}>
                    <h4>Produto</h4>
                    <button onClick={() => atualizaFocado(2)}>
                        <span className="material-icons-round">account_circle</span>
                    </button>
                </div>
                <div>
                    <button onClick={()=> {
                        fetch("http://192.168.1.184:443/api/empresa", {method: "DELETE", body: JSON.stringify(empresa)})
                    }}>Deletar</button>

                </div>

            </div>
        </div>
    )
}