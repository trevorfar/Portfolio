import Image from "next/image"
import React, { useEffect, useState } from "react"

interface AnimatorProps {
    frames: string[]
    repeat: boolean
}

const Animator = ({ frames, repeat }: AnimatorProps) => {
    const [frame, setFrame] = useState<number>(0)
    const len = frames.length
    useEffect(() => {
        console.log("hey")
        const interval = setInterval(() => {
            if (frame === frames.length - 1) {
                if (repeat) {
                    setFrame(0);
                } else {
                    clearInterval(interval);
                }
            } else {
                setFrame(frame + 1);
            }
        }, 33);
    
        return () => clearInterval(interval);
    }, [frame, repeat, frames]);

    return (
        <>
    <Image src={frames[frame]} priority alt="Current frame" draggable="false" className="" height={128} width={350}/>
    </>
    )


}

export default Animator