# NestFlow — Real Estate Property Management HTML Template
### Development Blueprint · Version 1.0
> This document is the authoritative development reference for building the NestFlow HTML template.  
> It is intended for use by developers and AI coding tools (Cursor, Windsurf, etc.).  
> Do NOT generate code until every section of this blueprint has been reviewed.

---

## Table of Contents

1. [Template Overview](#1-template-overview)
2. [Architecture Overview](#2-architecture-overview)
3. [Public Website Pages](#3-public-website-pages)
4. [Homepage Layouts](#4-homepage-layouts)
5. [Authentication Pages](#5-authentication-pages)
6. [Tenant Dashboard Pages](#6-tenant-dashboard-pages)
7. [Admin / Owner Dashboard Pages](#7-admin--owner-dashboard-pages)
8. [Navigation Structure](#8-navigation-structure)
9. [Component Library](#9-component-library)
10. [Feature Breakdown](#10-feature-breakdown)
11. [Folder Structure](#11-folder-structure)
12. [Responsive Design Strategy](#12-responsive-design-strategy)
13. [Animation & Interaction Ideas](#13-animation--interaction-ideas)
14. [SEO & Performance Strategy](#14-seo--performance-strategy)
15. [Development Notes](#15-development-notes)

---

## 1. Template Overview

| Field              | Value                                                                 |
|--------------------|-----------------------------------------------------------------------|
| **Template Name**  | NestFlow                                                              |
| **Template Category** | Directory / Listing — Real Estate Property Management              |
| **Target Audience** | Property management companies, independent landlords, real estate agencies, and residential/commercial property owners who need a self-service tenant portal alongside a public-facing marketing website |
| **Template Purpose** | To serve two parallel audiences: prospective tenants browsing available properties on a public marketing website, and existing tenants who need a secure, self-service portal to pay rent, submit maintenance requests, view lease agreements, and communicate with property management. The admin side enables owners and managers to oversee all tenant activity, listings, payments, and maintenance operations from a single dashboard. |

---

## 2. Architecture Overview

The template is composed of three distinct layers that share a common design system (color tokens, typography, spacing scale, and component styles).

```
┌─────────────────────────────────────────────────────────────┐
│                  NESTFLOW TEMPLATE SYSTEM                   │
├───────────────────┬─────────────────────┬───────────────────┤
│  PUBLIC WEBSITE   │   TENANT DASHBOARD  │  ADMIN DASHBOARD  │
│  (Marketing)      │   (Self-Service)    │  (Management)     │
├───────────────────┼─────────────────────┼───────────────────┤
│  Home 1 / Home 2  │  Rent Payments      │  Overview Panel   │
│  Property Search  │  Maintenance Req.   │  Tenant Mgmt.     │
│  Listings         │  Lease Documents    │  Listings Mgmt.   │
│  About / Team     │  Messages           │  Maintenance Mgmt │
│  Services         │  Profile            │  Payments & Fin.  │
│  Blog             │  Settings           │  Reports          │
│  Contact          │                     │  Settings         │
│  404 / Coming Soon│                     │                   │
└───────────────────┴─────────────────────┴───────────────────┘
          │                   │                    │
          └───────────────────┴────────────────────┘
                     SHARED DESIGN SYSTEM
         (CSS Variables · Components · Typography · Icons)
```

**Key Architectural Decisions:**

- The public website and both dashboards share the same CSS variable token system to ensure visual consistency across all layers.
- Authentication pages (Login, Sign Up, Forgot Password, Reset Password) are standalone pages — they carry no navbar or footer.
- The Tenant Dashboard and Admin Dashboard are each built as separate page collections under their own folders but use shared component partials (sidebar, notification bar, card components).
- All dashboard pages use a fixed left sidebar navigation with no page-level scrolling on the sidebar itself.

---

## 3. Public Website Pages

### 3.1 Essential Pages (Required)

| Page              | File               | Description                                                                 |
|-------------------|--------------------|-----------------------------------------------------------------------------|
| Home 1            | `index.html`       | Classic layout — primary landing page for property seekers                  |
| Home 2            | `home-2.html`      | Premium layout — bold hero, interactive search, featured listings carousel  |
| About Us          | `about.html`       | Company story, mission, management team, awards, and trust indicators       |
| Services          | `services.html`    | Property management services: leasing, maintenance, tenant screening, etc.  |
| Contact           | `contact.html`     | Contact form, office map, phone/email, office hours, emergency contact      |
| 404 Error         | `404.html`         | Custom error page with search field and quick navigation links              |
| Coming Soon       | `coming-soon.html` | Countdown timer page for pre-launch or maintenance windows                  |

### 3.2 Real Estate–Specific Pages (Conditional / Required for this Template)

| Page                    | File                         | Description                                                              |
|-------------------------|------------------------------|--------------------------------------------------------------------------|
| Property Listings       | `properties.html`            | Searchable grid/list of all available properties with advanced filters   |
| Property Detail         | `property-detail.html`       | Full single property page: gallery, map, amenities, agent, inquiry form  |
| Property Search Results | `search-results.html`        | Filtered results page (triggered from hero search or advanced search)    |
| Blog / News             | `blog.html`                  | Articles on renting tips, market updates, property management guides     |
| Blog Single             | `blog-single.html`           | Individual article page with related posts and social sharing            |
| Team / Agents           | `team.html`                  | Individual agent/manager profiles with contact and listings links        |
| Pricing / Plans         | `pricing.html`               | Management fee plans for property owners (3 plan tiers)                  |
| Testimonials            | `testimonials.html`          | Tenant and owner reviews, star ratings, video testimonials               |
| FAQ                     | `faq.html`                   | Accordion-based FAQ categorized by tenant, owner, and general queries    |

---

## 4. Homepage Layouts

Both homepages share identical branding (color palette, typography, icon style) but differ in layout structure and content approach.

### 4.1 Home 1 — Classic Layout

| Section Order | Section Name             | Content Description                                                                               |
|---------------|--------------------------|---------------------------------------------------------------------------------------------------|
| 1             | **Hero**                 | Full-width banner with headline, sub-headline, and an inline property search bar (Location, Type, Budget dropdowns + Search CTA). Background: high-quality property lifestyle image. |
| 2             | **Stats Bar**            | Animated counters — Total Properties, Cities Covered, Happy Tenants, Years of Experience.         |
| 3             | **Featured Properties**  | 3-column card grid of featured listings. Each card: image, property type badge, price, bedrooms/bathrooms icons, location tag, and "View Details" link. |
| 4             | **How It Works**         | 3-step horizontal flow — Search Properties → Schedule a Visit → Move In. Icon + heading + short description per step. |
| 5             | **Services Overview**    | 4-item icon grid: Property Listing, Tenant Screening, Maintenance Management, Rent Collection.    |
| 6             | **Why Choose Us**        | Left: text content with USP bullets. Right: property lifestyle image. Trust badges below.         |
| 7             | **Testimonials**         | 3-column quote cards with tenant name, star rating, and property managed.                        |
| 8             | **Latest Blog Posts**    | 3-column blog card strip — thumbnail, category tag, date, title, excerpt, "Read More" link.      |
| 9             | **CTA Banner**           | Full-width colored section — "List Your Property with Us" + Primary CTA and Secondary CTA.       |
| 10            | **Footer**               | 4-column footer: Logo + description, Quick Links, Services, Contact Info + Newsletter form.      |

### 4.2 Home 2 — Premium Layout

| Section Order | Section Name                   | Content Description                                                                                      |
|---------------|--------------------------------|----------------------------------------------------------------------------------------------------------|
| 1             | **Full-Screen Hero**           | Full-viewport background image/video overlay with a centered search widget (tabbed: Buy / Rent / Commercial). Bold typographic headline. |
| 2             | **Property Category Tiles**    | Horizontal scrollable or 5-column category cards — Apartments, Villas, Commercial, PG/Hostel, Plots. Each tile: icon, label, count. |
| 3             | **Premium Listings Carousel**  | Auto-scrolling horizontal carousel of premium/featured properties with a "Sponsored" or "Featured" ribbon badge. |
| 4             | **Interactive Map Section**    | Split layout — left panel: filter form, right panel: embedded map with property pins. Click pin to view card popup. |
| 5             | **Tenant & Owner Split CTA**   | Two-column split section — Left: "Find Your Home" for tenants, Right: "List Your Property" for owners. Each with its own CTA. |
| 6             | **Animated Stats**             | Dark background section — large animated number counters for key metrics.                               |
| 7             | **Our Services Deep Dive**     | Tabbed section — Owners Tab / Tenants Tab, each showing relevant service cards.                         |
| 8             | **Video Testimonials / Reviews** | 2-column grid — video thumbnail (play button overlay) + written testimonials. Lightbox video player.  |
| 9             | **Pricing Preview**            | 3 pricing cards teaser with "View Full Pricing" CTA leading to pricing.html.                            |
| 10            | **Blog + Newsletter Strip**    | Left: 2 latest blog cards, Right: Newsletter signup form with bold headline.                            |
| 11            | **Footer**                     | 5-column footer with same info as Home 1 but richer layout with social icons and app store badges.      |

---

## 5. Authentication Pages

> **Critical Rule:** Authentication pages must NOT include the public navbar or footer.  
> Each page is standalone with only: Logo, theme toggle, RTL toggle (top-right), and the auth form card.

### 5.1 Login Page (`login.html`)

- Card layout centered on page with logo inside the card
- Dark Mode and RTL toggle icons at top-right corner of the screen (outside the card)
- Email and Password fields (vertical stack)
- Eye icon on password field for visibility toggle
- "Remember Me" (checkbox) and "Forgot Password?" link on the same line
- Primary CTA button ("Sign In") — width matches input fields
- Divider: "Or continue with"
- Social login buttons: Google, Apple (with proper logos)
- Link to Sign Up page at bottom

### 5.2 Sign Up Page (`signup.html`)

- Separate page (no toggle between Login/Sign Up)
- Fields (all vertical stack): First Name, Last Name, Email Address, Phone Number, Password, Confirm Password
- Role selection: "I am a Tenant" / "I am a Property Owner" (radio or button toggle)
- Eye icon on both password fields
- Terms & Conditions checkbox with linked text
- Primary CTA ("Create Account") — width matches input fields
- Social sign-up options: Google, Apple
- No demo credentials displayed
- Link back to Login page

### 5.3 Forgot Password Page (`forgot-password.html`)

- Minimal card: Logo, heading "Reset Your Password", sub-text
- Email Address field
- Primary CTA ("Send Reset Link")
- Back to Login link

### 5.4 Reset Password Page (`reset-password.html`)

- New Password and Confirm Password fields (both with eye toggle icon)
- Password strength indicator bar (visual feedback)
- Primary CTA ("Update Password")
- Success state: inline confirmation message + redirect link to Login

---

## 6. Tenant Dashboard Pages

> **Critical Rule:** Tenant dashboard pages must NOT include the public navbar or footer.  
> All pages use the shared sidebar + topbar components.  
> Sidebar navigation stays fixed; only the main content area scrolls.

### 6.1 Dashboard Overview (`tenant/index.html`)

- Welcome message: "Welcome back, [Tenant Name]"
- Quick stats cards: Rent Due Date, Next Payment Amount, Open Maintenance Requests, Lease Expiry
- Upcoming payment reminder banner (if rent is due within 7 days)
- Recent activity timeline: last 5 actions (payment made, request submitted, message received)
- Quick action buttons: Pay Rent, Submit Request, View Lease, Message Manager

### 6.2 Rent Payments (`tenant/payments.html`)

- Current month rent status card (Paid / Due / Overdue badge)
- Payment history table: Month, Amount, Date Paid, Status, Receipt Download
- Payment breakdown accordion: Base Rent, Maintenance Charge, Utilities, Late Fee (if applicable)
- "Pay Now" primary CTA button (links to payment modal with Stripe/PayPal placeholder)
- Auto-pay toggle setting
- Payment method management panel (masked card display)

### 6.3 Maintenance Requests (`tenant/maintenance.html`)

- "Submit New Request" CTA button — opens inline form or modal
- Submit form fields: Category (Plumbing / Electrical / HVAC / Pest / Other), Priority (Low / Medium / Urgent), Description textarea, File/Image upload, Preferred time slot
- Open Requests table: ID, Category, Priority badge, Status badge, Submitted Date, Last Updated
- Request Detail expand/collapse: Status timeline, Technician assigned, Scheduled date, Tenant notes thread
- Closed Requests tab with history

### 6.4 Lease Agreement (`tenant/lease.html`)

- Current lease summary card: Property Name, Lease Start, Lease End, Monthly Rent, Security Deposit
- Lease status badge (Active / Expiring Soon / Expired)
- Embedded PDF viewer placeholder for lease document
- Download Lease PDF button
- Renewal prompt banner (shown when lease is within 60 days of expiry)
- Historical leases list (previous agreements with download links)

### 6.5 Messages (`tenant/messages.html`)

- Inbox list panel (left): conversation threads with property manager, unread badge count, last message preview, timestamp
- Message thread panel (right): full conversation history in chat bubble layout
- Compose message area at bottom: textarea + file attachment + Send button
- Message categories: General, Maintenance-Related, Lease-Related, Payment-Related (filter tabs)
- New message notification badge in sidebar

### 6.6 Documents (`tenant/documents.html`)

- Document library grid/list: Lease Agreement, Move-In Checklist, Addendums, Notices
- Each document: icon, name, date added, file type tag, Download and Preview buttons
- Upload My Documents section: utility bills, ID proof upload (tenant uploads for compliance)
- Document status badges: Verified, Pending Review, Action Required

### 6.7 Profile (`tenant/profile.html`)

- Profile info card: Avatar upload, Full Name, Email, Phone, Emergency Contact
- Edit mode toggle for each section (not full-page reload)
- Current property info: Unit number, Property name, Floor, Move-in date (read-only)
- Change Password sub-section (with eye icon and strength indicator)
- Notification preferences: Email, SMS, In-app — toggle switches per category

### 6.8 Settings (`tenant/settings.html`)

- Language preference selector
- Dark Mode / Light Mode toggle
- RTL / LTR toggle
- Notification settings (granular control: rent reminders, maintenance updates, announcements)
- Privacy settings: data sharing preferences
- Linked accounts: Google/Apple login management
- Danger zone: Deactivate Account option (with confirmation modal)

---

## 7. Admin / Owner Dashboard Pages

> **Critical Rule:** Admin dashboard pages must NOT include the public navbar or footer.  
> Admin sidebar has different navigation items from the tenant sidebar but shares the same structural component.

### 7.1 Admin Overview (`admin/index.html`)

- Heading: "Admin Dashboard"
- Welcome message with admin name and role
- KPI stat cards (row): Total Properties, Active Tenants, Pending Maintenance, Monthly Revenue Collected, Occupancy Rate %
- Revenue chart: Bar or line chart — monthly rent collection for current year
- Occupancy donut chart: Occupied vs Vacant vs Under Maintenance
- Recent activity feed: New tenant added, Maintenance request opened, Rent payment received
- Alerts panel: Overdue rents, Expiring leases, Urgent maintenance

### 7.2 Property Management (`admin/properties.html`)

- Property listing table: Property Name, Address, Type, Bedrooms, Rent, Status (Occupied/Vacant), Actions
- Add New Property CTA — opens a multi-step form: Basic Info → Media Upload → Amenities → Pricing → Review
- Property Detail sub-page: Full property info, assigned tenant, lease summary, maintenance history, payment history
- Bulk actions: Mark as Available, Archive, Assign Tenant
- Filter bar: By type, status, location, price range

### 7.3 Tenant Management (`admin/tenants.html`)

- Tenant directory table: Name, Unit, Lease End Date, Rent Status, Last Active, Actions
- Add Tenant button: form fields for tenant info, unit assignment, lease upload
- Tenant Detail sub-page: full profile, payment history, maintenance requests, document list, message thread
- Status badges: Active, Notice Period, Vacated
- Search and filter by property, status, lease expiry

### 7.4 Maintenance Management (`admin/maintenance.html`)

- All Requests table: ID, Tenant, Property, Category, Priority, Status, Date, Assigned To, Actions
- Priority badges: Low (grey), Medium (amber), Urgent (red)
- Status workflow: Open → In Progress → Awaiting Parts → Resolved → Closed
- Assign Technician modal: dropdown of available staff + schedule date/time picker
- Bulk update status
- Filter tabs: Open, In Progress, Resolved, All
- Summary cards at top: Total Open, Urgent Count, Avg Resolution Time

### 7.5 Rent & Payments (`admin/payments.html`)

- Monthly summary card: Total Expected, Total Collected, Outstanding, Collection Rate %
- Payments table: Tenant, Property, Amount, Month, Date Paid, Method, Status, Receipt
- Overdue Payments tab: flagged list with days overdue, email reminder action
- Generate Report button: Export to CSV/PDF (placeholder button)
- Payment filters: by month, property, status

### 7.6 Lease Management (`admin/leases.html`)

- All leases table: Tenant, Property, Start Date, End Date, Status, Monthly Rent, Actions
- Status badges: Active, Expiring Soon (≤60 days), Expired, Renewed
- Add/Renew Lease button: form for terms, rent amount, upload PDF
- Expiring Leases alert section at top
- Lease Detail sub-page: full terms, documents, renewal history

### 7.7 Reports & Analytics (`admin/reports.html`)

- Date range picker (filter all charts/data)
- Revenue report: total income by property, month-over-month comparison
- Occupancy report: occupancy rate trends
- Maintenance report: request volume by category, avg resolution time
- Tenant report: turnover rate, average tenancy duration
- Export buttons (CSV/PDF placeholders) on all report sections

### 7.8 Announcements (`admin/announcements.html`)

- Compose Announcement form: Title, Message, Target (All Tenants / Specific Property / Specific Tenant), Schedule or Send Now
- Sent announcements table: Title, Target, Sent Date, Status
- Templates for common notices: Maintenance Notice, Rent Increase Notice, Holiday Schedule

### 7.9 Settings (`admin/settings.html`)

- Company Profile: Logo upload, Company Name, Address, Contact Email, Phone
- Notification settings: system email triggers configuration
- User Management sub-section: add/remove admin users, assign roles (Super Admin, Property Manager, Support)
- Payment configuration: Currency, late fee rules, payment methods (placeholder)
- System preferences: Dark Mode, Language, RTL
- Security: Two-factor authentication toggle, session timeout

---

## 8. Navigation Structure

### 8.1 Public Website Navbar

```
[Logo]  Home ▾  Properties  Services  About  Blog  Help  [Contact Us]  [Tenant Login]
                 │
                 ├── Home 1 (Classic)
                 └── Home 2 (Premium)
```

**Navbar Rules:**
- Maximum 2 CTAs in the header: "Contact Us" (Secondary) and "Tenant Login" (Primary)
- Dashboard link is the last navigation item (Tenant Login leads to dashboard post-auth)
- Dark Mode toggle icon and RTL toggle icon placed to the left of CTAs — equal width and height
- Mobile: Hamburger menu collapses all nav items; CTAs remain visible in the mobile nav drawer
- Sticky on scroll: navbar reduces height slightly after scrolling 80px

### 8.2 Tenant Dashboard Sidebar

```
[Logo]
──────────────────
📊  Overview
💳  Rent & Payments
🔧  Maintenance
📄  Lease Agreement
📁  My Documents
💬  Messages           [badge: unread count]
👤  Profile
⚙️  Settings
──────────────────
🚪  Logout
```

**Sidebar Rules:**
- Fixed left sidebar, 260px wide on desktop
- Collapses to icon-only (60px) on tablet
- Slides over as a drawer on mobile (hamburger trigger)
- Active page item highlighted with primary color left border accent
- Notification badge on Messages item
- Logout is always last and separated by a divider
- Top bar (above content area): Page title, Notification bell icon, Profile avatar icon

### 8.3 Admin Dashboard Sidebar

```
[Admin Logo / Brand]
──────────────────
📊  Admin Overview
🏘️  Properties
👥  Tenants
🔧  Maintenance
💰  Payments
📋  Leases
📈  Reports
📢  Announcements
⚙️  Settings
──────────────────
🚪  Logout
```

**Admin Top Bar:** Admin name, role badge ("Super Admin"), notification bell, profile avatar

---

## 9. Component Library

All components must be reusable, semantic, and follow consistent styling tokens. Build each as a standalone HTML + CSS block that can be included in any page.

### 9.1 Global Components

| Component           | Description                                                                                         |
|---------------------|-----------------------------------------------------------------------------------------------------|
| `Navbar`            | Sticky public navbar with dropdown, dual CTAs, dark mode toggle, RTL toggle, hamburger              |
| `Footer`            | 4–5 column footer with logo, links, newsletter form, social icons                                  |
| `Hero Banner`       | Reusable hero block with configurable background image, headline, sub-headline, and CTA area        |
| `Section Header`    | Centered section label + heading + sub-description — used at top of every content section           |
| `CTA Banner`        | Full-width colored call-to-action strip with two button variants                                    |
| `Breadcrumb`        | Semantic breadcrumb navigation for inner pages                                                      |
| `Alert / Toast`     | Success, error, warning, info notification messages (auto-dismiss option)                           |
| `Modal / Dialog`    | Accessible overlay modal with focus trap, close on ESC, backdrop click                              |
| `Accordion`         | Expand/collapse for FAQ, lease terms, maintenance history                                           |
| `Tabs`              | Horizontal tabs with ARIA roles for switching content panels                                        |
| `Pagination`        | Numeric page navigation with prev/next arrows for listings and tables                              |
| `Back to Top`       | Fixed-position button appears after 400px scroll                                                    |

### 9.2 Property Components

| Component                | Description                                                                            |
|--------------------------|----------------------------------------------------------------------------------------|
| `PropertyCard`           | Image, badge (Featured/Available/Occupied), price, bed/bath/area icons, location, CTA |
| `PropertyCardList`       | Horizontal list variant of PropertyCard for search results list view                  |
| `PropertyGallery`        | Lightbox-enabled image gallery with thumbnail strip                                   |
| `PropertyAmenitiesGrid`  | Icon + label grid for amenities (Parking, AC, Pet-Friendly, Gym, etc.)               |
| `SearchBar`              | Location input, property type dropdown, budget range dropdown, Search button           |
| `AdvancedFilter Panel`   | Sidebar or dropdown panel: type, bedrooms, bathrooms, price range, furnishing, area   |
| `MapPlaceholder`         | Google Maps API placeholder container with responsive iframe wrapper                  |
| `AgentCard`              | Agent/manager profile card with photo, name, contact, and property count              |
| `PropertyCompareBar`     | Fixed bottom bar that collects selected properties for side-by-side comparison        |

### 9.3 Dashboard Components

| Component             | Description                                                                                       |
|-----------------------|---------------------------------------------------------------------------------------------------|
| `Sidebar`             | Fixed left nav with logo, nav links, active states, badge, logout                                |
| `TopBar`              | Page title, breadcrumb, notification bell, profile avatar — consistent across all dashboard pages |
| `StatCard`            | KPI card: icon, label, value, optional trend indicator (up/down arrow + %)                       |
| `DataTable`           | Sortable, filterable table with pagination — used in payments, tenants, maintenance, leases       |
| `StatusBadge`         | Color-coded pill badge — Paid/Due/Overdue, Active/Expired, Open/Resolved, etc.                   |
| `Timeline`            | Vertical event timeline for maintenance status flow and activity feeds                            |
| `ChatBubble`          | Message thread component: tenant bubble (right) vs manager bubble (left)                         |
| `FileUploader`        | Drag-and-drop + click to upload, file type validation, preview thumbnail                         |
| `MaintenanceFormModal`| Multi-field modal: category select, priority, description, attachment, time slot                  |
| `PaymentModal`        | Rent payment confirmation modal with amount summary and Stripe/PayPal placeholder                |
| `DonutChart`          | CSS or vanilla JS donut chart for occupancy, request categories                                  |
| `BarChart`            | Monthly revenue bar chart — vanilla JS or lightweight chart library                              |
| `LineChart`           | Trend line for occupancy rate, payment history                                                    |
| `NotificationDropdown`| Bell icon dropdown with recent alerts list and "Mark all as read" action                         |
| `ConfirmModal`        | Danger action confirmation dialog (e.g., deactivate account, delete property)                    |
| `ProgressBar`         | Used for lease expiry countdown, password strength, maintenance workflow                          |
| `AvatarUploader`      | Profile photo upload with crop/preview placeholder                                               |
| `EmptyState`          | Illustrated empty state block for no results, no messages, no documents                          |

### 9.4 Form Components

| Component              | Description                                                               |
|------------------------|---------------------------------------------------------------------------|
| `TextInput`            | Standard labeled input with placeholder, focus state, error state         |
| `SelectDropdown`       | Styled native select with custom arrow icon                               |
| `TextArea`             | Resizable textarea with character count                                   |
| `RadioGroup`           | Styled radio button group (e.g., tenant/owner role selection)             |
| `CheckboxGroup`        | Styled checkbox list (e.g., amenities filter)                             |
| `RangeSlider`          | Budget/price range dual-handle slider                                     |
| `DatePicker`           | Native date input with custom styling                                     |
| `ToggleSwitch`         | On/Off toggle for settings (auto-pay, notifications, RTL, dark mode)      |
| `FormValidation`       | Inline error messages below fields, tooltip warnings, required indicators |

---

## 10. Feature Breakdown

### 10.1 Property Search & Discovery
- Hero search bar with location autocomplete placeholder, property type, budget filter
- Advanced filter panel: bedrooms, bathrooms, furnishing, area (sqft), amenities checkboxes
- Toggle between grid view and list view on results page
- Sort by: Newest, Price (Low to High), Price (High to Low), Most Viewed
- "Saved Search" button — saves filter params to tenant profile (UI placeholder)
- Map view integration placeholder — property pins on Google Maps iframe
- Property comparison: select up to 3 properties and compare specs side-by-side

### 10.2 Online Rent Payment System (UI)
- Rent status indicator prominently on tenant overview
- Upcoming payment reminder banner with countdown (days until due)
- Payment modal with amount summary, payment method selection placeholder
- Auto-pay toggle with next payment date display
- Payment receipt download (PDF generation placeholder)
- Full payment history with filterable, downloadable table

### 10.3 Maintenance Request System
- Category-based submission: Plumbing, Electrical, HVAC, Pest Control, Structural, Other
- Priority flagging: Low, Medium, Urgent — with visual color indicators
- File/image upload for issue documentation
- Preferred time slot selector for technician visit
- Status tracking timeline: Submitted → Assigned → Scheduled → In Progress → Resolved
- Admin: Assign technician, update status, add internal notes
- Tenant: View status updates, add follow-up comments, close/reopen

### 10.4 Lease Management
- Tenant-facing: View current lease, key dates, rent details, download PDF
- Expiry notification: Banner alert 60 days before lease end
- Admin: Add leases, upload signed documents, mark renewals
- Lease status workflow: Draft → Active → Expiring → Expired → Renewed

### 10.5 Tenant–Manager Communication
- Thread-based messaging system per tenant/property relationship
- Message categorization: General, Maintenance, Lease, Payment
- File attachment support (UI)
- Unread message badge in sidebar
- Admin: View all conversation threads, filter by property or tenant

### 10.6 Document Management
- Secure document library per tenant (Lease, Checklist, Addendums, Notices)
- Admin: Upload and share documents with specific tenants or all tenants
- Tenant: Upload personal documents (ID, utility bills) for admin review
- Document status: Verified, Pending, Action Required

### 10.7 Admin Analytics & Reporting
- Revenue dashboard: monthly collection totals, comparison charts
- Occupancy rate visualization: property-wise and portfolio-wide
- Maintenance analytics: volume by category, avg resolution time
- Tenant analytics: active tenants, churn rate, avg tenancy duration
- Export placeholders (CSV, PDF) on all reports

### 10.8 Announcements & Notifications
- Admin creates announcements targeted to all tenants, a property, or a specific tenant
- Notification bell in dashboard topbar with dropdown alert list
- Notification types: Payment reminder, Maintenance update, Lease expiry, Admin announcement
- In-app notification + email trigger placeholder setup

### 10.9 Dark / Light Mode
- CSS variable-based theme switching — all colors defined as `--color-*` tokens in `:root`
- Dark Mode: black or very dark grey (`#0f0f0f`, `#1a1a1a`) backgrounds; light text
- Light Mode: white or near-white (`#ffffff`, `#f8f9fa`) backgrounds; dark text
- System preference auto-detection via `prefers-color-scheme` media query on page load
- Manual override via toggle icon in navbar and dashboard topbar
- Preference persisted in `localStorage`

### 10.10 RTL Support
- Separate `rtl.css` file that overrides directional properties: `margin`, `padding`, `text-align`, `float`, `border-radius`, `flex-direction`
- All layouts built with logical CSS properties where possible (`margin-inline-start` vs `margin-left`)
- Sidebar flips to right on RTL
- RTL toggle available in navbar and dashboard topbar

---

## 11. Folder Structure

```
nestflow/
│
├── assets/
│   ├── css/
│   │   ├── style.css               # Main stylesheet with all CSS variables
│   │   ├── dark-mode.css           # Dark mode overrides
│   │   ├── rtl.css                 # RTL layout overrides
│   │   ├── dashboard.css           # Dashboard-specific styles
│   │   └── components/
│   │       ├── navbar.css
│   │       ├── sidebar.css
│   │       ├── cards.css
│   │       ├── forms.css
│   │       ├── tables.css
│   │       ├── modals.css
│   │       ├── badges.css
│   │       └── charts.css
│   │
│   ├── js/
│   │   ├── main.js                 # Global JS: dark mode, RTL, mobile nav, scroll behavior
│   │   ├── dashboard.js            # Dashboard sidebar toggle, topbar behavior
│   │   ├── property-search.js      # Filter, sort, view toggle (grid/list)
│   │   ├── maintenance.js          # Maintenance form, status update interactions
│   │   ├── payments.js             # Payment modal, auto-pay toggle
│   │   ├── charts.js               # Vanilla JS chart rendering (bar, donut, line)
│   │   ├── messages.js             # Chat thread rendering and send action
│   │   ├── form-validation.js      # Shared client-side form validation
│   │   └── plugins/
│   │       └── lightbox.js         # Minimal lightbox for property gallery
│   │
│   ├── images/
│   │   ├── properties/             # Property placeholder images
│   │   ├── team/                   # Team member placeholder avatars
│   │   ├── icons/                  # Any custom SVG icons
│   │   ├── logo/                   # Logo in SVG, PNG, dark/light variants
│   │   └── hero/                   # Hero section background images
│   │
│   └── fonts/                      # Self-hosted Google Font files (if applicable)
│
├── pages/
│   ├── index.html                  # Home 1 — Classic
│   ├── home-2.html                 # Home 2 — Premium
│   ├── about.html
│   ├── services.html
│   ├── properties.html             # Property listings grid
│   ├── property-detail.html        # Single property page
│   ├── search-results.html
│   ├── blog.html
│   ├── blog-single.html
│   ├── team.html
│   ├── pricing.html
│   ├── testimonials.html
│   ├── faq.html
│   ├── contact.html
│   ├── 404.html
│   └── coming-soon.html
│
├── auth/
│   ├── login.html
│   ├── signup.html
│   ├── forgot-password.html
│   └── reset-password.html
│
├── tenant/
│   ├── index.html                  # Tenant dashboard overview
│   ├── payments.html
│   ├── maintenance.html
│   ├── lease.html
│   ├── documents.html
│   ├── messages.html
│   ├── profile.html
│   └── settings.html
│
├── admin/
│   ├── index.html                  # Admin dashboard overview
│   ├── properties.html
│   ├── tenants.html
│   ├── maintenance.html
│   ├── payments.html
│   ├── leases.html
│   ├── reports.html
│   ├── announcements.html
│   └── settings.html
│
├── documentation/
│   ├── installation.md
│   ├── customization.md
│   ├── page-structure.md
│   ├── credits.md
│   └── changelog.md
│
└── README.md                       # This file
```

---

## 12. Responsive Design Strategy

### 12.1 Breakpoints

```css
/* Mobile First */
/* Base styles target mobile: < 640px */

@media (min-width: 640px)  { /* Tablet */  }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large */   }
```

### 12.2 Behavior Per Layer

| Layout Area          | Mobile (< 640px)                                     | Tablet (640–1024px)                               | Desktop (1024px+)                          |
|----------------------|------------------------------------------------------|---------------------------------------------------|--------------------------------------------|
| Public Navbar        | Hidden — hamburger drawer replaces nav               | Hamburger drawer with CTAs visible                | Full horizontal navbar                     |
| Public Hero          | Stacked: text above, image below or overlaid         | Hero with condensed search bar                    | Full-width hero with inline search         |
| Property Grid        | 1 column                                             | 2 columns                                         | 3–4 columns                                |
| Footer               | Single column, stacked                               | 2-column grid                                     | 4–5 column grid                            |
| Dashboard Sidebar    | Hidden; toggled as full-screen drawer                | Icon-only sidebar (60px) with tooltip labels      | Full sidebar (260px), always visible       |
| Dashboard Cards      | 1 column stack                                       | 2 columns                                         | 4 columns                                  |
| Data Tables          | Horizontal scroll container; priority columns shown  | Most columns visible, secondary cols hidden        | All columns visible                        |
| Auth Pages           | Full-screen card; inputs full-width                  | Centered card, max-width 480px                    | Centered card, max-width 480px             |

### 12.3 Mobile-Specific Rules

- All touch targets minimum 44×44px (buttons, links, icons)
- Hover-based interactions replaced with tap/active states on mobile
- Container hover effects (property cards) must use click/tap state instead
- Complex charts simplified or replaced with summary numbers on small screens
- Reduced animations: respect `prefers-reduced-motion` media query
- Images served at optimized sizes using appropriate `srcset` placeholders

---

## 13. Animation & Interaction Ideas

### 13.1 Public Website Animations

| Element                    | Interaction / Animation                                                                   |
|----------------------------|-------------------------------------------------------------------------------------------|
| Navbar                     | Smooth height reduction + box shadow appears on scroll (transition: 0.3s ease)           |
| Hero CTA Buttons           | Subtle upward lift on hover (`transform: translateY(-2px)`) + shadow deepens             |
| Property Cards             | Slight scale-up on hover (`transform: scale(1.02)`), image zoom-in effect inside card    |
| Stat Counters              | Numbers count up from 0 to final value when scrolled into viewport (Intersection Observer)|
| Section Entry              | Sections fade-in and slide up subtly when entering the viewport (staggered delay)        |
| Search Bar                 | Input field expands slightly on focus; search button pulses once on activation            |
| Blog Cards                 | Bottom border slides in on hover with primary color underline                            |
| Map Pins                   | Bounce animation on map pin hover; card popup slides up from pin position                |
| Mobile Hamburger           | Animated 3-line → X transition on open/close                                             |

### 13.2 Dashboard Animations

| Element                    | Interaction / Animation                                                                   |
|----------------------------|-------------------------------------------------------------------------------------------|
| Sidebar Navigation         | Active link transition: smooth left border slide-in with background color fade            |
| Dashboard Stat Cards       | Counters animate on page load (0 → final value over 1.2s with easing)                   |
| Status Badge               | Gentle pulse animation on "Urgent" priority and "Overdue" payment badges                 |
| Table Row Hover            | Subtle background highlight on row hover                                                  |
| Modals                     | Backdrop fades in; modal card scales from 0.95 → 1.0 and slides down 10px               |
| Toast Notifications        | Slide in from top-right, auto-dismiss after 4s with progress bar indicator               |
| Maintenance Timeline       | Steps animate in sequentially (each node pops in with a 200ms stagger)                  |
| Chart Load                 | Bar/line charts animate from 0 to values on mount (CSS transform + transition)           |
| Sidebar Collapse (Tablet)  | Smooth width transition 260px → 60px on toggle                                           |
| Empty State Illustration   | Subtle float animation (up-down 6px over 3s loop) on empty state SVG                    |
| File Upload Hover          | Dashed border color shifts to primary, background tints lightly on drag-over             |
| Chat Message Send          | New message bubble slides up from input area into thread                                 |

### 13.3 Micro-Interactions

- Toggle switches: smooth sliding transition with color change
- Checkboxes and radio buttons: scale bounce on selection
- Password strength bar: animated width growth as password gets stronger
- Accordion open: max-height transition (not `display: none`) for smooth reveal
- Copy-to-clipboard button: brief "Copied!" tooltip appears and fades after 1.5s
- Avatar upload: hover overlay with camera icon appears over current avatar

---

## 14. SEO & Performance Strategy

### 14.1 On-Page SEO — Public Pages

| Element             | Requirement                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------------|
| `<title>` Tags      | Unique per page, max 60 characters. Format: `Page Name | NestFlow Property Management`        |
| Meta Description    | Unique per page, 150–160 characters, action-oriented with primary keyword                      |
| Heading Hierarchy   | Exactly one `<h1>` per page; logical H2 → H3 → H4 nesting throughout                         |
| Image Alt Text      | Descriptive alt text on every `<img>` tag; decorative images use `alt=""`                      |
| Image Format        | Placeholder images provided in WebP format with JPEG fallback                                  |
| Canonical Tags      | `<link rel="canonical">` on all pages to prevent duplicate content issues                      |
| Open Graph Tags     | `og:title`, `og:description`, `og:image`, `og:type` on all public pages                       |
| Twitter Card Tags   | `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`                        |
| Structured Data     | JSON-LD schema on homepage (`RealEstateAgent`), property detail (`Product`), contact (`LocalBusiness`) |
| XML Sitemap         | `sitemap.xml` template listing all public pages with `<lastmod>` and `<priority>`             |
| robots.txt          | Production-ready: allow public pages, disallow `/admin/`, `/tenant/`, `/auth/`                |

### 14.2 Performance Targets

| Metric           | Target       |
|------------------|--------------|
| PageSpeed (Mobile) | 90+        |
| PageSpeed (Desktop) | 95+       |
| LCP              | < 2.5 seconds|
| FID / INP        | < 100ms      |
| CLS              | < 0.1        |
| Total Page Weight | < 1MB (above fold) |

### 14.3 Performance Implementation Rules

- All CSS minified in production; single concatenated stylesheet where possible
- All JavaScript deferred (`defer` attribute) or placed before `</body>`
- Hero images preloaded with `<link rel="preload" as="image">` for above-fold visibility
- Placeholder images supplied as WebP with `<picture>` element fallback to JPEG
- Google Fonts loaded with `display=swap` and preconnect hints:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  ```
- No render-blocking third-party scripts on initial load
- CSS animations use `transform` and `opacity` only (GPU-composited, no layout reflow)
- Intersection Observer API used for all scroll-triggered animations (no scroll event listeners)
- Dashboard chart data is static/mock on load — no external API call on first paint

---

## 15. Development Notes

### 15.1 Design Tokens — CSS Variables (Define These First)

Before writing any component styles, define all tokens in `:root` in `style.css`. This is the single source of truth for the entire template.

```css
/* Suggested token structure — values to be finalized by designer */
:root {
  /* Brand Colors */
  --color-primary: ;        /* Main brand color (e.g., deep teal or navy) */
  --color-secondary: ;      /* Supporting brand color */
  --color-accent: ;         /* Used only for indicators, metrics, status */

  /* Semantic Status Colors */
  --color-success: ;
  --color-warning: ;
  --color-danger: ;
  --color-info: ;

  /* Light Mode Surfaces */
  --bg-body: ;
  --bg-card: ;
  --bg-sidebar: ;
  --text-primary: ;
  --text-secondary: ;
  --border-color: ;

  /* Typography */
  --font-primary: ;         /* Headings — max 2–3 Google Fonts total */
  --font-secondary: ;       /* Body text */
  --font-size-base: 16px;
  --line-height-base: 1.6;

  /* Spacing Scale (8px base unit) */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-6: 48px;
  --space-8: 64px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 999px;

  /* Shadows */
  --shadow-card: ;
  --shadow-modal: ;
  --shadow-sidebar: ;

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
}

/* Dark Mode Overrides */
[data-theme="dark"] {
  --bg-body: #0f0f0f;
  --bg-card: #1a1a1a;
  --bg-sidebar: #111111;
  --text-primary: #f5f5f5;
  --text-secondary: #a0a0a0;
  --border-color: #2a2a2a;
}
```

### 15.2 JavaScript Architecture Rules

- ES6+ only — use `const`/`let`, arrow functions, template literals, modules
- No `console.log` statements in production files
- Dark mode state stored in and read from `localStorage` on every page load in `main.js`
- RTL state toggled by switching `dir="rtl"` on the `<html>` element + stored in `localStorage`
- Form validation is a shared module in `form-validation.js` — imported by auth, contact, maintenance, and inquiry pages
- Charts are built with minimal vanilla JS (use canvas API directly or a lightweight library like Chart.js only if absolutely needed)
- No jQuery — all DOM manipulation in native JavaScript
- Intersection Observer handles all scroll-triggered animations — initialized once in `main.js`

### 15.3 HTML Semantics Rules

- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` correctly on every page
- Every `<section>` should have a heading (can be visually hidden with `.sr-only` if needed for design)
- Tables must have `<thead>`, `<tbody>`, `<th scope="col">` — never use `<table>` for layout
- Forms must have `<label>` elements associated with every `<input>` via `for` attribute
- All interactive elements (buttons, links) must be reachable via keyboard Tab order
- Icon-only buttons must have `aria-label` attributes
- Modal dialogs must use `role="dialog"` and `aria-modal="true"` with focus trap

### 15.4 Code Comments Standard

```html
<!-- ============================================================
     SECTION: Featured Properties
     ============================================================ -->

<!-- TODO: Replace placeholder images with actual property photos -->
<!-- TODO: Connect to backend API to render dynamic listings -->
```

```javascript
/**
 * initDarkMode
 * Reads saved theme preference from localStorage and applies
 * the [data-theme] attribute to <html> on page load.
 */
```

```css
/* ============================================================
   COMPONENT: Property Card
   Usage: .property-card — used on listings, home, search pages
   ============================================================ */
```

### 15.5 Required Placeholder Integrations

| Integration         | Implementation Note                                                                       |
|---------------------|-------------------------------------------------------------------------------------------|
| Contact Form        | Formspree-compatible `action` URL placeholder in `contact.html`                           |
| Newsletter          | Mailchimp embed form placeholder in footer and home pages                                 |
| Google Maps         | `<iframe>` placeholder with `data-src` attribute pattern for lazy load                    |
| Stripe/PayPal       | Payment button placeholder `<div id="payment-button-placeholder">` in payment modal       |
| Google/Apple Login  | Button elements with proper brand logos and placeholder `onclick` handlers                |
| Email Notifications | Comment in relevant forms: `<!-- TODO: Connect to email service (SendGrid/Mailchimp) -->`|

### 15.6 Quality Checklist (Pre-Submission)

- [ ] All pages pass W3C HTML Validator with zero errors
- [ ] No broken internal links on any page
- [ ] Fully responsive tested at 375px, 768px, 1024px, 1440px
- [ ] Cross-browser tested: Chrome, Firefox, Safari, Edge
- [ ] Dark Mode visually consistent across all 30+ pages
- [ ] Light Mode visually consistent across all 30+ pages
- [ ] RTL layout properly mirrors on all public and dashboard pages
- [ ] All images have appropriate `alt` text
- [ ] All images provided in WebP format
- [ ] All forms have visible validation (required fields, error messages)
- [ ] Dashboard sidebar active state highlights correctly on each page
- [ ] Modals are keyboard accessible (Tab, ESC to close, focus trap)
- [ ] All dashboard sections have meaningful content (no empty placeholders)
- [ ] Stat counter animations function correctly
- [ ] All pricing cards follow Primary/Secondary button hierarchy (Popular = Primary)
- [ ] Auth pages have NO public navbar or footer
- [ ] Login and Sign Up are separate pages (not toggled)
- [ ] Eye icon functional on all password fields
- [ ] Logout option present and last in dashboard sidebar
- [ ] Documentation folder contains all 5 required documentation files
- [ ] `README.md`, `sitemap.xml`, and `robots.txt` are present in root

---

*End of NestFlow Development Blueprint v1.0*  
*Reference Documents: HTML Template Development Guide · TEKNR IT Solutions Website Design & Development Guidelines*
