import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { BackLayer, DefaultLayer } from '../TCanvas';
import { BackEffectPass } from './BackEffectPass';
import { FrontEffectPass } from './FrontEffectPass';
import { RippleSimulator } from './RippleSimulator';

export class Effects {
	private rippleSimulator!: RippleSimulator
	private backgroundComposer!: EffectComposer
	private composer!: EffectComposer
	private backEffect!: BackEffectPass
	private frontEffect!: FrontEffectPass

	constructor(
		private gl: THREE.WebGLRenderer,
		private scene: THREE.Scene,
		private camera: THREE.Camera,
		private width: number,
		private height: number,
	) {
		this.init()
	}

	private init() {
		const rippleSimulator = new RippleSimulator(this.gl, this.width, this.height)

		// back effects
		const backgroundRenderTarget = new THREE.WebGLRenderTarget(this.width, this.height)
		const backgroundComposer = new EffectComposer(this.gl, backgroundRenderTarget)
		backgroundComposer.renderToScreen = false
		backgroundComposer.addPass(new RenderPass(this.scene, this.camera))

		const backEffect = new BackEffectPass()
		backEffect.pass.needsSwap = false
		backgroundComposer.addPass(backEffect.pass)

		// front effects
		const composer = new EffectComposer(this.gl)
		composer.addPass(new RenderPass(this.scene, this.camera))

		const frontEffect = new FrontEffectPass(backgroundRenderTarget.texture)
		composer.addPass(frontEffect.pass)

		// register
		this.rippleSimulator = rippleSimulator
		this.backgroundComposer = backgroundComposer
		this.composer = composer
		this.backEffect = backEffect
		this.frontEffect = frontEffect
	}

	resize(width: number, height: number) {
		this.rippleSimulator.resize(width, height)
		this.backgroundComposer.setSize(width, height)
		this.composer.setSize(width, height)
	}

	render(aspect: number) {
		this.rippleSimulator.update(aspect)
		this.backEffect.pass.uniforms.u_simulator.value = this.rippleSimulator.texture
		this.frontEffect.pass.uniforms.u_simulator.value = this.rippleSimulator.texture

		this.camera.layers.set(BackLayer)
		this.backgroundComposer.render()

		this.camera.layers.set(DefaultLayer)
		this.composer.render()
	}
}
