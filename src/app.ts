import "phaser";
import GameConfig = Phaser.Types.Core.GameConfig;
import RenderConfig = Phaser.Types.Core.RenderConfig;
import { DropDownMenu } from './dropDownMenu';
import { WelcomeScene } from './welcomeScene';
import { LevelMenuScene } from './levelMenuScene';
import { GameSceneLoader } from './gameSceneLoader';
import { GameScene } from './gameScene';
import { ScoreScene } from './scoreScene';
import { SortingScene } from './sortingScene';
import { SortingSceneLoader } from './sortingSceneLoader';
import { TransitionScene } from './transitionScene';

const renderConfig: RenderConfig = {
    antialias: true,
    pixelArt: false
};

const config: GameConfig = {
    title: "Gotscha!",
    parent: "game",
    type: Phaser.AUTO,
    scene: [DropDownMenu, TransitionScene, WelcomeScene, LevelMenuScene, GameSceneLoader, GameScene, ScoreScene, SortingSceneLoader, SortingScene],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    backgroundColor: "#000000",

    render: renderConfig,

    scale: {
        parent:'phaser-example',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.screen.width,
        height: window.screen.height

    }
};

export class Gotscha extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
};

window.onload = () => {
    let game = new Gotscha(config);
};
