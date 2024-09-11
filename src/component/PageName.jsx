import React from 'react'
import LogoCrypto from './logoCrypto.gif'

export default function PageName() {
  return (
    <div className='container-pageName'>
      <h1 className="page-name">Crypto Currency</h1>
      <img className='logoCrypto' src={LogoCrypto} alt="" />
    </div>
  )
}
