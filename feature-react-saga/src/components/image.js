import React from 'react';
import { InView } from 'react-intersection-observer'

export default class Image extends React.Component {
    
    render() {
        const { src, alt } = this.props;
        return(
            <img src={src} alt={alt} ></img>
            // <InView>
            //     {({inView, ref}) => (
            //         <div ref={ref}>
            //             {inView &&
            //                 <img src={src} alt={alt} ></img>
            //             }
            //         </div>
                    
            //     )}
            // </InView>
            
        )
    }
}