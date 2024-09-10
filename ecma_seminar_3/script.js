class Employee{
    constructor(name){
        this.name = name;
    }
    displayInfo(){
        console.log(this.name);
    }
}
class Manager extends Employee{
    constructor(name,position,department){
        super(name);
        this.position = position;
        this.department = department;
    }
    showPosition(){
        console.log(this.position)
    }
    displayInfo(){
        console.log(this.name, this.department,this.position)
    }
    
}

const employee1 = new Employee('Tommy');
employee1.displayInfo();
const mangare1 = new Manager('John','proger','development');
mangare1.displayInfo();


///////////////////////////
class Product {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }
}
    


class Order{
    constructor(orderNumber){
        this.orderNumber = orderNumber,
        this.array = [];
    }
    addProduct(product){
        this.array.push(product);
    }
    getTotalPrice(){
        let total = 0;
        this.array.forEach(element => {
          total += element.price;
        });
        return total;
    }
}

const order = new Order("A001");
console.log(order);
const product1 = new Product("Phone",600);
const product2 = new Product("Headphones",400);
order.addProduct(product1);
order.addProduct(product2);
console.log('TOTAL PRICE = ' + order.getTotalPrice())
console.log(order);




