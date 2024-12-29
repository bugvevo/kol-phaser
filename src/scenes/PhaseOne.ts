import { Scene } from 'phaser';
import UIHelpers from '../helpers/UIHelpers';
import PostData from '../data/PostData';

export class PhaseOne extends Scene {
	constructor() {
		super('PhaseOne');
	}

	create() {
		this.addBrowserWindow();
		this.addDesktopIcons();

		this.input.once('pointerdown', () => {
			this.scene.start('GameOver');
		});
	}

	private addPosts(x: number, y: number, browserWidth: number) {
		const browserInnerWidth =
			browserWidth -
			UIHelpers.browserLeftOffset -
			UIHelpers.browserRightOffset;

		PostData.posts.forEach((post, index) => {
			const currentY = y + index * 100;

			this.add
				.rectangle(x, currentY, browserInnerWidth, 80, 0xff0000, 1)
				.setOrigin(0.5, 0);
			this.add
				.text(x, currentY, post.name, UIHelpers.mainFont)
				.setOrigin(0.5, 0);
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
		const leftEdgeX = 194;
		const topEdgeY = 60;
		const browserWidth = 1000;
		const centerX =
			leftEdgeX + browserWidth / 2 + UIHelpers.browserLeftOffset;

		this.addPosts(
			centerX,
			topEdgeY + UIHelpers.browserTopOffset,
			browserWidth
		);

		UIHelpers.addWindow(this, leftEdgeX, topEdgeY, 1000, 800);
	}
}
