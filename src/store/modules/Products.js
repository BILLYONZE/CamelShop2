const state = {
    stockDetails : [
        {
            itemNumber: 1,
            itemName : "Lover❤️🍫Surprise Box",
            itemPrice : 5,
            itemQuantity : 30,
            itemImage: 'public/Images/Valentines.jpg',
            description: "Share the Chocolate goodness with your lover❤️🍫❤️"
        },
        {
            itemNumber: 2,
            itemName : "Lollipop",
            itemPrice : 10,
            itemQuantity : 4,
            itemImage: 'public/Images/Lollipops.jpg',
            description: "sweeter than ever.tasty as ever🍭🍭"
        },
        {
            itemNumber: 3,
            itemName : "Cookies",
            itemPrice : 50,
            itemQuantity : 50,
            itemImage: 'public/Images/Cookies.jpg',
            description: "Enjoy every crunch🍪🍪"
        },
        {
            itemNumber: 4,
            itemName : "Chewing Gum",
            itemPrice : 10,
            itemQuantity : 1000,
            itemImage: 'public/Images/Chewing gums.jpg',
            description: "Chewing gum is like a snack for your jaw.Many Gums. Different And Longlasting Flavour"
        },
        {
            itemNumber: 5,
            itemName : "M&Ms",
            itemPrice : 10,
            itemQuantity : 1000,
            itemImage: 'public/Images/M&Ms.jpg',
            description: "MYmyyyyMY.Enjoy candy chocolates of many colours😋"
        },
        {
            itemNumber: 6,
            itemName : "Pudding",
            itemPrice : 55,
            itemQuantity : 250,
            itemImage: 'public/Images/Pudding.jpg',
            description: "enjoy the😋soft and creammy Taste"
        },
        {
            itemNumber: 7,
            itemName : "LoveCandy",
            itemPrice : 15,
            itemQuantity : 1050,
            itemImage: 'public/Images/Heart Candy.jpg',
            description: "Enjoy Your Love Of Candy together❤️❤️"
        },
       {
            itemNumber: 8,
            itemName : "Gummies😋Bears🐻🐻‍❄️",
            itemPrice : 200,
            itemQuantity : 300,
            itemImage: 'public/Images/Gummy bears.jpg',
            description: "🐻Gummy Bears,Yummy Bears🐻‍❄️"
        },
        {
            itemNumber: 9,
            itemName : "Cake Chocolateey Heaven",
            itemPrice : 250,
            itemQuantity : 30,
            itemImage: 'public/Images/Caramel Chocolate Cake.jpg',
            description: "Ooooh The Chocolaty🍫🍰 Goodness🤎"
        }
        
  ]
}
const getters = {
    stock : (state) =>state.stockDetails
}
const actions = {

}
const mutation = {

}
 export default {
    state,
    getters,
    actions,
    mutation,
    }