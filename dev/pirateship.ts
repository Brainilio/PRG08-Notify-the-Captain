/// <reference path="ship.ts" />
/// <reference path="captain.ts" />


class PirateShip extends Ship implements Observer {
    // Fields
    private captain: Captain
    private ShouldNotify: Boolean = false;
    private subject: Subject;

    constructor(subject: Subject) {
        super()

        this.captain = new Captain(this)
        this.addEventListener('click', this.changeStatus)
        this.draw()

        // subject 
        this.subject = subject
    }

    notify(): void {
        //maak de captain wakker
        this.captain.style.backgroundImage = `url(images/emote_alert.png)`;
    }

    changeStatus() {
        //toggle the boolean
        this.ShouldNotify = !this.ShouldNotify

        // if this.shouldnotify = true, it would register the subject
        if (this.ShouldNotify) {
            this.subject.register(this);
            this.style.backgroundImage = `url(images/ship4.png)`
        }
        //if this should notify = false, it would unregister the subject; this won't bug because by clicking the ship once, it would already trigger the boolean to be true
        //thus making it able to compare the variable with the boolean ;) 
        if (this.ShouldNotify == false) {
            this.style.backgroundImage = `url(images/ship-unregistered.png)`
            this.subject.unregister(this)
        }
    }

}

window.customElements.define("ship-component", PirateShip as any)