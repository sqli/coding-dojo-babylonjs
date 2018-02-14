class App {

    constructor (canvasId) {
        this.canvas = document.getElementById(canvasId);

        this.engine;

        this.map;
        this.user;

        this.engine.runRenderLoop(function () {

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