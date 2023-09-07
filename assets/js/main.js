let your_money = prompt ("Введите сколько у вас денег");
console.log(your_money)
let object_price = prompt ("Введите стоимость товара");
console.log(object_price)
let a = Number(your_money);
let b = Number(object_price);
let difference = (a - b);
console.log(difference)
let c = Math.abs(difference)
if (a > b)
{
    alert('Покупка совершена успешно, ваша сдача ' + difference + ' руб')
}
else
{
    alert('Покупка не совершена, вам не хватает ' + c + ' руб')
}

