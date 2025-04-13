import useAuth from "../Backend/Firebase/firebaseauth"
import useForm from "../Components/customhooks/useform"


function Forgotpassword() {
     const [values, handlechange] = useForm({
        email: "",
      })
    const{resetemail}=useAuth(values.email)
  return (
     <div className='w-full pt-10 bg-black md:bg-gray-900 min-h-screen  flex items-center place-content-center'>
         <div className='w-full md:w-[50%] flex flex-col gap-12 px-10 py-20 items-center 
           rounded-2xl bg-black min-h-[500px]'>
            <h1 className='text-green-500 font-bold text-3xl'>Forgot password</h1>
              <input onChange={handlechange} name="email"value={values.email}  className='w-full bg-black border-[1px] pl-5 border-green-400 
           outline-none rounded-full md:w-[70%] h-11 text-green-400' placeholder='enter your email' type="email" />
           
           <button onClick={resetemail} className='w-[70%] md:w-[50%] text-white rounded-full font-bold bg-green-500 p-2'>Send link</button>
   
           
         </div>
       </div>
  )
}

export default Forgotpassword
