import React from "react";
import ReactDOM from "react-dom/client";

// ------------------ React Component ------------------------------->
// Everything is a component in React
// - Functional Component - NEW
// - Class Based Component - OLD

// Functional Component is nothing but a JS Function
// it just returns some piece of JSX code or ReactElement

// --------------- React Fragment & Inline Styling In React ------------------------------->

// React.Fragment => a component exported by React
// JSX can only have One Parent!
// Suppose if i want two parents, then either i would have to add them inside a div
// or we can make use of a component provided by the React
// React.Fragment is like a empty tag
// But it looks ugly to use this big term again and again
// So, just use <> </> these empty tags . But, what are these ? A shorthand for React.Fragment
// We can't pass any attribute to the empty tag

// Object is not jsx, in fact it is JS
// We give styling using JS object
const styleObj = {
  border: "1px solid red",
};

// Inline Styling in React
const jsx = (
  <div style={styleObj}>
    <h1>JSX</h1>
    <h1>Second JSX</h1>
  </div>
);

// ------------------ Restaurant ------------------------------->

// Planning
/*
  Header
    - Logo(Title)
    - Nav Items 
    - Cart
  Body
    - Search Bar
    - RestaurantList
      - RestaurantCard
        - Image
        - Name
        - Rating 
        - Cuisines
  Footer
    - Links
    - Copyright


*/

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="data:image/jpeg;base64,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"
      alt="Food Villa"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Config Driven UI
