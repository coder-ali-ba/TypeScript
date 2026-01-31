import React from 'react'
import type {PropsWithChildren , ReactNode} from 'react'

interface CardProps extends PropsWithChildren{
 title : string;
 footer? : ReactNode
}

function SimpleCard({title , children , footer} : CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
      {footer && <div>{footer}</div>}
    </div>
  )
}

export default SimpleCard
