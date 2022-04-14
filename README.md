# Scholar Store

#### Project Link: https://dpancha6.github.io/university-store/

#### An e-commerce platform for students to purchase merchandise from different universities across the nation.

#### A Progressive and Responsive Web Application built using React.JS, Redux, Firebase v9, Node.JS, and Stripe.

#### Deployed and hosted on the cloud using Firebase Hosting.

## Technologies Used

- React.js
- Redux / React Context API
- Firebase
- Express
- Node.js
- Stripe (For Payments)
- HTML5
- CSS3
- Material UI

## Features and Functionalities

1. **Firebase Integration:**

   - Authentication
   - Database
   - Functions
   - Hosting

2. **Frontend:**

   - HTML5, CSS3
   - React and Material UI for a fully responsive web application

3. **Payments:**

   - Stripe for processing real-time payments connected to the Firestore Database

4. **User Authentication:**

   - Log-In & User Authentication Flow with Firebase Authentication
   - Register with University Email Address Only (Ensures only students can access the site)

5. **Shopping Cart:**

   - Checkout/Basket Page to Add/Remove products and change their quantities

6. **Order Processing:**

   - Real-time Checkout and Payment Processing for all orders in the basket using Stripe Payments
   - Review past orders with all the order details using Cloud Firestore Database

7. **User Experience:**
   - Easy Sign-In and Sign-Out options
   - Explore websites of different University Stores within the products
   - Fully Responsive Web Application for all device formats

## Getting Started

### Prerequisites

- Node.js
- npm
- Firebase CLI

### Installation

1. Clone the repository

   git clone https://github.com/your-username/scholar-store.git

2. Navigate to the project directory

   cd scholar-store

3. Install the dependencies

   npm install

### Firebase Setup

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Add your Firebase configuration to a `.env` file
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

### Running the App

1. Start the development server

   npm start

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
