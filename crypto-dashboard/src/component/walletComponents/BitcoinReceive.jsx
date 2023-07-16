import React from 'react'
import { BsArrowDownLeft } from 'react-icons/bs'
import photo from '../../data/BitcoinReceive'

const BitcoinReceive = () => {

    // Array Destructuring
    const [qrCode] = photo

    return (
        <div className='flex-col w-96 border shadow rounded bg-slate-500 pt-3 pb-3 pl-5 pr-5 transform duration-500 hover:-translate-y-2'>
            <div className='flex justify-between mb-5'>
                <div className="flex items-center gap-2">
                    <BsArrowDownLeft className='text-2xl' color='' />
                    <span className='font-semibold text-2xl'>Receive</span>
                </div>
            </div>

            <div className="">
                <img src={qrCode.image} width={80} alt="qr-code" />
            </div>
        </div>
    )
}

export default BitcoinReceive
