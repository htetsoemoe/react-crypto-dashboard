import React from 'react'
import { AiFillMessage, AiFillStar } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import bitcoinPhoto from '/coin.jpg'

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

            <div className="flex gap-3">
                <img className='rounded mt-3 mb-10' width={100} src={bitcoinPhoto} alt="icon" />
                <div className=" mt-2 mb-5">
                    <h1 className='font-bold'>Bitcoin Mining</h1>
                    <p className="break-words text-sm font-semibold text-slate-700">
                        Bitcoin is a protocol which implements a public, permanent, and decentralized ledger.
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                        <span className="text-slate-600 font-semibold">Jun 10 .</span>
                        <div className="flex items-center gap-2 hover:cursor-pointer">
                            <AiFillMessage className='text-blue-600' />
                            <span className="text-slate-600 font-semibold">508 .</span>
                        </div>
                        <div className="flex items-center gap-2 hover:cursor-pointer">
                            <BsFillSuitHeartFill className='text-red-600' />
                            <span className="text-slate-600 font-semibold">290</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoCommunityArticle
