# ShopZone - E-Commerce SPA

A modern single-page e-commerce application built with React Router, Context API, and dynamic routing.

## Features

### Level 1 (Beginner)
- ✅ Multi-page navigation with React Router
- ✅ Home page with welcome banner
- ✅ Shop page displaying products from DummyJSON API
- ✅ Dynamic product details page (`/product/:id`)
- ✅ Contact page with form

### Level 2 (Intermediate)
- ✅ Global cart state management with Context API
- ✅ Add to cart functionality
- ✅ Navbar with cart badge showing item count
- ✅ Cart page with item management and total calculation

### Level 3 (Advanced)
- ✅ Persistent cart using localStorage
- ✅ Login page with "Login as Guest" functionality
- ✅ Protected routes (checkout requires authentication)
- ✅ Automatic redirect to login for protected routes

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with cart badge
│   ├── Navbar.css
│   └── ProtectedRoute.jsx  # Route protection component
├── context/
│   └── CartContext.jsx     # Global cart state management
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Shop.jsx            # Product listing page
│   ├── ProductDetails.jsx  # Individual product page
│   ├── Contact.jsx        # Contact form page
│   ├── Cart.jsx           # Shopping cart page
│   ├── Login.jsx          # Login page
│   └── Checkout.jsx       # Checkout page (protected)
├── App.js                 # Main app component with routes
├── App.css
├── index.js              # Entry point
└── index.css             # Global styles
```

## API

This project uses the [DummyJSON Products API](https://dummyjson.com/products) to fetch product data.

## Deployment

The project includes a `vercel.json` configuration file for easy deployment on Vercel. The configuration handles SPA routing by redirecting all routes to the index.html file.

## Technologies Used

- React 18
- React Router DOM v6
- Context API
- LocalStorage API
- CSS3

## Notes

- Cart data persists across page refreshes using localStorage
- Authentication state is also persisted in localStorage
- All routes use React Router's `<Link>` component to prevent full page reloads
- Protected routes automatically redirect to login if user is not authenticated
