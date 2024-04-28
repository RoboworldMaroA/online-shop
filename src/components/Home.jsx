// If you want to use a value from the state use this but in this version we do not need at the moment
// import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import{ useNavigate} from "react-router"
import { useGetAllProductsQuery } from "../features/poductsAPI";
import { addToCart } from "../features/cartSlice";

const Home = () => {

    //get a data from redux and store state value
    // const {item, status} = useSelector(state => state.products)
    
    
    const {data, error, isLoading} = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAddToCart = (product) =>{
          dispatch(addToCart(product));
          navigate("/cart");
    };

    return (
    <div className= "home-container">
    {isLoading ? 
    (<p>Loading ..</p>) : error ? (

    <p>An error occurred </p>
    ) :(
    <>
    <h2>New arrivals</h2>
    <div className="products">
        {data?.map(
            product => 
            (<div key = {product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name}/>
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price"> ${product.price}</span>  
                </div>
                <button onClick = {() => handleAddToCart(product)}>
                    Add to card
                </button>

            </div>
        ))}
    </div>
    
    </>
    ) }
    </div>
)};
 
export default Home;

