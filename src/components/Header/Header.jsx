import { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import { useMainContext } from "../../contexts/MainContext";
import { FIRESTORE } from "../../firebase.config";
import { addDoc, collection, doc, Firestore, getDocs } from "firebase/firestore";

const routeMenu = [
  { pathName: "Home", routeLink: "/home" },

  { pathName: "Products", routeLink: "/products" },
];

const Header = () => {
  const navigate = useNavigate();
  const handleRoute = (path) => {
    navigate(path);
    //    console.log(path)
  };

  const useMain = useMainContext()

  const { cartCount, cartItem } = useMain;

  const [isProductSaved, setIsProductSaved] = useState(false)


  const handleProductsSubmit = async () => {
    let confirmResponse = confirm('Are you sure');
    console.log(confirmResponse)

    if (confirmResponse) {
      await addDoc(collection(FIRESTORE, "cartProducts"), {
        ...cartItem
      }).then(() => {
        alert('Prodcuts saved to cart');
        setIsProductSaved(true);
      })
    }
  }


  const handleProductBuy = async () => {
    console.log('buy clicked')
    let response = await getDocs(collection(FIRESTORE, "cartProducts"));
    console.log(response);

    let temp = []
    response.forEach(doc => {
      // let data = {
      //   id: doc.id,
      //   info: doc.data()
      // }
      console.log('-->', doc);
      // temp.push(data)
    })

    console.log(temp)
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {routeMenu.map((item) => (
              <Fragment key={item.pathName}>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    role="button"
                    onClick={() => handleRoute(item.routeLink)}
                  >
                    {item.pathName}
                  </a>
                </li>
              </Fragment>
            ))}
          </ul>
          <div className="d-flex " style={{ marginRight: '200px' }}>
            <div className="m-4" style={{ position: 'relative' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>

              <div className="cart-count" style={{ position: 'absolute', top: '-20px', right: '-10px', fontSize: '25px', color: 'red', fontWeight: 'bold' }}>{cartCount}</div>
            </div>



            {
              isProductSaved ? (<button className="btn btn-outline-success" type="submit" onClick={handleProductBuy}>
                Buy
              </button>) : (<button className="btn btn-outline-success" type="submit" onClick={handleProductsSubmit}>
                Save
              </button>)
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
