"use client"

import useLoadImage from "@/hooks/useLoadImage"
import { Song } from "@/types"
import Image from "next/image"
import PlayButton from "./PlayButton"

interface SongItemProps {
    data: Song
    onClick : (id: string) => void
}

const SongItem : React.FC<SongItemProps> = ({data,onClick}) => {
    const imagePath = useLoadImage(data)
  return (
    <div className="flex flex-col group relative items-center justify-center 
    rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 p-3 transition" onClick={() => onClick(data.id)}>
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
            <Image  className="object-cover" alt="zabijem sa " src={imagePath || "/images/liked.png"} fill />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">By {data.author}</p>
      </div>
      <div className="absolute right-4 bottom-24"><PlayButton/> </div>
    </div>
  )
}

export default SongItem
