import React from 'react'

export const DarkLayout = ({children}) => {
  return (
    <div style={{
      background: 'rgba(0,0,0.2)',
      borderRadius: '5px',
      padding: '10px'
    }}>
      <h3> Dark Layout</h3>
      <div>
        {children}
      </div>
    </div>
  )
}
