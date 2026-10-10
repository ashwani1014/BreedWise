# BreedWise 🐕

An intelligent dog breed matching platform that uses AI to help users find their perfect canine companion based on lifestyle preferences, living conditions, and personal needs.

**🌐 Live Demo:** [breed-wise.vercel.app](https://breed-wise.vercel.app)

## 🌟 Features

### Core Features
- **AI-Powered Breed Matching**: Smart quiz system that analyzes lifestyle factors to recommend the perfect dog breeds
- **Dog Marketplace**: Browse puppies available for sale and adoption with detailed information
- **User Authentication**: Secure login/signup system with JWT tokens
- **Profile Management**: Personalize your profile with preferences and photos
- **Search & Filter**: Find dogs by breed, location, age, gender, and more
- **Favorites System**: Save your favorite dog listings
- **Subscription System**: Free tier with limited AI matches, premium tier for unlimited access

### Advanced Features
- **Lifestyle Assessment Quiz**: 6-step comprehensive quiz covering living space, activity level, family situation, and more
- **Real-time Matching**: AI analyzes quiz responses and provides personalized breed recommendations
- **Detailed Dog Profiles**: Comprehensive information including temperament, energy level, cost, and care requirements
- **Responsive Design**: Beautiful, mobile-friendly interface built with Tailwind CSS
- **Seller Information**: Contact details for breeders and shelters

## 🏗️ Architecture

### Frontend (Next.js 16.2.6)
- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS 4.3.0
- **State Management**: React Hooks and Context API
- **UI Components**: Custom component library with reusable elements

### Backend (Express.js)
- **Framework**: Express.js server
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based authentication
- **File Storage**: Cloudinary for image uploads
- **AI Integration**: Google Gemini API for breed matching

## 📁 Project Structure

```
BreedWise/
├── FRONTEND/                 # Next.js frontend application
│   ├── app/                 # Next.js app router pages
│   │   ├── Home/           # Home page with dog listings
│   │   ├── Quiz/           # Lifestyle assessment quiz
│   │   ├── AIMatch/        # AI breed matching results
│   │   ├── Profile/        # User profile management
│   │   ├── Login/          # User authentication
│   │   ├── Signup/         # User registration
│   │   └── Discover/       # Dog discovery page
│   ├── component/          # Reusable UI components
│   ├── Context/            # React context providers
│   └── services/           # API service functions
│
├── BACKEND/                # Express.js backend server
│   ├── Controller/         # Request handlers
│   │   ├── AiController.js        # AI breed matching logic
│   │   ├── userController.js      # User authentication & profile
│   │   ├── HomeController.js       # Home page data
│   │   └── profileCOntroller.js  # Profile updates
│   ├── Models/              # Mongoose database models
│   │   ├── User.js         # User schema
│   │   ├── Puppy.js        # Dog listing schema
│   │   ├── Payment.js      # Payment transactions
│   │   └── seller.js       # Seller information
│   ├── Routes/             # API route definitions
│   ├── Middleware/         # Express middleware
│   ├── Service/            # External service integrations
│   ├── config/             # Configuration files
│   └── server.js           # Main server entry point
│
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Google Gemini API key
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashwani1014/BreedWise.git
   cd BreedWise
   ```

2. **Backend Setup**
   ```bash
   cd BACKEND
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the `BACKEND` directory:
   ```env
   MONGODB_URL=mongodb+srv://your-mongodb-connection-string
   Port=8000
   JWT_SECRET=your-jwt-secret-key
   GEMINI_API_KEY=your-gemini-api-key
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```

4. **Frontend Setup**
   ```bash
   cd ../FRONTEND
   npm install
   ```

5. **Run the Application**

   **Terminal 1 - Backend:**
   ```bash
   cd BACKEND
   npm run dev
   ```
   Backend will run on `http://localhost:8000`

   **Terminal 2 - Frontend:**
   ```bash
   cd FRONTEND
   npm run dev
   ```
   Frontend will run on `http://localhost:3000`

## 🎯 How It Works

### AI Breed Matching Process
1. User completes a 6-step lifestyle assessment quiz
2. Quiz responses are sent to the backend
3. Backend uses Google Gemini API to analyze responses
4. AI recommends 3 dog breeds that best match the user's lifestyle
5. Results are displayed with match percentages and detailed information

### User Flow
1. **Home Page**: Browse available dogs, search and filter listings
2. **Quiz**: Take lifestyle assessment to get personalized recommendations
3. **AI Match**: View AI-recommended breeds based on quiz results
4. **Profile**: Manage personal information and preferences
5. **Favorites**: Save interesting dog listings

## 🔧 API Endpoints

### Authentication
- `POST /auth/signup` - User registration
- `POST /auth/login` - User login
- `GET /auth/me` - Get current user profile
- `PUT /auth/me` - Update user profile

### Dog Listings
- `GET /api/home` - Get puppies with pagination
- `GET /api/profile/upload` - Upload profile picture
- `PUT /api/profile/change-password` - Change password

### AI Features
- `POST /api/ai/match` - Get AI breed recommendations (requires authentication)

### Payment (Currently Disabled)
- `POST /api/payment/create-order` - Create payment order
- `POST /api/payment/verify-payment` - Verify payment
- `GET /api/payment/check-subscription` - Check subscription status

## 🎨 Key Technologies

### Frontend
- **Next.js 16.2.6**: React framework with server-side rendering
- **React 19.2.4**: UI library
- **Tailwind CSS 4.3.0**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript

### Backend
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: Authentication tokens
- **Cloudinary**: Cloud image storage
- **Google Gemini API**: AI-powered recommendations
- **Razorpay**: Payment processing (currently disabled)

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes with middleware
- CORS configuration for frontend-backend communication
- Environment variable protection for sensitive data

## 📊 Database Schema

### User Model
- Personal information (name, email, location, bio)
- Authentication credentials
- Subscription status and limits
- Preferences and settings
- Profile photo

### Puppy Model
- Dog details (name, breed, age, gender)
- Pricing information
- Breeder/seller information
- Contact details
- Images and photos
- Location and availability

### Payment Model
- Transaction details
- Razorpay order information
- Subscription tracking
- Payment status

## 🚧 Current Status

### Working Features
- ✅ User authentication (login/signup)
- ✅ Lifestyle assessment quiz
- ✅ AI breed matching (Gemini API integration)
- ✅ Dog marketplace with search/filter
- ✅ Profile management
- ✅ Image upload (Cloudinary)
- ✅ Favorites system
- ✅ Responsive design

### Known Issues
- ⚠️ Gemini API occasionally experiences high demand (503 errors)
- ⚠️ Payment system temporarily disabled
- ⚠️ Duplicate database index warnings (non-critical)

### Future Enhancements
- 🔄 Re-enable payment system with proper error handling
- 🔄 Add more AI models for better matching
- 🔄 Implement real-time notifications
- 🔄 Add breed comparison features
- 🔄 Enhanced search with AI-powered suggestions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is private and proprietary.

## 👨‍💻 Author

**Ashwani** - Full Stack Developer

## 🙏 Acknowledgments

- Google Gemini API for AI-powered recommendations
- Cloudinary for image storage services
- Tailwind CSS for the beautiful UI framework
- Next.js team for the amazing React framework

---

**Note**: This project is currently in active development. Some features may be subject to change as we continue to improve the platform.