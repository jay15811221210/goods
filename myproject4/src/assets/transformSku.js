
export default class TransformSku {
    constructor(data){
        this.transform(data)
    }
    transform(data){
        let sku = {}
        let transformSku = {}
        let renderSku = []
        let len = 0
        data.props.forEach(element => {
            sku[element.name] = {
                names: element.items,
                id: element.id
            }
        })
        for(let i in sku) {
            sku[i].names.forEach(element => {
                if (!transformSku[i]) transformSku[i] = {}
                transformSku[i][element] = []
                data.sku.forEach(eles => {
                    eles.value.forEach(ele => {
                        if (ele.prop_id == sku[i].id && ele.value == element) {
                            let key = eles.value.filter(item => {
                                return item.prop_id != sku[i].id
                            })[0].value
                            transformSku[i][element][key] = {
                                name: key,
                                market_price: eles.market_price,
                                price: eles.price,
                                stock: eles.stock,
                                skucode: eles.skucode
                            }
                        }
                    })
                })
            })
        }
        for (let i in transformSku) {
            let obj = {
                name: i,
                item: []
            }
            for (let key in transformSku[i]) {
                obj.item.push({
                    name: key,
                    status: true,
                    selected: false
                })
            }
            len++
            renderSku.push(obj)
        }
        this.$renderSku = renderSku
        this.$transformSku = transformSku
        this.length = len
        return this
    }

    contrast(firstname, lastname){
        this.$renderSku.forEach(element => {
            if (element.name !== firstname) {
                for (let i in this.$transformSku[firstname][lastname]) {
                    let curx = this.$transformSku[firstname][lastname][i]
                    element.item.forEach(item => {
                        if (item.name == i) {
                            item.status = curx.stock > 0 ? true : false
                        }
                    })
                }
            }
        })
        return this.$renderSku
    }

    getSkuCode(val1, val2){
        if(val1 && val2){
            for(let i in this.$transformSku){
                if (this.$transformSku[i][val1]){
                    return this.$transformSku[i][val1][val2].skucode
                } else if (this.$transformSku[i][val2]){
                    return this.$transformSku[i][val2][val1].skucode
                }
            }
            return '没有匹配的skuCode'
        }
        return '没有匹配的skuCode'
    }

    getPrice(val1, val2){
        if (val1 && val2) {
            for (let i in this.$transformSku) {
                if (this.$transformSku[i][val1]) {
                    return this.$transformSku[i][val1][val2].price
                } else if (this.$transformSku[i][val2]) {
                    return this.$transformSku[i][val2][val1].price
                }
            }
            return 0
        }
    }

    getStock(val1, val2){
        if (val1 && val2) {
            for (let i in this.$transformSku) {
                if (this.$transformSku[i][val1]) {
                    return this.$transformSku[i][val1][val2].stock
                } else if (this.$transformSku[i][val2]) {
                    return this.$transformSku[i][val2][val1].stock
                }
            }
            return 0
        }
    }

}
