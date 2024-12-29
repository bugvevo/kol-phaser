import { Scene } from 'phaser';
import Colors from '../helpers/Colors';

export class StartupScreen extends Scene {
	constructor() {
		super('StartupScreen');
	}

	create() {
		const camera = this.cameras.main;

		camera.fadeIn(3000);
		camera.setBackgroundColor('000000');

		this.addStartupText();

		camera.on('camerafadeincomplete', () => {
			this.scene.start('PhaseOne');
		});
	}

	private addStartupText() {
		this.add
			.text(
				this.renderer.width / 2,
				this.renderer.height / 2,
				'DELL (startup screen...)',
				{
					fontFamily: 'Arial Black',
					fontSize: 42,
					color: Colors.dellGreen,
					align: 'center',
				}
			)
			.setOrigin(0.5);
	}
}
