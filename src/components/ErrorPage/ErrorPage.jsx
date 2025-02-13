import { Link } from 'react-router-dom';
import errorElement from '../../assets/icons/404 Error with a cute animal.gif'
const ErrorPage = () => {
    return (
        <div className='max-w-3xl mx-auto flex flex-col items-center justify-center space-y-4'>
            <img src={errorElement} alt="" />
            <Link
            to='/'
          className="bg-gradient-to-r from-green-500 to-[#399918] text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-300 text-center"
        >
          Back to Home
        </Link>
            
        </div>
    );
};

export default ErrorPage;