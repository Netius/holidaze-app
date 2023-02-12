# Project Exam 2 - Holidaze

An e-commerce website created with React with login for admins and control over Hotels and Reviews.
Both sections are responsive and the website will be populated by a Strapi API deployed on Heroku using Cloudinary as third party CMS for images.

## Description

This exam project showcase all I throught in the last four years at university (partime).
The site have a good user experience and UI design, following today’s trends and design patterns.

### Customer-facing pages

- Home page |
  Banner with an image that is uploaded to Strapi.
  A list of featured products.
  A search bar typeahead

- Hotels page |
  A list of all Hotels added via Admin page - Strapi.
  A search text box.

- Hotels details page |
  This page is reached by a user clicking on a hotel.
  A rating star based on reviews
  Reviews written by users

- Contact us page |
  A simple contact us page with some html5 validation

### Admin-facing pages

- Login/Logout |
  Login form that allows administrator users to login. Local storage to keep the user logged in.

- Add/edit/remove hotels |
  Allow admin to added, edit or remove products from Strapi Api.

- Hotel images |
  Allow admin to added, edit or remove images from Cloudinary.

- Reviews |
  Allow admin to remove hotels reviews from Strapi.

## Built With

You can list a the tech stack that you've used over here

- [Javascript](https://www.javascript.com/) Vanilla javascript
- [Bootstrap](https://getbootstrap.com)
- [Sass](https://sass-lang.com/)
- [Strapi](https://strapi.io/)
- [Heroku](https://heroku.com/)
- [Cloudinary](https://cloudinary.com/)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:Netius/DogShop.git
```

2. Install the dependencies:

```
npm install
```

3. Install Sass

You need to install sass, run and watch the file \sass\styles.scss
https://sass-lang.com/

4. Install a Strapi

You will need to have a Strapi installation running in your PC to full use this project.
Api structure in Strapi:

- Products (Collection Types) |
  title - Text
  description - Text
  price - Number
  image - Media
  image_url - Text
  featured - Boolean

- Home (Single Type) |
  hero_banner - Media
  hero_banner_alt_text - Text

- Users
  Create a admin user and password. This will be used to login to admin page in the site as well.

To use in development with Strapi deployed locally change the file - js/constants/strapiUrl.js

5. Cloudinary (optional)
   With you want to keep your images in a third party CMS check out this link:
   https://strapi.io/blog/add-cloudinary-support-to-your-strapi-application

### Running

Right click on the index.html and choose "Open with live server" in Visual Studio Code.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Contributing

This is a private project used in the university. I will keep the code unchanged and contribuition is not needed..

## Contact

[upneto.com](https://upneto.com/#contact)
