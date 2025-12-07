# Premium Landing Page v2 Specification

## 1. Landing Page Redesign (Premium Dark Theme)

### Goal
Replace the default Docusaurus landing page with a premium, sleek dark design that conveys professionalism and modern aesthetics.

### Component Override
- Override the default component at `src/pages/index.js`
- Maintain Docusaurus functionality while completely redesigning the visual appearance

### Aesthetic Requirements
- **Primary Background:** Deep, dark background (`#121212`)
- **Text Colors:** High-contrast white/light gray text (`#FFFFFF` for primary text, `#CCCCCC` for secondary)
- **Accent Color:** Vibrant electric blue (`#00BFFF`) for buttons, highlights, and interactive elements
- **Secondary Accent:** Darker blue-gray (`#1E1E1E`) for card backgrounds and dividers
- **Typography:** Clean, modern sans-serif fonts with appropriate hierarchy

### Branding Requirements
- The custom landing page **must not** display any "Built with Docusaurus" text or similar advertisements
- Remove all default Docusaurus promotional elements
- Ensure the design feels proprietary and professional

### Copy Requirements
- **Primary Tagline:** "Master Embodied AI and Humanoid Robotics with ROS 2 and NVIDIA Isaac Sim"
- **Supporting Text:** Brief description of the book's value proposition
- **Professional tone:** Convey expertise and authority in the subject matter

## 2. New Content Requirement: Author Introduction

### File Creation
- Create a new documentation file at `docs/00-author-intro.mdx`
- Filename must begin with "00-" to ensure it sorts first in the sidebar

### Sidebar Integration
- Update `sidebars.js` to ensure "Author Introduction" appears as the **very first item** in the documentation section
- Position should precede "Introduction to Embodied Intelligence"
- Maintain alphabetical/numerical ordering for all subsequent items

### Content Requirements
- Write a brief, professional introduction of Nabeel Manjhoti (author/project lead)
- Content should establish credibility and set the stage for the book
- Include relevant background, expertise, and connection to Embodied AI/Humanoid Robotics
- Length: Approximately 200-300 words

## 3. Call-to-Action (CTA) Fix

### Problem Statement
The main CTA button currently produces a 404 error when clicked.

### Solution Requirements
- Fix the CTA button to resolve the 404 error
- Link target must point directly to the newly created author introduction page
- URL slug should be `/docs/00-author-intro` or equivalent based on Docusaurus configuration
- Button styling should match the premium dark theme with electric blue accent

### Button Specifications
- Prominent placement in the hero section
- Clear, actionable text (e.g., "Meet the Author", "Start Reading", "Begin Your Journey")
- Hover and active states with appropriate visual feedback
- Mobile-responsive sizing and touch targets

## 4. Responsive Design & Cleanup

### Responsiveness Requirements
- Design must be fully responsive across all device sizes
- Desktop: Full feature display with optimal spacing
- Tablet: Adapted layout maintaining core functionality
- Mobile: Streamlined experience with touch-friendly elements

### Professional Polish
- Consistent spacing and alignment throughout
- Smooth transitions and hover effects where appropriate
- Proper contrast ratios meeting accessibility standards
- Cross-browser compatibility testing considerations

## Acceptance Criteria

### Visual Design
- [ ] Dark theme implemented with specified color palette
- [ ] No Docusaurus branding visible on landing page
- [ ] Professional, premium aesthetic achieved
- [ ] Responsive design validated on multiple screen sizes

### Content & Navigation
- [ ] Author introduction page created at `docs/00-author-intro.mdx`
- [ ] Sidebar properly ordered with author intro first
- [ ] CTA button fixed and linking correctly
- [ ] Primary tagline implemented as specified

### Technical Requirements
- [ ] No 404 errors on main navigation
- [ ] All links functional and pointing to correct destinations
- [ ] Page loads properly in all supported browsers
- [ ] Mobile experience optimized and functional

## Files to Modify
- `src/pages/index.js` - Landing page component
- `docs/00-author-intro.mdx` - New author introduction document
- `sidebars.js` - Sidebar configuration
- Potentially CSS/styling files for theme implementation