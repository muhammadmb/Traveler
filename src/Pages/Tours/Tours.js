import React from 'react';
import './ToursStyle.css'
import { BsCalendar } from 'react-icons/bs'
import { IoPeopleCircleOutline } from 'react-icons/io5'
import { tours } from '../../Data/ToursData';
import { Link } from 'react-router-dom';

const Tours = () => {
    return (
        <div className="container">
            <h2 className="header">TOURS AND ACTIVITIES</h2>
            <p className="header-paragraph">join the adventure and start a new lifetime experience</p>
            <div className="out-tours">
                {tours.map((item) => (

                    <div className="tour-section" key={item.id}>
                        <img src={item.img}
                            alt={item.title} title={item.title} />
                        <h3>{item.title}</h3>
                        <p className="city">{item.city}</p>
                        <div className="content">
                            <BsCalendar className="BsCalendar" /> <p className="num-of-days">No of Days: {item.NoOfDays}Days</p>
                            <IoPeopleCircleOutline className="IoPeopleCircleOutline" /> <p className="people">People: {item.people}</p>
                            <div className="booking">
                                <p className="price">{item.price}</p>
                                <Link className="link" to="/sign-up" ><button className="bt" >Book now</button></Link>

                            </div>

                        </div>

                    </div>

                ))}
            </div>

        </div>
    )
}

export default Tours
