import React from 'react'
import {HashLoader} from 'react-spinners'

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white z-50">
        <HashLoader color="#36d7b7" />
    </div>
  )
}

export default Loading