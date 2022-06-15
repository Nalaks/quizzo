import { FC, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { PaginatedItemsProps, Question } from '../types/types'
// eslint-disable-next-line import/no-named-as-default
import QuizItem from './QuizItem'
import '../pagination.css'

const PaginatedItems: FC<PaginatedItemsProps> = ({
  itemsPerPage,
  quizItems,
}) => {
  const [currentItems, setCurrentItems] = useState<Question[] | null>(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(quizItems.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(quizItems.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % quizItems.length
    setItemOffset(newOffset)
  }

  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <QuizItem
            key={item.question}
            item={item}
            index={itemOffset + 1}
            length={pageCount}
          />
        ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={undefined}
        containerClassName="pagination"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
      />
    </>
  )
}

export default PaginatedItems
