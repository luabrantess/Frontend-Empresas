import PropTypes from "prop-types";
import React from "react"
import styles from "../css/List.module.css"

export default function List(props) {
    return (
        <div className={styles.container}>
            <h2>{props.title}</h2>
            {props.toRender.map((row, index) => (
                <div key={index + "-container"} className={styles.row}>
                    {props.keys.map((key, indexKey) => (
                        <div key={index + "-container-key-" + indexKey}>
                            <div>
                                {row[key.key]}
                            </div>
                            <div className={styles.rowHeader}>
                                {key.label}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

List.propTypes = {
    toRender: PropTypes.array.isRequired,
    title: PropTypes.string,
    onCreate: PropTypes.func,
    onCreateButtonLabel: PropTypes.string,
    keys: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            label: PropTypes.string
        })
    )
}


