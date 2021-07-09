import axios from "axios";
import { useEffect, useState } from "react";
import "./CategoryPage.css";
import { Link, useParams } from "react-router-dom"

const CategoryPage = () => {
    const [categoryPageContent, setCategoryPageContent] = useState([]);
    const { category_name } = useParams();

    useEffect(() => {
        axios.get(`https://nc-marketplace.herokuapp.com/api/items?category_name=${category_name}`)
        .then((response) => {
            setCategoryPageContent(response.data.items)
        })
    }, [category_name]);

    return (
        <ul className="itemList">
                {categoryPageContent.map((item) => {
                    return (
                        <li key={item.item_id}>
                            <h3>{item.item_name}</h3>
                            <p>{item.description}</p>
                            <p>{Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(item.price)}</p>
                            <img className="item-image" alt={item.item_name} src={item.img_url}></img>
                            <p>{item.category_name}</p>
                        </li>
                    )
                })}
            </ul>
    );
};

export default CategoryPage;

