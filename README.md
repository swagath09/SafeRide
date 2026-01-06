# SafeRide – Women Safety Ride Platform

SafeRide is a web-based ride-sharing platform designed exclusively for women, with a primary focus on safety, trust, and accessibility.  
The application provides separate authentication flows and dashboards for riders and drivers to ensure a secure and structured ride experience.

Designed to promote safer transportation for women through structured authentication and role-based access.

---

## Features

### Rider Module
- Rider registration and login  
- Ride booking with pickup and drop locations  
- View ride details after booking  
- Clean and simple user interface  

### Driver Module
- Driver registration and login  
- Driver dashboard to view ride requests  
- Driver profile management  
- Ride management functionality  

### Safety-Oriented Design
- Women-focused ride-sharing concept  
- Separate access for riders and drivers  
- Controlled dashboard navigation  

---

## How It Works

1. Users land on the main page and choose to continue as a rider or driver.  
2. Riders and drivers authenticate using their respective login pages.  
3. Riders submit a ride request by providing pickup and destination details.  
4. Ride data is stored and managed securely in the database.  
5. Drivers log in to view ride requests on the dashboard.  
6. Drivers manage and respond to assigned rides.  

---

## Technology Stack

### Frontend
- HTML5  
- CSS3  
- JavaScript  

### Backend
- Node.js  
- Express.js  

### Database and Authentication
- Firebase Realtime Database
- Firebase Authentication 

---

## Project Structure

SafeRide/  
├── index.html  
├── homepage.css  
├── login_rider.html  
├── login_rider.css  
├── riders_form.html  
├── riders_form.css  
├── ride_details.html  
├── profile.html  
├── login_driver.html  
├── login_driver.css  
├── drivers_form.html  
├── drivers_form.css  
├── driver_dashboard.html  
├── driver_dashboard.css  
├── driver_profile.html  
├── book_ride.html  
├── map.html  
├── server.js  
└── README.md  

---

## Running the Project Locally

1. Clone the repository  
2. Open the project folder  
3. Install dependencies using `npm install`  
4. Start the server using `node server.js`  
5. Open `index.html` in your browser  

---

## Deployment

This project is deployed using GitHub Pages and can be accessed from the repository’s GitHub Pages link.

---

## Screenshots

### Landing Page
![Landing Page](screenshots/landing-page.png)

### Rider Dashboard
![Rider Dashboard](screenshots/rider-dashboard.png)

### Driver Dashboard
![Driver Dashboard](screenshots/driver-dashboard.png)


## Future Enhancements

- Live GPS tracking  
- Emergency SOS feature  
- OTP-based ride confirmation  
- Rating and feedback system  
- Admin verification panel  
- Mobile application  

---

## Author

Swagath  
Frontend and Backend Developer  

---

## License

This project is developed for educational purposes.  
Free to use, modify, and distribute with proper credit.
