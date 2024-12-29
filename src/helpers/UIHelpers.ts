import * as Phaser from 'phaser';

export default class UIHelpers {
	static mainFont = {
		fontFamily: 'Arial Black',
		fontSize: 38,
		color: '#ffffff',
		stroke: '#000000',
		strokeThickness: 8,
		align: 'center',
	};

	static addWindow(
		scene: Phaser.Scene,
		x: number,
		y: number,
		width: number,
		height: number
	): Phaser.GameObjects.NineSlice {
		const leftWidth = 136;
		const rightWidth = 177;
		const topHeight = 105;
		const bottomHeight = 54;

		const window = scene.add.nineslice(
			0,
			0,
			'textures',
			'browserWindow',
			width,
			height,
			leftWidth,
			rightWidth,
			topHeight,
			bottomHeight
		);

		if (height < topHeight + bottomHeight) {
			console.warn(
				'--- Window height is smaller than recommended for ninesliced asset browserWindow ---'
			);
		}
		if (width < leftWidth + rightWidth) {
			console.warn(
				'--- Window width is smaller than recommended for ninesliced asset browserWindow ---'
			);
		}

		window.setPosition(x, y);

		return window;
	}

	static addCenteredText(
		scene: Phaser.Scene,
		y: number,
		text: string
	): Phaser.GameObjects.Text {
		const textObject = scene.add
			.text(scene.renderer.width / 2, y, text, UIHelpers.mainFont)
			.setOrigin(0.5, 0.5);

		return textObject;
	}
}
