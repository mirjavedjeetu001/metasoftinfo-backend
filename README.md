# Metasoft Info - Backend API

A comprehensive NestJS backend API for the Metasoft Info CMS system. Built with NestJS 11, TypeORM, and MySQL.

## 🚀 Features

- **User Management**: Role-based access control (Super Admin, Admin, Editor)
- **Content Management**: Services, Projects, Testimonials, Blog Posts
- **Dynamic Pages**: Create custom pages with HTML content
- **Hero Section**: Manage hero slides with auto-rotation
- **Navigation**: Dynamic navbar menu management
- **Theme Settings**: Customize colors, fonts, and styles
- **Site Settings**: General site configuration
- **Partners**: Manage company logos and partners
- **JWT Authentication**: Secure token-based authentication
- **RESTful API**: Well-structured REST endpoints

## 📋 Prerequisites

- Node.js (v18 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd metasoftinfo/meta-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MySQL database**
   ```bash
   # Login to MySQL
   mysql -u root -p
   
   # Create database
   CREATE DATABASE metasoftinfo;
   
   # Create user with privileges
   CREATE USER 'metasoft_admin'@'localhost' IDENTIFIED BY 'metasoft_dev123!';
   GRANT ALL PRIVILEGES ON metasoftinfo.* TO 'metasoft_admin'@'localhost';
   FLUSH PRIVILEGES;
   EXIT;
   ```

4. **Import database**
   ```bash
   # Navigate to project root
   cd ..
   
   # Import database.sql
   mysql -u metasoft_admin -p metasoftinfo < database.sql
   # Password: metasoft_dev123!
   ```

5. **Configure environment variables**
   
   Copy `.env.example` to `.env` if it doesn't exist, or use the existing `.env`:
   
   ```env
   PORT=3000
   DATABASE_HOST=127.0.0.1
   DATABASE_PORT=3306
   DATABASE_USER=metasoft_admin
   DATABASE_PASSWORD=metasoft_dev123!
   DATABASE_NAME=metasoftinfo
   DATABASE_SYNCHRONIZE=true
   DATABASE_MIGRATIONS_RUN=false
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   ADMIN_DEFAULT_EMAIL=admin@metasoftinfo.com
   ADMIN_DEFAULT_PASSWORD=ChangeMe123!
   FRONTEND_URL=http://localhost:5173
   ```

   **⚠️ Important for Production:**
   - Change `JWT_SECRET` to a strong random string
   - Set `DATABASE_SYNCHRONIZE=false`
   - Update `ADMIN_DEFAULT_PASSWORD`
   - Update `FRONTEND_URL` to your production domain

## 🏃 Running the Application

### Development mode
```bash
npm run start:dev
```
The API will be available at `http://localhost:3000`

### Production mode
```bash
# Build the application
npm run build

# Start production server
npm run start:prod
```

### Watch mode (auto-reload)
```bash
npm run start:dev
```

## 📚 API Documentation

### Authentication
- `POST /auth/login` - Login with email and password
- `GET /auth/me` - Get current user info (requires JWT)

### Users (Super Admin Only)
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user
- `PATCH /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Services
- `GET /services` - Get all services
- `GET /services/:id` - Get service by ID
- `POST /services` - Create service (requires auth)
- `PATCH /services/:id` - Update service (requires auth)
- `DELETE /services/:id` - Delete service (requires auth)

### Projects
- `GET /projects` - Get all projects
- `GET /projects/:id` - Get project by ID
- `GET /projects/slug/:slug` - Get project by slug
- `POST /projects` - Create project (requires auth)
- `PATCH /projects/:id` - Update project (requires auth)
- `DELETE /projects/:id` - Delete project (requires auth)

### Testimonials
- `GET /testimonials` - Get all testimonials
- `GET /testimonials/:id` - Get testimonial by ID
- `POST /testimonials` - Create testimonial (requires auth)
- `PATCH /testimonials/:id` - Update testimonial (requires auth)
- `DELETE /testimonials/:id` - Delete testimonial (requires auth)

### Hero Section
- `GET /api/hero` - Get hero section settings
- `PUT /api/hero` - Update hero settings (requires auth)
- `GET /api/hero-slides` - Get all hero slides
- `POST /api/hero-slides` - Create hero slide (requires auth)
- `PUT /api/hero-slides/:id` - Update hero slide (requires auth)
- `DELETE /api/hero-slides/:id` - Delete hero slide (requires auth)

### Process Steps
- `GET /api/process` - Get all process steps
- `POST /api/process` - Create process step (requires auth)
- `PUT /api/process/:id` - Update process step (requires auth)
- `DELETE /api/process/:id` - Delete process step (requires auth)

### Why Choose Us
- `GET /api/why-choose-us` - Get all reasons
- `POST /api/why-choose-us` - Create reason (requires auth)
- `PUT /api/why-choose-us/:id` - Update reason (requires auth)
- `DELETE /api/why-choose-us/:id` - Delete reason (requires auth)

### Site Settings
- `GET /api/site-settings` - Get site settings
- `PUT /api/site-settings` - Update site settings (requires auth)

### Navbar Menu
- `GET /api/navbar-menu` - Get all menu items
- `POST /api/navbar-menu` - Create menu item (requires auth)
- `POST /api/navbar-menu/seed` - Seed default menu items (requires auth)
- `PUT /api/navbar-menu/:id` - Update menu item (requires auth)
- `DELETE /api/navbar-menu/:id` - Delete menu item (requires auth)

### Pages
- `GET /api/pages` - Get all pages
- `GET /api/pages/:slug` - Get page by slug
- `POST /api/pages` - Create page (requires auth)
- `POST /api/pages/seed` - Seed default pages (requires auth)
- `PUT /api/pages/:id` - Update page (requires auth)
- `DELETE /api/pages/:id` - Delete page (requires auth)

### Partners
- `GET /api/partners` - Get all active partners
- `POST /api/partners` - Create partner (requires auth)
- `PUT /api/partners/:id` - Update partner (requires auth)
- `DELETE /api/partners/:id` - Delete partner (requires auth)

### Theme
- `GET /theme` - Get theme settings
- `PATCH /theme` - Update theme settings (requires auth)

## 🗄️ Database Schema

The application uses 13 main entities:

1. **users** - User accounts with roles
2. **service_offering** - Service listings
3. **project** - Portfolio projects
4. **testimonial** - Client testimonials
5. **theme_settings** - Theme customization
6. **hero_section** - Hero section settings
7. **hero_slide** - Hero carousel slides
8. **process_step** - Process/workflow steps
9. **why_choose_us** - Reasons to choose company
10. **site_settings** - General site settings
11. **navbar_menu** - Navigation menu items
12. **page** - Custom pages
13. **partner** - Partner/client logos

## 🔐 Default Credentials

After importing the database, use these credentials:

- **Email**: `admin@metasoftinfo.com`
- **Password**: `ChangeMe123!`
- **Role**: Super Admin

**⚠️ Change these credentials immediately after first login!**

## 👥 User Roles

- **SUPER_ADMIN**: Full access including user management
- **ADMIN**: Can manage all content but not users
- **EDITOR**: Read-only access (view content but cannot edit)

## 🧪 Testing

```bash
# Unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
