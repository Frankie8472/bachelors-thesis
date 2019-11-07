import "phaser";

export class GameSceneLoader extends Phaser.Scene {
    key: string = "GameSceneLoader";

    setLevel: number;

    constructor() {
        super({
            key: "GameSceneLoader"
        });
    }

    init(data): void {
        this.setLevel = data.setLevel;
    }

    preload(): void {
        // Load json
        this.load.json("objects", "assets/geometrical_objects/geometrical_objects.json");
    }

    create(): void {
        this.game.scene.start("GameScene", { 'jsonObject': this.cache.json.get("objects"), 'setLevel': this.setLevel});
        this.game.scene.stop(this.key);
        return;
    }

    update(time: number): void {

    }

}
