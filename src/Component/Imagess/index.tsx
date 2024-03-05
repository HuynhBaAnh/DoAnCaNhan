import React from 'react'
import styles from './image.module.scss'


type Props = {
    src: string;
    width?: string;
    paddingt?: string;
    paddingb?: string;
    marginLeft?: string;
    marginBottom?: string;
}


export default function Images({ src, width, paddingt, paddingb, marginLeft, marginBottom }: Props) {
    return (
        <img className={styles.image} src={src} alt=""
            style={{ height: "auto", maxWidth: width, width: "100%", marginBottom: marginBottom, marginLeft: marginLeft, paddingTop: paddingt, paddingBottom: paddingb, boxShadow: "-4px 4px 3px black" }} />
    )
}