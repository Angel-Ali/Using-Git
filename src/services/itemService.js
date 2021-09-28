
var data = [
{
    _id: "oh12389asdgf",
    title: "Spare Rib",
    price: 6.00,
    category: "pork",
    image: "spare1.jpg",
    discount: 3,
    minimun: 6
},

{
    _id: "oh123rssdgf",
    title: "Baby Backs",
    price: 5.00,
    category: "pork",
    image: "babyback.jpg",
    discount: 3,
    minimun: 6
},

{
    _id: "osdfsdasdgf",
    title: "Beef Short",
    price: 9.00,
    category: "beef",
    image: "beefrib.jpg",
    discount: 3,
    minimun: 6
},

{
    _id: "osdfsdasdgf",
    title: "Deer Sausage",
    price: 5.00,
    category: "Sausage",
    image: "sausage1.jpg",
    discount: 3,
    minimun: 6
},

{
    _id: "osdfsdasdgf",
    title: "Chicken",
    price: 6.00,
    category: "poultry",
    image: "chicken3.jpg",
    discount: 3,
    minimun: 6
},

{
    _id: "osdfsdasdgf",
    title: "Turkey",
    price: 9.00,
    category: "poultry",
    image: "turkey1.jpg",
    discount: 3,
    minimun: 6
},

{
    _id: "osdfsdasdgf",
    title: "Ribeye Steak",
    price: 9.00,
    category: "beef",
    image: "steak1.jpg",
    discount: 3,
    minimun: 6
},

{
    _id: "osdfsda778sdgf",
    title: "Wings",
    price: 4.00,
    category: "poultry",
    image: "wing1.jpg",
    discount: 3,
    minimun: 6
},

{
    _id: "osdfsda4978sdgf",
    title: "Chicken Sausage",
    price: 4.00,
    category: "sausage",
    image: "chiksausage1.jpg",
    discount: 3,
    minimun: 6
},

{
    _id: "osdjhhda778sdgf",
    title: "Turkey Legs",
    price: 7.00,
    category: "poultry",
    image: "tleg.jpg",
    discount: 3,
    minimun: 6
},


];




class ItemService {
getCatalog() {
    return data;
  }
}
// displays
export default ItemService;
