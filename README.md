# student_management

## 📂 Project Structure

```bash
.
├── client/     # Angular Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── footer/            # Footer component
│   │   │   ├── header/            # Header component
│   │   │   ├── home-page/         # Home page components
│   │   │   ├── login-box/         # Login page
│   │   │   ├── main-details-page/ # Detailed information page
│   │   │   ├── sign-up/           # Sign-up page
│   │   │   ├── state/             # NgRx State Management
│   │   │   ├── modules/           # Angular feature modules
│   │   │   ├── app-routing.module.ts # Application routing
│   │   │   ├── app.module.ts         # Root module
│   ├── assets/
│   ├── styles.css
│   ├── proxy.conf.json          # Proxy for API requests
├── server/                      # Node.js Backend
├── nginx/                       # (Optional) Nginx config for deployment
├── README.md

```

-- Technology Stack
-- 
-- Frontend: Angular 19.2.9
-- Backend: Node.js 20.19.1
-- State Management: NgRx
-- CSS Framework: Bootstrap (assumed)
-- Package Manager: npm
-- Proxy: proxy.conf.json (for API requests)

-- Setup Instructions

-- 1. Prerequisites
-- 
-- Node.js (v20.19.1)
-- npm (v10.8.2)
-- Angular CLI (v19.2.9)
-- nvm (optional for Node.js version management)

-- 2. Clone the repository
-- 
-- git clone <your-repository-url>
-- cd student-management

-- 3. Install dependencies

-- Client:
-- cd client
-- npm install

-- Server:
-- cd ../server
-- npm install

-- 4. Run the application

-- Start Angular Frontend:
-- cd client
-- ng serve --proxy-config proxy.conf.json

-- Frontend will run on http://localhost:4200

-- Start Node.js Backend:
-- cd server
-- npm run start

-- Backend will run on http://localhost:3000

-- 5. Build for Production
-- 
-- cd client
-- ng build --configuration production

-- Proxy Configuration

-- API requests from the Angular app are forwarded to the Node.js backend via proxy.conf.json.

-- Example proxy.conf.json:
-- {
--   "/api": {
--     "target": "http://localhost:3000",
--     "secure": false
--   }
-- }

-- Available Commands

-- ng serve           -- Run the Angular application locally
-- ng build           -- Build the Angular app for production
-- npm run start      -- Run Node.js backend server
-- ng test            -- Run unit tests using Karma
-- ng lint            -- Lint the Angular codebase

-- Versions Summary

-- Tool             Version
-- ---------------- -------
-- Angular CLI      19.2.9
-- Angular          19.2.8
-- Node.js          20.19.1
-- npm              10.8.2
-- nvm              1.2.2
-- Typescript       5.8.3
-- RxJS             7.8.2
-- Zone.js          0.15.0

-- Notes

-- - Routing is handled via Angular Router.
-- - State Management is implemented using NgRx.
-- - Deployment can use Nginx (nginx/ directory).

-- Author
-- [Your Name or Team Name]
-- [Your Website or Email]

-- License
-- MIT License (or specify)
