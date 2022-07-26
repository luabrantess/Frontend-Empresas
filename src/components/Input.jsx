import React from "react";
import PropTypes from "prop-types";
import {useId} from "react";
import css from "../css/Input.module.css"

export default function Input(obj) {

    const id = useId()
    if (obj.type === "submit")
        return (
            <input value={obj.label} type={"submit"}/>
        )
    return (
        <div className={css.input}>
            <label htmlFor={id}>{obj.label}</label>
            {obj.type === "area" ? (
                <textarea value={obj.state !== undefined ? obj.state[0] : undefined}
                          onChange={function (evento) {
                                  obj.state[1](evento.currentTarget.value) //evento
                                  // função recebe o evento
                              }}>

                </textarea>
                )
                :
                (
                    <input

                        value={obj.state !== undefined ? obj.state[0] : undefined}
                        // estado atual do input posição 0
                        id={id}
                        // useId para id dos inputs
                        type={obj.type}
                        //tipo do input declarado no proptype
                        onChange={function (evento) {
                            obj.state[1](evento.currentTarget.value) //evento
                            // função recebe o evento
                        }}/>
                )}
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(["area", "email", "number", "submit"]),
    state: PropTypes.array


}