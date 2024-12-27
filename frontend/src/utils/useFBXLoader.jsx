import { useEffect, useState } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
export function useFBXLoader(url) {
  const [fbx, setFbx] = useState();

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(url, (loadedFbx) => {
      setFbx(loadedFbx);
    });
  }, [url]);

  return fbx;
}
