class User {

    constructor(game, canvas) {
        this.scene = game.scene;
        this.initCamera(this.scene, canvas);
    }

    initCamera(scene, canvas) {
        this.camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);
        this.camera.setTarget(BABYLON.Vector3.Zero());
        this.camera.attachControl(canvas, true);
    }

}