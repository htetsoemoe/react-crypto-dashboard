import React from 'react'
import { DataTable } from 'mantine-datatable';
import coinMarkets from '../assets/CoinMarkets'
import { Image } from '@mantine/core';

const CryptoDataTable = () => {
    let records = coinMarkets

    return (
        <DataTable
            columns={[
                {
                    accessor: 'market_cap_rank',
                    // this column has a custom title
                    title: '#',
                    // right-align column
                    textAlignment: 'right',

                },
                {
                    accessor: 'name',
                },
                {
                    accessor: 'market_cap'
                },
                {
                    accessor: 'total_volume',
                    title: 'Volume(24h)'
                },
                { 
                    accessor: 'circulating_supply',
                    title: 'Circulating Supply',
                },
                { accessor: 'total_supply' },
            ]}
            records={records}
        />
    )
}

export default CryptoDataTable
