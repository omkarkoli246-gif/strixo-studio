"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";

function StrixoHost({
  speaking,
}: {
  speaking: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const mouth = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = Math.sin(elapsed * 0.8) * 0.2;
      group.current.position.y = Math.sin(elapsed * 1.4) * 0.06;
    }

    if (mouth.current) {
      const mouthHeight = speaking
        ? 0.22 + Math.abs(Math.sin(elapsed * 10)) * 0.55
        : 0.18;

      mouth.current.scale.y = mouthHeight;
    }
  });

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      <mesh position={[0, -1.2, 0]}>
        <capsuleGeometry args={[0.62, 1.18, 8, 28]} />
        <meshStandardMaterial
          color="#111827"
          metalness={0.28}
          roughness={0.35}
        />
      </mesh>

      <mesh position={[0, -0.54, 0.54]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.52, 0.52, 0.05]} />
        <meshStandardMaterial color="#d9a55b" metalness={0.55} />
      </mesh>

      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.72, 42, 42]} />
        <meshStandardMaterial color="#d9a57a" roughness={0.42} />
      </mesh>

      <mesh position={[0, 0.68, -0.05]} scale={[1.04, 0.38, 0.92]}>
        <sphereGeometry args={[0.7, 36, 18]} />
        <meshStandardMaterial color="#0f172a" roughness={0.34} />
      </mesh>

      <mesh position={[-0.28, 0.2, 0.62]}>
        <sphereGeometry args={[0.075, 24, 24]} />
        <meshStandardMaterial color="#080808" />
      </mesh>

      <mesh position={[0.28, 0.2, 0.62]}>
        <sphereGeometry args={[0.075, 24, 24]} />
        <meshStandardMaterial color="#080808" />
      </mesh>

      <mesh position={[-0.305, 0.23, 0.675]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh position={[0.255, 0.23, 0.675]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh ref={mouth} position={[0, -0.12, 0.68]}>
        <boxGeometry args={[0.26, 0.16, 0.035]} />
        <meshStandardMaterial color="#3b1111" />
      </mesh>

      <mesh position={[-0.82, -0.92, 0]} rotation={[0.22, 0, -0.65]}>
        <capsuleGeometry args={[0.14, 0.82, 8, 18]} />
        <meshStandardMaterial color="#d9a57a" roughness={0.42} />
      </mesh>

      <mesh position={[0.82, -0.92, 0]} rotation={[0.22, 0, 0.65]}>
        <capsuleGeometry args={[0.14, 0.82, 8, 18]} />
        <meshStandardMaterial color="#d9a57a" roughness={0.42} />
      </mesh>

      <mesh position={[0, -0.12, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.82, 0.025, 16, 72]} />
        <meshStandardMaterial
          color="#d9a55b"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

function IntroScene({
  speaking,
}: {
  speaking: boolean;
}) {
  return (
    <Canvas
      camera={{
        position: [0, 0.25, 4.7],
        fov: 42,
      }}
      className="absolute inset-0"
      gl={{ alpha: true, antialias: true }}
    >
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={1.8} />
      <directionalLight position={[3, 4, 5]} intensity={2.8} color="#fff2d4" />
      <directionalLight position={[-4, 2, 2]} intensity={1.1} color="#60a5fa" />
      <StrixoHost speaking={speaking} />
    </Canvas>
  );
}

export default function WelcomeIntro() {
  const [visible, setVisible] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const dismiss = useCallback(() => {
    window.sessionStorage.setItem("strixo-intro-seen", "true");
    window.speechSynthesis?.cancel();
    setVisible(false);
  }, []);

  useEffect(() => {
    if (window.sessionStorage.getItem("strixo-intro-seen") === "true") {
      return;
    }

    const showTimer = window.setTimeout(() => {
      setVisible(true);
    }, 0);

    const speechTimer = window.setTimeout(() => {
      setSpeaking(true);

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();

        const message = new SpeechSynthesisUtterance(
          "Hello, welcome to Strixo Studio."
        );

        message.rate = 0.92;
        message.pitch = 1;
        message.volume = 1;
        message.onend = () => setSpeaking(false);

        window.speechSynthesis.speak(message);
      }
    }, 700);

    const stopSpeakingTimer = window.setTimeout(() => {
      setSpeaking(false);
    }, 3800);

    const closeTimer = window.setTimeout(() => {
      dismiss();
    }, 6100);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(speechTimer);
      window.clearTimeout(stopSpeakingTimer);
      window.clearTimeout(closeTimer);
      window.speechSynthesis?.cancel();
    };
  }, [dismiss]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[100000] overflow-hidden bg-black text-white"
        >
          <IntroScene speaking={speaking} />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.78))]" />

          <button
            type="button"
            onClick={dismiss}
            aria-label="Skip intro"
            title="Skip intro"
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-black"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute inset-x-0 bottom-10 z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.75 }}
              className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.32em] text-[#f8dca8]"
            >
              <Volume2 className="h-4 w-4" />
              STRIXO STUDIO
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.75 }}
              className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl"
            >
              Hello, Welcome to STRIXO_STUDIO
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.75 }}
              className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg"
            >
              Premium reels, ads, social media handling and websites for brands
              that want to look sharp from day one.
            </motion.p>

            <motion.button
              type="button"
              onClick={dismiss}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.18, duration: 0.55 }}
              className="mt-8 bg-[#f8dca8] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-white"
            >
              Enter Studio
            </motion.button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
