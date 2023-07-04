# Central-Agroz-Economic-System

This web application aims to address the challenges faced by the agricultural sector in Sri Lanka. It provides a centralized platform that connects farmers, agricultural officers, and economic center management officers, facilitating efficient communication and coordination. The system aims to establish an accurate database for the government, create new business opportunities for farmers, and track the sales of crops received at economic centers. By utilizing the MERN (MongoDB, Express.js, React.js, Node.js) stack, this application offers a user-friendly interface and robust functionality.

# Setup Instructions

Follow these step-by-step instructions to set up the Agriculture Management System on your local machine:

Prerequisites

<li>Node.js</li>
<li>MongoDB</li>

# Installation

1. Clone the repository to your local machine using the following command:

```
git clone <repository_url>

```

2. Navigate to the project directory:

```
cd agriculture-management-system

```

3. Install the dependencies:

   ```
   //cd backend
   npm install

   ```

   ```
   //cd frontend
   npm install

   ```

4. Configuration:

<li>Create a .env file in the server directory.</li>
<li>Set the following environment variables in the .env file:</li>

```
MONGODB_URL = mongodb://localhost:27017/agriculture-management-system
PORT = 8085
JWT_SECRET_KEY ="MyKey"
```

5. Run the application:

```
//cd backend
npm run dev

```

```
//cd frontend
npm start

```

6. Open the application in your browser:

```
http://localhost:3000/

```

# Features

# <li>Super Admin</li>

<li>Register economic centers and the people in charge.</li>
<li>Register agricultural officers.</li>
<li>Update, view, and delete profiles of authorities.</li>

# <li>Agricultural Officer</li>

<li>Register farmers and update their details.</li>
<li>Manage fertilizer distribution.</li>
<li>Keep track of harvested quantities for each crop.</li>
<li>Generate reports related to farmers and fertilizers.</li>

# <li>Farmer</li>

<li>Register with the system through an agricultural officer.</li>
<li>Maintain a profile and advertise crops.</li>
<li>Receive direct orders from customers.</li>
<li>Post requirements for fertilizers and tools.</li>

# <li>Economic Center Management Officer</li>

<li>Manage stock details of items brought to the economic center.</li>
<li>Set and update daily buying and selling prices.</li>
<li>Generate reports and search stock details.</li>

# Conclusion

The Agriculture Management System provides a comprehensive solution for the agricultural sector in Sri Lanka. By connecting farmers, agricultural officers, and economic center management officers, it aims to improve coordination, facilitate business opportunities, and reduce food wastage. The MERN stack ensures a robust and user-friendly web application that contributes to the country's economy, food security, and sustainable growth in the agricultural sector.

# Contributors

<li href = "https://github.com/AbishekPerera">Perera A.S.A it21013096</li>
<li href = "https://github.com/LochaniRanasinghe">Ranasinghe H.R.A.L.N it21022838</li>
<li href = "https://github.com/Janani-Mayadunna">Mayadunna J. B it21026898</li>
<li href = "https://github.com/Kavindya-Udunuwara">Udunuwara U.K.C it21018282</li>

# Hosted Link

https://64685669c369835a1c029c80--jovial-taffy-79d888.netlify.app/

# screenshots

![image](https://github.com/AbishekPerera/Central-Agroz-Economic-System/blob/main/frontend/src/img/Web%20capture_4-7-2023_232135_64685669c369835a1c029c80--jovial-taffy-79d888.netlify.app.jpeg?raw=true)
