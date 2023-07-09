import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import { AiFillMessage } from 'react-icons/ai'
import { MdOutlineVerified } from 'react-icons/md'
import { BsFillSuitHeartFill } from 'react-icons/bs'

const CryptoCommunityPost = () => {
    return (
        <div className='flex-col w-96 border shadow rounded bg-slate-300 pt-3 pb-3 pl-6 pr-6'>
            <div className='flex justify-between mb-3'>
                <div className="flex items-center gap-2">
                    <AiFillStar className='text-2xl' color='orange' />
                    <span className='font-semibold text-xl'>Top Community Post</span>
                </div>
                <a className='flex items-center' href="#">
                    <span className="font-semibold text-blue-800">More</span>
                    <BiChevronRight className='text-blue-800' />
                </a>
            </div>

            <div className="flex mt-5">
                <img className='mr-4' width={25} src="https://s3.coinmarketcap.com/static/img/portraits/61d684f57ff10a2f03fd0e57.png" alt="icon" />
                <div className="flex items-center">
                    <span className="font-semibold hover:cursor-pointer">Enjin</span>
                    <MdOutlineVerified className='ml-0 mr-1 text-blue-800 hover:cursor-pointer' />
                    <span className="text-xs hover:cursor-pointer">@enjin</span>
                </div>
            </div>
            <div className="ml-10 mt-2 mb-5">
                <p className="break-words font-semibold text-slate-800">It's officially here! Say hello to the Enjin Blockchain,
                    with the Efinity Matrixchain!
                </p>
                <div className="flex items-center gap-3 mt-2">
                    <span className="text-slate-600 font-semibold">Jun 7 .</span>
                    <div className="flex items-center gap-2 hover:cursor-pointer">
                        <AiFillMessage className='text-blue-600' /> 
                        <span className="text-slate-600 font-semibold">88 .</span>
                    </div>
                    <div className="flex items-center gap-2 hover:cursor-pointer">
                        <BsFillSuitHeartFill className='text-red-600' />
                        <span className="text-slate-600 font-semibold">100</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoCommunityPost