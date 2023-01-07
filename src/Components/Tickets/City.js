import "./City.css";
const City = (props) => {
    return(
        <div className="components">
            <div className="compcolor">{props.city}</div>
            <div>{props.code}</div>
        </div>
    );
};
export default City;