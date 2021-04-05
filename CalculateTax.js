function subTotal() {
    price = document.getElementById("price").value;
    tax = document.getElementById("tax").value;
    document.getElementById("result").innerHTML =(price*1)+((price*1) * (tax*1) * 0.01);
  }