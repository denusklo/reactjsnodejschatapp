import React from 'react'
import { FaSearch } from "react-icons/fa";

const Searchinput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" name="" id="" placeholder='Search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <FaSearch />
        </button>
    </form>
  )
}

export default Searchinput