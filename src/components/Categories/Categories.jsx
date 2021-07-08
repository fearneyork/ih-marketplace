import axios from "axios";
import { useEffect, useState } from "react";
import "./Categories.css";
import { Link } from "react-router-dom"

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
        .get("https://nc-marketplace.herokuapp.com/api/categories")
        .then((response) => {
            setCategories(response.data.categories)
        })
    }, [])
    return (
        <main>
            <ul className="categoriesList">
                {categories.map((category) => {
                    {console.log(`/api/items?category_name=${category.category_name}`);}
                    return (
                        <li key={category.category_name}>
                            <Link to={`/api/items?category_name=${category.category_name}`}>
                                <h3>{category.category_name}</h3>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </main>

    )
};

export default Categories;