class Map {

    constructor (engine) {
        this.initScene(engine);
    }

    initScene(engine) {
        this.scene = new BABYLON.Scene(engine);
        this.scene.clearColor = new BABYLON.Color3(0, 0, 0);
    }

}