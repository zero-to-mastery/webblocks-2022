class Dropdown {
    constructor(elem) {
        if (!(elem instanceof HTMLElement)) {
            throw new TypeError("The element must be an HTML element.");
        }

        this.isOpen = false;
        this.elem = elem;
        this.elem.addEventListener('click', () => {
            this.open();
        });
    }

    
    open() {
        if (!this.isOpen) {
            this.elem.querySelector(".dropdown-list").classList.add("show-dropdown");
        } else {
            this.elem.querySelector(".dropdown-list").classList.remove("show-dropdown");
        }
        this.isOpen = !this.isOpen;
    }
}

const dropdown = new Dropdown(document.querySelector(".dropdown"));