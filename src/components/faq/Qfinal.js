import React, { useState } from 'react'
import qdata from './qdata'
import Qfinal2 from './Qfinal2'
import './qfinal.css'



export default function Qfinal() {
  const [qqdata] = useState(qdata)
 

    return (
        <div>
            <h1 className='faq'>Frequently Asked Question:</h1>
            <div className="container">
                <div className="arr_Block">
                    {qqdata.map((val) => {
                        return (
                            <>

                    <Qfinal2 {...val}/>
                            </>

                        )
                    })}

                </div>
            </div>
        </div>
    )
}




