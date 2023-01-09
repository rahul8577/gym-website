import SectionHead from "./SectionHead";
import { ImQuotesLeft } from 'react-icons/im'
import Card from "./Card";
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import { testimonials } from '../gym-asset/data'
import { useState } from "react";

import React from 'react'

const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const { name, quote, job, avatar } = testimonials[index]
    return (
        <section className="testimonials">
            <div className="container testimonials__container">
                <SectionHead icon={<ImQuotesLeft />} title="Testimonails" className="testimonial__head" />
                <Card className='testimonial'>
                    <div className="testimonial__avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <p className="testimonial__quote">{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className="testimonial__title">{job}</small>
                </Card>
                <div className="testimonial__btn-container">
                    <button onClick={() => { setIndex(prev=>prev - 1); if(index <= 0) setIndex(testimonials.length-1)} } className="testimonial__btn"><IoIosArrowDropleft /></button>
                    <button onClick={() => { setIndex(prev=>prev + 1); if(index >= testimonials.length-1) setIndex(0) }} className="testimonial__btn"><IoIosArrowDropright /></button>
                </div>
            </div>
        </section>
    )
}

export default Testimonial