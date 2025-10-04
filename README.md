# 🏥 Doctor Website Template

A modern, professional doctor website template built with Next.js 15, TypeScript, and Tailwind CSS. Perfect for medical practices, clinics, and healthcare professionals.

## ✨ Features

### 🎨 Design & UI
- **Modern Glassmorphism Design** - Beautiful glass effects and modern UI
- **Fully Responsive** - Perfect on mobile, tablet, and desktop
- **Professional Medical Theme** - Clean, trustworthy design
- **Smooth Animations** - Subtle, professional animations
- **High-Quality Images** - Professional stock photos included

### 🛠 Technical Features
- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **MongoDB Integration** - Database for blogs and services
- **SEO Optimized** - Meta tags, sitemap, robots.txt
- **Performance Optimized** - Fast loading and Lighthouse scores
- **Image Optimization** - Next.js Image component
- **Error Handling** - Custom 404 page and error boundaries

### 📱 Pages Included
- **Homepage** - Hero section, services, testimonials
- **About Page** - Doctor information and team
- **Services Page** - Medical services with pricing
- **Blog System** - Health blog with articles
- **Contact Page** - Contact form and information
- **Appointment Page** - Booking form
- **404 Page** - Custom not found page

### 🔧 Functionality
- **Blog Management** - Add/edit blog posts
- **Services Management** - Manage medical services
- **Contact Form** - Working contact form with validation
- **WhatsApp Integration** - Floating chat widget
- **Appointment Booking** - Patient appointment system
- **Search Engine Ready** - SEO optimized for Google

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free)
- Vercel account (free)

