import 'phaser';
import {BaseScene} from './BaseScene';

export class RestrictedSortingSceneLoader extends BaseScene {
    setLevel: number;

    constructor() {
        super('RestrictedSortingSceneLoader');
    }

    init(data): void {
        this.setLevel = data.setLevel;
    }

    preload(): void {
        // Load json
        this.load.json('objects', 'assets/geometrical_objects/geometrical_objects.json');
    }

    create(): void {
        this.game.scene.start('RestrictedSortingScene', {'jsonObject': this.cache.json.get('objects'), 'setLevel': this.setLevel});
        this.game.scene.stop(this.key);
        return;
    }

    update(time: number): void {

    }

}
