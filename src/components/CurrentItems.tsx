import { FC } from 'react'
import { CurrentItemsProps } from '../types/types'

const Items: FC<CurrentItemsProps> = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>{item.question}</h3>
          </div>
        ))}
    </>
  )
}

export default Items
