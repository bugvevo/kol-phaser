import { Boot } from './scenes/Boot'
import { GameOver } from './scenes/GameOver'
import { StartUp } from './scenes/StartUp'
import { Preloader } from './scenes/Preloader'

import { Game, Types } from 'phaser'

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 1280,
	height: 800,
	parent: 'game-container',
	backgroundColor: '#028af8',
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	scene: [Boot, Preloader, StartUp, GameOver],
}

export default new Game(config)
