import * as THREE from 'three';
import { DomSyncPlane } from './DomSyncPlane';
import { DomTextDrawer } from './DomTextDrawer';
import { Mouse2D } from './Mouse2D';
import { Effects } from './post-processing/Effects';
import { shaders } from './shaderChunk';
import { Assets, TCanvasBase } from './TCanvasBase';

export const DefaultLayer = 0
export const BackLayer = 1

export class TCanvas extends TCanvasBase {
	private sectionElements!: HTMLElement[]
	private titleElement!: HTMLElement
	private paramsHeaderElement!: HTMLElement
	private paramsValueElement!: HTMLElement
	private fpsElement!: HTMLElement
	private mouseElement!: HTMLElement
	private backgroundImageElement!: HTMLImageElement

	private title!: { domSyncPlane: DomSyncPlane; domTextDrawer: DomTextDrawer }
	private paramsHeader!: { domSyncPlane: DomSyncPlane; domTextDrawer: DomTextDrawer }
	private paramsValue!: { domSyncPlane: DomSyncPlane; domTextDrawer: DomTextDrawer }
	private sections: { domSyncPlane: DomSyncPlane; domTextDrawer: DomTextDrawer }[] = []

	private bgMaterial?: THREE.ShaderMaterial
	private effects?: Effects

	private assets: Assets = {
		background: { path: '' },
	}

	constructor(parentNode: ParentNode) {
		super(parentNode)

		this.getDomElements()
		this.assets.background.path = this.backgroundImageElement.src

		this.loadAssets(this.assets).then(() => {
			this.setScene()
			this.createSyncTextPlane()
			this.createBackgroundPlane()
			this.setResizeCallback()
			this.setPostProcessing()
			this.animate(this.update)
		})
	}

	private getDomElements = () => {
		this.backgroundImageElement = document.querySelector<HTMLImageElement>('.background-image')!
		this.sectionElements = Array.from(document.querySelectorAll<HTMLElement>('.section'))
		this.titleElement = document.querySelector<HTMLElement>('.title')!
		this.paramsHeaderElement = document.querySelector<HTMLElement>('.params--heading')!
		this.paramsValueElement = document.querySelector<HTMLElement>('.params--value')!
		this.fpsElement = this.paramsValueElement.querySelector<HTMLElement>('.fps')!
		this.mouseElement = this.paramsValueElement.querySelector<HTMLElement>('.mouse')!
	}

	private setScene = () => {
		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 10)
		this.camera.position.z = 5
	}

	private createSyncTextPlane = () => {
		this.sections = this.sectionElements.map(element => {
			const { domSyncPlane, domTextDrawer } = this.createDomSyncObject(element)
			return { domSyncPlane, domTextDrawer }
		})
		this.title = this.createDomSyncObject(this.titleElement)
		this.paramsHeader = this.createDomSyncObject(this.paramsHeaderElement)
		this.paramsValue = this.createDomSyncObject(this.paramsValueElement)
	}

	private createDomSyncObject = (element: HTMLElement) => {
		const material = new THREE.ShaderMaterial({
			uniforms: {
				u_texture: { value: null },
			},
			vertexShader: shaders.vertex,
			fragmentShader: shaders.textPlaneFrag,
			transparent: true,
		})
		const domSyncPlane = new DomSyncPlane(element, material)
		const domTextDrawer = new DomTextDrawer(domSyncPlane)
		material.uniforms.u_texture.value = domTextDrawer.texture
		this.scene.add(domSyncPlane.mesh)

		return { domSyncPlane, domTextDrawer }
	}

	private createBackgroundPlane = () => {
		const texture = this.assets.background.data as THREE.Texture

		const geometry = new THREE.PlaneBufferGeometry(2, 2)
		this.bgMaterial = new THREE.ShaderMaterial({
			uniforms: {
				u_contents: { value: { texture, uvScale: this.calcCoveredTextureScale(texture, this.size.aspect) } },
			},
			vertexShader: shaders.vertex,
			fragmentShader: shaders.bgPlaneFrag,
		})
		const mesh = new THREE.Mesh(geometry, this.bgMaterial)
		mesh.layers.set(BackLayer)
		this.scene.add(mesh)
	}

	private setPostProcessing = () => {
		this.effects = new Effects(this.renderer, this.scene, this.camera, this.size.width, this.size.height)
	}

	private setResizeCallback = () => {
		this.resizeCallback = () => {
			const { width, height, aspect } = this.size

			;[...this.sections, this.title, this.paramsHeader, this.paramsValue].forEach(obj => {
				obj.domSyncPlane.update()
				obj.domTextDrawer.updateCanvasInfo()
				obj.domTextDrawer.draw()
				obj.domSyncPlane.material.uniforms.u_texture.value = obj.domTextDrawer.createTexture()
			})

			const datas = this.bgMaterial!.uniforms.u_contents.value
			this.calcCoveredTextureScale(datas.texture, aspect, datas.uvScale)

			this.effects?.resize(width, height)
		}
	}

	private mouseStr = () => {
		const [x, y] = Mouse2D.instance.position
		const strX = x < 0 ? x.toFixed(3) : ' ' + x.toFixed(3)
		const strY = y < 0 ? y.toFixed(3) : ' ' + y.toFixed(3)
		return strX + ',' + strY
	}

	private i = 0
	private update = () => {
		const dt = this.clock.getDelta()
		this.effects?.render(this.size.aspect)

		if (this.paramsValue && this.i % 5 === 0) {
			this.fpsElement.innerText = (1 / dt).toFixed(3)
			this.mouseElement.innerText = this.mouseStr()
			this.paramsValue.domTextDrawer.draw(true)
			this.paramsValue.domSyncPlane.material.uniforms.u_texture.value = this.paramsValue.domTextDrawer.createTexture()
			this.i = 0
		}
		this.i++
	}
}
