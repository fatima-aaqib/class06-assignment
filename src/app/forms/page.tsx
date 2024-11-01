import Link from 'next/link';
import React from 'react';

export default function forms(){
    return(
        <div className="bg-sky-200 w-fill">
            <h1 className="text-5xl font-bold text-center uppercase">ENTER YOUR DETAILS</h1>

            <div >

            <form className=" mt-9 flex gap-6 justify-center items-center flex-col  ">

                <input type="email" className=" p-3 rounded-2xl w-2/6 border border-black" placeholder="Enter your email"/>

                <input type="password" className="p-3 rounded-2xl w-2/6 border border-black" placeholder="Enter your password"/>

                <input type="password" className=" p-3 rounded-2xl w-2/6 border border-black" placeholder="confirm your password"/>


                <input type="account details" className=" p-3 rounded-2xl w-2/6 border border-black" placeholder="nic Number"/>


                <input type="card number" className=" p-3 rounded-2xl w-2/6 border border-black" placeholder="account details"/>


                <input type="address" className=" p-3 rounded-2xl w-2/6 border border-black" placeholder="confirm your address"/>


                <input type="name" className=" p-3 rounded-2xl w-2/6 border border-black" placeholder="First Name*"/>


                <input type="name" className=" p-3 rounded-2xl w-2/6 border border-black" placeholder="Last Name*"/>






                

<Link href="/thank-you">
<button  className=" rounded-xl py-4 px-8 bg-blue-800 text-white "> Place Your Order</button>


</Link>
            </form>
            </div>
        </div>
    )
}