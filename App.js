import UserModule from "./user/userapp";
import SellerModule from "./seller/sellerapp";

function App() {


  if( localStorage.getItem("sellerid") !=null )
    return ( <SellerModule/> )

  else 
    return ( <UserModule/> )

}

export default App;
