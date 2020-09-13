import React from 'react';
import './homepage-styles.scss';
import DirectoryMenu from '../../components/directory/directory-menu.component';


export const Homepage=()=>{
    return(
        <div className="homepage">
            <DirectoryMenu></DirectoryMenu>
        </div>
        
    )
}

