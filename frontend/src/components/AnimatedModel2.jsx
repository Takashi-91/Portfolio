import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useFBXLoader } from "../utils/useFBXLoader";

export default function AnimatedModel2({ url, scale = 1, position = [0, 0, 0] }) {
  const model = useFBXLoader(url); // Load the FBX model
  const mixerRef = useRef();

  useEffect(() => {
    if (model && model.animations.length > 0) {
      // Set up animation mixer
      const mixer = new THREE.AnimationMixer(model);
      mixer.clipAction(model.animations[0]).play();
      mixerRef.current = mixer;
    }
  }, [model]);

  useFrame((state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  return model ? (
    <primitive object={model} scale={scale} position={position} />
  ) : null;
}
