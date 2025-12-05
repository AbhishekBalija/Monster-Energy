import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Center } from "@react-three/drei";
import MonsterCan from "./MonsterCan";
import useMobile from "../hooks/useMobile";

const Hero = () => {
    const isMobile = useMobile();

    return (
        <div className="bg-black h-screen w-full relative overflow-hidden flex items-center justify-center">

            {/* Background Texture & Overlay */}
            <div className="absolute inset-0 z-0 opacity-70 pointer-events-none" style={{ backgroundImage: 'url(/bg_texture.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

            {/* Lightning - Localized to Top Center/Can area */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 opacity-80 mix-blend-screen pointer-events-none"
                style={{
                    backgroundImage: 'url(/lightning_bg.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    maskImage: 'radial-gradient(circle, black 20%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 20%, transparent 70%)'
                }}>
            </div>

            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_10%,black_100%)] opacity-80 pointer-events-none"></div>

            {/* Background Atmosphere - Enhanced Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#64ff00] blur-[150px] opacity-20 rounded-full pointer-events-none z-0 mix-blend-screen scale-150"></div>

            {/* Layer 1: Background Text (Behind Model) */}
            <div className="absolute z-1 flex flex-col items-center justify-start md:justify-center pt-32 md:pt-0 pointer-events-none select-none w-full h-full overflow-hidden">
                <h2 style={{ fontFamily: '"Energy Storm", sans-serif' }} className="text-[#64ff00] text-[8vw] md:text-[8vw] leading-none uppercase tracking-normal opacity-40 text-center drop-shadow-[0_0_25px_rgba(100,255,0,0.2)] whitespace-nowrap scale-y-[4] origin-center translate-y-10 flex gap-[5vw] md:gap-[20vw]">
                    <span>Unleash</span> <span>The Beast</span>
                </h2>
            </div>

            {/* Layer 2: 3D Scene (Middle - Interactive) */}
            <div className="absolute inset-0 z-10 h-full w-full">
                <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }} gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}>
                    <Suspense fallback={null}>
                        {/* Professional Studio Lighting */}
                        <ambientLight intensity={0.8} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow shadow-mapSize={[1024, 1024]} />
                        <pointLight position={[-10, -10, -10]} intensity={1} color="#64ff00" /> {/* Green Underglow/Rim */}
                        <pointLight position={[0, 5, 0]} intensity={0.5} color="white" />

                        {/* Dramatic Rim Light */}
                        <spotLight position={[-5, 5, 10]} angle={0.4} intensity={2} color="#ccffcc" />

                        <Environment preset="studio" blur={0.5} />

                        {/* 3D Can - Perfectly Centered */}
                        <Center>
                            <MonsterCan scale={isMobile ? 1.0 : 1.5} position={[0, isMobile ? 0.3 : 0.1, 0]} />
                        </Center>

                        {/* Restricted Controls: Rotate ONLY horizontally (around Y axis), no zoom, no pan */}
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            minPolarAngle={Math.PI / 2}
                            maxPolarAngle={Math.PI / 2}
                            autoRotate={!isMobile}
                            autoRotateSpeed={4}
                            enableDamping={false}
                        />
                    </Suspense>
                </Canvas>
            </div>

            {/* Layer 3: Foreground Text (In Front of Model) */}
            <div className="relative z-20 flex flex-col items-center text-center mt-[60vh] md:mt-[650px] pointer-events-none">
                {/* Main Title - Single Line & Smaller */}
                <h1 className="text-white text-5xl md:text-7xl font-feast tracking-widest uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,1)] mix-blend-normal whitespace-normal md:whitespace-nowrap max-w-[90vw] md:max-w-none leading-tight">
                    Maximum charge <span className="text-[#64ff00] mx-2">#</span> zero compromise
                </h1>

                {/* Button - Needs pointer events to be clickable */}
                <div className="mt-10 md:mt-20 pointer-events-auto">
                    <button className="relative group bg-[#64ff00] text-black text-xl font-bold px-8 py-3 hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(100,255,0,0.8)]"
                        style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}>
                        <span className="font-[Orbitron] tracking-widest uppercase">Get Charged</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Hero;
