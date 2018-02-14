class App {

    constructor (canvasId) {
        this.canvas = document.getElementById(canvasId);

        this.engine = new BABYLON.Engine(this.canvas, true);

        this.map = new Map(this.engine);
        this.user = new User(this, this.canvas);

        this.engine.runRenderLoop(function () {
            this.map.scene.render();
        }.bind(this));

        window.addEventListener('resize', function () {
            if (this.engine) {
                this.engine.resize();
            }
        }.bind(this), false);
    }

}

document.addEventListener('DOMContentLoaded', function () {
    new App('renderCanvas');
}, false);