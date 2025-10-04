# Doctor Website Template - Installation Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free)
- Vercel account (free)

### Step 1: Download and Extract
1. Download the template files
2. Extract to your desired directory
3. Open terminal in the project directory

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Environment Setup

#### Option A: Quick Setup (Recommended)
```bash
npm run setup
```
This will automatically create `.env.local` from `env.example`.

#### Option B: Manual Setup
1. Copy `env.example` to `.env.local`
2. Fill in your MongoDB connection string
3. Update other environment variables as needed

### Step 4: Database Setup
1. **Create MongoDB Atlas Account** (Free):
   - Go to [mongodb.com/atlas](https://mongodb.com/atlas)
   - Sign up for free account
   - Choose "Free" tier (M0 Sandbox)

2. **Create New Cluster**:
   - Click "Create Cluster"
   - Choose "Free" tier
   - Select region closest to you
   - Name your cluster (e.g., "doctor-website")

3. **Set Up Database Access**:
   - Go to "Database Access" in left menu
   - Click "Add New Database User"
   - Create username and password
   - Set privileges to "Read and write to any database"

4. **Get Connection String**:
   - Go to "Clusters" in left menu
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string

5. **Update Environment File**:
   - Open `.env.local`
   - Replace `MONGODB_URI` with your connection string
   - Replace `<password>` with your database user password
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/doctor-website?retryWrites=true&w=majority`

### Step 5: Run Development Server
```bash
npm run dev
```

### Step 6: Seed Database (Optional)
```bash
npm run seed-blogs
```

### Step 7: Deploy to Vercel
1. Push your code to GitHub
2. Connect Vercel to your GitHub repo
3. Add environment variables in Vercel
4. Deploy!

## 📱 Features Included

- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Modern UI with Glassmorphism Effects
- ✅ Blog System with MongoDB
- ✅ Services Management
- ✅ Contact Form
- ✅ WhatsApp Integration
- ✅ SEO Optimized
- ✅ Custom 404 Page
- ✅ Appointment Booking
- ✅ About Page
- ✅ Testimonials Section

## 🛠 Customization

See `CUSTOMIZATION.md` for detailed customization instructions.

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. MongoDB Connection Error
**Error**: `Please define the MONGODB_URI environment variable inside .env.local`

**Solution**:
- Make sure `.env.local` file exists in root directory
- Check that `MONGODB_URI` is properly set
- Verify MongoDB Atlas cluster is running
- Ensure database user has correct permissions

#### 2. Build Errors
**Error**: TypeScript or build errors

**Solution**:
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (requires 18+)
- Clear cache: `rm -rf .next && npm run dev`

#### 3. Viewport Warnings
**Warning**: `Unsupported metadata viewport is configured`

**Solution**:
- This is fixed in the latest version
- Viewport is now properly configured in `layout.tsx`

#### 4. Images Not Loading
**Issue**: Images show as broken

**Solution**:
- Check that images exist in `public/` directory
- Verify image paths in components
- Ensure proper file permissions

#### 5. Styling Issues
**Issue**: CSS not loading properly

**Solution**:
- Run `npm run dev` to start development server
- Check that Tailwind CSS is properly configured
- Clear browser cache

### Getting Help

If you encounter issues not listed here:

1. **Check the documentation** first
2. **Search for similar issues** online
3. **Contact support** with:
   - Error message
   - Steps to reproduce
   - Your environment details

## 📞 Support

For support, email: your-email@example.com
Response time: 24-48 hours

## 📄 License

This template is licensed for commercial use. See `LICENSE.md` for details.

