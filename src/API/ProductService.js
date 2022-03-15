import axios from 'axios';

class ProductService {

    async getProducts(setProducts){

        return await axios
            .get('https://webshop.wm3.se/api/v1/shop/products.json?media_file=true')
            .then(function (response){
                setProducts(response.data.products);
                console.log(response);
            }).catch(function (error){

                console.log(error);
            }).then(function (response){

            });
    }
}

export default new ProductService();