 
import { memo } from 'react';  
 /**
 * A customizable image component that supports opacity and additional styling.
 *
 * @param {Object} props - The props for the Image component.
 * @param {number} [props.opacity=1] - The opacity of the image, where 1 is fully opaque and 0 is fully transparent. Default is 1.
 * @param {...any} props - Additional props to be passed to the <img> element.
 *
 * @returns {JSX.Element} The rendered image component.
 */
const Image = ({opacity=1,...props})=>{  
   return <img  {...props} style={{opacity,
    minWidth:'1px',
    maxHeight:"100%",
    minHeight:'1px',
    maxWidth:"100%",
    padding:3,
    borderRadius:5

}}/>

}

export default memo(Image);