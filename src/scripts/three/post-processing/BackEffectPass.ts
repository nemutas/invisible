import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { shaders } from '../shaderChunk';

export class BackEffectPass {
	pass!: ShaderPass

	constructor() {
		this.init()
	}

	private init = () => {
		const shader: THREE.Shader = {
			uniforms: {
				tDiffuse: { value: null },
				u_simulator: { value: null },
				u_progress: { value: 0 },
			},
			vertexShader: shaders.vertex,
			fragmentShader: shaders.effectBackFrag,
		}
		this.pass = new ShaderPass(shader)
	}

	update = () => {}
}
