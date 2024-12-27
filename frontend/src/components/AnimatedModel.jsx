import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useFBXLoader } from "../utils/useFBXLoader";

export default function AnimatedModel({ url, scale = 1, position = [0, 0, 0] }) {
  const model = useFBXLoader(url);
  const mixerRef = useRef();

  useEffect(() => {
    if (model) {
      // Set up animation mixer
      if (model.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(model.animations[0]).play();
        mixerRef.current = mixer;
      }

      // Load textures
      const textureLoader = new THREE.TextureLoader();
      const diffuseMap = textureLoader.load("/models/textures/Clothes.png");
      const normalMap = textureLoader.load("/models/textures/Eyes.png");

      // Apply textures to model materials
      model.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: diffuseMap, // Base color map
            normalMap, // Normal map
          });
        }
      });
    }
  }, [model]);

  useFrame((state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  return model ? <primitive object={model} scale={scale} position={position} /> : null;
}
