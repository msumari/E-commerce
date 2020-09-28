import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="home">
      <div className="container">
        <img
          className="banner"
          src="https://www.adroitinfosystems.com/images/siteimages/pages/finalImgforpages/epharmacy1.jpg"
          alt=" "
        />
        <div className="row">
          <Product
            title="Aspirin"
            price={19.99}
            image="https://i5.walmartimages.ca/images/Enlarge/432/325/6000198432325.jpg"
            rating={4}
          />
          <Product
            title="Volini 30g"
            price={29.99}
            image="https://cdn.shopify.com/s/files/1/0276/4485/4346/products/8_750x.png.jpg?v=1598110188"
            rating={4} />
          <Product
            title="Comfortable Bandages Assorted Sizes"
            price={9.99}
            image="https://cdn.shopify.com/s/files/1/0276/4485/4346/products/7_750x.png.jpg?v=1598110168"
            rating={3} />
          <Product
            title="Lavy Sanitary Pads"
            price={7.99}
            image="https://cdn.shopify.com/s/files/1/0276/4485/4346/products/Ec4hnYtXsAQS-6p_750x.jpg?v=1597659609"
            rating={4} />
        </div>
        <div className="row">
          <Product
            title="Johnsons Baby Powder"
            price={9.99}
            image="https://cdn.shopify.com/s/files/1/0276/4485/4346/products/44_7dd94518-0d85-4677-b43c-af5f8c613359_750x.png.jpg?v=1598116120"
            rating={5} />
          <Product
            title="Accurate Rapid Card Test"
            price={29.99}
            image="https://cdn.shopify.com/s/files/1/0276/4485/4346/products/61_750x.png.jpg?v=1598113271"
            rating={1} />
          <Product
            title="Pouch Arm Sling"
            price={1.99}
            image="https://cdn.shopify.com/s/files/1/0276/4485/4346/products/66_1472c3b6-dc3b-45ee-9cca-8da84725242b_750x.png.jpg?v=1598116721"
            rating={2} />
          <Product
            title="Glucoplus Starter Kit"
            price={40.99}
            image="https://cdn.shopify.com/s/files/1/0276/4485/4346/products/57_750x.png.jpg?v=1598113142"
            rating={4} />
          <Product
            title="Pulse Oximeter"
            price={15.99}
            image="https://cdn.shopify.com/s/files/1/0276/4485/4346/products/59_750x.png.jpg?v=1598113200"
            rating={3} />
        </div>
        <div className="row">
          <Product
            title="Diclofenac Ointment Inflazon"
            price={8.99}
            image="https://cdn.shopify.com/s/files/1/0276/4485/4346/products/10_750x.png.jpg?v=1598110249"
            rating={3} />
          <Product
            title="Antiseptic Solution"
            price={8.99}
            image="https://cdn.shopify.com/s/files/1/0276/4485/4346/products/37_b9feeccb-ab11-424b-ba85-4bca8680dd71_750x.png.jpg?v=1598115871"
            rating={5} />
        </div>
      </div>
    </div>
  );
}

export default Home;
