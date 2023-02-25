import items from "./Items";

export default class Inventory {
    constructor() {
        this.maxColumns = 9;
        this.maxRows = 3;
        this.selected = 0;

        this.items = {
            0: { name: 'pickaxe', quantity: 1 },
            2: { name: 'stone', quantity: 3 },
            5: {name: 'shovel', quantity: 5 },
        }
        this.addItem({ name: 'pickaxe', quantity: 2 })
    }

    addItem(item) {
        let existingKey = Object.keys(this.items).find(key => this.items[key], name === item.name);
        if (existingKey) {
            this.items[existingKey].quantity += item.quantity;
        } else {
            for (let index = 0; index < this.maxColumns * this.maxRows; index++) {
                let existingItem = this.items[index];
                if (!existingItem) {
                    this.items[index] = item;
                    break;
                }
            }
        }
    }

    getItem(index) {
        return this.items[index];
    }

    moveItem(start, end) {
        if (start ===  end || this.items[end]) return;
        this.items[end] = this.items[start];
        delete this.items[start];
    }

    get selectedItem(){
        return this.items[this.selected];
    }

    getItemFrame(item){
        return items[item.name].frame;
    }
}