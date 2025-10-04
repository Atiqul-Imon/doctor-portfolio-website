# Doctor Website Template - Customization Guide

## 🎨 Easy Customizations

### 1. Changing Colors

#### Method 1: Tailwind Config (Recommended)
Edit `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#0ea5e9',  // Change this
          600: '#0284c7',  // Change this
          700: '#0369a1',  // Change this
        }
      }
    }
  }
}
```

#### Method 2: CSS Variables
Edit `src/app/globals.css`:
```css
:root {
  --primary-color: #0ea5e9;  /* Change this */
  --secondary-color: #1e40af; /* Change this */
  --accent-color: #f59e0b;    /* Change this */
}
```

### 2. Changing Text Content

#### Doctor Information
Edit `src/components/Hero.tsx`:
```jsx
// Change these lines
<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
  Dr. Sarah Johnson  {/* Change this */}
</h1>
<p className="text-xl md:text-2xl text-cyan-300 mb-8">
  Family Medicine Specialist  {/* Change this */}
</p>
```

#### Contact Information
Edit `src/app/contact/page.tsx`:
```jsx
// Update contact details
const contactInfo = {
  phone: '+1-555-0123',  // Change this
  email: 'info@doctorwebsite.com',  // Change this
  address: '123 Medical Center, City, State 12345'  // Change this
}
```

### 3. Changing Images

#### Hero Image
1. Replace `public/hero/doctorwebsiteimage.webp`
2. Or update the path in `src/components/Hero.tsx`

#### Logo
1. Replace `public/logo.png`
2. Update the path in `src/components/Header.tsx`

### 4. Changing Services

Edit `src/app/api/services/route.ts` or add services in MongoDB:
```javascript
const services = [
  {
    name: 'Your Service Name',
    description: 'Your service description',
    icon: 'HeartIcon',
    price: 150,
    duration: '30-60 minutes',
    category: 'General Health',
    featured: true
  }
]
```

### 5. Changing Blog Content

#### Add New Blog Posts
1. Use the admin panel (if available)
2. Or add directly to MongoDB
3. Or use the seed script: `npm run seed-blogs`

### 6. Changing WhatsApp Number

Edit `src/components/WhatsAppChat.tsx`:
```jsx
const whatsappNumber = '+1-555-0123';  // Change this
```

## 🔧 Advanced Customizations

### Adding New Pages
1. Create new file in `src/app/`
2. Add navigation link in `src/components/Header.tsx`
3. Update footer links if needed

### Modifying Layout
1. Edit components in `src/components/`
2. Update styles in `src/app/globals.css`
3. Modify Tailwind classes as needed

### Adding New Features
1. Create new components in `src/components/`
2. Add API routes in `src/app/api/`
3. Update database models if needed

## 📱 Responsive Design

The template is fully responsive. To modify breakpoints:
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🎨 Color Schemes

### Pre-built Color Schemes
1. **Blue Theme** (Default): Professional medical look
2. **Green Theme**: Natural, wellness feel
3. **Purple Theme**: Modern, tech-forward
4. **Red Theme**: Emergency, urgent care

To change color scheme, update the colors in `tailwind.config.js`.

## 📝 Content Guidelines

### Text Content
- Keep headings concise and clear
- Use professional medical terminology
- Ensure all text is proofread
- Make content scannable with bullet points

### Images
- Use high-quality, professional images
- Ensure images are optimized for web
- Use consistent aspect ratios
- Include alt text for accessibility

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Minimize Dependencies**: Remove unused packages
3. **Use CDN**: For better loading speeds
4. **Enable Compression**: In your hosting provider

## 🐛 Troubleshooting

### Common Issues
1. **Build Errors**: Check Node.js version (18+)
2. **Database Issues**: Verify MongoDB connection
3. **Styling Issues**: Clear browser cache
4. **Deployment Issues**: Check environment variables

### Getting Help
- Check the documentation first
- Search for similar issues online
- Contact support if needed

## 📞 Support

For customization help:
- Email: your-email@example.com
- Response time: 24-48 hours
- Include error messages and steps to reproduce

