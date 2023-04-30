import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewsCard.css'
import moment from 'moment';
import { FaRegBookmark, FaShareAlt, FaRegEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-3 align-items-center'>
                        <Image className='author-img' src={author.img} roundedCircle />
                        <div className="content">
                            <h5>{author.name}</h5>
                            <span> {moment(author.published_date).format('MMMM Do YYYY')}</span>
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='d-flex justify-content-between'>
                    <div className='d-flex gap-2 align-items-center'>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <span>{rating.number}</span>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <FaRegEye></FaRegEye>
                        <span>{total_view}</span>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;