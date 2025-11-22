import hero from '../../assets/homepage/hero.jpg'

function Card1(props){
return(
    <div className={`w-[275px] h-[350px] bg-primary rounded-3xl drop-shadow-xl bg-cover 
        bg-center bg-no-repeat ${props.hid} ${props.blo}`} style={{backgroundImage: `url(${hero})` }}></div>
)}

export default Card1