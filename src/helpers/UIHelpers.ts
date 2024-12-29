import * as Phaser from 'phaser';

export default class UIHelpers {
	static mainFont = {
		fontFamily: 'Arial',
		fontSize: 18,
		color: '#ffffff',
		align: 'center',
	};

	static addWindow(
		scene: Phaser.Scene,
		x: number,
		y: number,
		width: number,
		height: number
	): Phaser.GameObjects.NineSlice {
		const leftWidth = 121;
		const rightWidth = 170;
		const topHeight = 98;
		const bottomHeight = 26;

		const window = scene.add.nineslice(
			x,
			y,
			'textures',
			'browserWindow',
			width / 2,
			height / 2,
			leftWidth,
			rightWidth,
			topHeight,
			bottomHeight
		);
		window.setScale(2);
		window.setOrigin(0, 0);

		if (height < topHeight + bottomHeight) {
			console.warn(
				`--- Window height is too small for asset browserWindow; minimum is ${
					topHeight + bottomHeight
				} ---`
			);
		}
		if (width < leftWidth + rightWidth) {
			console.warn(
				`--- Window width is too small for asset browserWindow; minimum is ${
					leftWidth + rightWidth
				} ---`
			);
		}

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
