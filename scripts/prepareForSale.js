#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

console.log('🧹 Preparing template for sale...');

// Files and directories to remove
const filesToRemove = [
  '.next',
  'node_modules',
  '.git',
  '.env.local',
  '.env',
  'package-lock.json',
  'yarn.lock',
  '.DS_Store',
  'Thumbs.db',
  'scripts/seedDatabase.js',
  'scripts/seedDatabase.ts',
  'test-services.html',
  'TEMPLATE_PREPARATION.md'
];

// Directories to clean (unused but kept for reference)
// const dirsToClean = [
//   '.next',
//   'node_modules'
// ];

// Remove files
filesToRemove.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    if (fs.statSync(filePath).isDirectory()) {
      fs.rmSync(filePath, { recursive: true, force: true });
      console.log(`✅ Removed directory: ${file}`);
    } else {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed file: ${file}`);
    }
  }
});

// Create .gitignore for template
const gitignoreContent = `# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Next.js
.next/
out/

# Production
build/
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
public

# Storybook build outputs
.out
.storybook-out

# Temporary folders
tmp/
temp/

# Editor directories and files
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Vercel
.vercel
`;

fs.writeFileSync(path.join(__dirname, '..', '.gitignore'), gitignoreContent);
console.log('✅ Created .gitignore');

// Update package.json scripts
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Remove development scripts
delete packageJson.scripts['seed-blogs'];

// Add template-specific scripts
packageJson.scripts = {
  ...packageJson.scripts,
  'dev': 'next dev',
  'build': 'next build',
  'start': 'next start',
  'lint': 'eslint .',
  'lint:fix': 'eslint . --fix',
  'type-check': 'tsc --noEmit'
};

// Update package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Updated package.json');

// Create template info file
const templateInfo = {
  name: "Doctor Website Template",
  version: "1.0.0",
  description: "Modern Next.js + MERN stack doctor website template",
  price: "$30",
  features: [
    "Next.js 15 + MERN stack",
    "Responsive design",
    "Glassmorphism UI",
    "Blog system",
    "Services management",
    "Contact form",
    "WhatsApp integration",
    "SEO optimized",
    "Custom 404 page",
    "Appointment booking"
  ],
  techStack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Mongoose"
  ],
  pages: [
    "Homepage",
    "About",
    "Services",
    "Blog",
    "Contact",
    "Appointment",
    "404 Not Found"
  ]
};

fs.writeFileSync(
  path.join(__dirname, '..', 'template-info.json'),
  JSON.stringify(templateInfo, null, 2)
);
console.log('✅ Created template-info.json');

console.log('\n🎉 Template preparation complete!');
console.log('\n📋 Next steps:');
console.log('1. Test the template: npm install && npm run dev');
console.log('2. Take screenshots for marketplace');
console.log('3. Create demo site');
console.log('4. Upload to ThemeForest or other marketplace');
console.log('\n💰 Ready to sell for $30!');

