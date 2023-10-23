import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/style.css'
import ClothsProduct from './ClothsProduct';

function Cloths() {
    const [products, setProducts] = useState(ClothsProduct);
    const [filters, setFilters] = useState({
        name: '',
        type: 'both',
        color: '',
    });

    const applyFilters = () => {
        let filteredProducts = products;


        filteredProducts = filteredProducts.filter(
            (item) => item.name.toLowerCase().includes(filters.name.toLowerCase())
        );

        if (filters.type !== 'both') {
            filteredProducts = filteredProducts.filter((item) => item.type === filters.type);
        }

        if (filters.color !== '') {
            filteredProducts = filteredProducts.filter(
                (item) => item.color.toLowerCase().includes(filters.color.toLowerCase())
            );
        }

        return filteredProducts;
    };

    const handleSearch = (e) => {
        setFilters({ ...filters, name: e.target.value });
    };

    const handletype = (e) => {
        setFilters({ ...filters, type: e.target.value });
    };

    const handleColor = (e) => {
        setFilters({ ...filters, color: e.target.value });
    };

    const filteredProducts = applyFilters();

    return (
        <>
            <div className="row ">
                <div className="sidebar col-2  text-center">
                    <input type="text" className=' form-control mt-2' placeholder='Search Product By Name....' onChange={handleSearch} />
                    <br />
                    <input type="radio" value="white" name="type" onChange={handleColor} />
                    <label htmlFor="" className='p-2' >White</label><br />
                    <input type="radio" value="red" name="type" onChange={handleColor} />
                    <label htmlFor="" className='p-2'>Red</label><br />
                    <input type="radio" value="green" name="type" onChange={handleColor} />
                    <label htmlFor="" className='p-2'>Green</label><br />
                    <input type="radio" value="navy" name="type" onChange={handleColor} />
                    <label htmlFor="" className='p-2'>Navy</label>
                    <br />
                    <select name="" id="" className='form-select' onChange={handletype}>
                        <option value="both">Select Type</option>
                        <option value="men" >Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
                <div className="col-2"></div>
                <div className="col-10">
                    <div className='row'>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => {
                                return (
                                    <div className="product-card col-3" key={product.id}>
                                        <div class="product-tumb">
                                            <img src={product.img} alt="" />
                                        </div>
                                        <div class="product-details">
                                            <span class="product-catagory">{product.type}</span>
                                            <h4><a href="">{product.name}</a></h4>
                                            <p>{product.color}</p>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <h1>Product not found...</h1>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Cloths;
