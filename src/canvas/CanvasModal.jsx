import { Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Car from './Car'
import { useSnapshot } from 'valtio'
import { state } from '../store'
import { useContext } from 'react'
import { Context } from '../context/SizeContext'

const CanvasModal = () => {
  const snap = useSnapshot(state);
  const windowSize = useContext(Context)
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