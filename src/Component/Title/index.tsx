import React from 'react'

type Props = {
    title: string;
    size?: string;
    fontFamily?: string;
    fontWeigh?: string;
    color?: string;
    textShadow?: string;
    letterSpacing?: string;
}

export default function Title({ title, size, fontFamily, fontWeigh, color, textShadow, letterSpacing }: Props) {
    return (
        <span style={{ fontSize: size, fontFamily: fontFamily, fontWeight: fontWeigh, color: color, textShadow: textShadow, letterSpacing: letterSpacing }}>
            {title}
        </span>
    )
}