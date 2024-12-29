import { Scene } from 'phaser';
import UIHelpers from '../helpers/UIHelpers';

export class Game extends Scene
{

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.addBrowserWindow();
        UIHelpers.addCenteredText(this, 30, 'hello world');

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }

    private addBrowserWindow() {
        UIHelpers.addWindow(this, 194, 60, 800, 600);
    }
}
