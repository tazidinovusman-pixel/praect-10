
// array [] -- object {}
const categories = [
  {
    image: "../images/breakfast.png",
    name: "Breakfast"
  },
  {
    image: "../images/vegan.png",
    name: "Vegan"
  },
  {
    image: "../images/meat.png",
    name: "Meat"
  },
  {
    image: "../images/dessert.png",
    name: "Dessert"
  },
  {
    image: "../images/lunch.png",
    name: "Lunch"
  },
  {
    image: "../images/chocolate.png",
    name: "Chocolate"
  }
]
//  DOM
const categoriesBottom = document.querySelector(".categories-bottom");
categoriesBottom.innerHTML = "";
for (const category of categories) {
  categoriesBottom.innerHTML += `
      <div class="category-card">
        <img src="${category.image}" alt="">
        <p>${category.name}</p>
      </div>`
}
const posts = [
  "../images/i1.png",
  "../images/i2.png",
  "../images/i3.png",
  "../images/i4.png",
]
const instagram = document.querySelector(".instagram-cards");
for(const post of posts){
  instagram.innerHTML+=`<img src="${post}" alt="">`;
}