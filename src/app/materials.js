class Materials {

    constructor (scene) {
        this.groundMaterial = new BABYLON.StandardMaterial('groundTexture', scene);
        this.groundMaterial.diffuseTexture = new BABYLON.Texture('assets/images/nasa_moon.jpg', scene);

        this.sphereMaterial = new BABYLON.StandardMaterial('sphereTexture', scene);
        this.sphereMaterial.diffuseTexture = new BABYLON.Texture('assets/images/nasa_earth.jpg', scene);
    }

}