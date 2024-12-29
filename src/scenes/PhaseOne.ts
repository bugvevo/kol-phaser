import { Scene } from 'phaser';
import UIHelpers from '../helpers/UIHelpers';

export class PhaseOne extends Scene {
	constructor() {
		super('PhaseOne');
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
		const x = 76;
		const icons = [
			{
				textureName: 'iconKernia',
				text: 'Kernia On-Line',
			},
			{
				textureName: 'iconDoomscrolls',
				text: 'Doomscrolls',
			},
			{
				textureName: 'readme',
				text: 'README.txt',
			},
		];

		icons.forEach((iconData, index) => {
			const currentY = startingY + index * 126;
			const iconHeight = 64;

			this.add
				.image(x, currentY, 'textures', iconData.textureName)
				.setOrigin(0.5, 0)
				.setScale(2);

			this.add
				.text(
					x,
					currentY + iconHeight,
					iconData.text,
					UIHelpers.mainFont
				)
				.setOrigin(0.5, 0);
		});
	}

	private addBrowserWindow() {
		UIHelpers.addWindow(this, 194, 60, 1000, 800);
	}
}
