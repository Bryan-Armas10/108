
var catalog = [
    {
        "title": "Strawberry",
        "category": "Fruit",
        "price": 16.93,
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
        "_id": "2947"
    },
    {
        "title": "Cabbage",
        "category": "Vegetable",
        "price": 11.37,
        "image": "/images/banana.jpg",
        "_id": "94787"
    },
];


class DataService {

    getProducts() {
        // call thhe server to retrieve products
        
        // hardcore  values
        return catalog;
    }
}

export default new DataService;