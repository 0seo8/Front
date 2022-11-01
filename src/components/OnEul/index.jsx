import React, { useState } from 'react'
import Header from '../layout/Header'
import Picture from './Picture'
import Category from './Category'
const OnEul = () => {
  return (
    <div>
      <Header back>오늘</Header>
      <div className="pt-16">
        <Picture />
        <Category />
      </div>
    </div>
  )
}

export default OnEul