### Installation
1. **Download** the template files
2. **Extract** to your desired directory
3. **Open terminal** in the project directory
4. **Install dependencies**: `npm install`
5. **Set up environment variables** (see `env.example`)
6. **Run development server**: `npm run dev`
7. **Open** [http://localhost:3000](http://localhost:3000)

### Environment Setup
Copy `env.example` to `.env.local` and fill in your values:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/doctor-website
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_PHONE_NUMBER=+1-555-0123
NEXT_PUBLIC_EMAIL=info@doctorwebsite.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+1-555-0123
```

## 🎨 Customization

### Easy Customizations
- **Colors**: Change via Tailwind config or CSS variables
- **Text**: Edit content in component files
- **Images**: Replace images in `public/` directory
- **Logo**: Update logo in `public/logo.png`
- **Contact Info**: Update in contact components

### Advanced Customizations
- **Add new pages**: Create in `src/app/` directory
- **Modify layout**: Edit components in `src/components/`
- **Add features**: Create new components and API routes
- **Database changes**: Modify models in `src/models/`

See `CUSTOMIZATION.md` for detailed instructions.

## 📦 What's Included

### Source Code
- Complete Next.js 15 application
- TypeScript configuration
- Tailwind CSS setup
- MongoDB integration
- API routes
- Components and pages

### Documentation
- Installation guide
- Customization guide
- License agreement
- Changelog
- Template information

### Assets
- Professional images
- Icons and graphics
- Fonts and styling
- Configuration files
=======
# Dr. Sarah Johnson - Family Medicine Website

A modern, responsive doctor website built with Next.js 15 and Tailwind CSS v3. This is a portfolio project showcasing a professional medical practice website with all essential features.

## 🏥 Features

### Core Pages
- **Homepage** - Hero section, services overview, testimonials, and why choose us
- **About** - Doctor profile, credentials, experience, and philosophy
- **Services** - Detailed medical services with pricing and descriptions
- **Appointment Booking** - Online appointment scheduling system
- **Contact** - Contact information, office hours, and contact form
- **Blog** - Health articles and wellness tips

### Key Features
- ✅ Responsive design (mobile-first approach)
- ✅ Modern UI with medical-themed color palette
- ✅ MongoDB Atlas integration for data storage
- ✅ Appointment booking system with API
- ✅ Blog system with sample articles
- ✅ Contact forms with validation
- ✅ SEO optimized with proper meta tags
- ✅ Accessible design with proper ARIA labels
- ✅ Professional medical color scheme (sky blue, clean whites)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS v3
- **Database**: MongoDB Atlas with Mongoose
- **Icons**: Heroicons
- **Font**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas account
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd doctor-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/doctor-website?retryWrites=true&w=majority
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
doctor-website/
├── src/
│   ├── app/                 # Next.js 15 App Router
│   │   ├── api/            # API routes
│   │   ├── about/          # About page
│   │   ├── appointment/    # Appointment booking
│   │   ├── blog/           # Blog pages
│   │   ├── contact/        # Contact page
│   │   ├── services/       # Services page
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyChooseUs.tsx
│   ├── lib/               # Utility functions
│   │   └── mongodb.ts     # Database connection
│   ├── models/            # MongoDB models
│   │   ├── Appointment.ts
│   │   ├── Blog.ts
│   │   └── Service.ts
│   └── types/             # TypeScript types
│       └── global.d.ts
├── public/                # Static assets
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Sky Blue (#0ea5e9)
- **Secondary**: Emerald Green (#10b981)
- **Accent**: Amber (#f59e0b)
- **Background**: White (#ffffff)
- **Text**: Gray (#1f2937)
- **Muted**: Gray (#6b7280)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)
- **Small text**: Medium weight (500)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 API Endpoints

### Appointments
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments?email=...` - Get appointments by email

### Blog
- `GET /api/blogs` - Get all published blog posts
- `GET /api/blogs?page=1&limit=6` - Paginated blog posts

## 🗄️ Database Models

### Appointment
- Patient information (name, email, phone)
- Appointment details (date, time, service)
- Status tracking (pending, confirmed, cancelled, completed)

### Blog
- Article content (title, slug, content, excerpt)
- Metadata (author, published date, tags)
- Publishing status

### Service
- Service details (name, description, price)
- Categorization and featured status
>>>>>>> eb315eff929e8a1d3e49a4ade4a1c3514a25bd66

## 🚀 Deployment

### Vercel (Recommended)
<<<<<<< HEAD
1. Push code to GitHub
2. Connect Vercel to repository
3. Add environment variables
4. Deploy!

### Other Platforms
- Netlify
- AWS
- DigitalOcean
- Any Node.js hosting

## 💰 Pricing & License

- **Price**: $30
- **License**: Commercial Use
- **Projects**: Unlimited
- **Support**: 6 months included
- **Updates**: Lifetime

## 📞 Support

- **Email**: your-email@example.com
- **Response Time**: 24-48 hours
- **Documentation**: Included
- **Video Tutorials**: Available

## 🔧 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB, Mongoose
- **Icons**: Heroicons, Lucide React
- **Deployment**: Vercel ready

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎯 Perfect For

- Medical practices
- Dental clinics
- Veterinary clinics
- Mental health professionals
- Healthcare consultants
- Medical specialists
- Any healthcare business

## 📈 Performance

- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 🔄 Updates

- Regular updates included
- Bug fixes and improvements
- New features added
- Security updates
- Performance optimizations

---

**Ready to launch your medical website? Get started today!** 🚀
=======
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📈 Performance Features

- Server-side rendering (SSR)
- Static generation where possible
- Image optimization
- Code splitting
- Lazy loading
- SEO optimization

## 🔒 Security Features

- Input validation
- XSS protection
- CSRF protection
- Environment variable security
- Database connection security

## 📞 Support

For questions or support regarding this project, please contact:
- Email: info@pixelforge.agency
- Website: [Pixel Forge Agency](https://pixelforge.agency)

## 📄 License

This project is created for portfolio purposes by Pixel Forge Agency. All rights reserved.

---

**Built with ❤️ by Pixel Forge Agency**
>>>>>>> eb315eff929e8a1d3e49a4ade4a1c3514a25bd66
