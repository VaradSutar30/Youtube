import React from 'react'
import { IoMenu } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Sidebar = () => {
    return (
        <div className=' flex items-center justify-betweenh-screen w-22 h-20 bg-white-200 flex-col items center'>


<button className="flex items-center py-5 px-2 gap justify-center">
    <IoMenu size={30} />
</button>


<button className="flex items-center py-5 justify-center text-xs flex-col">
    <TiHome size={18} />
    Home
</button>

<button className="flex items-center flex-col py-5 text-xs justify-center text-center">
    <SiYoutubeshorts size={18} />
    Shorts
</button>

<button className="flex items-center py-5 flex-col text-xs justify-center text-center">
    <MdOutlineSubscriptions size={18} />
    Subscription
</button>

<button className="flex items-center py-5 flex-col text-xs justify-center text-center">
    <FaRegUserCircle size={18} />
    You
</button>

<button className="flex items-center flex-col py-5 text-xs justify-center">
    <HiDownload size={18} />
    Downloads
</button>

</div>



    )
}

export default Sidebar