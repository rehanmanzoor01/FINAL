# V2 Massive Update Task List

- [ ] 1. Core Authentication & Loading fixes
  - [x] Fix `admin/js/auth.js` to handle relative paths correctly
  - [x] Update `admin/index.html` `init()` function with proper `try/catch/finally`
  - [ ] Update `admin/inquiries.html` `init()` function
  - [ ] Update `admin/content.html` `init()` function
  - [ ] Update `admin/gallery.html` `init()` function
  - [ ] Update `admin/services.html` `init()` function
  
- [x] 2. Dashboard Content CMS Expansion (`admin/content.html`)
  - [x] Add Owner Details section
  - [x] Add SEO/Meta title management
  - [x] Add Testimonials management
  - [x] Add Social Media Links management
  - [x] Add Footer Management
  
- [ ] 3. Gallery Category System
  - [ ] Update `admin/gallery.html` to include category dropdown for uploads
  - [ ] Update `admin/gallery.html` Grid to show category badges
  - [ ] Update `gallery.html` (public) to load dynamically and support filters
  
- [ ] 4. Services Management
  - [ ] Improve `admin/services.html` CRUD with proper alerts and loaders
  - [ ] Update `services.html` (public) to support skeleton loading and robust rendering
  
- [ ] 5. Public Site Integration
  - [ ] Update `index.html` to fetch Hero, Services, and Testimonials
  - [ ] Update `about.html` to fetch Company and Owner Details
  - [ ] Update `contact.html` to fetch Contact Info and Social Media
  - [ ] Update global Header/Footer logic across all pages
  - [ ] Optimize loading with `loading="lazy"` and module imports
