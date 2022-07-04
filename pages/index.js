import Head from "next/head"
import { React,useState } from "react"
import Videos from "../components/Videos"
export default function Home(prods) {
  const data = 
    [
        {
            sourse:'vid-1.mp4',
            title:'House Flood Animation',
            id:1,
            on:true
        },
        {
          sourse:'vid-2.mp4',
          title:'Zommbie Walking Animation',
          id:2,
          on:false
        },
        {
          sourse:'vid-3.mp4',
          title:'Emoji Falling Flood Animation',
          id:3,
          on:false
        },
        {
          sourse:'vid-4.mp4',
          title:'3D Town Animation',
          id:4,
          on:false
        },
        {
          sourse:'vid-5.mp4',
          title:'Man Chasing Carrot Animation',
          id:5,
          on:false
        },
        {
          sourse:'vid-6.mp4',
          title:'Door Hinge Animation',
          id:6,
          on:false
        },
        {
          sourse:'vid-7.mp4',
          title:'People Walking in Town',
          id:7,
          on:false
        },
        {
          sourse:'vid-8.mp4',
          title:'Knight Chasing Virus Animation',
          id:8,
          on:false
        },
        {
          sourse:'vid-9.mp4',
          title:'3D Heliecopter Animation',
          id:9,
          on:false
        }
    ]

    const [videos,setVideos] = useState(data)
    const [video,setVideo] = useState(data[0])

    function watch(id)
    {
      setVideo(videos.filter(vid=>vid.id==id)[0])
      setVideos(back=>back.map(vid=>vid.id==id?{...vid,on:true}:{...vid,on:false}))
    }
    
  return (
    <>
  <Head>
    <title>Video App</title>
  </Head>
    <div className="flex gap-3 container mx-auto px-6 items-center justify-center h-[100vh] lg:flex-row flex-col">
        <div className="bg-white p-4 rounded-[6px] shadow lg:h-[465px] xl:w-[45%]">
          <video src={`/images/${video.sourse}`} loop controls autoPlay className="rounded-[6px] mb-3" width={720} h={280}>
          </video>
          <h3 className="text-[black] font-bold text-[20px]">{video.title}</h3>
        </div>
        <div className="h-[465px] bg-white p-4 rounded-[6px] shadow overflow-auto flex flex-col gap-[12px] video_List lg:w-fit w-full">
        {
            videos.map((video,index)=>
            {
                return(
                  <Videos vid={video} watch={watch} key={index+'za'}/>
                )
            })
        }
    </div>
    </div>
    </>
  )
}