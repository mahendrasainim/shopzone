# ShopZone Project Prompts

## Project Overview
This document contains the prompts and requirements used to build the ShopZone e-commerce single-page application.

## Mission 6: "ShopZone" (Single Page Application)

### Theme
React Router (SPA), Context API (Global State), and Dynamic Routing.

### Goal
Build a multi-page E-Commerce frontend where users can browse products, view details, and manage a shopping cart without the page reloading.

### Data Source
Free API: https://dummyjson.com/products

## Requirements

### Level 1 (Beginner Requirement)
- ✅ Navigation Structure
  - Setup Routes: BrowserRouter with `/` (Home), `/shop` (Shop), `/contact` (Contact)
  - Dynamic Routing: `/product/:id` for product details
  - Product Details: Use `useParams()` hook to fetch and display product data

### Level 2 (Intermediate Requirement)
- ✅ Global State (The Cart)
  - Context API: CartContext wrapping entire application
  - Add to Cart: Button on Product Page adds items to Global Cart state
  - Navbar Badge: Cart icon with number badge that updates instantly
  - Cart Page: Route `/cart` listing all items and calculating Total Price

### Level 3 (Advanced Requirement)
- ✅ Auth & Persistence
  - Persistent Cart: Cart syncs with localStorage (survives page refresh)
  - Fake Authentication: Login page `/login` with "Login as Guest" button
  - Protected Routes: `/checkout` page protected, redirects to `/login` if not authenticated

## Implementation Details

### Technologies Used
- React 18.2.0
- React Router DOM 6.20.0
- Context API for state management
- LocalStorage for persistence
- CSS3 for styling

### Key Features Implemented
1. **Routing**: All routes use React Router's `<Link>` component to prevent full page reloads
2. **State Management**: CartContext provides global cart state accessible throughout the app
3. **Persistence**: Cart and authentication state saved to localStorage
4. **Protected Routes**: Checkout route requires authentication
5. **Dynamic Routing**: Product details page uses URL parameters to fetch specific product data
6. **Responsive Design**: Mobile-friendly layout with CSS Grid and Flexbox

### File Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetails.jsx
│   ├── Contact.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   └── Checkout.jsx
└── App.js
```

### API Integration
- Products fetched from: `https://dummyjson.com/products`
- Individual product: `https://dummyjson.com/products/{id}`

### Deployment
- Vercel configuration included (`vercel.json`)
- Handles SPA routing by redirecting all routes to index.html

## Learning Outcomes
- Understanding of React Router and SPA navigation
- Context API for global state management
- Dynamic routing with URL parameters
- Protected routes implementation
- LocalStorage for data persistence
- Modern React patterns and best practices
