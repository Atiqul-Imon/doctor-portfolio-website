#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Doctor Website Template - Quick Setup');
console.log('==========================================\n');

// Check if .env.local exists
const envPath = path.join(__dirname, '..', '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local file...');
  
  // Copy from env.example
  const envExamplePath = path.join(__dirname, '..', 'env.example');
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ .env.local created from env.example');
  } else {
    // Create basic .env.local
    const envContent = `# Environment Variables for Doctor Website Template
# Copy this file to .env.local and fill in your values

# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/doctor-website?retryWrites=true&w=majority

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Contact Information
NEXT_PUBLIC_PHONE_NUMBER=+1-555-0123
NEXT_PUBLIC_EMAIL=info@doctorwebsite.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+1-555-0123

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
`;
    fs.writeFileSync(envPath, envContent);
    console.log('✅ .env.local created with default values');
  }
} else {
  console.log('✅ .env.local already exists');
}

console.log('\n📋 Next Steps:');
console.log('1. Update MONGODB_URI in .env.local with your MongoDB Atlas connection string');
console.log('2. Update contact information in .env.local');
console.log('3. Run: npm run dev');
console.log('4. Open: http://localhost:3000');
console.log('\n📚 For detailed instructions, see INSTALLATION.md');
console.log('🎨 For customization help, see CUSTOMIZATION.md');
console.log('\n🎉 Setup complete! Happy coding!');
