class Item {
    constructor(id, name, stock) {
        this.id = id;
        this.name = name;
        this.stock = stock;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getStock() {
        return this.stock;
    }

    addStock(num) {
        this.stock += num;
    }

    sale(num) {
        if(this.stock < num) {
            throw new Error('在庫が足りません')
        } else {
            this.stock -= num;            
        }
    }        
}

class Chair extends Item {
    constructor(id, name, stock, isUsed) {
        super(id, name, stock);
        this.isUsed = isUsed;
    }

    getIsUsed() {
        return this.isUsed;
    }
}

let chair1 = new Chair('0001', 'ハイチェア', 20, false);
let chair2 = new Chair('0002', 'アームレスチェア', 15, true);
let chair3 = new Chair('0003', 'イージーチェア', 5, true);

let itemList = [chair1, chair2, chair3]

let totalUsedStock = 0;
for(let i = 0; i <itemList.length; i++) {
    if(itemList[i].getIsUsed());{
        totalUsedStock += itemList[i].getStock();
    }
}
console.log('中古の在庫数:' + totalUsedStock);