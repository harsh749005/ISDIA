import React, { useState } from 'react'

import './SliderBar.css'
const SlilderBar = () => {
    const [index,setIndex] = useState(0);
    const images = [
        {'name':'Green Planet','src':'https://www.dubaitravelguide.info/wp-content/uploads/green_planet_dubai-1.jpg.webp'},
        {'name':'Museum of Future','src':'https://www.artnews.com/wp-content/uploads/2022/05/Museum-of-Future-Exterior-3.jpg?w=1200'},
        {'name':'Marina yacht cruise','src':'https://media1.thrillophilia.com/filestore/6e51qxqcyrvg1h6rmplkjc58gvzp_shutterstock_762363757.jpg'},
        {'name':'Dubai Frame','src':'https://media1.thrillophilia.com/filestore/o8bnnnji8pu9gejkdgvzu4xttj4w_shutterstock_1917419387.jpg'},
        {'name':'Dubai RiverLand','src':'https://wowdubaitravel.com/wp-content/uploads/2024/01/IMG_8656-scaled.jpg.webp'},
        {'name':'Global Village','src':'https://www.timeoutdubai.com/cloud/timeoutdubai/2024/10/07/eGWtgMXV-Global-Village-1-1200x900.jpg'},
        {'name':'Burj Khalifa','src':'https://amazingarchitecture.com/storage/6257/burj-khalifa.jpg'},
        {'name':'Dubai Aquarium & Underwater zoo','src':'https://www.visitdubai.com/-/media/gathercontent/poi/d/dubai-aquarium-and-underwater-zoo/fallback-image/dubai-aquarium-and-underwater-zoo.jpg'},
        {'name':'Atlantis Water Park','src':'https://assets.kerzner.com/api/public/content/e53428bc97cf4084a45601bc510c769b?v=0798ded8&t=w2880'},
        {'name':'La Peele Show','src':'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_2550,h_1699/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/anmiojoeh9nhgvbvrt30/LaPerlebyDragoneShowTicketinDubai,UAE-KlookIndia.jpg'},
        {'name':'Gold Souk','src':'https://d19r6u3d126ojb.cloudfront.net/Gold_Souk_in_Dubai_474f1ca072.webp'},
        {'name':'Miracle Garden','src':'https://media1.thrillophilia.com/filestore/bpcbhiawkb43y6bczofc2ww31h2f_Dubai_Miracle_Garden_11f44dc19f.jpg?w=1080&dpr=2'}
       ];
    const handleClick = () => {
        setIndex((index + 1) % images.length)
    }
  return (
    <div className='bg-black py-20 px-10 relative flex flex-col gap-10 items-center'>
            <h1 className="text-6xl font-spacemono font-bold text-white text-left w-max">Tourist Attractions</h1>
            <div className="relative tooltip image_div w-[800px] h-[500px]">
                {images.map((img, i) => (
                    <>

                    <img
                        key={i} // Key ensures re-rendering is smooth
                        src={img.src}
                        alt='gallery'
                        className={`absolute tooltip w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                            index === i ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                    {
                        index === i && (
                            <div className="tooltip-text text-pink-800 text-3xl px-10 py-2 font-spacemono">{img.name}</div>
                        )
                    }
                </>
                ))}
             
            </div>
            
            <button onClick={handleClick} className="relative btn hidden xl:block text-black px-8 py-2 font-poppins bg-white  hover:text-white ">
          <span className="font-medium">Next</span>
        </button>
        </div>
  )
}

export default SlilderBar
