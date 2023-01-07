import "./Footer.css";
import FooterData from "./FooterData";
const Footer = () => {
    const data = [
        {
            id:"g1",
            title:"Welcome to our new website",
            imgsrc:"https://media.istockphoto.com/id/1297202050/photo/online-orders-delivery-concept-photo-of-wooden-male-figure-trying-hard-to-push-heavy-trolley.jpg?s=612x612&w=0&k=20&c=xr8aJ9rdsitJxYK746L-czgulA6dGci0Q7UKxkx8LaU=",
            link:"LEARN ABOUT VIRGINAMERICA.COM"

        },
        {
            id:"g2",
            title:"Deals from $49 to your favourite cities",
            imgsrc:"https://static.vecteezy.com/system/resources/previews/012/322/281/non_2x/passenger-airlines-sky-airplane-jet-plane-aviation-airliner-poster-flat-travel-concept-banner-for-the-website-of-the-travel-company-vector.jpg",
            link:"SEE ALL DEALS"
        },
        {
            id:"g3",
            title:"Book your tickets",
            imgsrc:"https://i0.wp.com/www.dummyticket.com/wp-content/uploads/2019/10/dummy-ticket-about.jpg?w=1140&ssl=1",
            link:"LETS DO BOOKING!!"
        }
    ];
   
    return(
    <div className="main-grid">
        {data.map((items)=> (
            <FooterData key={items.id} title={items.title} imgsrc={items.imgsrc} link={items.link}></FooterData>
        ))}
    </div>
  );  
};
export default Footer;