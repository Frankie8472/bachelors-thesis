import 'phaser';
import {BaseScene} from './BaseScene';

export class WelcomeScene extends BaseScene {

    constructor() {
        super('WelcomeScene');
    }

    init(): void {

    }

    preload(): void {
        // Load UI
        this.load.image('background', 'assets/ui/background1.png');
        this.load.image('title', 'assets/ui/title.png');
        this.load.image('finger', 'assets/ui/finger.png');

        this.load.audio('welcome', 'assets/ui_audio/welcome.mp3');
    }

    create(): void {
        // Bring MenuUI to the front and initialize transition
        this.game.scene.sendToBack(this.getKey());
        this.transitionIn();

        this.setBackground();
        this.setTitle();
        this.initInput();
        this.initAudio();
    }

    /**
     * Function for initializing the background
     */
    private setBackground() {
        let background = this.add.sprite(0, 0, 'background');
        background.setOrigin(0, 0);
        background.setDisplaySize(this.cameras.main.width, this.cameras.main.height);
    }

    /**
     * Function for initializing title and animation
     */
    private setTitle() {
        // Add title
        const title: Phaser.GameObjects.Sprite = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'title');
        const titleScale: number = this.imageScalingFactor(4/6*this.cameras.main.width, title.width, title.height);
        title.setOrigin(0.5, 0.5);
        title.setScale(titleScale, titleScale);
        title.setInteractive({ cursor: 'pointer' });

        const titleTween: Phaser.Tweens.Tween = this.tweens.add({
            targets: title,
            alpha: 0.7,
            ease: 'Linear',
            repeat: 1000,
            yoyo: true,
            duration: 1000
        });

        // Add finger
        const finger: Phaser.GameObjects.Sprite = this.add.sprite(this.cameras.main.width / 2, 3/4*this.cameras.main.height, 'finger');
        const fingerScale: number = this.imageScalingFactor(1/6*this.cameras.main.height, finger.width, finger.height, true);
        finger.setOrigin(0.5, 0.5);
        finger.setScale(fingerScale, fingerScale);
        finger.setInteractive({ cursor: 'pointer' });

        const fingerTween: Phaser.Tweens.Tween = this.tweens.add({
            targets: finger,
            alpha: 0.1,
            ease: 'Linear',
            repeat: 1000,
            yoyo: true,
            duration: 1000
        });
    }

    /**
     * Function for initializing event actions
     */
    private initInput() {
        this.input.on('pointerdown', function(){
            this.input.on('pointerup', () => this.transitionOut('LevelMenuScene'));
        }, this);
    }

    /**
     * Function for initializing soundeffects
     */
    private initAudio() {
        this.sound.add('welcome').play('', {loop: true});
    }
}
