import { Boot } from './scenes/Boot';
import { Game as MainGame } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';

import { Game, Types } from 'phaser';

const config: Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 1280,
	height: 960,
	zoom: 1,
	parent: 'game-container',
	backgroundColor: '#028af8',
	pixelArt: true,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		min: { width: 640, height: 480 },
	},
	callbacks: {
		postBoot: function (game) {
			game.scale.displaySize.setSnap(320, 240);
			game.scale.refresh();
		},
	},
	scene: [Boot, Preloader, MainMenu, MainGame, GameOver],
};

export default new Game(config);
