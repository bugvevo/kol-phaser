import { Scene } from 'phaser';
import UIHelpers from '../helpers/UIHelpers';

export class Game extends Scene {
	constructor() {
		super('Game');
	}

	create() {
		this.addBrowserWindow();
		this.addDesktopIcons();
		UIHelpers.addCenteredText(this, 30, 'hello world');

		this.input.once('pointerdown', () => {
			this.scene.start('GameOver');
		});
	}

	private addDesktopIcons() {
		const startingY = 60;
		const x = 70;
		const icons = ['iconKernia', 'iconDoomscrolls', 'readme'];

		icons.forEach((iconName, index) => {
			const currentY = startingY + index * 106;
			const iconHeight = 64;

			this.add
				.image(x, currentY, 'textures', iconName)
				.setOrigin(0.5, 0)
				.setScale(2);

			this.add
				.text(x, currentY + iconHeight, iconName, UIHelpers.mainFont)
				.setOrigin(0.5, 0);
		});
	}

	private addBrowserWindow() {
		UIHelpers.addWindow(this, 194, 60, 800, 600);
	}
}
