
# 📚 MERN Book Store  

A full-stack MERN application for managing an online book store. This project features both user and admin functionality, with a responsive UI, secure routes, and robust backend logic.  

## 🚀 Features  
- 🛒 **User Features:**  
  - Add books to cart.  
  - Browse and search for books.  
  - Responsive design for all devices.  

- 🔐 **Admin Dashboard:**  
  - View user stats and activities.  
  - Add, edit, update, and delete books.  
  - Protected routes for secure admin access.  

- 🎨 **UI/UX Enhancements:**  
  - Redesigned About and Books pages for a modern look.  

- 📦 **Backend:**  
  - Built using Node.js and Express.  
  - Mongoose for database operations.  

- 🌐 **Deployment:**  
  - Hosted on Vercel for fast and reliable performance.  

## 🛠️ Technologies Used  
- **Frontend:**  
  - React.js  
  - Tailwind CSS  

- **Backend:**  
  - Node.js  
  - Express.js  

- **Database:**  
  - MongoDB  

- **Deployment:**  
  - Vercel  

## 🔧 Setup Instructions  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/mern-book-store.git  
   ```  

2. Navigate to the project directory:  
   ```bash  
   cd mern-book-store  
   ```  

3. Install dependencies for the frontend and backend:  
   ```bash  
   cd client && npm install  
   cd ../server && npm install  
   ```  

4. Set up environment variables:  
   - Create a `.env` file in the server directory with the following keys:  
     ```
     MONGO_URI=<your_mongodb_connection_string>  
     JWT_SECRET=<your_jwt_secret>  
     ```  

5. Start the development server:  
   ```bash  
   cd client && npm start  
   cd ../server && npm run dev  
   ```  

6. Access the application:  
   - Frontend: `http://localhost:3000`  
   - Backend: `http://localhost:5000`  

## 📸 Screenshots  
| **Admin Dashboard** | **Books Page** |  
|----------------------|----------------|  
| ![Admin Dashboard](https://via.placeholder.com/300) | ![Books Page](https://via.placeholder.com/300) |  

## 🌟 Live Demo  
Check out the live project here: [Live Demo](https://booknest-bibliophile.vercel.app/)  

## 🤝 Contributing  
Contributions are welcome! Please follow these steps:  
1. Fork the repository.  
2. Create a new branch:  
   ```bash  
   git checkout -b feature/your-feature-name  
   ```  
3. Commit your changes:  
   ```bash  
   git commit -m "Add your message here"  
   ```  
4. Push to the branch:  
   ```bash  
   git push origin feature/your-feature-name  
   ```  
