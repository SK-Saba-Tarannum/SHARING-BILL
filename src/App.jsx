import {useState} from 'react'
import "./App.css"
import AddFriends from './components/AddFriends'
import BillShare from './components/BillShare'
import FriendsList from './components/FriendsList'
import Header from './components/Header'
import BillDetails from './components/BillDetails'


function App() {
  const [friends,setFriends]=useState([])
  function addFriend(name){
    setFriends(friends=>[...friends,{id:Date.now(),name,billDetails:[]}])
  }
  // function  onBillPaid(billDetails){
  //   console.log(billDetails)
  //   setFriends(friends=>calculateBill(friends,billDetails))
  // }
  // function calculateBill(friends,billDetails){
  //   const amountPrice=Math.round(parseInt(billDetails.bill)/friends.length)
  //   console.log(amountPrice);
  //   const friendDetails=[]
  //   for (let friend of friends){
  //     const singleFriend={...friend};
  //     if ((singleFriend.id)===parseFloat(billDetails.friendId)){
  //       friendDetails.push(singleFriend);
  //       continue;
  //     }
  //     const billings=[];
  //     var found=false;
  //     if(singleFriend.billDetails.length){
  //       for ( var billing of singleFriend.billDetails){
  //         if (billing.id===billDetails.friendId){
  //           found=true;
  //           billings.push({...billing,...{price:billing.price+amountPrice}})
  //         }else{
  //           billing.push(billing);
  //         }
  //       }
  //     }
  //     if (!found){
  //       billing.push({id:billDetails,name:billDetails.name,price:parseFloat(amountPrice)})
  //     }
  //     singleFriend['billDetails']=billings
  //     friendDetails.push(billing)
  //   }

  
  return (
    <div className='maincontainer'>
      <Header/>
      <h1 className='heading text-5xl text-center text-white'>Split Bill</h1>

      <div className='container bg-blue-500 p-6'>
        <AddFriends  onAddFriend={addFriend}/>
        <FriendsList   friends={friends}/>  
        <BillShare friends={friends} />
      </div>
      <BillDetails/>

    </div>
    )
}

export default App
