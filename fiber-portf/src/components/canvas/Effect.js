import { EffectComposer, Bloom, SSR, Glitch } from '@react-three/postprocessing'

export function Effect() {
  return (
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.5} intensity={1} />
        <SSR />
        {/* <Glitch
          delay={[7, 7]} // min and max glitch delay
          duration={[0.6, 1.0]} // min and max glitch duration
          strength={[0.3, 1.0]} // min and max glitch strength
          active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
          ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
        /> */}
      </EffectComposer>
  )
}
