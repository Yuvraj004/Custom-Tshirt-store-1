import React, { useEffect, useContext } from "react";
import "./Home.scss";
import "./Home.css";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import BannerImg from "../../assets/banner-ad.png";
import BannerImgF from "../../assets/1.png";
import BannerImgS from "../../assets/2.png";
import BannerImgT from "../../assets/3.png";
import BannerImgFo from "../../assets/4.png";
import BannerImgFW from "../../assets/5.png";
import BannerImgSW from "../../assets/6.png";
import BannerImgTW from "../../assets/7.png";
import BannerImgFoW from "../../assets/8.png";
import BannerAd1 from "../../assets/ad1.png";
import BannerAd2 from "../../assets/ad2.png";
import BannerAd3 from "../../assets/ad3.png";
import BannerAd4 from "../../assets/ad4.png";
import MainAd from "../../assets/categoryAd.png";
import AboutImg from "../../assets/aboutImg.png";
import WishlistImg from "../../assets/wishlist.png";

const Home = () => {
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    });

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
        });
    };
   
    
    return (
        <div>
            <Banner />
            <div className="main-content" style={{marginTop:"110px"}} >
                <div className="layout" id="aboutUs" >
                    {/* <Category categories={categories} /> */}
                    
                    <section className="about-section" >
                        <div className="about-image">
                            <img src={AboutImg} style={{height:"400px", width:"100%", marginBottom:"90px",marginTop:"10px"}} alt="About Us" id="about-image"/>
                        </div> 
                        <div className="about-text">
                            <h1 className="abtTitle" >About Us</h1>
                            &nbsp;
                            <br/> <br />
                            <p>Our company is an online store that allows customers to design and customize their own t-shirts according to their preferences. We provide a user-friendly platform where customers can choose from a variety of t-shirt styles, colors, and designs, and then add their own text or graphics to create a unique and personalized shirt. Our goal is to provide high-quality custom t-shirts at affordable prices while ensuring a hassle-free and enjoyable shopping experience for our customers.</p>
                        </div>
                    </section>
                    <h1 className="productTitle" style={{textAlign:"center"}}>NEW ARRIVALS</h1>
                  &nbsp;
                    <div className="row rowOne ">
                        
                    <div className="col-md-3">
                        <div className="card"  id="productAd" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerAd1} alt="Card " style={{height: "89.2%", width: "100%", padding:"4px"}}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card"  id="productAd" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerAd2} alt="Card " style={{height: "90%", width: "100%", padding:"4px" }}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card"  id="productAd" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerAd3} alt="Card " style={{height: "90%", width: "100%", padding:"4px" }}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" id="productAd"  style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerAd4} alt="Card " style={{height: "90%", width: "100%", padding:"4px",margin:"0%" }}/>
                        </div>
                    </div>
                </div>
                <center>
                <div className="mainAd">
               
                    <img src={MainAd} id="categoryAd" alt="category ad"style={{width:"1080px"}} />
                </div>
                </center>  
                    <center>
                    <Products
                        headingText="Popular Products and Offers"
                        products={products}
                        style={{textAlign:"center"}}
                    />
                    </center>         
                </div>
               

{/* MEN & WOMEN SECTION */}

            <div className="container-fluid">
                    <h1 className="productTitle" style={{textAlign:"center"}}>MEN</h1>
                        &nbsp;
                <div className="row rowOne">
                    <div className="col-md-3">
                        <div className="card"  id="productCard" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgF} alt="Card " style={{height: "100%", width: "90%", padding:"4px"}}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card"  id="productCard" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgS} alt="Card " style={{height: "100%", width: "90%", padding:"4px" }}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card"  id="productCard" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgT} alt="Card " style={{height: "100%", width: "90%", padding:"4px" }}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" id="productCard"  style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgFo} alt="Card " style={{height: "100%", width: "90%", padding:"4px",margin:"0%" }}/>
                        </div>
                    </div>
                </div>
                  <h1 className="productTitle" style={{textAlign:"center"}}>WOMEN</h1>
                  &nbsp;
                <div className="row rowTwo">
                    <div className="col-md-3">
                        <div className="card" id="productCard" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgFW} alt="Card " style={{height: "100%", width: "90%", padding:"4px"}}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" id="productCard"  style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgSW} alt="Card " style={{height: "100%", width: "90%",padding:"4px"  }}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" id="productCard"  style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgTW} alt="Card " style={{height: "100%", width: "90%", padding:"4px" }}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card"  id="productCard" style={{width: "100%", height: "100%"}}>
                            <img className="card-img-top" src={BannerImgFoW} alt="Card " style={{height: "100%", width: "90%", padding:"4px" }}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src={BannerImgAd} style={{justifyContent:'center'}} id="bannerAdMain" />  */}
            <center id="wishlist">
            <Products
                        headingText="Recently Viewed | Wishlist"
                        products={products}
                        style={{textAlign:"center",marginBottom:"0",paddingBottom:"0"}}
                        
                    />

                    <img src={WishlistImg} style={{width: "60%", height: "100%"}}></img>
            </center>        
            </div>
        </div>
     
    )
};

export default Home;
