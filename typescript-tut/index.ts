const menu = [
  {name: "Margherita", price: 8},
  {name: "Pepperoni", price: 10},
  {name: "Hawaiian", price: 10},
  {name: "Veggie", price: 9},
]

let cashInRegister = 100
let id = 1
const orderQueue = []

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
  const result = menu.find(menu => menu.name === pizzaName)

  if (!result) {
    console.error(`${pizzaName} does not exit int the menu.`)
    return
  }
  cashInRegister += result.price
  
  const newOrder = {id: id, pizza: result.name, status: "ordered"}
  orderQueue.push(newOrder)
  id++
  return newOrder
}
placeOrder("Pepperoni")
placeOrder("Veggie")
placeOrder("Margherita")

function completeOrder(orderId) {
  const foundOrder = orderQueue.find(order => orderQueue.id = orderId)
  foundOrder.status = "completed"

  console.log(foundOrder)
}
completeOrder("1")
console.log(cashInRegister, orderQueue)