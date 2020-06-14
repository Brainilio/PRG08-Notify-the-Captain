class Captain extends HTMLElement{
    
    constructor(pirateShip : PirateShip) {
        super()

        pirateShip.appendChild(this)
    }
}

window.customElements.define("captain-component", Captain as any)