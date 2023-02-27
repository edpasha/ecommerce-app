import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import { VscGitCompare } from "react-icons/vsc";
import { BsHeart } from "react-icons/bs";
import Color from "../components/Color";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 550,
    height: 600,
    zoomWidth: 500,
    scale: 1,
    img: "https://static6.festinagroup.com/product/jaguar/watches/detail/big/j862_1.png",
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://static6.festinagroup.com/product/jaguar/watches/detail/big/j862_1.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://static6.festinagroup.com/product/jaguar/watches/detail/big/j862_1.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://static6.festinagroup.com/product/jaguar/watches/detail/big/j862_1.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://static6.festinagroup.com/product/jaguar/watches/detail/big/j862_1.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3>Hi class watch, business fit. Swiss made.</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ 100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 Reviews )</p>
                </div>
                <a href="#review" className="review-btn">
                  Write a review
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex align-items-center my-1 gap-10 mb-3">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex align-items-center my-3 gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex flex-column my-3 gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Categories :</h3>
                  <p className="product-data">
                    airpods, camera's, Computers & Laptop, headphones, mini
                    speaker, our store, Portable Speakers, smart phones, Smart
                    Television, Smartwatches
                  </p>
                </div>
                <div className="d-flex align-items-center my-3 gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">
                    headphones laptop mobile oppo speaker
                  </p>
                </div>
                <div className="d-flex align-items-center my-3 gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data"> in Stock</p>
                </div>
                <div className="d-flex flex-column my-3 gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge text-dark border border-1 bg-white border-secondary">
                      S
                    </span>
                    <span className="badge text-dark border border-1 bg-white border-secondary">
                      M
                    </span>
                    <span className="badge text-dark border border-1 bg-white border-secondary">
                      L
                    </span>
                    <span className="badge text-dark border border-1 bg-white border-secondary">
                      XL
                    </span>
                    <span className="badge text-dark border border-1 bg-white border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-column my-3 gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex flex-row align-items-center my-3 gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="pe-3">
                    <input
                      type="number"
                      min={1}
                      max={10}
                      style={{ width: "65px" }}
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30">
                    <button className="button border-0" type="submit">
                      Add to Cart
                    </button>
                    <button className="button signup">Buy it Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 my-3">
                  <div>
                    <a href="">
                      <VscGitCompare className="fs-5 me-2" />
                      Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <BsHeart className="fs-5 me-2" />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-column my-3 gap-10 mb-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br />
                    We ship all orders within <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex align-items-center my-3 gap-10 mb-3">
                  <h3 className="product-heading">Product Link :</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://static6.festinagroup.com/product/jaguar/watches/detail/big/j862_1.png"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis facere architecto illum sapiente dolorem officiis
                minus esse explicabo quisquam placeat consequatur, voluptates
                sint ullam dicta pariatur maxime. Id, nam nemo.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <h3 id="review">Reviews</h3>
          <div className="col-12">
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a href="" className="text-dark text-decoration-underline">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="form-control w-100"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex align-items-center gap-10">
                    <h6 className="mb-0">Safeti</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    quam eveniet aut, soluta veniam animi omnis rerum, unde
                    repellat mollitia beatae. Dolor, quas. Neque esse sit
                    excepturi libero porro ducimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