// A very big design architecture
// const config = [
//   {
//     type: "carousel",
//     cards: [
//       {
//         offerName: "50% off"
//       },
//       {
//         offerName: "No Delivery Charge"
//       }
//     ]
//   },
//   {
//     type: "restaurants",
//     cards: [
//       {
//         name: "McDonald's",
//         image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rxyfrp6ybpyvexdk7uwm",
//         cuisines: ["Burgers", "American"],
//         rating: "4.3"
//       },
//       {
//         name: "KFC",
//         image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rxyfrp6ybpyvexdk7uwm",
//         cuisines: ["Burgers", "American"],
//         rating: "4.4"
//       }
//     ]
//   }
// ]
const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "20539",
      name: "Singla's Sweets, Bakery & Restaurant",
      uuid: "f1310d98-0c42-4650-8a5f-0e6aaf7c4b02",
      city: "4",
      area: "Tilak Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "vjpubmcvfa5612hhbszn",
      cuisines: [
        "Sweets",
        "North Indian",
        "Chinese",
        "South Indian",
        "Italian",
        "Bakery",
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "singlas-north-indian-janakpuri",
        city: "delhi",
      },
      cityState: "4",
      address:
        "2 13 Mall Road Near Metro Tilak Nagar Station Tilak Nagar New Delhi",
      locality: "Metro Tilak Nagar Station",
      parentId: 2314,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "20539",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "254117",
      name: "McDonald's",
      uuid: "9041a17a-0d46-4cc2-a859-3fec63945c41",
      city: "4",
      area: "Ashok Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "rxyfrp6ybpyvexdk7uwm",
      cuisines: ["American"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: "mcdonalds-delhi-tilak-nagar-tilak-nagar",
        city: "delhi",
      },
      cityState: "4",
      address:
        "Delhi Tilak Nagar, 30/4, 30/4A, Double Storey. Ashok Nagar, Tehar-II, New Delhi- 110018",
      locality: "Delhi Tilak Nagar",
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3700,
        message: "",
        title: "Delivery Charge",
        amount: "3700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "254117",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "11598",
      name: "Apna Dhaba(Vikaspuri)",
      uuid: "88b11b2a-4f20-424e-9a36-046b8be7afb7",
      city: "4",
      area: "Block Gg1, Vikaspuri",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "rs0f5lm1dxfh7u3euxpa",
      cuisines: ["North Indian", "Thalis", "Indian"],
      tags: [],
      costForTwo: 22000,
      costForTwoString: "₹220 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: "apna-dhaba-vikaspuri-janakpuri",
        city: "delhi",
      },
      cityState: "4",
      address: "GG 1, Shop no. 30-31,PVR Road, Vikaspuri",
      locality: "Vikaspuri",
      parentId: 34871,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "11598",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "55273",
      name: "La Pino'z Pizza",
      uuid: "9d250d39-e82c-457c-93cc-4b8de2d57183",
      city: "4",
      area: "Vikaspuri",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "fvh1golmvpcwvrjgtgnd",
      cuisines: ["Italian", "Pizzas", "Mexican", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 1,
      slugs: {
        restaurant: "la-pinoz-pizza-pitampura-nsp",
        city: "delhi",
      },
      cityState: "4",
      address: "GG-1/1A, Vikaspuri, New Delhi-110018",
      locality: "Vikaspuri",
      parentId: 4961,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3700,
        message: "",
        title: "Delivery Charge",
        amount: "3700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "55273",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "54413",
      name: "Hira Sweets",
      uuid: "dfeebb3a-e406-4b38-bb4e-fcd1de672084",
      city: "4",
      area: "Janak puri Metro Station",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "ocrewrzptujvncpiyvmi",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Continental",
        "Bakery",
        "Street Food",
        "Sweets",
        "Desserts",
        "Beverages",
      ],
      tags: [],
      costForTwo: 60000,
      costForTwoString: "₹600 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: "hira-sweets-janakpuri-janakpuri",
        city: "delhi",
      },
      cityState: "4",
      address:
        "Ground Floor, Janak Puri East Metro Station, Janakpuri, New Delhi - 110058",
      locality: "Janak puri Metro Station",
      parentId: 5155,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "54413",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "20302",
      name: "Munch Nation",
      uuid: "ec5008b7-533c-4da6-bd88-2d0bfd5c4c71",
      city: "4",
      area: "Janakpuri",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "lva3yvpxdyqf8xe3czgw",
      cuisines: ["North Indian", "Chinese", "Snacks"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 1.7000000476837158,
      slugs: {
        restaurant: "munch-nation-janakpuri-janakpuri",
        city: "delhi",
      },
      cityState: "4",
      address:
        "CSC Shop No-20, Shiv Nagar, Jail Road, New Delhi-110058, RAJOURI GARDEN, West , Delhi-110058",
      locality: "Jail Road",
      parentId: 2893,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5701819~p=7~eid=00000185-9bfb-1d70-2283-15ed00250756",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "20302",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1.7000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "5252",
      name: "Om Sweets & Snacks",
      uuid: "7b2a7428-f755-4a09-9ae4-ac9bb04f021f",
      city: "4",
      area: "Jail Road",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "bsbkwruizgwqmv7cvoaf",
      cuisines: [
        "Sweets",
        "North Indian",
        "South Indian",
        "Chinese",
        "Snacks",
        "Desserts",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "om-sweets-snacks-jail-road-jail-road",
        city: "delhi",
      },
      cityState: "4",
      address: "Gl-23, Shaheed Bhagat Singh Marg (Jail Road), Hari Nagar",
      locality: "Hari Nagar",
      parentId: 676,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "5252",
        deliveryTime: 40,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "138434",
      name: "Burger King",
      uuid: "fa2c77c2-42dd-435d-b3d2-45d37a1fd3f5",
      city: "4",
      area: "Ashok Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "vag3kgnwdttgrtmmwvk1",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "burger-king-ashok-nagar-janakpuri",
        city: "delhi",
      },
      cityState: "4",
      address:
        "31/4 and 31/4A , GROUND FLOOR & FIRST FLOOR ,DOUBLE STOREY ,Opposite Gate No.3 ,Tilak Nagar Metro station, Tilak Nagar, NEW DELHI 110018",
      locality: "Tilak Nagar",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Get every item under 129",
        shortDescriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3700,
        message: "",
        title: "Delivery Charge",
        amount: "3700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "138434",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "112450",
      name: "Hum Sabki Rasoi",
      uuid: "d04e3f47-eb8f-4ace-ad1d-e8bc183c1913",
      city: "4",
      area: "Tilak Nagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "qagnbi2a0r8ghyhajd9l",
      cuisines: ["North Indian"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 18,
      minDeliveryTime: 18,
      maxDeliveryTime: 18,
      slaString: "18 MINS",
      lastMileTravel: 0.30000001192092896,
      slugs: {
        restaurant: "hum-sabki-rasoi-delhi-india-rohini",
        city: "delhi",
      },
      cityState: "4",
      address: "S1/68 OLD MAHAVIR NAGAR PATEL NAGAR NEW DELHI - 110018",
      locality: "Delhi, India",
      parentId: 104010,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "112450",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        lastMileTravel: 0.30000001192092896,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "112464",
      name: "Kake Da Hotel",
      uuid: "8f3975d9-5bf2-42e2-be8b-6171463cac83",
      city: "4",
      area: "Hari Nagar",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "uegk6jdav1kfal3qpqfi",
      cuisines: ["North Indian", "Mughlai", "Tandoor"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 2.5,
      slugs: {
        restaurant: "kake-da-hotel-na-karol-bagh",
        city: "delhi",
      },
      cityState: "4",
      address:
        "HL 3, L BLOCK, Jail Rd, L-Block, Anand Vihar, Hari Nagar, New Delhi, Delhi 110058",
      locality: "Jail Road",
      parentId: 113762,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5672149~p=13~eid=00000185-a6eb-e205-2ef6-a6d300dc0d55",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "112464",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 2.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
];

// badass! thing => { restaurant } // destructuring
// instead of props
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt=""
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

// props => shorthand for properties
// passing some properties(data) into my components
// Here, Body is the parent component and
// when i need to pass some data from the parent component to the child component
// then i need to pass properties to the child component

// just a nomenclature, but end of the day it is just a normal function parameter
const Body = () => {
  return (
    <div className="restaurantList">
      {/* <RestaurantCard name={restaurantList[0].data.name} cuisines={restaurantList[0].data.cuisines} avgRating={restaurantList[0].data.avgRating} cloudinaryImageId={restaurantList[0].data.cloudinaryImageId} hello="world" />
      <RestaurantCard name={restaurantList[1].data.name} cuisines={restaurantList[1].data.cuisines} avgRating={restaurantList[1].data.avgRating} cloudinaryImageId={restaurantList[1].data.cloudinaryImageId} /> */}

      {/* for loop in jsx : - */}
      {/* {(() => {
        let restaurants = [];
        for (let i = 0; i < 6; i++) {
          restaurants.push(<RestaurantCard {...restaurantList[i].data} key={i}/>);
        }
        return restaurants;
      })()} */}
      {/* map in jsx : - */}
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
      {/* Using Spread Operator */}
      {/* <RestaurantCard {...restaurantList[0].data} hello="world" />
      <RestaurantCard {...restaurantList[1].data} />
      <RestaurantCard {...restaurantList[2].data} />
      <RestaurantCard {...restaurantList[3].data} />
      <RestaurantCard {...restaurantList[4].data} />
      <RestaurantCard {...restaurantList[5].data} /> */}
    </div>
  );
};

// Never use index as a key.
// valid but not recommended
// no key <<<<<<<<<<<< index key (use ONLY when you don't have anything else) <<<<<<<<<<<<<<<<<<< unique key (best practice)

/* function fn(params, param2) {  // parameters

}

fn("xyz", "tyx");  // arguments
*/

const Footer = () => {
  return <h4>Footer</h4>
};

const AppLayout = () => {
  return (
    <>
      {/* <><h1>Namaste</h1><h1>Dev</h1></> */}
      {/* We can use React.Fragment inside React.Fragment */}
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// ------------------ Rendering ------------------------------->
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(<AppLayout />);
// heading will only be rendered, all other things will be replaced/overwritten by this
