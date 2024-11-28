import React from 'react'

function FriendsList({friends}) {
  return (
    <div className="section">
      <h3 className='headings'>Group Members</h3>
      <select name="" id="" className='selecttag'>
        <option value="">Select Category</option>
        <option value="">Trip</option>
        <option value="">Movie Tickets</option>
        <option value="">Snacks</option>
        <option value="">Bus Fair</option>
        <option value="">Food</option>
        <option value="">Party</option>
        <option value="">others</option>

      </select>
      <ul>
        {friends.map((friend,index)=>(
            <li  className='names font-semibold' key={friend.id}>{index+1}.  {friend.name}.</li>
        ))}
      </ul>
    </div>
  )
}

export default FriendsList
