import { gsap } from "gsap"
import { useRef, useEffect } from "react"

function BoxAnimation() {
  const boxRef = useRef(null)

  useEffect(() => {
    if (!boxRef.current) return
    gsap.to(boxRef.current, { 
      x: 500, 
      duration: 2, 
      delay: 0, 
      rotate: 360, 
      borderRadius: "50%", 
      scale: 2,
    })

    
  }, [])

  return (
    <div>
      <div
        ref={boxRef}
        className="h-48 w-48 bg-red-500"

      >
        Take me back
      </div>
    </div>
  )
}

export default BoxAnimation
