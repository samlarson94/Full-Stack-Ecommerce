import React from 'react';
import Grid from '@material-ui/core';

//Produts array of objects
    // id, name, description, price, stock
        //Pass as prop to individual Product below
const products = [
    {id: 1, name: "Headphones", description: "Wireless headphones", price: "$50.00" },
    {id: 2, name: "iPod Touch", description: "Consumer electronics.", price: "$100.00" },
    {id: 3, name: "RayBans", description: "Swag.", price: "$117.50" }
];

const Products = () => {
<main>
    {/* ITEMS GRID */}
    <Grid container justify="center" spacing={4}>
    {/* MOCK PRODUCTS */}
    <Grid item key={product.id} xs={12} sm={6} lg={3}>
        <Product product={product} />
    </Grid>
    {/* FETCH PRODUCTS FROM API */}
    </Grid>
</main>
}

export default Products;