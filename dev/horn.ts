/// <reference path="gameobject.ts" />

class Horn extends GameObject {
    
    constructor() {
        super()

        this._position = new Vector(
            window.innerWidth / 2 - this.clientWidth / 2,
            window.innerHeight / 2 - this.clientHeight / 2)

        this.draw()
    }
}

window.customElements.define("horn-component", Horn)