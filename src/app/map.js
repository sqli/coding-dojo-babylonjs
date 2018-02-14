class Map {

    constructor (engine) {
        this.initScene(engine);

        let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);
        light.intensity = 0.3;

        let spotLight = new BABYLON.SpotLight('spotLight1', new BABYLON.Vector3(0, 20, 0), new BABYLON.Vector3(0, -1, 0), 1.2, 24, this.scene);
        let shadowGenerator = new BABYLON.ShadowGenerator(2048, spotLight);
        shadowGenerator.usePoissonSampling = true;

        let materials = new Materials(this.scene);

        let sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, this.scene);
        sphere.position.y = 3;

        sphere.scaling.x = -1;
        sphere.scaling.y = -1;
        sphere.material = materials.sphereMaterial;
        shadowGenerator.getShadowMap().renderList.push(sphere);

        let ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, this.scene);
        ground.material = materials.groundMaterial;
        ground.receiveShadows = true;
    }

    initScene(engine) {
        this.scene = new BABYLON.Scene(engine);
        this.scene.clearColor = new BABYLON.Color3(0, 0, 0);
    }

}