import React from 'react'

const Card = ({images}) => {
    return (
        <>
            {images.map((img,index)=>{
                return(
                    <div className='card'
                    key={index}
                    style={{background:`url("${img.url}") no repeat center/cover`}}
                    >
                      
                    </div>
                )
            })}
        </>
    )
}

export default Card
