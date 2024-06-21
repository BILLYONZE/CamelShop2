<script>
export default{
data() {
    return {
      image: 'src/assets/Images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash (1).jpg',
url: 'https://www.vuejs.org/',
stockDetails : [
{
itemNumber: 1,
itemName : "Sweets",
itemPrice : 5,
itemQuantity : 30,
itemImage:'src/assets/Images/customerbox-aXq1oCCjlVM-unsplash.jpg'
},
{
itemNumber: 27466,
itemName : "Lollipop",
itemPrice : 10,
itemQuantity : 4,
itemImage: 'src/assets/Images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg'
}
],
}
},
     message:".Hello World!",
      product: 'Sweets',
      url: 'https://www.vuejs.org/',
      //simple array demo
       stock: ["Sweets", "Lollipop"],
      //Object demo
        stockDetails:[
      {
                itemNumber: 1,   
                itemName : "Sweets",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: 'customerbox-aXq1oCCjlVM-unsplash.jpg'
            },
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: 'jamie-albright-AHF_ZktTL6Q-unsplash.jpg'
            }
        ],
        totalStock: 100
      }
    
</script>

<template>
  <v-card
    class="mx-auto"
    
    width="1000"
  >
    
    <v-carousel>
  <v-carousel-item
    src="src/assets/Images/customerbox-aXq1oCCjlVM-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="src/assets/Images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="src/assets/Images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash (1).jpg"
    cover
  ></v-carousel-item>
</v-carousel>
  </v-card>
  <v-card align="center">
        <v-card-item>
          <v-card-title>BURST YOU TASTE BUDS</v-card-title>

          <v-card-subtitle>Be able to access all the different kind of 🐪CANDY🍬</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Certainly! Desserts are the ultimate indulgence, capable of brightening up even the gloomiest of days. Whether it’s a slice of cake, a scoop of ice cream, or a warm chocolate chip cookie, there’s something magical about that sweet finale to a meal. Desserts aren’t just about taste and texture; they’re also a source of inspiration. From intricate designs to delicious flavors, desserts are truly works of art. As the saying goes, “Eat dessert first.” Life is too short not to enjoy these simple pleasures, and there’s no better way to bring people together than with a delightful dessert
        </v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">What our customers say</h3>
      <v-divider></v-divider>
      <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Billyonze💸💲"
        text="The info was very well specific.The Delivery was quick and Friendly👌 "
        title="Good Customer Service👍👍"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
         Personal Experience
        </template>

        <template v-slot:subtitle>
         Mr.Maina
        </template>

        <template v-slot:text>
          I got the valentine package and it never disappointed❤️🍫.We really enjoyed them together
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a card subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
   </v-row>
</template>
