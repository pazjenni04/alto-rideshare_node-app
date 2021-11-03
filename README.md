# alto-rideshare_node-app

## **Table of Contents**

1. [Description](#description)
2. [Usage](#usage)
3. [Routes](#routes)
4. [Technologies](#technologies)
5. [Questions](#questions)
6. [Link](#links)
7. [License](#license)

## **Description**

The objective of this node application is to render an Alto Rideshare user's trip information, destination info, assigned driver, and the vehicle make/model assigned to them. All these retreivals are created through rest API routes created through the npm express library.

## **Usage**

To use this application, you first need to clone the git repository https://github.com/pazjenni04/alto-rideshare_node-app.git. Once cloned, you can then proceed with downloading the following package by entering

`npm install express`

This will allow the application to implement the necessary middleware, Express.js, in order to render the established routes. Once downloaded, the user can then proceed with typing in the following routes into the URL or into their preferred API Client to render one of the user's assigned information.

## **Routes**

### Assigned Driver

To render a user's assigned driver's information, you can proceed with typing in the following either into the browser's URL or in your preferred API Client.

`localhost:3001/api/drivers/:id`

By altering `/:id` at the end of the URL with one of the Alto user's ID, you can render the assigned driver to a specific Alto rider. For instance, if you type in `localhost:3001/api/drivers/1` into the URL or API Client, the following Alto user's assigned driver should render.

![The following images shows the information that gets rendered onto the browser](images\driver-info.PNG)

On this window, the Alto user's assigned driver info will render their name and some additional information. On this same window, the Alto user's destination address will remain displayed for them to see.

This process can be repeated with any user within the data folder under the users.js file by inserting their assigned ID.

### Trip Information

To render an Alto user's Trip information, you can proceed with typing in the following into the browser's URL or in your preferred API Client.

`localhost:3001/api/user/trip/:id`

Again, by altering the `/:id` at the end of the URL with one of the Alto user's ID, you can render the Alto user's trip information. For example, typing in `localhost:3001/api/user/trip/2` into the URL or API Client will render the following information

![The following image shows the Alto user's trip information](images\trip-info.PNG)

Displayed onto the page should include the Alto user's arrival time, destination address, their estimated fare, the payment type, the amount of passengers that can ride along, and their pickup location.

This process can be repeated with any user within the data folder under the users.js file by inserting their assigned ID.

### Vehicle Information

In order to render an Alto user's vehicle information, you can proceed with typing in the following into the browser's URL or in your preferred API Client.

`localhost:3001/api/user/vehicle/:id`

By altering the `/:id` at the end of the URL with one of the Alto user's ID, you can render the Alto user's vehicle information. For example, by typing in `localhost:3001/api/user/vehicle/3` into the URL or API Client, the following information should render

![The following information displays the Alto user's vehicle information](images\vehicle-info.PNG)

This process can be repeated with any user within the data folder under the users.js file by inserting their assigned ID.

### Vibe Information

At anytime, the Alto user can choose their vehicle's vibe. To have a more enjoyable experience, Alto Rideshare allows its users to control their vehicle's vibe by choosing which music or sound atmosphere they would like to have during their trip. To render an Alto user's current vibe assigned to their vehicle, you can type the following URL into the browser's URL or into your preferred API Client.

`localhost:3001/api/user/vibe/:id`

By updating the `:/id` at the end of the URL with one of the Alto user's ID, you can render the following screen

![The following displays the current vibe in the Alto user's current trip](images\vibe-info.PNG)

This process can be repeated with any user within the data folder under the users.js file by inserting their assigned ID.

## **Technologies**

- JavaScript
- node.js
- Express library

## **Questions**

_Questions? Feel free to contact me._

- Via [Gtihub](https://github.com/pazjenni04)
- Via [Email](pazjenni1331@gmail.com)

# Links

- Github link - https://github.com/pazjenni04/alto-rideshare_node-app.git

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
