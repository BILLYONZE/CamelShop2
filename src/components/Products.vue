<template>
    <h1>Delicacies</h1>
    <p>{{ total }}</p>
    <v-card
       class="mx-auto" 
       width="1000">
        <v-card-text class="bg-surface-light pt-4">
        <v-card-title>Cart
            {{ total }}
            <v-btn
            color="orange"
            text="checkout"
            ></v-btn>
        </v-card-title>
        <v-row>
        <v-col cols="12" md="3"  v-for="product in cartItems" :key=product>
        <v-card
    class="mx-auto my-12"
    max-width="374">
    <v-img
      height="250"
      :src="product.itemImage"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{product.itemName}}</v-card-title>
    </v-card-item>

    <v-card-text>
    
      <div class="my-4 text-subtitle-1">
       {{product.itemPrice}}
      </div>

      <div>{{product.description}}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-orange-lighten-2"
        text="Remove"
        block
        border
       @click="removeFromCart(product)"
    ></v-btn></v-card-actions>
  </v-card>
        </v-col>
        </v-row>
      </v-card-text>
</v-card>
    <div>
        <v-row>
        <v-col cols="12" md="3"  v-for="product in stockDetails" :key=product>
        <v-card
    class="mx-auto my-12"
    max-width="374">
    <v-img
      height="250"
      :src="product.itemImage"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{product.itemName}}</v-card-title>
    </v-card-item>

    <v-card-text>
    
      <div class="my-4 text-subtitle-1">
       {{product.itemPrice}}
      </div>

      <div>{{product.description}}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-orange-lighten-2"
        text="Add to cart"
        block
        border
       @click="addToCart(product)"
    ></v-btn></v-card-actions>
  </v-card>
        </v-col>
        </v-row>
    </div>
</template>
<script>
export default{
    data(){
        return{
            products: [1,2,3,4,5,6,7,8,9],
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
            },
            
      ],
      total:0,
      cartItems:[]
    }
},
methods:{
                calculateTotal(itemPrice){
                     this.total += itemPrice
                },
                addToCart(product){
                    this.cartItems.push(product)
                    this.calculateTotal(product.itemPrice)
                },
                removeFromCart(product){
                    this.cartItems.pop(product)
                    this.total -= product.itemPrice
                }
            }
}

</script>