import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { BsArrowLeft } from "react-icons/bs";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />

      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <BsArrowLeft className="fs-4" />
                Go back to blogs
              </Link>
              <h3 className="title">A beautiful sunday morning renaissance</h3>
              <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia quae ipsam in commodi veniam suscipit nisi laudantium,
                excepturi reiciendis facere aperiam doloremque distinctio
                praesentium voluptatum fuga ipsa sed inventore adipisci
                recusandae veritatis! Facere praesentium, dicta accusamus quae,
                deleniti officia, porro quod ipsum cupiditate sit optio
                blanditiis. Earum aspernatur distinctio a.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
