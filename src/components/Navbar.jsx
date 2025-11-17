import { Link } from 'react-router-dom';
import Btn from './homePage/Btn';

function Navbar(){
    return(
        <div className="w-full h-[75px] bg-primary flex justify-between items-center fixed drop-shadow-xl z-20">
            <div className="w-fit h-fit text-3xl ml-10">Logo Here</div>
            <div className="w-fit h-fit flex flex-row justify-center items-center mr-10">
                <div className="w-[100px] h-fit">
                    <Link to="/">Home</Link>
                </div>
                
                <div className="w-[100px] h-fit">
                    <Link to="/About">About Us</Link>
                </div>

                <div className="w-[100px] h-fit">
                    <Link to="/Contact">Contact Us</Link>
                </div>

                <div className="w-fit h-fit">
                    <Link to="/Booking">
                        <Btn name="Book Now" bg="bg-accent"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar