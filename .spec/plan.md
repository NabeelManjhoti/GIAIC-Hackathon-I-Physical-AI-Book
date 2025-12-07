# Premium Landing Page v2 Implementation Plan

## Overview
This plan outlines the implementation steps for redesigning the landing page with a premium dark theme, creating an author introduction page, and fixing the CTA button according to the specification in `.spec/premium_landing_v2.md`.

## Implementation Steps

### Step 1: Create Author Introduction Content and Update Sidebar

#### 1.1 Create the author introduction document
- **File to create:** `docs/00-author-intro.mdx`
- **Content requirements:**
  - Professional introduction of Nabeel Manjhoti
  - Establish credibility in Embodied AI/Humanoid Robotics
  - Include relevant background and expertise
  - Length: 200-300 words
  - Professional tone that sets the stage for the book

#### 1.2 Update sidebar configuration
- **File to modify:** `sidebars.js`
- **Action:** Ensure "Author Introduction" appears as the first item in the documentation section
- **Implementation:**
  - Locate the docs sidebar configuration
  - Add the new page reference as the first item in the array
  - Verify ordering maintains the first position

### Step 2: Override Landing Page Component

#### 2.1 Swizzle the landing page component
- **File to modify:** `src/pages/index.js`
- **Action:** Replace default Docusaurus landing page with custom implementation
- **Implementation:**
  - Remove all default Docusaurus branding elements
  - Remove default hero section and promotional content
  - Maintain Docusaurus functionality and routing

#### 2.2 Remove default branding
- **Requirements:**
  - Remove "Built with Docusaurus" text
  - Remove all Docusaurus promotional elements
  - Ensure design feels proprietary and professional

### Step 3: Implement Premium Dark Theme Styling

#### 3.1 Create CSS Modules for styling
- **File to create:** `src/pages/index.module.css` (if needed) or update existing CSS
- **Color palette implementation:**
  - Primary background: `#121212`
  - Primary text: `#FFFFFF`
  - Secondary text: `#CCCCCC`
  - Accent color: `#00BFFF` (electric blue)
  - Secondary accent: `#1E1E1E` (blue-gray)

#### 3.2 Implement responsive design
- **Requirements:**
  - Ensure design works on desktop, tablet, and mobile
  - Implement appropriate breakpoints
  - Ensure touch targets are mobile-friendly
  - Maintain proper spacing and alignment across devices

#### 3.3 Typography and hierarchy
- **Implementation:**
  - Apply clean, modern sans-serif fonts
  - Create appropriate text hierarchy
  - Ensure proper contrast ratios for accessibility

### Step 4: Implement CTA Button with Correct Link

#### 4.1 Create the CTA button
- **Location:** Hero section of the landing page
- **Requirements:**
  - Use accent color (`#00BFFF`) for button styling
  - Implement hover and active states
  - Ensure proper sizing and spacing
  - Add appropriate button text (e.g., "Meet the Author", "Start Reading")

#### 4.2 Set correct link target
- **Link target:** `/docs/00-author-intro` (or appropriate Docusaurus route)
- **Implementation:**
  - Use Docusaurus Link component for proper routing
  - Verify the link resolves to the author introduction page
  - Test that no 404 errors occur

#### 4.3 Add primary tagline
- **Text:** "Master Embodied AI and Humanoid Robotics with ROS 2 and NVIDIA Isaac Sim"
- **Placement:** Prominent position in hero section
- **Styling:** Appropriate sizing and contrast for impact

## Dependencies
- Step 1 must be completed before Step 4 (CTA button needs the target page to exist)
- Step 2 should be completed before Steps 3 and 4 (component structure needed for styling and CTA)

## Files to be Modified/Created
1. `docs/00-author-intro.mdx` - New author introduction content
2. `sidebars.js` - Updated sidebar configuration
3. `src/pages/index.js` - Custom landing page component
4. `src/pages/index.module.css` - CSS Modules for styling (if not using existing)

## Acceptance Criteria
- [ ] Author introduction page created and accessible at `/docs/00-author-intro`
- [ ] Sidebar correctly ordered with author intro as first item
- [ ] Landing page displays premium dark theme with specified colors
- [ ] No Docusaurus branding visible on landing page
- [ ] CTA button properly styled and links to author introduction page
- [ ] Primary tagline displayed prominently on landing page
- [ ] Design is responsive and works on all device sizes
- [ ] No 404 errors when clicking CTA button