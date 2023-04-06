
import { EffectComposer, Bloom, SSR } from '@react-three/postprocessing'

export function Effect() {
  return (
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.5} intensity={1} />
        <SSR />
      </EffectComposer>
  )
}
