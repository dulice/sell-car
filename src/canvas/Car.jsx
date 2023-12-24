import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "../store";

const Car = () => {
  const snap = useSnapshot(state);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0])
  const handleSize = () => {
    if(window.innerWidth <= 640) {
      setScale(0.5);
      if(snap.intro) {
        setPosition([0, 1, 0]);
        setRotation([0, (Math.PI/180) * 30, 0])
      }else {
        setPosition([0, 1.5, 0])
        setRotation([(Math.PI/180) * 10, 0, 0])
      }
    }else if(window.innerWidth <= 768) {
      setScale(0.7)
      if(snap.intro) {
        setPosition([-0.3, 0, 0]);
        setRotation([0, (Math.PI/180) * 30, 0])
      }else {
        setPosition([0, 1.3, 0])
        setRotation([(Math.PI/180) * 10, 0, 0])
      }
    }else if(window.innerWidth <= 1024) {
      setScale(0.8)
      if(snap.intro) {
        setPosition([-0.3, 0, 0]);
        setRotation([0, (Math.PI/180) * 30, 0])
      }else {
        setPosition([0, 1.3, 0])
        setRotation([(Math.PI/180) * 10, 0, 0])
      }
    }else {
      setScale(1);
      if(snap.intro) {
        setPosition([0, 0, 0]);
        setRotation([0, (Math.PI/180) * 30, 0])
      }else {
        setPosition([-1.5, 0, 0])
        setRotation([0, 0, 0])
      }
    }
  }
  useEffect(() => {
    handleSize();
  },[snap.intro])
  const carRef = useRef();
  const glb = useGLTF(
    "src/assets/2015_-_porsche_911_carrera_s_rigged__mid-poly.glb"
  );
  useFrame((state, delta) => {
    easing.dampC(glb.materials["Body_Paint_-_Jet_Black"].color, snap.color, 0.25, delta);
    easing.dampC(glb.materials["Body_paint_Jet_black"].color, snap.color, 0.25, delta);
    easing.damp3(carRef.current.position, position, 0.25, delta);
    easing.damp3(carRef.current.rotation, rotation, 0.25, delta);
    glb.scene.traverse((child) => {
      if(child.isMesh) {
        child.castShadow = true;
      }
    })
  })


  return (
    <>
      <group ref={carRef} scale={scale}>
        <primitive object={glb.scene} castShadow />
        <mesh position={[0,0,0]} rotation={[-Math.PI/2, 0, 0]} receiveShadow>
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color={'#111'}/>
        </mesh>
      </group>
    </>
  );
};

export default Car;
