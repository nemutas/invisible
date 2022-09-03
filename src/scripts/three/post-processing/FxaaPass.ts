import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';

export class FxaaPass {
	pass!: ShaderPass

	constructor(private width: number, private height: number) {
		this.init()
	}

	private init = () => {
		this.pass = new ShaderPass(FXAAShader)
		this.update(this.width, this.height)
	}

	update = (width: number, height: number) => {
		this.pass.uniforms.resolution.value.set(1 / width, 1 / height)
	}
}
