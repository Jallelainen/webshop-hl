import axios from 'axios';

class ProductService {

    //Method that gets all products
    async getProducts(setProducts){

        return await axios
            .get('https://webshop.wm3.se/api/v1/shop/products.json?media_file=true')
            .then(function (response){
                setProducts(response.data.products);
                
            }).catch(function (error){

                console.log(error);
            }).then(function (response){

            });
    }

    //Method that use the users input to search the products. No optional params used.
    async searchProducts(setProducts, searchString){

        return await axios
        .get('https://webshop.wm3.se/api/v1/shop/products/search.json?q=' + searchString)
        .then(function (response){
            setProducts(response.data.products);

        }).catch(function (error){
            console.log(error)
        }).then(function (response){
            
        });
    }


}

export default new ProductService();