import React from 'react';
import SHOP_DATA from './shopData';
import Preview from '../../components/previewComponent/preview-component';

class ShopPage extends React.Component{
    constructor()
    {
        super();
        this.state={
            data: SHOP_DATA
        }

    }
    render(){
        return(
            <div className='shop-page'>
                {this.state.data.map(item=>(
                    <Preview key={item.id} item={item}></Preview>
                ))}
                
            </div>
        )
    }
}
export default ShopPage;