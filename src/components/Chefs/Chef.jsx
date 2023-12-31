import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RiHeart2Line } from "react-icons/ri";
import LazyLoad from 'react-lazyload';

const Chef = ({ chef }) => {
    const {id, chefPicture, chefName , yearsOfExperience, description, numberOfRecipes, likes} = chef;
    return (
        <div className='mb-2 ms-sm-1'> 
            <Card style={{ width: '18rem' }}>
                <figure>
                    <LazyLoad
                    className="LazyLoad"
                    width={400}
                    height={200}
                    offset={300}
                    threshold={0.75}
                    ><Card.Img variant="top" src={chefPicture} /></LazyLoad>
                </figure>
           
            <Card.Body>
                <div className='d-flex'><Card.Title className='me-auto '>{chefName}
                
                </Card.Title></div>
                <h5 className='text-success'>{yearsOfExperience} Years of Experience</h5>
                <Card.Text>
                    {description}
                </Card.Text>
                <p >Recipe items: {numberOfRecipes}</p>
                <Link to={`/chefs/${id}`}><Button variant="primary">View recipes</Button></Link> <span className='ps-5'><RiHeart2Line /> {likes} </span>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Chef;