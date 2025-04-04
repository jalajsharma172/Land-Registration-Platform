import { Link } from 'react-router-dom';
import { Baby } from 'lucide-react';
function Picture({ name }: { name: string })  {
    return (<>
       <div className='DP m-0 p-50 flex flex-col justify-center items-center text-center'>
            <div className='text-md flex flex-col justify-center items-center w-[10]'>
                <Link to="/">
                    <Baby 
                        size={100} 
                        className='transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-white hover:border hover:border-white rounded-full' 
                    />
                </Link>
                <span className='text-lg text-white'>{name}</span>
            </div>
        </div>
    </>)
}
export default Picture;