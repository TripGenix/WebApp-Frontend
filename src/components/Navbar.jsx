import { Link } from 'react-router-dom';
import Btn from './homePage/Btn';

function Navbar(){
    return(
        <div className="w-full h-[75px] bg-primary justify-between items-center fixed drop-shadow-xl z-20 flex">
            <div className="w-fit h-fit ml-10 sm:text-2xl md:text-3xl">Logo Here</div>
            <div className="w-fit h-fit flex flex-row justify-center items-center mr-10">
                <div className="w-[100px] h-fit hidden sm:inline-block ">
                    <Link to="/">Home</Link>
                </div>
                
                <div className="w-[100px] h-fit hidden sm:inline-block">
                    <Link to="/About">About Us</Link>
                </div>

                <div className="w-[100px] h-fit hidden sm:inline-block">
                    <Link to="/Contact">Contact Us</Link>
                </div>

                <div className="w-fit h-fit hidden lg:inline-block">
                    <Link to="/Booking">
                        <Btn name="Book Now" bg="bg-accent"/>
                    </Link>
                </div>

                <div className="w-fit h-fit text-xl sm:hidden"><ion-icon name="menu-outline"></ion-icon></div>
            </div>

           
        </div>
    )
}

export default Navbar