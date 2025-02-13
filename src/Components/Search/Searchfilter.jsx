
import Categories from '../categories/Categories'
import { useDispatch, useSelector } from 'react-redux'
import { productpopup } from '../../redux/Popup'
import { setproductdetails } from '../../redux/Productslice'
import { addtocart } from '../../redux/Cartslice'
import { FaIndianRupeeSign } from 'react-icons/fa6'

function Searchfilter() {
    const {filterproducts}=useSelector(state=>state.product)
    const dispatch=useDispatch()
    const singleproduct=(a)=>{
        dispatch((setproductdetails(a)))
        dispatch((productpopup()))
        
      }
  return (
    <>
    <div className='w-full mt-[80px]' >
    <Categories/>
    {filterproducts.length<1&&
    <div className='w-full min-h-screen pt-10 text-center text-3xl font-bold text-green-500'>No search Found</div>

    }
       <div className='w-full mt-5 px-2 md:px-6 min-h-screen  gap-10  grid md:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
          {/* card reciepes*/}
          { filterproducts?.map((a)=>(
            <div onClick={()=>singleproduct(a)}  className='h-[250px]  text-green-500 border-2
             bg-black rounded-lg space-y-1 text-center border-green-500 
             transform transition-all duration-300 hover:scale-110  '  key={a.id}>
              <img className='h-[50%] rounded-lg w-full' src={a.image} alt="hcncn"/>
              <p className='font-bold'>{a.name}</p>
              <div className='w-full justify-center flex items-center'>
              <FaIndianRupeeSign/>
              <p className='font-bold'>{a.price}</p>
              
              </div>
              <button onClick={()=>dispatch(addtocart(a))}className=' p-1 border-2 border-green-500 rounded-lg'>add to cart</button>
              
            </div>
           
      ))}
          </div>
          </div>
    </>
  )
}

export default Searchfilter
