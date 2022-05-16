# Artisan BREAD

Artisan BREAD is an e-commerce website selling high-quality bread made of organic ingredients. The front-end is built using React connecting to the restful API powered by Express and Node Js. The database is built on mysql.

- Access the live React front-end ecommerce page [here](https://chic-crostata-11c4b4.netlify.app).
- Access the live back-end admin page [here](https://artisanbread.herokuapp.com)

## Disclaimer

The website is designed for school project only, not for any commercial use. The brand and its products are all fictitious.

### Display of the e-commerce site (front-end);

![brand](https://github.com/Jerrysuper123/artisanbreadsources/blob/main/webScreenShot.png?raw=true)

## Summary

### Project Context

Overall, Singaporeans increasingly place a high priority on making healthier choices, allocating the highest portion of the living expenses (34%) on healthier meal [choices](https://www.aia.com.sg/en/about-aia/media-centre/press-releases/2020/singaporeans-doubled-down-on-keeping-healthy-amid-covid19.html). However, we do not see the sales of healthy-choice bread take off, especially on the e-commerce front.

Not sure of the reasons behind, most bakery shops do not invest heavily in building an online presence. As such, we do not see many beautifully designed bakery websites around.

### Value proposition

Through design and engineering, we will attempt to craft a beautifully-designed website for a fictitious bakery shop Artisan BREAD.

## 1. Strategy

### Target market

Artisan BREAD targets:

- Millennials who are online savvy and are willing to spend more on healthy choices
- Females aged 20-40 who loves artisanal bread and would like to try breads of unique flavours

### Key features

Front-end e-commerce site

1. Display key products on the home page
2. Customer register and log in
3. Add, delete, update the cart
4. Checkout and payment
5. Notification on payment success

Back-end admin site

1. Admin user log in/register
2. Create, update, delete product catalogue
3. Manage order
4. Tiered access for different admin users

- owner is able to access all pages on the admin site
- manager is granted access to all, but restricted on product deletion, order deletion and registering new admin user

## 2. Scope

The website must be fully functional for the business owner to manage its online business. Customers are able to register and log in as users, adding to cart and checking out. On the admin site, the business owner is able to manage the order and notify customers when the order is ready to dispatch.

In addition, the e-commerce site should be mobile responsive.

## 3. Structure

According to above scope, below is the front end site map

![site map](https://github.com/Jerrysuper123/artisanbreadsources/blob/main/frontEndSiteMap.png?raw=true)

### back-end implementation

A restful API built using express and hosted on Heroku is deployed as the backend.

The detailed implementation can be found [here](https://github.com/Jerrysuper123/artisan-bread-backend).

<em>Data schema design</em>

![data schema](https://github.com/Jerrysuper123/artisanbreadsources/blob/main/artisan_bread.png?raw=true)

## 4. Skeleton

The front-end ecommerce conceptual design is found below.

Click [wireframe](https://github.com/Jerrysuper123/artisanbreadsources/blob/main/frontEndSkeleton.pdf) to see the draft design.

## 5. Surface - visual design

### Colours

- We have chosen very vibrant and contrasting colours to bring out the modern design of the website.

![Color](https://github.com/Jerrysuper123/artisanbreadsources/blob/main/color.png?raw=true)

### Font pair - Roboto and Montserrat

- These two simple sans-serif typefaces offer a clean, modern font pairing, giving a pleasant feel for the healthy bread on the website.

![font](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/fontEvent.png?raw=true)

## 6. Technology stack

### Stack used:

| Tech                                       | Usage                                         |
| ------------------------------------------ | --------------------------------------------- |
| HTML, CSS , Bootstrap 5                    | Build the main frame of the website           |
| React, react-router-dom, useContext        | Build single page application                 |
| Aos                                        | Animation                                     |
| Animation css                              | Animation                                     |
| Express                                    | Build restful and API and back-end admin page |
| db-migrate                                 | Build mysql database using db-migrate         |
| mysql                                      | App was initialized on mysql database         |
| Stripe                                     | for checkout/payment                          |
| [Axios](https://axios-http.com/docs/intro) | Call APIs                                     |
| Fontawesome                                | Use icons throughout the site                 |

## 7. Testing

Click [here](https://github.com/Jerrysuper123/artisanbreadsources/blob/main/artisanBread%20test%20cases.pdf) for the detailed test list.

## 8. Deployment

The deployment is done through Netifly with the instructions [here](https://www.youtube.com/watch?v=OPalwvWO63U&t=39s&ab_channel=SanskarTiwari).

## 9. Credits

1. [Fontawesome icon](https://fontawesome.com/) - to embelish the website with icons throughout for better UI UX

2. [Google fronts](https://www.google.com/search?q=google+fonts&oq=google+front&aqs=chrome.1.69i57j0i10j0i512l2j0i10l6.4333j0j4&sourceid=chrome&ie=UTF-8) - to set the primary and secondary font types

3. [Unsplash images](https://unsplash.com/) - to use it as the landing page background image

4. [footer template](https://gist.github.com/Luke-zhang-04/7cb523899ca4044f805f0d0909e4c5c1) - to customize and use for various pages
