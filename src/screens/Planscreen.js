import React, { useEffect, useState } from 'react'
import "./Planscreen.css"

function Planscreen() {
    const [products, setProducts] = useState([]);




  return (
    <div className='Planscreen'>
    <div className='planscreen_plan'>
        <div className='planscreen_info'>  
        <button className='price'> $6.75     </button>
            <div className='price_content'>Premium content</div>
        </div>
    </div>


    </div>
  )
}

export default Planscreen