import React from 'react'

function Version({label, icon}) {
  return (
    <div className="version-container">
        <img className='version-image' src={require(`../logo-${icon}.svg`)} alt="QR code for Expo GO link" />
      <p className="version-label">{label}</p>
  </div>
  )
}

export default Version