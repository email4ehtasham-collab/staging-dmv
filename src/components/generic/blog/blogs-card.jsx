import React from 'react'
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { ReactSVG } from 'react-svg';
import { LinkBtn } from './global/button';
// import { Link } from 'react-router-dom';
import {Link, useParams} from "react-router-dom";
import serviceData from "./service-data";
import { ReactSVG } from 'react-svg';


const StyledCom = styled.div`
    background: #FFFFFF; border: 1px solid #B1B1B1; border-radius: 12px; padding: 20px; font-size: 16px; display: grid; grid-template-columns: 4fr 5fr; grid-gap: 40px; align-items: center;

    .properties-image{height: 320px; overflow: hidden; border-radius: 10px; margin-bottom: 20px;}
    h4 a{color: var(--bs-heading-color); text-decoration: none; }
    .read-more-button{color: var(--primary-color); transition: 0.2s all; width: fit-content; cursor: pointer}
    .read-more-button svg{transform: rotate(-40deg); transition: 0.2s all}
    .read-more-button:hover svg{transform: rotate(-40deg) translate(5px, -2px);}
    .read-more{background: transparent; color: var(--primary-color); padding: 0}

    @media(max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

function BlogsCard({image, title, description, slug, id}) {
  return (
    <StyledCom id={id}>
        <div className='image-holder properties-image'>
            <LazyLoadImage src={image} alt={title} />
        </div>
        <div className='grid' data-gap="10" grid-item-width="1/1">
            <h4 className='font-weight-bold'>
                <Link to={`/blog/${slug}`} >
                    {title}
                </Link>
            </h4>
            <div className='description-holder'>
                <p>
                    {`${description.slice(0, 250)}...`}
                </p>
            </div>
            <div className='h-list read-more-button' data-gap="5">
                <LinkBtn linkto={`/blog/${slug}`} className={'btn read-more'} children="Read Post" />
                <ReactSVG src='/images/arrow-v2.svg' />
            </div>
        </div>
    </StyledCom>
  )
}

export default BlogsCard;