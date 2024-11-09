import React from 'react'

interface CustomButtonProps {
    title: string,
    onClick?: () => void,
    bg?: string,
    text?: string
}

const CustomButton = (props: CustomButtonProps) => {
  const {title, onClick} = props;
  return (
    <button onClick={onClick} className={`${props.bg ? props.bg : ``} ${props.text ? props.text : ``} border-2 border-purple-300 py-2 px-6 rounded-full`}>
        {title}
    </button>
  )
}

export default CustomButton
