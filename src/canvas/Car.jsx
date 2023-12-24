import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useContext, useRef } from "react";
import { useSnapshot } from "valtio";
import { state } from "../store";
import { Context } from "../context/SizeContext";

const Car = () => {
  const snap = useSnapshot(state);
  const {width} = useContext(Context);

  const handleSize = () => {
    if(width <= 640) {
      state.scale = 0.5;
      if(snap.intro) {
        state.position = [0, 1, 0]
        state.rotation = [0, (Math.PI/180) * 30, 0]
      }else {
        state.position = [0, 1.5, 0]
        state.rotation = [(Math.PI/180) * 10, 0, 0]
      }
    }else if(width <= 768) {
      state.scale =0.7
      if(snap.intro) {
        state.position = [-0.3, 0, 0]
        state.rotation = [0, (Math.PI/180) * 30, 0]
      }else {
        state.position = [0, 1.3, 0]
        state.rotation = [(Math.PI/180) * 10, 0, 0]
      }
    }else if(width <= 1024) {
      state.scale =0.8
      if(snap.intro) {
        state.position = [-0.3, 0, 0]
        state.rotation = [0, (Math.PI/180) * 30, 0]
      }else {
        state.position = [0, 1.3, 0]
        state.rotation = [(Math.PI/180) * 10, 0, 0]
      }
    }else {
      state.scale = 1;
      if(snap.intro) {
        state.position = [0, 0, 0];
        state.rotation = [0, (Math.PI/180) * 30, 0]
      }else {
        state.position = [-1.5, 0, 0]
        state.rotation = [0, 0, 0]
      }
    }
  }
  const carRef = useRef();
  const glb = useGLTF(
    "src/assets/2015_-_porsche_911_carrera_s_rigged__mid-poly.glb"
  );
  useFrame((state, delta) => {
    easing.dampC(glb.materials["Body_Paint_-_Jet_Black"].color, snap.color, 0.25, delta);
    easing.dampC(glb.materials["Body_paint_Jet_black"].color, snap.color, 0.25, delta);
    easing.damp3(carRef.current.position, snap.position, 0.25, delta);
    easing.damp3(carRef.current.rotation, snap.rotation, 0.25, delta);
    glb.scene.traverse((child) => {
      if(child.isMesh) {
        child.castShadow = true;
      }
    })
    handleSize();
  })


  return (
    <>
      <group ref={carRef} scale={snap.scale}>
        <primitive object={glb.scene} castShadow />
        <mesh position={[0,0,0]} rotation={[-Math.PI/2, 0, 0]} receiveShadow>
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color={'#111'} side={2}/>
        </mesh>
      </group>
    </>
  );
};

export default Car;
