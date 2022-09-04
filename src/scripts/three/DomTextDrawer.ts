import * as THREE from 'three';

export class DomTextDrawer {
	texture!: THREE.CanvasTexture

	private canvas!: HTMLCanvasElement
	private context!: CanvasRenderingContext2D
	private textInfo!: {
		text: string
		fontFamily: string
		fontWeight: string
		fontSize: string
		color: string
		lineHeight: string
		letterSpacing: string
		textAlign: string
	}
	private chars: string[] = []

	constructor(private element: HTMLElement) {
		this.init()
		this.createCharSet()
		this.updateCanvasInfo()
		this.draw()
		this.createTexture()
	}

	private init() {
		this.canvas = document.createElement('canvas')
		this.context = this.canvas.getContext('2d')!
	}

	private createCharSet() {
		// alphabet
		;[...Array(26)].forEach((_, i) => this.chars.push(String.fromCharCode('a'.charCodeAt(0) + i)))
		const upper = this.chars.map(c => c.toUpperCase())
		this.chars.push(...upper)
		// number
		;[...Array(10)].forEach((_, i) => this.chars.push(i.toString()))
		// symbol
		this.chars.push('!', '#', '$', '%', '&', '*', '+', ',', '-', '.', '/')
		// console.log(this.chars)
		return this.chars
	}

	updateCanvasInfo() {
		const rect = this.element.getBoundingClientRect()
		this.canvas.width = rect.width
		this.canvas.height = rect.height

		const style = window.getComputedStyle(this.element)
		this.textInfo = {
			text: this.element.innerText,
			fontFamily: style.fontFamily,
			fontWeight: style.fontWeight,
			fontSize: style.fontSize,
			color: style.color,
			lineHeight: style.lineHeight,
			letterSpacing: style.letterSpacing,
			textAlign: style.textAlign,
		}
	}

	createTexture() {
		const texture = new THREE.CanvasTexture(this.canvas)
		this.texture = texture
		return texture
	}

	private px2num(value: string) {
		return value.endsWith('px') ? Number.parseFloat(value.replace('px', '')) : 0
	}

	private randomChar(char: string, isRandom: boolean) {
		if (!isRandom) return char
		if (['+', '-', ' '].includes(char)) return char
		const r = Math.floor(Math.random() * this.chars.length)
		return this.chars[r]
	}

	draw(reloadText = false, isRandomChar = false) {
		const ctx = this.context
		const { width, height } = ctx.canvas
		const { text: t, color, fontFamily, fontWeight, fontSize, letterSpacing, lineHeight, textAlign } = this.textInfo

		const text = reloadText ? this.element.innerText : t

		ctx.clearRect(0, 0, width, height)

		// ctx.strokeStyle = '#fa0'
		// ctx.strokeRect(0, 0, width, height)

		const rgba = color.replace(')', '').split('(')[1].split(',')
		ctx.fillStyle = `rgb(${rgba[0]}, ${rgba[1]}, ${rgba[2]})`
		ctx.textBaseline = 'middle'
		ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`

		const fontSizeNum = this.px2num(fontSize)

		let offsetY = 0
		if (lineHeight.endsWith('px')) {
			const _lineHeight = this.px2num(lineHeight)
			offsetY = (_lineHeight - fontSizeNum) / 2
		}

		const ls = this.px2num(letterSpacing)

		const textLines: string[] = []
		let textLine = ''

		// step1. Calculate the number of words that will fit in the drawing width.
		text.split('\n').forEach(paragraph => {
			paragraph.split(' ').forEach((word, i) => {
				const line = i === 0 ? word : textLine + ' ' + word
				const textLineWidth = ctx.measureText(line).width

				if (width + 1 < textLineWidth + ls * (line.length - 1)) {
					textLines.push(textLine)
					textLine = word
				} else {
					textLine = line
				}
			})

			textLines.push(textLine)
			textLine = ''
		})

		// step2. Drawing considering textAline and letterSpacing.
		textLines.forEach((line, row) => {
			const lineWidth = ctx.measureText(line).width + ls * (line.length - 1)

			let offsetX = 0
			if (textAlign === 'center') {
				offsetX = (width - lineWidth) / 2
			} else if (textAlign === 'end') {
				offsetX = width - lineWidth
			}

			let x = 0
			line.split('').forEach(char => {
				const c = this.randomChar(char, isRandomChar)
				ctx.fillText(c, x + offsetX, offsetY + fontSizeNum / 2 + (fontSizeNum + offsetY * 2) * row)
				x += ctx.measureText(c).width + ls
			})
		})
	}
}
