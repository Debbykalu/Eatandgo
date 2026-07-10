import React from 'react'

export const Loader = () => {
  return (
    <div className="loader-container text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loader
