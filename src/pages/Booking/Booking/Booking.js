import React from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';

const Booking = () => {

    const { serviceId } = useParams();

    const [service, setService] = useState({})
    
    useEffect(() => {
        fetch(`https://ancient-journey-73733.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <h2>Details of: {service.name}</h2>
            <h2>This is Booking for: {serviceId}</h2>
        </div>
    );
};

export default Booking;