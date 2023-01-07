import "./Tickets.css";
import City from "./City";
const Tickets = () => {
    const data = [
        {
            id:"g1",
            city:"LAS VEGAS",
            code:"NV (LAS)"
        },
        {
            id:"g2",
            city:"LOS ANGELES",
            code:"CA (LAX)"
        },
        {
            id:"g3",
            city:"NEW YORK CITY",
            code:"NY (NYC)"
        },
        {
            id:"g4",
            city:"PALM SPRINGS",
            code:"CA (PSP)"
        },
        {
            id:"g5",
            city:"PORTLAND",
            code:"OR (PDX)"
        },
        {
            id:"g6",
            city:"ALL CITIES",
            code:"⬇" 
        }
    ];
    return(
        <div className="main-container">
            <div className="component1">
                <form>
                    <input type="radio" name="track" id="roundtrip" value="RoundTrip" />
                    <label for="roundtrip" className="inpu1">Round Trip</label>
                    <input type="radio" name="track" id="oneway" value="Oneway" />
                    <label for="oneway">One Way</label>
                    <input type="radio" name="track" id="multicity" value="MultiCity" />
                    <label for="multicity">Multi City</label>
                </form>
                <hr></hr>
            </div>
            <div className="component2">
                <div className="compp2">
                    <h1>Book From <span className="textcolor">San Francisco</span><span className="arrow"> ⤵</span> to</h1>
                </div>
                <div className="component3">
                
                        {data.map((items) => (
                            <City key={items.id}  city={items.city} code={items.code}>

                            </City>
                        ))}

                </div>
            </div>
        </div>
    );
};
export default Tickets;