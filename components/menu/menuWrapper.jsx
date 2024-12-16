import React from 'react'

export default function MenuWrapper({children}) {
  return (
    <div className='box-border p-1 border-4 border-teritary-500 border-opacity-85'>
        <div className='border-2 border-teritary-500 border-opacity-70 p-3 space-y-3 relative'>
            {children}
        </div>
    </div>

  )
}
