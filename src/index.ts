import { EletronicOrder } from './class/eletronic-order'
import { FurnitureOrder } from './class/furniture-order'

import { CommonShipping } from './class/common-shipping'
import { ExpressShipping } from './class/express-shipping'


const eletronicOrder = new EletronicOrder()
eletronicOrder.value = 100
eletronicOrder.shipping = new CommonShipping()
console.log('Eletronic common shipping: R$', eletronicOrder.calculateShipping())

eletronicOrder.shipping = new ExpressShipping()
console.log('Eletronic express shipping: R$', eletronicOrder.calculateShipping())

const furnitureOrder = new FurnitureOrder()
furnitureOrder.value = 100
furnitureOrder.shipping = new CommonShipping()
console.log('Furniture common shipping: R$', furnitureOrder.calculateShipping())

