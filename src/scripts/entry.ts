import { TCanvas } from './three/TCanvas';

class App {
	constructor() {
		this.createCanvas()
	}

	private createCanvas = () => {
		new TCanvas(document.querySelector('body')!)
	}
}

new App()
