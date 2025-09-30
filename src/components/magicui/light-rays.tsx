"use client"

import {
 forwardRef,
 useEffect,
 useState,
 type CSSProperties,
 type HTMLAttributes,
 type ReactNode,
} from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export type LightRaysProps = Omit<HTMLAttributes<HTMLDivElement>, "color"> & {
 children?: ReactNode
 count?: number
 color?: string
 blur?: number
 opacity?: number
 speed?: number
 length?: string
 fill?: boolean
}

type LightRay = {
 id: string
 left: number
 rotate: number
 width: number
 swing: number
 delay: number
 duration: number
 intensity: number
}

const createRays = (count: number, cycle: number): LightRay[] => {
 if (count <= 0) return []

 return Array.from({ length: count }, (_, index) => {
  const left = 8 + Math.random() * 84
  const rotate = -28 + Math.random() * 56
  const width = 160 + Math.random() * 160
  const swing = 0.8 + Math.random() * 1.8
  const delay = Math.random() * cycle
  const duration = cycle * (0.75 + Math.random() * 0.5)
  const intensity = 0.6 + Math.random() * 0.5

  return {
   id: `${index}-${Math.round(left * 10)}`,
   left,
   rotate,
   width,
   swing,
   delay,
   duration,
   intensity,
  }
 })
}

const Ray = ({
 left,
 rotate,
 width,
 swing,
 delay,
 duration,
 intensity,
 color,
 blur,
 opacity,
 length,
}: LightRay & Pick<LightRaysProps, "color" | "blur" | "opacity" | "length">) => {
 return (
  <motion.div
   className="pointer-events-none absolute -top-[12%] left-[var(--left)] h-[var(--length)] w-[var(--width)] origin-top will-change-transform"
   style={
    {
     "--left": `${left}%`,
     "--width": `${width}px`,
     "--length": length,
     rotate: `${rotate}deg`,
     filter: `blur(${blur}px)`,
    } as CSSProperties
   }
   initial={{ scaleY: 0 }}
   animate={{
    scaleY: [0.6, 1, 0.6],
    rotate: [`${rotate - swing}deg`, `${rotate + swing}deg`, `${rotate - swing}deg`],
   }}
   transition={{
    duration,
    delay,
    repeat: Infinity,
    ease: "easeInOut",
   }}
  >
   <div
    className="h-full w-full rounded-[50%]"
    style={{
     background: `linear-gradient(to bottom, ${color}, transparent)`,
     opacity: opacity! * intensity,
    }}
   />
  </motion.div>
 )
}

export const LightRays = forwardRef<HTMLDivElement, LightRaysProps>(
 (
  {
   children,
   className,
   count = 7,
   color = "rgba(160, 210, 255, 0.2)",
   blur = 36,
   opacity = 0.65,
   speed = 14,
   length = "70vh",
   fill = true,
   ...props
  },
  ref,
 ) => {
  const [rays, setRays] = useState<LightRay[]>([])

  useEffect(() => {
   setRays(createRays(count, speed))
  }, [count, speed])

  return (
   <div
    ref={ref}
    className={cn("pointer-events-none absolute inset-0", fill && "h-full w-full", className)}
    {...props}
   >
    {rays.map((ray) => (
     <Ray key={ray.id} {...ray} color={color} blur={blur} opacity={opacity} length={length} />
    ))}
    {children}
   </div>
  )
 },
)

LightRays.displayName = "LightRays"