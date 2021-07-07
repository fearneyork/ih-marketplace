import axios from "axios";
import { useEffect, useState } from "react";
import "./Categories.css"

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
                    return (
                        <li key={category.category_name}>

                            {//add link to individual category page}
                            <h3>{category.category_name}</h3>
                        </li>
                    )
                })}
            </ul>
        </main>

    )
};

export default Categories;