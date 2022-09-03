import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TCanvas } from './three/TCanvas';

gsap.registerPlugin(ScrollTrigger)

class App {
	constructor() {
		this.createCanvas()
	}

	private createCanvas = () => {
		new TCanvas(document.querySelector('body')!)
	}
}

new App()
