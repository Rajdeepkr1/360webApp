import React from "react";
import Profile from "./Profile";
import "./Layertwo.css";
import Box from "./Box";

const LayerTwo = (props) => {
  return (
    <>
      <h1 className="hd">What Clients say about our product</h1>
      <p className="hd">
        There isn't much these days that really stresses out even mid-range
        phones, but the A14 Bionic still completely demolishes expectations in
        terms of responsiveness and fluidity. That said, everything isn't
        perfect. Even in normal use, I felt the back of the iPhone 12 get
        slightly warm.
      </p>

      <Profile
        image="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg"
        title="Rajdeep Kumar"
        detail="I am a UI desiner , For those who can afford it in emi please buy it. Worth paying the money.Only drawback is you don?t get charger and earphones in box.Phone is addictive."
      />

      <div className="box__flex">
        <Box
          image="https://ca.slack-edge.com/TN7HY14KE-U01CECDHX50-685ccc3dd817-512"
          title="Surendra Puri-Team Newton"
          description="I just say that this phone is awesome.. Small phone.. easy to use and it fit in pocket easily.. I must say one thing if you are confused in iPhone 12 and iPhone 12 mini then if you ll use phone as primary then go for iPhone 12 and if you ll use phone as secondary then go for iPhone 12 mini.. Like my primary phone is OnePlus 8T and secondary is iPhone 12 mini.."
        />

        <Box
          image="https://ca.slack-edge.com/TN7HY14KE-USH29QVS9-e2a71a20c634-512"
          title="Shivangi Shrivastav- Team Newton"
          description=" Phone dimensions are perfect for average indian hands. Little less battery backup compared to full blown iPhone 12. Notch is little more noticeable. Cameras are not class leading compared to android flagship but still great ( I had used oneolus 7, s10+, mi 10t pro). But when you hold it in your hand you will forgive everything for the convenience of one hand phone operation. And plz apple reduce your phone prices, it is bordering on ridiculous specially for iPhone 12 pro series"
        />
      </div>

      <div className="pro__file">
        <Profile
          image="https://nypost.com/wp-content/uploads/sites/2/2015/05/avengers254f10d70ebdcf1.jpg?quality=80&strip=all"
          title="Black Widow"
          detail="Natalia Alianovna Natasha Romanoff, better known as Black Widow, is one of the best spies and assassins in the world. "
        />

        <Profile
          image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ow_character_1-sht_brie_v3_lg.jpg"
          title="Captain Marval"
          detail="Captain Marvel is the fourth character in the Marvel Cinematic Universe whose powers come from an Infinity Stone,"
        />

        <Profile
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpc9_LS6_uuq94aRMZ9C8E45Z8Eifhm5UtXuxMAAEL0SktnISxIMAhgH5k4e1iCcMYA8g&usqp=CAU"
          title="Spiderman"
          detail="Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko."
        />

        <Profile
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmlVgiTkn4E3O4Ph65u2Up2cKp_38W7E60zmlmS0XlRpLK-w3YxtCa4x9Kes6MbX7dVw0&usqp=CAU"
          title="Captain Amarica"
          detail="The First Avenger is a 2011 American superhero film based on the Marvel Comics character Captain America."
        />
      </div>
    </>
  );
};

export default LayerTwo;
