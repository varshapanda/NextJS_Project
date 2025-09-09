
# UI Component Plan for LMS Project

This document outlines the planned UI components, their responsibilities, and how they fit into the overall layout.

---

## 🔹 Reusable Components (in `components/global/`)
1. **Button** (`button.jsx`)  
   - Primary, secondary, and disabled button styles.  
   - Props: `label`, `onClick`, `type`.  

2. **InputField** (`input-field.jsx`)  
   - Standard input with label and validation states.  
   - Props: `type`, `placeholder`, `value`, `onChange`.  

3. **Card** (`card.jsx`)  
   - Used for course preview, stats, or info boxes.  
   - Props: `title`, `children`.  

---

## 🔹 Layout Components (in `components/layout/`)
1. **Navbar** (`navbar.jsx`)  
   - Top navigation bar.  
   - Contains logo, navigation links, and profile dropdown.  

2. **Footer** (`footer.jsx`)  
   - Persistent footer with links.  

3. **Sidebar** (`sidebar.jsx`)  
   - Dashboard navigation (different links for Admin vs Student).  

4. **MainLayout** (`main-layout.jsx`)  
   - Wraps dashboard pages with Navbar + Sidebar + Content area.  

---

## 🔹 Page-Level Components (in `components/page/`)
1. **LoginPage** (`login-page.jsx`)  
   - Sign in form (email + password).  

2. **DashboardPage** (`dashboard-page.jsx`)  
   - Placeholder dashboard (cards, stats, etc.).  

---

## 🔹 Pages (in `app/`)
- `/signin` → `SignInPage` (renders `LoginPage`)  
- `/student_dashboard` → `DashboardPage` (wrapped in `MainLayout`)  
- `/admin_dashboard` → `DashboardPage` (wrapped in `MainLayout`)  

---

## Constraints
- No real functionality (authentication, DB, etc.) at this stage.  
- Only skeleton structure and Tailwind styling.  
- All components reusable, responsive, and consistent.  

---

## Expected Output
- **Sign In Page:** Form with email & password.  
- **Student Dashboard:** Sidebar + cards.  
- **Admin Dashboard:** Sidebar + cards.  

This phase ensures a solid UI foundation before adding real functionality.
