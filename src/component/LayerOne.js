import React from "react";
import Box from "./Box";
import "./LayerOne.css";

const LayerOne = () => {
  return (
    <>
      <div className="layer__one"></div>

      <h1 className="hd">Essential Mobile App Landing for Workspaces</h1>
      <p className="hd">
        A mobile app landing page is important and essential for right amount of
        information about your product. Start increasing your user base upon the
        launch of your product
      </p>
      <div className="box__flex">
        <Box
          image="https://media.wired.com/photos/5bcea2642eea7906bba84c67/master/w_2560%2Cc_limit/iphonexr.jpg"
          title="Iphone XR"
          description="The iPhone XR display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less)."
        />

        <Box
          image="https://c0.wallpaperflare.com/preview/471/747/721/space-black-apple-watch-over-black-iphone-x.jpg"
          title="Iphone X"
          description="It’s designed to take full advantage of next‑level performance You must have to buy "
        />

        <Box
          image="https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.jpg"
          title="IPad Pro"
          description="M1 chip. With M1, iPad Pro is the fastest device of its kind. It’s designed to take full advantage of next‑level performance and custom technologies like the advanced image signal processor and unified memory architecture of M1."
        />
      </div>

      <Box
        image="https://images.news18.com/ibnlive/uploads/2020/11/1605072271_featured-image-2020-11-11t105412.941.jpg"
        title="MacBook Pro"
        description="Apple M1 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine
         8GB unified memory
         256GB SSD storage¹
         13-inch Retina display with True Tone
         Magic Keyboard
         Touch Bar and Touch ID
         Force Touch trackpad
         Two Thunderbolt / USB 4 ports"
      />

      <Box
        image="https://fdn.gsmarena.com/imgroot/reviews/20/apple-iphone-12-pro-max/lifestyle/-1200w5/gsmarena_008.jpg"
        title="Iphone 12 & 12pro"
        description="A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.

         From ₹69900* before trade-in."
      />

      <Box
        image="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1602686328042-601UYWSRVF16QBZ47WX8/ke17ZwdGBToddI8pDm48kIgftY7vDlOSnYYnzu2ipntZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyOQ28Le4rQDeZRNZZaaLRkFFlIFz3qEQy4Rft1GI61kHkdIds9RwHmE1mg3Fzesko/iPhone+12+%28PRODUCT%29RED"
        title="Iphone 12 mini"
        description="A14 Bionic is the fastest chip in a smartphone. And it pushes what’s possible. Like crunching trillions of operations on the Neural Engine. Or shooting in Dolby Vision — even pro movie cameras can’t do that. It’s super efficient for great battery life. And it’s ahead of its time, prepared to power pretty much anything that comes next."
      />
    </>
  );
};

export default LayerOne;
