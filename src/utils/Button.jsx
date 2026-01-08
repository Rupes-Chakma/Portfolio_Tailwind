import React from 'react'

const Button = ({style, title}) => {
    return (
        <div>
            <button className={style}>
                {title}
            </button>
        </div>
    )
}

export default Button