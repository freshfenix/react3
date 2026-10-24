import type { CSSProperties, MouseEventHandler } from 'react'

interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
  onClick: MouseEventHandler<HTMLButtonElement>
  style?: CSSProperties
}

function Button({ text, type = 'button', onClick, style }: ButtonProps) {
  return (
    <button className="color-button" type={type} onClick={onClick} style={style}>
      {text}
    </button>
  )
}

export default Button
