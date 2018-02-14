class Map {

    constructor (engine) {
        this.initScene(engine);

        let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);

        let sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, this.scene);
        sphere.position.y = 3;

        let ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, this.scene);;
    }

    initScene(engine) {
        this.scene = new BABYLON.Scene(engine);
        this.scene.clearColor = new BABYLON.Color3(0, 0, 0);
    }

}