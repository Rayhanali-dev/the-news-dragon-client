import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Catagory = () => {
    const {id} = useParams()
    const catagoryNews = useLoaderData()
    return (
        <div>
            <h3>Catagory comming soon Id: {catagoryNews.length}</h3>
            {
                catagoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Catagory;