import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'

const LeftNav = () => {
    const [catagories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => {
            console.log(error.message);
        })
    }, [])

    console.log(catagories);

    return (
        <div>
            <h4>All Categoris</h4>
            <div>
                {
                    catagories.map(catagory => <Link to={`/catagory/${catagory.id}`} className='d-block catagory-link text-decoration-none py-2 bg-light mb-2 ps-2' key={catagory.id}>
                        {catagory.name}
                    </Link>)
                }
            </div>
        </div>
    );
};

export default LeftNav;