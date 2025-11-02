"use client";
import React from "react";

const Username = ({ username }) => {
  return (
    <>
      {/* Cover Section */}
      <div className="cover w-full relative">
        <img
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/18.gif?token-hash=g6HitpHZigKvTCOxoDp--T61h2BEQeCThLTXU5q-Vls%3D&token-time=1764806400"
          alt="User cover photo"
          className="w-full h-64 object-cover"
        />

        <div className="absolute -bottom-20 right-[46%] rounded-full border-2 border-white overflow-hidden">
          <img
            className="object-cover"
            width={100}
            height={100}
            src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
            alt="Profile"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="info flex items-center justify-center flex-col my-24">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-400">Creating Animated art for att's</div>
        <div className="text-slate-400">
          9,719 members • 18 posts • $15,450/releases
        </div>

        {/* Payment Section */}
        <div className="payments flex flex-wrap md:flex-nowrap gap-3 w-[80%] mt-8">
          {/* Supporters List */}
          <div className="supporters w-full md:w-1/2 bg-slate-900 text-white rounded-lg p-10">
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5 text-sm">
                <li className="my-4 flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="avatar"></img>
                <span>
                    Shubham donated <span className="font-bold">$30</span> with a message"I support you bro, Lots of Love"
                </span>
                </li>
                  <li className="my-4 flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="avatar"></img>
                <span>
                    Shubham donated <span className="font-bold">$30</span> with a message"I support you bro, Lots of Love"
                </span>
                </li>
                  <li className="my-4 flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="avatar"></img>
                <span>
                    Shubham donated <span className="font-bold">$30</span> with a message"I support you bro, Lots of Love"
                </span>
                </li>
              
            </ul>
          </div>

          {/* Make Payment */}
          <div className="makepayment w-full md:w-1/2 bg-slate-900 text-white rounded-lg p-10">
            <h2 className="text-2xl font-bold my-5">Make Payment</h2>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Enter name" className="w-full rounded-lg p-3 bg-slate-800"/>
              <input type="text" placeholder="Enter message" className="w-full rounded-lg p-3 bg-slate-800"/>
              <input type="text" placeholder="Enter amount" className="w-full rounded-lg p-3 bg-slate-800"/>
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-2 py-1 w-20 text-center">Pay</button>
            </div>
            <div className="flex gap-2 mt-5">
                <button className=" bg-slate-800 p-3 rounded-lg">$30</button>
                <button className=" bg-slate-800 p-3 rounded-lg">$50</button>
                <button className=" bg-slate-800 p-3 rounded-lg">$80</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
