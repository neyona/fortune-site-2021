// frontend/src/components/pages/FortunePage.js
import React from 'react'
import FortuneJumbotron from '../fortune/FortuneJumbotron'

// This page is just a wrapper
const FortunePage = () => {
  return (
    <div className="content-wrap">
      <FortuneJumbotron />
    </div>
  )
}

export default FortunePage
