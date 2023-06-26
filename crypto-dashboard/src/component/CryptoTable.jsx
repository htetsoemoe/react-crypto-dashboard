import React, { useState } from 'react'
import { Table } from '@mantine/core'
import { useGetCoinsMarketQuery } from '../redux/api/cryptoApi'
import { Pagination } from '@mantine/core';
import coinMarkets from '../assets/CoinMarkets'

const CryptoTable = () => {
    //const { data } = useGetCoinsMarketQuery()
    //console.log(data)

    const [activePage, setPage] = useState(1)
    const recordsPerPage = 10
    const lastIndex = activePage * recordsPerPage // last index = 1 * 10 = 10
    const firstIndex = lastIndex - recordsPerPage // first index = 10 - 10 = 0

    const records = coinMarkets.slice(firstIndex, lastIndex)

    return (
        <div>
            <div className="w-[80%] mx-auto mt-5">
                <Table striped highlightOnHover withBorder horizontalSpacing="md" verticalSpacing="md" fontSize="md">
                    <thead className='bg-slate-300'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Market Capital</th>
                            <th>Volume(24h)</th>
                            <th>Circulating Supply</th>
                            <th>Total Supply</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records.map(coin => {
                                return (
                                    <tr key={coin.id}>
                                        <td>{coin.market_cap_rank}</td>
                                        <td className='flex gap-3'>
                                            <img src={coin.image} height={25} width={25} alt="coin" />
                                            {coin.name}
                                        </td>
                                        <td>$ {coin.market_cap}</td>
                                        <td>$ {coin.total_volume}</td>
                                        <td>
                                            {coin.circulating_supply}
                                            <span className="font-semibold ml-2">
                                                {coin.symbol.toUpperCase()}
                                            </span>
                                        </td>
                                        <td>{coin.max_supply}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Pagination className='mt-2 mb-2'
                    position='right'
                    value={activePage}
                    onChange={setPage}
                    total={10} />
            </div>
        </div>
    )
}

export default CryptoTable
