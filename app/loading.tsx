"use client"
import { Triangle } from 'react-loader-spinner'

export default function Loading() {
  return (
    <main className='absolute w-full h-screen z-100 bg-black grid place-content-center'>
      <Triangle
        height="150"
        width="150"
        color="#22d3ee"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </main>
  )
}
