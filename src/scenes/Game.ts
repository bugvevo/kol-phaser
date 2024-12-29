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
		const icons = ['iconKernia', 'iconDoomscrolls', 'readme'];

		icons.forEach((iconTexture, index) => {
			this.add
				.image(30, startingY + index * 82, 'textures', iconTexture)
				.setOrigin(0, 0)
				.setScale(2);
		});
	}

	private addBrowserWindow() {
		UIHelpers.addWindow(this, 194, 60, 800, 600);
	}
}
