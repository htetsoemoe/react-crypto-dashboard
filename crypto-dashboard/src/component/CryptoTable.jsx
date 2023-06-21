import React from 'react'
import {Table} from '@mantine/core'
import { useGetCoinsMarketQuery } from '../redux/api/cryptoApi'
import coinMarkets from '../assets/CoinMarkets'

const CryptoTable = () => {
    //const { data } = useGetCoinsMarketQuery()
    //console.log(data)

    return (     
        <div>
            <h1 className="text-xl font-semibold">Crypto Table Component</h1>
            <div className="container mx-auto mt-5">
                <Table striped highlightOnHover withBorder horizontalSpacing="md" verticalSpacing="md" fontSize="md"
                    className='w-[95%] mx-auto table-auto'>
                    <thead>
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
                            coinMarkets.map(coin => {
                                return (
                                    <tr key={coin.id}>
                                        <td>{coin.market_cap_rank}</td>
                                        <td className='flex gap-3'>
                                            <img src={coin.image} width={25} alt="coin" />
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
            </div>

        </div>
    )
}

export default CryptoTable
