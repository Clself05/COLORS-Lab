# COLORS-Lab

## Description
COLORS is a simple web application that allows users to log in and manage a personalized list of colors. Users can add new colors to their account and search through their existing colors using a keyword-based search.

## Technologies Used
1. LAMP stack (Linux, Apache, MySQL, PHP) was used for the server stack.
2. HTML, CSS and JavaScript were used for the frontend.
3. PHP and MySQL were used for the backend.

## High-Level Setup Instructions
1. Set up a LAMP environment (Linux, Apache, MySQL, PHP) on a web server (DigitalOcean recommended).
2. Create a MySQL database with the required tables (`Users`, `Colors`).
3. Configure database credentials using environment variables.
4. Place the PHP API and frontend (HTML, CSS, JavaScript, Images) files in a directory accessible by the web server.
5. Change the urlBase in code.js to match the location of the API files on the web server.

## How to Run and Access the Application
1. On the web server, create a new user in the database.
2. Open a web browser and navigate to the url or IP address of your web server.
3. Log in using the user account created in step 1.
4. After logging in, users can add new colors, or search for colors they have added.

## Assumptions and Limitations
1. User accounts are assumed to already be inserted in the database.
2. The frontend assumes the backend is reachable at a predefined URL.
3. Minimal error handling and input validation.