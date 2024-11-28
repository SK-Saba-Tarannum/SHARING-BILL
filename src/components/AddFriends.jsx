import {useState} from 'react'

function AddFriends({onAddFriend}) {
    const [name,setName]=useState("")

    function addFriend(event){
        event.preventDefault();
        onAddFriend(name)
        setName("")
    }
  return (
    <div className="section">
        <form onSubmit={addFriend}>
            <h3 className='headings'>Add friend</h3>
            <div>
            <label className='labeltag font-semibold'>FriendName:</label><br />
            <input  className='inputs' type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>

            <div>
                <button className="btn bg-slate-500 ">add friend</button>
            </div>
        </form>
    </div>
  )
}

export default AddFriends
