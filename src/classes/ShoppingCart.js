
class  ShoppingCart{
    constructor(){
        this.items = [];
    }
    addItem(item){
        this.items.push(item);
    }
    getItems(){
        return this.items;
    }
    clear(){
        this.items = [];
    }
    getTotal(){
        let total = 0;
        for(let i = 0; i < this.items.length; i++){
            total += this.items[i].price;
        }
        return total;
    }
}

export default ShoppingCart;