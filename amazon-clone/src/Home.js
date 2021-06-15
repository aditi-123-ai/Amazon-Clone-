import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
            alt=""
            />

            {/* Product id, title, price, rating,image*/}
            <div className="home__row">
                <Product
                    id="43756423"
                    title="Samsung Galaxy Tab A7 10.4 Wi-Fi 32GB Silver (SM-T500NZSAXAR)"
                    price={229.78}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71MvL2kCFCL._AC_SL1500_.jpg"
                />
                <Product
                    id="2343923"
                    title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                    price={335.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="4985204"
                    title="OnePlus Nord N100 Midnight Frost Unlocked Smartphone​, 4GB+64GB, US Version, Model BE2011"
                    price={179.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61Pnjh+FO1L._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                    id="9859485"
                    title="Hey Dude Shoes Women's Wendy Loafer Shoes"
                    price={59.97}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51z+WWfRoPL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="4545345"
                    title="POLAR IGNITE - Advanced Waterproof Fitness Watch (Includes Polar Precision Heart Rate Integrated GPS and Sleep Plus Tracking)"
                    price={229.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51VvrsSf8HL._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="43972343"
                    title="TCL 32-inch 3-Series 720p Roku Smart TV - 32S335, 2021 Model"
                    price={148.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61--xSgNcQL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="9398394"
                    title="Sony NEW Alpha 7S III Full-frame Interchangeable Lens Mirrorless Camera"
                    price={3498}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81MpiBUkqsL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="545492354"
                    title="Women Men Bucket Hat Summer Beach Sun Hat Foldable Travel Bucket Outdoor Cap"
                    price={13.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/713kGkEv5ZL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="2348394"
                    title="7 Pcs BTS cake topper Decorations Children Mini Toys Cupcake Topper for Birthday Party Supplies"
                    price={18.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61UjYSgqQ4L._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="8035483"
                    title="Kpop BTS Army Bomb Ver.3 Bangtan Boys MINI Light Stick Keychain Keyring with BTS MAP OF THE SOUL 7 Photo Cards"
                    price={39.90}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51uiPT2Dh5L._AC_UL480_QL65_.jpg"
                />
            </div>

            {/* Product */}
        </div>
    )
}

export default Home;
