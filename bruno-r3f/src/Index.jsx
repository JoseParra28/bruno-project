import { Canvas } from '@react-three/fiber'


const Root = () => {
    return(
        <>
        <Canvas>
            <directionalLight position={[0,0,2]} />

            <mesh position={[1,0,0]}>
                <boxGeometry color={"orange"}/>
                <meshStandardMaterial/>

            </mesh>
        </Canvas>
        </>
    )
   
  }
  
  export default Root