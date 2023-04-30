import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsides from '../EditorInsides/EditorInsides';

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details, category_id } = news
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/catagory/${category_id}`}>
                        <Button>All News in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <div className='mt-4'>
                <EditorInsides></EditorInsides>
            </div>
        </div>
    );
};

export default News;