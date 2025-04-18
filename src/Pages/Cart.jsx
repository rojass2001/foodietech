import {  FaTrash } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { cartincrease,cartdecrease, removecart } from '../redux/Cartslice'
import Carttotal from '../Components/Cart/Carttotal'
import Cartempty from '../Components/Cart/Cartempty'
import Cartheading from '../Components/Cart/Cartheading'
import { useEffect } from 'react'
import useAuth from '../Components/customhooks/useAuth'
const quantitybutton = "border-2 border-green-500 px-5"

function Cart() {
  const {cartauthentication} = useAuth()
  const dispatch=useDispatch()
  const {cartproducts}=useSelector(state=>state.cart)
      useEffect(() => {
        cartauthentication()
      },[])
  return (
  <div className='w-full mt-[85px] min-h-screen '>
    <Cartheading/>
    {
      cartproducts.length<1?<Cartempty/> :
     
    <div className='w-full justify-center flex flex-col-reverse gap-4 md:flex-row p-2 md:gap-14 '>
        <div className='w-[100%] md:w-[60%]  transform transition-all duration-300  hover:scale-105'>
            {/* cart card */}
            {cartproducts.map((a)=>(
            <div className='w-full flex border-2 border-green-500 mb-3 p-1 md:p-5 bg-black' key={a.id}>
              <img className="w-[45%] h-[180px]"src={a.image}/>
              <div className='w-[70%] pl-3 space-y-3 text-green-500 font-bold'>
              <p className='text-xl' >{a.name}</p>
              <p className='flex  text-[19px]'>₹{a.price}</p>
              <div className='flex items-center gap-1'> 
                <button onClick={()=>dispatch(cartdecrease(a.id))} className={quantitybutton}>-</button>
              {a.quantity}<button onClick={()=>dispatch(cartincrease(a.id))} className={quantitybutton}>+</button>
            </div>
            <p className='flex items-center text-[15px]'>Subtotal:₹{a.subtotal}</p>
              <div className=' w-16 h-9 p-1 place-content-center place-items-center  border-2 border-green-500'>
                <FaTrash className='mx-auto text-xl' onClick={()=>dispatch(removecart(a))}/>   
                </div>
                
              </div>
          </div>
          )) }
       </div>
        <Carttotal/>
      </div>
      }
    </div>
  )
}

export default Cart