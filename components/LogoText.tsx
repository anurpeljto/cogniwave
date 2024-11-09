import React from 'react'

const LogoText = () => {
  return (
        <span className='flex-1 text-lg text-purple-400 font-bold content-center justify-center'>
        {Array.from('cogni:wave').map((char, index) => (
            <span key={index} className='letter'>{char}</span>
        ))}
        </span>
    )
}

export default LogoText
