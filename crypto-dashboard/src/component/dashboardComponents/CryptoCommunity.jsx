import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import { MdOutlineVerified } from 'react-icons/md'
import socials from '../../data/Socials'

const CryptoCommunity = () => {
    return (
        <div className='flex-col border shadow rounded bg-slate-300 pt-3 pb-3 pl-6 pr-6'>
            <div className='flex justify-between mb-3'>
                <div className="flex items-center gap-2">
                    <AiFillStar className='text-2xl' color='orange' />
                    <span className='font-semibold text-xl'>Top Community Accounts</span>
                </div>
                <a className='flex items-center' href="#">
                    <span className="font-semibold text-blue-800">More</span>
                    <BiChevronRight className='text-blue-800' />
                </a>
            </div>

            <div className="flex-col justify-center items-center">
                {socials?.map(social => {
                    return (
                        <div className="flex mt-4 mb-4" key={social?.id}>
                            <div className="flex items-center w-64">
                                <img className='rounded-full mr-3 hover:cursor-pointer' width={20} src={social?.icon} alt="trendingIcon" />
                                <span className="font-semibold hover:cursor-pointer">{social?.name}</span>
                                <MdOutlineVerified className='ml-1 mr-3 text-blue-800 hover:cursor-pointer' />
                                <span className="text-xs hover:cursor-pointer">{social?.social_account}</span>
                            </div>
                            <div className="ml-5">
                                <button className="px-2 py-1 bg-slate-200 rounded hover:bg-slate-400 text-sm font-semibold">follow</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CryptoCommunity
