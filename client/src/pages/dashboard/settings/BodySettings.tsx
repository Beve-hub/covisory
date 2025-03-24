import Profile from './Profile'
import Personal from './Personal'



const BodySettings = () => {
  return (
    <div className='mx-auto p-4 justify-center items-center'>
        <div className=''>
            <Profile/>
            <Personal/>  
        </div>
    </div>
  )
}

export default BodySettings