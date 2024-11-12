# Capstone-Lovecraft-ECommerce-PrototypeX

Capstone Lovecraft ECommerce, Capstone-Lovecraft-ECommerce-PrototypeX

# E-Commerce App

## Project Overview

This is an e-commerce application that allows users to browse cities, purchase them as products, and manage their shopping cart and profile. The project is built using **React** for the frontend and **Express.js** for the backend. The goal is to provide a seamless experience where users can search for cities, view detailed information, leave reviews, and complete their purchases.

### Features

- **Browse cities**: Display a list of cities available for purchase.
- **City details**: View detailed information about a city.
- **Shopping cart**: Add cities to the cart and proceed to checkout.
- **User profiles**: Manage user profiles, including viewing past orders.
- **Admin dashboard**: Manage cities, users, and orders.

## Tech Stack

- **Frontend**: React, Redux, React Router, Axios, React Bootstrap
- **Backend**: Express.js, Node.js, MongoDB, Mongoose (for managing cities, users, orders)
- **Authentication**: JWT (JSON Web Token) for secure user authentication
- **State Management**: Redux for managing global state
- **Styling**: Bootstrap and custom CSS

## Setup Instructions

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/e-commerce-app.git
   ```

### Project Requirements, Listed Below:

Individual Review Site Objectives

Tier 1: MVP (Minimum Viable Product)
Create a GitHub Repository
Start from scratch or use the template provided by your instructor.
AS A USER (NOT LOGGED IN), I SHOULD BE ABLE TO:
Access the website to browse and read reviews.
View details for a specific reviewed item (store, restaurant, product, book, etc.).
See the item’s average score/rating.
See relevant information about the item.
Search for specific items to view their scores and read reviews.
Sign up for an account for a logged-in experience.
Log in to the site if I already have an account.

AS A LOGGED-IN USER, I SHOULD BE ABLE TO:
Write and submit a review for an item, including:
A written text review.
A score/rating.
Only one review per item, per user.
View a list of all reviews I’ve written.
Delete reviews I’ve written.
Edit reviews I’ve written.
Modify the text review and score/rating.
Write comments on reviews written by others.
View a list of all comments I’ve written.
Edit and delete my comments.

AS AN ENGINEER, I SHOULD:
Have a well-seeded database to simulate different scenarios for user stories.
Seed hundreds of items and reviews to facilitate features like pagination.
Add multiple users with reviews to work on review editing without needing “write a review” functionality.
Ensure secured user data to prevent unauthorized manipulation.

Tier 2: Review Site Essentials
AS A USER (NOT LOGGED IN), I SHOULD BE ABLE TO:
Search or filter items by category.
Enjoy an aesthetically pleasing website that is intuitive and easy to use (UI/UX).
Use all website features across devices (phone, tablet, laptop/desktop).
Navigate the website successfully regardless of disability (ADA compliance).
Screen-reader friendliness, keyboard navigation, colorblind-friendly features.
Know when content is loading or if there’s an error.
Show loading indicators.
Notify me if an item page does not exist with a link to all items.

AS A LOGGED-IN USER, I SHOULD BE ABLE TO:
Add one or more images when writing or editing a review.
View and edit my user profile to update information.
Report an item or review for inaccurate/inappropriate content.
Claim ownership of a reviewed item (e.g., “I own this restaurant” or “I wrote this book”).
Edit information on items I own.
Respond to comments on items I own.

AS AN ADMINISTRATOR, I SHOULD BE ABLE TO:
View a list of all reviewed items.
Add, edit, and remove reviewed items.
Ensure normal users cannot perform these actions.
Ensure each item has two required pieces of information:
Category/Tag (e.g., burger, sci-fi, etc.).
A picture representing the item (e.g., restaurant photo, book cover).
Modify relevant item information (e.g., for books: title, author, ISBN; for restaurants: name, address, phone).
View a list of all users.
Include their role (user or administrator) and email address.
Include other relevant information (e.g., name, review count).
Mark users as owners of reviewed items.
Receive and approve/reject ownership requests.
Manage a dashboard with the following functionalities:
Categories: Create, edit, remove, and manage categories.
Items: Create, edit, remove, and manage items.
View and manage reports on items: Dismiss or approve actions on reported items.
Reviews: Create, edit, remove, and manage reviews.
View and manage reports on reviews.
Users: Set other users as administrators, edit user information, and remove users.

Tier 3: Extra Features
AS A LOGGED-IN USER, I SHOULD BE ABLE TO:

Log in through third-party authentication (e.g., Google OAuth).
Add co-owners for items with the same permissions as me.
Follow other users to:
View them all in one place.
Easily navigate to their profiles to view detailed information, reviews, comments, followers, and followed users.
View my followers and followed users.
Receive notifications for the following actions/events:
A review submitted on an item I own.
A comment on a review I wrote.
A user follows me.
View items and reviews more user-friendly:
Advanced search and filter options.
Pagination and infinite scrolling (more items appear when you scroll to the end).
Receive item recommendations based on my reviews (e.g., recommending a similar book based on my review).

Total Number of Objectives: 47
