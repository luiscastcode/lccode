'use client'
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Escaleras from "./Escaleras";



const TransicionEscalera = () => {
  const nombreruta = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={nombreruta}>
        <div className="flex h-screen w-screen top-0 left-0 right-0 fixed pointer-events-none z-40">
          <Escaleras />
        </div>
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
        />
      </div>
    </AnimatePresence>
  )
}

export default TransicionEscalera