import { useState } from "react"
import React from 'react'

function BillShare({ friends,onBillPaid}) {
    const [bill,setbill]=useState("")
    const [friend,setFriend]=useState("")
    const friendslen=friends.length;
    const count=0;

    function submitBill(event){
        event.preventDefault();
        const singleFriend=friends.find((fr)=>friend===fr.name);
        console.log(singleFriend)
        const billDetails={friendId:friend,name:singleFriend.name,bill}
        onBillPaid(billDetails)
    }
    // function sharing(){
    //    const ani=[]
    //     for (var fr of friends){
    //         if (fr!=friend){
    //             console.log(ani.push(...fr))
    //         }
    //     }
    // }
  return (
    <div className="lastsection">
    <div className="section">
        <h3 className="headings">Bill Details</h3>
        <form onSubmit={submitBill} >
            <div>
                <label className='labeltag font-semibold'> Select Friend Who paid the bill</label><br />
                <select className='selecttag' value={friend} onChange={(e)=>setFriend(e.target.value)}  >
                    <option value="">Select friend</option>
                    {friends.map((friend)=>(
                        <option key={friend.id}>{friend.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className='labeltag font-semibold'>Bill Amount:</label><br />
                <input className='inputs' type="number" value={bill} onChange={e=>setbill(e.target.value)}/>
            </div>

            {/* <div>
                <button className='bg-slate-500 btn' >Add bill</button>
            </div> */}
        </form>
    </div>
    <div className="section">
        <p className="font-bold  border-b-black border-b-2 text-xl">Bill sharing details</p>
            <p className="paid font-bold text-white">{friend} paid: {bill} </p>
            <p className="text-xl font-medium"> Everyone should pay :{Math.round(parseInt(bill)/friendslen)}</p>
           
            {
            friends.map((fr,index) => {
                if (friend !== fr.name) {

                    return <p  className='text-white' key={fr.id}> <span className="text-xl font-bold text-gray-700">{fr.name}</span> should pay :{Math.round(parseInt(bill)/friendslen)}</p>;
                }
                return null;
            })}

           
    </div>
    </div>
    
    
  )
}

export default BillShare
