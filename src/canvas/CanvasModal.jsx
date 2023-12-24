import { Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {useState, useEffect} from 'react'
import Car from './Car'
import { useSnapshot } from 'valtio'
import { state } from '../store'

const CanvasModal = () => {
  const snap = useSnapshot(state)
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleWindowSize = () => {
      setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
      })
    }
    useEffect(() => {

      window.addEventListener('resize', handleWindowSize)
    
      return () => window.removeEventListener('resize', handleWindowSize);
    }, [])
    
  return (
    <Canvas dpr={[1, 1.5]} camera={{fov: 45}} style={windowSize} shadows>
        <ambientLight intensity={0.5}/>
        <directionalLight intensity={10} castShadow position={[0.3, 3, -0.3]}/>
          <Center>
              <Car/>
          </Center>
         {snap.intro && <OrbitControls enableZoom={false} minPolarAngle={Math.PI/2.2} maxPolarAngle={Math.PI/2.2}/>}
    </Canvas>
  )
}

export default CanvasModal