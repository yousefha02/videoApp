export default function Video(props)
{
    return(
        <div className={`flex items-center gap-3 rounded-[6px] px-4 cursor-pointer duration-300 ${props.vid.on?'active':'notactive'} py-2`}
            onClick={()=>props.watch(props.vid.id)}>
            <video src={`/images/${props.vid.sourse}`} width={110} height={110}></video>
            <h3 className="font-bold sm:text-[16px] text-[14px]">{props.vid.title}</h3>
        </div>
        )

}