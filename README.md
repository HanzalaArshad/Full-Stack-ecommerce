
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
![Image](https://github.com/user-attachments/assets/3159c705-63ad-40b5-8d82-70272cf37c5d)
![Image](https://github.com/user-attachments/assets/23b72872-aec9-4d31-ac1d-e451e13ae162)
![Image](https://github.com/user-attachments/assets/83c1efc8-16b2-47bb-aab6-e99cc418f251)
![Image](https://github.com/user-attachments/assets/466216a0-e3c7-4e69-b65c-ba62eb25d1e5)
![Image](https://github.com/user-attachments/assets/0d6cfa4c-574d-4f8f-9ed2-88c8aee62402)
![Image](https://github.com/user-attachments/assets/c2ecbfb1-54b4-4af7-99a8-653ccc329ab3)
![Image](https://github.com/user-attachments/assets/8f20d146-4aec-4863-a88e-d64d0b12285a)
![Image](https://github.com/user-attachments/assets/1e5e8609-bd53-42fa-9d81-85d9d68549f1)
![Image](https://github.com/user-attachments/assets/204128fc-9720-4595-aff9-9d0d9fa4012f)| ![Admin Dashboard](https://via.placeholder.com/300) | ![Books Page](https://via.placeholder.com/300) |  

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
