import React from 'react';
import './preview-item.styles.scss'

const PreviewItem= (props)=>
{
    return(
        <div className='collection-item'>
            <div className='image' style={
            {backgroundImage: `url(${props.imageUrl})`}
        }
        >
        </div>
        <div className='collection-footer'>
        <span className='name'>{props.name}</span>
        <span className='price'>{props.price}</span>
        </div>
        </div>
        

    )
}
export default PreviewItem;