# Full Stack Developer Assessment: Real-time Large Dataset Dashboard

## Objective
Build a scalable, high-performance dashboard that processes and visualises data from large datasets (2GB+) in real-time. The system must incorporate user-specific roles, provide real-time data streaming, and handle large-scale data with robust access control and performance optimisations.

## Data Source
Candidates must choose one of the following publicly available datasets, each in CSV format, to demonstrate large dataset handling:

1. **[NYC Taxi & Limousine Commission Trip Record Data](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page)**  
   *Dataset Size:* ~1.4GB per month of data  
   *Description:* Trips, fares, and other transactional data.

2. **[U.S. Stock Market Historical Data (Kaggle)](https://www.kaggle.com/borismarjanovic/price-volume-data-for-all-us-stocks-etfs)**  
   *Dataset Size:* Multiple GBs  
   *Description:* Daily price, volume data of all US-listed stocks and ETFs.

3. **[OpenWeather Historical Weather Data](https://open-meteo.com/en/docs/historical-weather-api)**  
   *Dataset Size:* Varies depending on time range  
   *Description:* Historical weather data for any location in CSV format.

## Requirements

### 1. Backend (Node.js, Express.js, Database)
   - **API Design:**  
     - Set up an Express.js server to manage RESTful API requests.
     - Implement user authentication (JWT) and authorisation (RBAC/Entity-based Access).
     - Implement a queue/worker system (e.g., Bull, Redis, RabbitMQ) for processing large CSV files in the background.
     - Store processed data efficiently in a database like PostgreSQL or MongoDB.
     - Create an endpoint to ingest data via CSV files**, which will be processed and stored in the database.
     - Provide APIs for real-time data streaming (WebSockets/Server-Sent Events).
     - Ensure endpoints allow fetching, filtering, and pagination of large datasets.
   
   - **Scalability:**  
     - Implement horizontal scalability with microservices architecture for the backend (optional).
     - Support real-time streaming with low latency for large-scale data.
     - Efficiently handle multiple users uploading large datasets simultaneously.
   
   - **Security:**  
     - Implement best practices for securing API requests (rate limiting, input validation).
     - Apply encryption for sensitive data during storage and transit.

### 2. Frontend (Next.js, React.js)
   - **Design & UI/UX:**  
     - Create a responsive, modular dashboard with a clean and modern UI/UX.
     - Implement at least 3 role-specific views (admin, manager, user).
     - Include data visualisations (charts, graphs) using libraries like D3.js, Chart.js, or Recharts.
     - Support real-time updates with WebSockets or Server-Sent Events.
     - Allow users to upload new datasets and recalculate metrics without UI disruption.

   - **Performance & Optimisation:**  
     - Implement lazy loading, code splitting, and component-level caching.
     - Ensure optimal rendering of large datasets by using virtualisation (e.g., `react-window` or `react-virtualized`).
     - Add pagination and data chunking to handle large data efficiently on the frontend.

   - **Real-time Features:**  
     - Integrate WebSockets or Server-Sent Events for real-time data updates.
     - Display real-time analytics and graphs that auto-update as new data arrives.

### 3. Data Processing
   - **Efficient Processing:**  
     - Design a scalable solution for processing large CSV files in the background using worker processes.
     - Implement optimisations such as batch inserts and memory-efficient file reading (e.g., `stream`, `csv-parser`).
     - Support re-processing or updates when new datasets are uploaded.
     - Ensure data integrity when new data is processed or merged with existing entities.

   - **Analytics:**  
     - Calculate real-time metrics (e.g., sums, averages, etc.) as data is uploaded or modified.
     - Handle edge cases like incomplete data or inconsistent CSV formats gracefully.
     - Provide an efficient mechanism to update, delete, or modify entity data based on user role.

### 4. Deployment & CI/CD
   - **Infrastructure Setup:**  
     - Use AWS (Lambda/EC2) for backend services.
     - Deploy the frontend to Vercel or Netlify with proper environment configuration.

   - **CI/CD Pipeline:**  
     - Set up automated tests and deployments using GitHub Actions.
     - Ensure high code quality with linting (ESLint), unit tests (Jest), and integration tests.
     - Monitor performance metrics post-deployment (e.g., using AWS CloudWatch).

### 5. Advanced Performance & Optimisation
   - **Database:**  
     - Optimise database queries (e.g., indexes, partitioning) for large dataset performance.
     - Implement caching layers (e.g., Redis) for frequently accessed data.
   
   - **API & Caching:**  
     - Use HTTP/2 and server-side caching (ETags, Redis) for frequently requested data.
     - Implement rate limiting and API throttling for expensive queries.
   
   - **Frontend:**  
     - Use efficient data-fetching techniques (SWR/React Query) and reduce network payload size with GZIP compression.

---

## Assessment Tasks

### 1. Data Processing & API Development
   - Write a highly efficient Node.js script to process large datasets.
   - Implement batch processing to read, process, and store data in a database.
   - Create RESTful APIs to:
     - Stream real-time data to the frontend.
     - Allow filtered and paginated access to the data.
     - Update, delete, or modify data when new CSV files are uploaded.
   - Ensure user permissions are respected based on roles.

### 2. Dashboard Creation
   - Design a modular, responsive dashboard with a clean UI using Next.js.
   - Implement role-based views:
     - **Admin:** Full data access, control over user roles, data management features.
     - **Manager:** Access to specific datasets and metrics related to their entities.
     - **User:** Basic view with read-only access to a subset of data.
   - Add real-time data visualisations using a charting library.
   - Handle large datasets with proper pagination and filtering mechanisms.

### 3. Real-Time Features
   - Implement real-time updates on the frontend using WebSockets or Server-Sent Events.
   - Visualise real-time changes in data and analytics.

### 4. Authentication, Authorisation, & Security
   - Implement JWT-based authentication.
   - Set up RBAC and entity-based access controls to ensure data security.
   - Ensure secure APIs with input validation and role-based access filtering.

### 5. Deployment & CI/CD
   - Deploy the frontend to Vercel and backend to AWS.
   - Set up a GitHub Actions CI/CD pipeline for automated testing and deployment.

### 6. Performance Optimisation
   - Implement lazy loading, pagination, and data virtualisation for large datasets.
   - Optimise database queries and use caching strategies for commonly requested data.
   - Measure and improve API response time and frontend rendering performance.

---

## Evaluation Criteria

1. Code quality, readability, and maintainability.
2. Scalability and efficiency in handling large datasets.
3. Robust real-time processing and data streaming implementation.
4. Ability to handle different user roles with strict data access control.
5. UI/UX quality, responsiveness, and user-friendliness.
6. Optimised backend and frontend performance.
7. Deployment strategy, CI/CD pipeline setup, and code documentation.
8. Handling of edge cases, error handling, and testing coverage.
9. Meaningful Git commits with clear, descriptive messages for both frontend and backend development progress.

---

## Submission Guidelines

1. Provide a **GitHub repository link** with all source code.
2. Include a **README.md** with:
   - Setup instructions.
   - Architecture and design decisions.
   - Assumptions, limitations, and areas for improvement.
3. Provide live URLs for both **frontend** and **backend** deployments.
4. Submit a **short demo video** showcasing the app's core features.
5. Provide **demo user credentials** for each role (admin, manager, user) with explanations of role-based access.

---

## Time Frame
You have **7 days** to complete this assessment. Good luck!
