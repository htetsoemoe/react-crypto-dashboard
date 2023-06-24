import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'

const CryptoCommunityArticle = () => {
  return (
      <div className='flex-col border shadow rounded bg-slate-300 pt-3 pb-3 pl-6 pr-6'>
          <div className='flex justify-between mb-3'>
              <div className="flex items-center gap-2">
                  <AiFillStar className='text-2xl' color='orange' />
                  <span className='font-semibold text-xl'>Top Community Article</span>
              </div>
              <a className='flex items-center' href="#">
                  <span className="font-semibold text-blue-800">More</span>
                  <BiChevronRight className='text-blue-800' />
              </a>
          </div>
      </div>
  )
}

export default CryptoCommunityArticle
