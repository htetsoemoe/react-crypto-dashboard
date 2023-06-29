import React from 'react'
import { CgProfile } from 'react-icons/cg'

const DropdownProfile = ({ align }) => {
  return (
    <div>
      <div className = 'flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full'>
        <CgProfile className='w-6 h-6'/>
      </div>
    </div>
  )
}

export default DropdownProfile
