// MonsterCan.jsx
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function MonsterCan(props) {
    // CHANGE THIS to match YOUR actual file name:
    const MODEL_PATH = "/models/Monster_energy_can.glb";

    const { scene } = useGLTF(MODEL_PATH);

    // Debug: log if model loads
    useEffect(() => {
        console.log("MonsterCan Loaded:", scene);
    }, [scene]);

    return (
        <primitive
            object={scene}
            {...props}
            rotation={[0, Math.PI, 0]} // optional rotate to face camera
        />
    );
}

// Preload for faster load
useGLTF.preload("/models/Monster_energy_can.glb");
