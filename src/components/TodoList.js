import React,{useState} from 'react';
import {MdDelete} from 'react-icons/md';

function TodoList({todoValue}) {
    const [mark, setMark] = useState(false);
    
  return (
    <li 
    onClick={()=>setMark(!mark)}
    className={`${
        mark 
            ? " border-l-purple-500 border-purple-900"
            : " border-l-green-500 border-green-900" 
        } w-full font-titleFont font-medium text-base border-[1px] border-l-[6px]
        px-2 py-2 cursor-pointer flex items-center justify-between`}>{todoValue}
    <span className='text-xl text-gray-300 hover:text-red-500 duration-300 cursor-pointer'><MdDelete /></span></li>
  )
}

export default TodoList