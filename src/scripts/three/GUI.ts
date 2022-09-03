import GUI from 'lil-gui';

class SingletonGUI {
	private gui!: GUI
	private static sGui?: SingletonGUI

	static get instance() {
		if (!this.sGui) {
			this.sGui = new SingletonGUI()
		}
		return this.sGui.gui
	}

	private constructor() {
		this.gui = new GUI()
	}
}

export const gui = SingletonGUI.instance
