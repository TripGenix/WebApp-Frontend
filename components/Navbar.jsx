import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="w-full h-[75px] bg-blue-300 flex items-center justify-around">
            <div className="w-[75px] h-fit text-3xl">Logo Here</div>
            <div className="w-[250px] h-fit flex flex-row">
                <div className="w-[75px] h-fit">
                    <Link to="/Home">Home</Link>
                </div>
                <div className="w-[75px] h-fit">
                    <Link to="/Booking">Booking</Link>
                </div>
                <div className="w-[75px] h-fit">
                    <Link to="/Contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar