import { Scene } from 'phaser'
import { Colors } from '../colors'

export class StartUp extends Scene {
	camera: Phaser.Cameras.Scene2D.Camera
	background: Phaser.GameObjects.Image
	msg_text: Phaser.GameObjects.Text

	constructor() {
		super('StartUp')
	}

	create() {
		this.camera = this.cameras.main

		this.cameras.main.fadeIn(6000)

		this.camera.setBackgroundColor('000000')

		this.msg_text = this.add.text(512, 384, 'HELL (startup screen...)', {
			fontFamily: 'Arial Black',
			fontSize: 42,
			color: Colors.dellGreen,
			align: 'center',
		})
		this.msg_text.setOrigin(0.5)

		this.camera.on('camerafadeincomplete', () => {
			this.scene.start('GameOver')
		})
	}
}
