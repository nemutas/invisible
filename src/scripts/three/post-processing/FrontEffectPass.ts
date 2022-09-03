import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { shaders } from '../shaderChunk';

export class FrontEffectPass {
	pass!: ShaderPass

	constructor(private backEffectTexture: THREE.Texture) {
		this.init()
	}

	private init = () => {
		const shader: THREE.Shader = {
			uniforms: {
				tDiffuse: { value: null },
				u_backEffect: { value: null },
				u_simulator: { value: null },
			},
			vertexShader: shaders.vertex,
			fragmentShader: shaders.effectFrontFrag,
		}
		this.pass = new ShaderPass(shader)
		this.pass.uniforms.u_backEffect.value = this.backEffectTexture
	}

	update = () => {}
}
