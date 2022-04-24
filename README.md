# Artisan Bread

Artisan Bread is an e-commerce website selling breads made of high-quality natural ingredients. The front-end is built using React connecting to the restful API powered by Express and Node Js.

The landing page below summarizes everything about this app.

- Access the live React front-end demo [here](https://thunderous-pixie-be41eb.netlify.app/).
- Access the back-end API implementation [here](https://github.com/Jerrysuper123/eventfulAPI).

![brand](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/landPage.png?raw=true)

## Summary

### Project Context

Singapore are spending more on healthy food
But this has not changed for the bread industry esp on the ecommerce scene

2 reasons for this:
1. delivery service is exp in Singapore, buying bread online mini purchase amount is 50 dollar
2. most singaporean still wont buy so much bread online, prefering to buy in shops where they could see
3. that is why most online website for bread shop, most wont invest so much in building a good website.

Overall, Singaporeans were placing a high priority on making healthier choices, allocating the highest portion of the living expenses (34%) on healthier meal [choices](https://www.aia.com.sg/en/about-aia/media-centre/press-releases/2020/singaporeans-doubled-down-on-keeping-healthy-amid-covid19.html).

bread talk and duke bakery

### Value proposition

Can we start a new culture, allows ingaproean to access to affordable, but high quality ingredeint breads?

1. that is what this website is about
Design a beautfiy e commerce website for 


## 1. Strategy

### target market

- bread lovers -
- family mother of the family unit

### Needs and pain points

- like to have good bread, but not limited to order limit of $50
- would like it to be delivered to my home, because i am busy

### User stories

- As a mothers, i want healthy fodo to deliver to my house so that my children could have healthy bread.

### Key features based on user story

1. Display key bread products on the home page
2. user register and user log in
3. add to cart
4. Check out
5. notification of add to card, payment completed

Admin site
1. Register and log in
2. add new product (CRUD)

## 2. Scope

### Functional specification

- buyers could order and add to cart for payment

### Content

- list of products listed on the bread
- allow users to filer

### Non-functional

- The app should be mobile responsive for instant access to event info on users' mobiles

## 3. Structure

site map

react component design

- Used as a reference, the final app is more complicated with multitude of components, in order to reuse the components

![site map](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/siteMap.png?raw=true)

### Restful API

A restful API built using express and hosted on Mongo Atlas Database is deployed as the backend.

The detailed implementation can be found [here](https://github.com/Jerrysuper123/eventfulAPI). 

<em>Data schema design</em>

![data schema](https://github.com/Jerrysuper123/eventfulAPI/raw/main/images/dataBaseDesign.png)

## 4. Skeleton

The original conceptual design is found below.

Click [wireframe](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/wireframeEvent.pdf) to see the draft design.

## 5. Surface - visual design

### Colors

- The first colour below (orange "#E27D60") is the primary colour used. The bright orange color gives a feel of liveliness, resembling the liveliness of events. Brand logo and icons are designed with this color.

- The fourth colour (purple "#C38D9E) and the fifth colour (dark green "#41B3A3") are cold colours, which are in contrast with the warm. High contrast is used to bring out key information on the app e.g. event listing.

- The rest of the colours are used mostly as the support hues.

![Color](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/colorEvent.png?raw=true)

### Font pair - Roboto and Montserrat

- These two simple sans-serif typefaces offer a clean, modern font pairing, giving a cool feel for the events listed on the app.

- Roboto combines geometric forms with friendly, open curves, designed to facilitate a natural reading rhythm. The Roboto is mostly used in the event description page's text for better reading experience.

![font](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/fontEvent.png?raw=true)

## 6. technology stack

### Stack used:

| Tech                                                                        | Usage                               |
| --------------------------------------------------------------------------- | ----------------------------------- |
| HTML, CSS, React, Bootstrap 5                                               | Build the main frame of the website |
| Express                                                                     | Build restful API                   |
| [Axios](https://axios-http.com/docs/intro)                                  | Call APIs                           |
| Material UI components                                                      | Build front end react components    |
| [Leaflet](https://leafletjs.com/)                                           | Create map and markers              |
| [Leaflet routing machine](https://www.liedman.net/leaflet-routing-machine/) | Draw routes on the map              |
| Fontawesome                                                                 | Use icons throughout the site       |

## 7. testing

Click [here](https://github.com/Jerrysuper123/eventfulSources/blob/main/images/sources/eventfulTestCases.pdf) for the detailed test list.

## 8. deployment

The deployment is done through Netifly with the instructions [here](https://www.youtube.com/watch?v=OPalwvWO63U&t=39s&ab_channel=SanskarTiwari).

## 9. Limitations and future implementations

- xx

## 10. Credits

1. [Fontawesome icon](https://fontawesome.com/) - to embelish the website with icons throughout for better UI UX

2. [Google fronts](https://www.google.com/search?q=google+fonts&oq=google+front&aqs=chrome.1.69i57j0i10j0i512l2j0i10l6.4333j0j4&sourceid=chrome&ie=UTF-8) - to set the primary and secondary font types

3. [Unsplash images](https://unsplash.com/) - to use it as the landing page background image

4. [Flaticon icons](https://www.flaticon.com/) - to customize the map markers

5. [spinner](https://loading.io/css/) - to inform users that the app is loading

6. [timeline](https://www.w3schools.com/howto/howto_css_timeline.asp) from W3School - used for the landing page

7. [footer template](https://gist.github.com/Luke-zhang-04/7cb523899ca4044f805f0d0909e4c5c1) - to customize and use for various pages

8. [Material UI](https://mui.com/) - to use the rating form and auto-complete checkboxes

9. [Singapor One Map API](https://www.onemap.gov.sg/docs/) - to return latitude and longitude based on postal code for plotting markers on the map

10. [Kalend - calendar component for React](https://www.npmjs.com/package/kalend) - to use for the display of events on a calendar

## Additional notes for developers

- Due to some prevent default error triggered by Kalend Calendar, went into React Node Modules to remove the preventDefault line from "react-dom.development.js"

```
if (event.preventDefault) {
//remove preventDefaul due to error triggered by calendar clicking
// event.preventDefault(); // $FlowFixMe - flow is not aware of `unknown` in IE
} else if (typeof event.returnValue !== 'unknown') {
event.returnValue = false;
}
```

- In order to fix below error, we have downgrade to React 17, instead of 18, because React 18 could not render the React LeafLet Map properly using createRoot.

```
react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
```
