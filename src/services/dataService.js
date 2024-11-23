
var catalog = [
    {
        "title": "Strawberry",
        "category": "Fruit",
        "price": 16.93,
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
        "_id": "2947"
    },
    {
        "title": "Banana",
        "category": "Fruit",
        "price": 11.37,
        "image": "/images/banana.jpg",
        "_id": "9478"
    },
    {
        "title": "Grape",
        "category": "Fruit",
        "price": 10.17,
        "image": "/images/Grape.webp",
        "_id": "2369"
    },
    {
        "title": "Carrot",
        "category": "Vegetable",
        "price": 15.44,
        "image": "/images/carrots.webp",
        "_id": "2351"
    },
    {
        "title": "Tomato",
        "category": "Vegetable",
        "price": 13.76,
        "image": "/images/Tomatos.jpg",
        "_id": "3856"
    },
    {
        "title": "Lettuce",
        "category": "Vegetable",
        "price": 9.99,
        "image": "/images/lettuce.jpg",
        "_id": "5546"
    }
];

var categories = ['Fruit','Vegetables'];

class DataService {

    getProducts() {
        // call the server to retrieve products
        
        // hardcore  values
        return catalog;
    }

    getCategories() {
        // call the server

        // hardcoded vvalues
        return categories;
    }
}

export default new DataService;