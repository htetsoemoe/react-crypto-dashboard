import React, { useState } from 'react'
import { Table, ScrollArea, Box } from '@mantine/core'
import { useGetCoinsMarketQuery } from '../redux/api/cryptoApi'
import { Pagination } from '@mantine/core';
import coinMarkets from '../assets/CoinMarkets'

const CryptoTable = () => {
    //const { data } = useGetCoinsMarketQuery()
    //console.log(data)

    const [activePage, setPage] = useState(1) // activePage state for pagination
    const recordsPerPage = 10
    const lastIndex = activePage * recordsPerPage // last index = 1 * 10 = 10
    const firstIndex = lastIndex - recordsPerPage // first index = 10 - 10 = 0

    const records = coinMarkets.slice(firstIndex, lastIndex)
    const rows = records.map(coin => {
        return (
            <tr key={coin.id}
                className='border-b dark:bg-slate-700 dark:border-gray-700'>
                <td scope="row" className="pl-6 dark:text-white">{coin.market_cap_rank}</td>
                <td className='flex items-center gap-3 pt-4 pb-4'>
                    <img src={coin.image} width={25} alt="coin" />
                    <a href="#" className='hover:underline'>{coin.name}</a>
                </td>
                <td><span className="pl-5 font-semibold">$</span> {coin.market_cap}</td>
                <td><span className="pl-5 font-semibold">$</span> {coin.total_volume}</td>
                <td className='pl-5'>
                    {coin.circulating_supply}
                    <span className="font-semibold ml-2">
                        {coin.symbol.toUpperCase()}
                    </span>
                </td>
                <td className='pl-5'>
                    {coin.max_supply}
                    <span className="font-semibold ml-2">
                        {coin.max_supply === null ? '' : coin.symbol.toUpperCase()}
                    </span>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <div className="w-[80%] mx-auto mt-7 mb-5">
                <ScrollArea h={620} type="scroll" scrollbarSize={4} >
                    <Box w={1220}>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-sm text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope='col' className='px-6 py-3'>
                                        #
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Name
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Market Capital
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Volume(24h)
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Circulating Supply
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Total Supply
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </Box>
                </ScrollArea>
                <div className="mt-2 mb-2">
                    <Pagination
                        value={activePage}
                        onChange={setPage}
                        total={10} />
                </div>
            </div>
        </div>
    )
}

export default CryptoTable
