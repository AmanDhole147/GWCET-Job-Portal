import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { ProfilePopover } from '../ProfilePopover';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { authUser } = useSelector(store => store.auth);
    return (
        <div className='bg-white'>
            
            {/* <div> */}
                <img class="logoxx" src="/logo1.png" alt="Logo" width="50px" height="50px"/>
                    {/* <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Hunt</span></h1> */}
                {/* </div> */}
            <div className='flex items-center justify-center mx-auto max-w-2xl h-16'>
                
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        {
                            authUser && authUser.role === "recruiter" ? (
                                <>
                                    <li className='hover:text-[#6A38C2] cursor-pointer'><Link to={"/admin/companies"}>Companies</Link></li>
                                    <li className='hover:text-[#6A38C2] cursor-pointer'><Link to={"/admin/jobs"}>Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li className='hover:text-[#6A38C2] cursor-pointer'><Link to={"/"}>Home</Link></li>
                                    <li className='hover:text-[#6A38C2] cursor-pointer'><Link to={"/jobs"}>Jobs</Link></li>
                                    <li className='hover:text-[#6A38C2] cursor-pointer'><Link to={"/browse"}>Browse</Link></li>
                                </>
                            )
                        }
                    </ul>
                    {
                        !authUser ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant={'outline'}>Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#255691] hover:bg-[#F39C0E]">Signup</Button></Link>
                            </div>
                        ) : (
                            <ProfilePopover />
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar