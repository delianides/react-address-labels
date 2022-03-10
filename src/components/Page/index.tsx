import React from 'react'

export const Page = (props : {}) => {
  const PageLabels = Array.from(   {length: 30}, (v, i) => <p>{i.toString()}</p>)
  return (
    <div>
      {PageLabels}
    </div>
  )
}
