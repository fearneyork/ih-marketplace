import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css"

const Home = () => {
    const [recentItems, setRecentItems] = useState([]);

    useEffect(() => {
        axios
        .get("https://nc-marketplace.herokuapp.com/api/items?limit=10&p=1&sort_by=item_id&order=desc")
        .then((response) => {
            setRecentItems(response.data.items)
        })
    }, [])
    
    return (
        <main className="recentItems">
            <p>
                Honey, I'm home!
            </p>
            <ul className="itemList">
                {recentItems.map((item) => {
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
        </main>
    );
};

export default Home;