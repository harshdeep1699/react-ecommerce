import React from 'react';
import PreviewItem from '../preview-item/preview-item.component';
import './preview-styles.scss'

const Preview = (props)=>(
    <div className='collection-preview'>
        <div className='title' >{props.item.title}</div>
        <div className='preview'>
            {props.item.items.filter((item,index)=> index<4).map(item=>(
                <PreviewItem key={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price}
                ></PreviewItem>
            ))}
        </div>

    </div>

)
export default Preview;