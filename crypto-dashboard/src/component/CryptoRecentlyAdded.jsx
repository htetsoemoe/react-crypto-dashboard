import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { RiArrowUpSLine } from 'react-icons/ri'
import recentlyAdded from '../assets/RecentlyAdded'

const CryptoRecentlyAdded = () => {
    return (
        <div className='flex-col w-96 border shadow rounded bg-slate-300 pt-3 pb-3 pl-5 pr-5'>
            <div className='flex justify-between mb-3'>
                <div className="flex items-center gap-2">
                    <img src="https://s2.coinmarketcap.com/static/cloud/img/AddIcon.png?_=b25cbd6" width={25} alt="trending" />
                    <span className='font-semibold text-xl'>Recently Added</span>
                </div>
                <a className='flex items-center' href="#">
                    <span className="font-semibold text-blue-800">More</span>
                    <BiChevronRight className='text-blue-800' />
                </a>
            </div>

            <div className="flex-col justify-center items-center">
                {recentlyAdded?.map(people => {
                    return (
                        <div className="flex mt-4 mb-4" key={people?.id}>
                            <span className="ml-2 mr-5 font-semibold">{people?.recently_id}</span>
                            <div className="flex items-center w-60 gap-3 mr-2">
                                <img className='rounded-full' width={20} src={people?.icon} alt="trendingIcon" />
                                <span className="font-semibold">{people?.name}</span>
                                <span className="text-xs">{people?.symbol}</span>
                            </div>
                            <div className="flex items-center gap-1 ml-2">
                                <span className="text-red-800 font-semibold">$ {people?.amount}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CryptoRecentlyAdded
