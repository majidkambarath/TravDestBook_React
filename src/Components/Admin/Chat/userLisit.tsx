import React from 'react'
import { useDispatch } from 'react-redux';
import { setAuthChatID } from '../../../Redux/slice/chatUserId';
export default function UserLisitPage({userLisit}:any) {
  console.log(userLisit);
  const dispatch = useDispatch()

  const handleClick = (id:string)=>{
     dispatch(setAuthChatID(id))
     
  }

  return (
    <>
    {
      userLisit.map((item:any)=>{
        console.log(item);
        
        return(
    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2" onClick={()=> handleClick(item.userId)}>
              <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
              <img
              src={item.profile[0]?item.profile[0]:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Kv4Ky_-aGET3Mg0JDzBUqmBpAEXQgcXZEA&usqp=CAU"}
              alt="Avatar"
              className="h-full w-full rounded-full"
            />
              </div>
              <div className="ml-2 text-sm font-semibold">{item.name[0]}</div>
            </button>
        )
      })
    }
     
    </>
  )
}
