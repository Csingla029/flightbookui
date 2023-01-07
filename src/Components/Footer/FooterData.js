import "./FooterData.css";
const FooterData = (props) => {
    let url="";
    let alt="";
    return(
        
        <div className="main">
            <div className="comp1">
                {props.title}
            </div>
            <div className="comp2">
                <img className="imageee" src={props.imgsrc} alt={alt} height="250px" width="250px"/>
            </div>
            <div className="comp3">
                <a href={url}>{props.link}</a>
            </div>
        </div>
    );
};
export default FooterData;