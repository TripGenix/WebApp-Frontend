function Btn(props){
    return(
        <button className={`w-[200px] h-[45px] text-primary rounded-3xl mr-4 ${props.bg} ${props.border}`}>{props.name}</button>
    )
}

export default Btn;