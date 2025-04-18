import { Link } from "react-router-dom"
import { learnreciepe } from "./Learreciepearray"
 
function Culniraryskill() {
  return (
    <>
    <div className='w-full mt-5  flex gap-10 place-items-center justify-center  flex-col md:flex-row'>
     <div className='w-full h-[250px] md:w-[40%]'>
        <img className='h-full w-full' data-aos="zoom-in" src="https://static.fanpage.it/wp-content/uploads/sites/22/2020/05/iStock-1093661558.jpg"/>
     </div>
    <div className='w-full text-green-500 font-bold h-[250px] md:w-[40%]'>
      <p className='text-3xl'>Improve Your</p>
      <p className='text-3xl'>Culniary Skills</p>
      {learnreciepe.map((a)=>(
      <div className='w-full flex gap-2  mb-2 ' data-aos="fade-right" key={a.name} data-aos-delay={a.delay}>
      <div className='w-3' style={{backgroundColor:"#7FFF00"}}></div>
      <div className='w-[90%]'>{a.name}</div>

    </div>
    ))}
    <Link to="/login">
     <button className='w-[80px] h-10 text-white mt-5' style={{backgroundColor:"#7FFF00"}}>Sign in</button></Link>
    </div>
</div>

    </>
  )
}

export default Culniraryskill
