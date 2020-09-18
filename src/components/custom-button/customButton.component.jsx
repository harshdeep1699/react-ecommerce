import React from 'react';
import './customButton.styles.scss';

const CustomButton=({children,isGoogleButton,...otherProps})=>(
    <button className={`${isGoogleButton ? `isGoogleButton`:``} custom-button`} {...otherProps}>
        {children}

    </button>
)
export default CustomButton;