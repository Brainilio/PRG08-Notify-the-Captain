/// <reference path="gameobject.ts" />

class Horn extends GameObject implements Subject {

    private observers: Observer[] = [];

    constructor() {
        super()

        this.addEventListener('click', this.NotifyEveryone)
        this._position = new Vector(
            window.innerWidth / 2 - this.clientWidth / 2,
            window.innerHeight / 2 - this.clientHeight / 2)

        this.draw()
    }

    // register observers
    register(observer: Observer): void {
        this.observers.push(observer)
        console.log("I just registered: " + observer)
    }

    //unregister the observers
    unregister(observer: Observer): void {
        let index = this.observers.indexOf(observer)
        this.observers.splice(index, 1);
        console.log("I just unregistered: " + observer)

    }

    //methods for observers
    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.notify();
        }
    }

    NotifyEveryone() {
        this.notifyObservers();
    }
}

window.customElements.define("horn-component", Horn)