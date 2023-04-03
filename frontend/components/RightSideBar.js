import React from 'react'
import { RiVideoAddFill } from 'react-icons/ri'
import {BiSearch} from "react-icons/bi"
import {CgMoreAlt} from "react-icons/cg"
import Contacts from './Contacts'

const RightSideBar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
        <div className="flex items-center text-gray-500">
            <p className="flex text-lg font-semibold flex-grow">Contacts</p>
            <div className='flex space-x-1 px-2'>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill/>
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch/>
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <CgMoreAlt/>
                </div>
            </div>
        </div>
        <Contacts src ="https://images.unsplash.com/photo-1523983254932-c7e6571c9d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1000&q=60" name="BLM xalimo" status="Online"/>
        <Contacts src ="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" name="Edward Snowden" status="Online"/>
        <Contacts src ="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=1000&q=60" name="Matt Damon" status="Offline"/>
        <Contacts src ="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=1000&q=60" name="Cambaro Jones" status="Online"/>
  
    </div>
  )
}

export default RightSideBar