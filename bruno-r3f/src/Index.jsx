import { Canvas } from '@react-three/fiber'


const Root = () => {
    return(
        <>
        <Canvas>
            <directionalLight position={[0,0,2]} />

            <mesh position={[1,0,0]}>
                <boxGeometry />
                <meshStandardMaterial/>

            </mesh>

            <mesh position={[1,0,0]}>
                <boxGeometry />
                <meshStandardMaterial/>

            </mesh>
        </Canvas>
        </>
    )
   
  }
  
  export default Root