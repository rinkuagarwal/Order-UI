let orders = [];

function createOrder() {
    let count = +prompt("Enter the number of orders");
    for (let index = 0; index < count; index++) {
        let order = {
            itemName: document.getElementById("itemName").value,
            price:  document.getElementById("price").value,
            type:  document.getElementById("type").value,
            tax: document.getElementById("tax").value
        }
        orders.push(order);
    }
    displayOrders();
    
}

function displayOrders() {
    let ordersPrint = '<tbody';
    for (let index = 0; index < orders.length; index++) {
        ordersPrint += '<tr>' + '<td>' + orders[index].itemName+ '</td>' + '<td>' + orders[index].price + '</td>' + '<td>' + orders[index].type + '</td>' +'<td>' + orders[index].tax+ '</td>' + '</tr>';
    }
    ordersPrint += '</tbody>';
    document.getElementById("orders").innerHTML = ordersPrint;
}