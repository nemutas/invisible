import * as THREE from 'three';
import { resolvePath } from '../../utils';
import { Mouse2D } from '../Mouse2D';

export class RippleSimulator {
	private renderTarget!: THREE.WebGLRenderTarget
	private scene!: THREE.Scene
	private camera!: THREE.OrthographicCamera

	private readonly HALF_EDGE = 1
	private readonly AMOUNT = 100
	private readonly FREQUENCY = 0.02
	private rippleMeshes: THREE.Mesh[] = []
	private mouse = new THREE.Vector2()
	private prevMouse = new THREE.Vector2()
	private currentWave = 0

	constructor(private gl: THREE.WebGLRenderer, private width: number, private height: number) {
		this.init()
		this.createRipples()
	}

	private init = () => {
		this.renderTarget = new THREE.WebGLRenderTarget(this.width, this.height)
		this.scene = new THREE.Scene()
		const aspect = this.width / this.height
		const edge = this.HALF_EDGE
		this.camera = new THREE.OrthographicCamera(-edge * aspect, edge * aspect, edge, -edge, 0.01, 10)
		this.camera.position.z = 5
	}

	private createRipples = () => {
		const brush = new THREE.TextureLoader().load(resolvePath('/resources/brush.png'))

		const geometry = new THREE.PlaneBufferGeometry()
		geometry.applyMatrix4(new THREE.Matrix4().makeScale(0.1, 0.1, 1))
		const material = new THREE.MeshBasicMaterial({
			map: brush,
			transparent: true,
			blending: THREE.AdditiveBlending,
			depthTest: false,
			depthWrite: false,
		})

		;[...Array(this.AMOUNT)].forEach(() => {
			const mesh = new THREE.Mesh(geometry, material.clone())
			mesh.rotation.z = Math.PI * 2 * Math.random()
			mesh.visible = false
			this.rippleMeshes.push(mesh)
		})

		this.scene.add(...this.rippleMeshes)
	}

	get texture() {
		return this.renderTarget.texture
	}

	resize = (width: number, height: number) => {
		const aspect = width / height
		this.camera.left = -this.HALF_EDGE * aspect
		this.camera.right = this.HALF_EDGE * aspect
		this.camera.updateProjectionMatrix()
		this.renderTarget.setSize(width, height)
	}

	private setNewWave = (posX: number, posY: number) => {
		const mesh = this.rippleMeshes[this.currentWave]
		mesh.visible = true
		mesh.position.set(posX, posY, 0)
		mesh.scale.set(0.2, 0.2, 1)
		;(mesh.material as THREE.MeshBasicMaterial).opacity = 0.5
	}

	private trackMousePos = (aspect: number) => {
		this.mouse.set(Mouse2D.instance.position[0] * aspect, Mouse2D.instance.position[1])
		const distance = this.mouse.distanceTo(this.prevMouse)
		if (this.FREQUENCY < distance) {
			this.setNewWave(this.mouse.x, this.mouse.y)
			this.currentWave = (this.currentWave + 1) % this.AMOUNT
		}
		this.prevMouse.copy(this.mouse)
	}

	update = (aspect: number) => {
		this.trackMousePos(aspect)

		this.gl.setRenderTarget(this.renderTarget)
		this.gl.render(this.scene, this.camera)
		this.gl.setRenderTarget(null)

		this.rippleMeshes.forEach(mesh => {
			if (mesh.visible) {
				const material = mesh.material as THREE.MeshBasicMaterial
				mesh.rotation.z += 0.02
				material.opacity *= 0.95
				mesh.scale.x = 0.99 * mesh.scale.x + 0.3
				mesh.scale.y = mesh.scale.x
				if (material.opacity < 0.003) {
					mesh.visible = false
				}
			}
		})
	}
}
