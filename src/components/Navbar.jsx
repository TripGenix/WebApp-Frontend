import { Link } from 'react-router-dom';
import Btn from './homePage/Btn';

function Navbar(){
    return(
        <div className="w-full h-[75px] bg-primary flex items-center justify-around fixed">
            <div className="w-fit h-fit text-3xl">Logo Here</div>
            <div className="w-fit h-fit flex flex-row justify-center items-center">
                <div className="w-[100px] h-fit">
                    <Link to="/Home">Home</Link>
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