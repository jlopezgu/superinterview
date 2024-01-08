import { useEffect, useState } from 'react'
import Hotel from "./Hotel"

export default function Hotels(){
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        const payload = {
            city: 'portland',
            checkin: '01/08/2024',
            checkout: '02/08/2024',
            provider: 'snaptravel'
          }
        
        const headers = {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }

        fetch('https://interview.super.com/hotels', {method:'POST',  headers:headers, body: JSON.stringify(payload)})
            .then(response => {
                return response.json()
            })
            .then(data => {
                setHotels(data.hotels)
                console.log(hotels)
            })
    }, [])
    
    return <div>
       {hotels.map((hotel, i) => {
            return <Hotel key={hotel.id} name={hotel.hotel_name}/>
       })} 
    </div>
}