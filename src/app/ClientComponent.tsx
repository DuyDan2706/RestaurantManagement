'use client'
import React, { use, useEffect } from 'react'
import envConfig from '../../config'

export default function ClientComponent() {
    useEffect(() => {
        console.log(envConfig)
    })
  return (
    <div>ClientComponent</div>
  )
}
