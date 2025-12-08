# Landing Page v3 Specification: Cyberpunk Redesign

## 1. Requirement: Cyberpunk Landing Page

Recreate `src/pages/index.js` as a standalone React page (do not use the default Docusaurus Layout if it restricts full-screen hero designs, otherwise customize the Layout).

### Implementation Approach
- Create a new `index.js` file in `src/pages/` that implements a cyberpunk-themed landing page
- Use React with modern hooks and functional components
- Implement custom styling that overrides Docusaurus defaults where needed
- Maintain accessibility and responsive design principles

## 2. Section 1: The Hero

### Visual Design
- **Full-screen height**: Set to `100vh` to occupy the entire viewport height
- **Background**: Dark gradient or darkened video/image of a humanoid robot
  - Primary: Deep Black (#050505)
  - Secondary: Dark Grey (#121212)
  - Optional: Subtle animated background with cyberpunk elements
- **Layout**: Centered content with vertical and horizontal alignment
- **Background Effects**: Consider subtle particle animations or grid lines for cyberpunk feel

### Headlines
- **Primary Headline**: "The Age of Physical AI"
  - Style: Large, bold typography with cyberpunk aesthetic (Orbitron or similar font)
  - Effect: Neon glow using CSS `text-shadow`
    - Primary glow: 0 0 10px #00f3ff (Neon Cyan)
    - Secondary glow: 0 0 20px #00f3ff
    - Tertiary glow: 0 0 30px #00f3ff
  - Colors: Neon Cyan (#00f3ff) or Electric Green (#39ff14) with glow effect
  - Animation: Optional subtle pulsing glow effect
- **Sub-headline**: "Master ROS 2, Gazebo, and Isaac Sim."
  - Style: Medium-sized text, complementary to headline
  - Color: Light grey (#E0E0E0) or subtle neon accent
  - Optional: Subtle text-shadow for depth

### Call-to-Action (CTA)
- **Button Style**: "Holographic" button appearance
  - Transparent background with alpha channel
  - Neon border (Neon Cyan #00f3ff or Neon Magenta #ff00ff)
  - Border width: 2px solid
  - Glowing hover effect using box-shadow:
    - Primary glow: 0 0 10px #00f3ff
    - Secondary glow: 0 0 20px #00f3ff
  - Subtle animation on hover (scale or glow intensification)
  - Padding: Adequate for touch targets (minimum 44px)
- **Label**: "Enter the Simulation"
- **Link**: Navigate to `/docs/intro` when clicked
- **Position**: Centered below headlines with adequate spacing
- **Accessibility**: Proper focus states with enhanced visibility

## 3. Section 2: The Grid (Features)

### Grid Layout
- **Structure**: 3-column grid layout
- **Responsive**: Adapt to mobile (single column) and tablet (2 columns) views
- **Spacing**: Consistent gutters between grid items

### Feature Cards
Each card represents a key chapter/topic:
1. **ROS 2** - Robot Operating System fundamentals
2. **Simulation** - Gazebo and environment simulation
3. **RL** - Reinforcement Learning applications

### Card Design (Glassmorphism Effect)
- **Base**: Semi-transparent black background (rgba(18, 18, 18, 0.3)) - #121212 with alpha
- **Blur**: Backdrop-filter blur(10px) for frosted glass effect
- **Borders**: Neon borders using accent colors with glow effect:
  - Border: 1px solid rgba(0, 243, 255, 0.5) (Neon Cyan with transparency)
  - Box-shadow glow: 0 0 15px rgba(0, 243, 255, 0.5)
- **Content**: Centered with appropriate padding (2rem)
- **Hover Effects**:
  - Intensified glow: 0 0 25px rgba(0, 243, 255, 0.8)
  - Subtle scale transformation (1.02)
  - Enhanced backdrop blur (15px)
- **Shadow**: Subtle drop shadow for depth (0 4px 20px rgba(0, 0, 0, 0.3))
- **Transition**: Smooth 0.3s transition for all interactive effects
- **Minimum Height**: Ensure consistent card heights across the grid

### Content Structure
- **Icon/Illustration**: Placeholder from unDraw or placehold.co
- **Title**: Chapter name in cyberpunk typography
- **Description**: Brief explanation of the topic
- **CTA**: Optional secondary button or arrow indicator

## 4. Assets

### Current State
- Local cyberpunk/humanoid robot images are not available in the project
- Placeholder images will be used during development

### Placeholder Solutions
- **Hero Background**: Use `https://placehold.co/1920x1080/050505/00f3ff?text=CYBERPUNK+AI` or similar
  - Dimensions: 1920x1080px minimum for high-resolution displays
  - Format: Optimized JPG or PNG
  - Alternative: CSS-generated dark gradient with cyberpunk grid pattern
- **Feature Icons**: Use unDraw illustrations with cyberpunk theme
  - ROS 2: `https://undraw.co/search?q=robotics` - Look for robot/humanoid imagery
  - Simulation: `https://undraw.co/search?q=simulation` - Environment/modeling visuals
  - RL: `https://undraw.co/search?q=artificial+intelligence` - Brain/network imagery
- **Alternative Placeholders**: `https://placehold.co/300x200/121212/00f3ff?text=FEATURE`
  - Dimensions: 300x200px for feature cards
  - Color scheme: Match cyberpunk palette (#050505 background, #00f3ff text)

### Component Structure for Asset Replacement
- **Props-based image handling**: Accept image URLs as props for easy replacement
- **Fallback system**: Default to placeholder if custom image not provided
- **Lazy loading**: Implement for performance optimization
- **Alt text requirements**: Descriptive text for accessibility
- **Aspect ratio preservation**: Maintain 16:9 for hero, 1:1 or 4:3 for feature cards

### Future Asset Integration
- **Local asset paths**: Structure code to accept local image imports
- **CDN integration**: Support for optimized image delivery
- **Animation assets**: Consider Lottie files or CSS animations for interactive elements
- **SVG support**: For scalable icons and decorative elements
- **Image optimization**: Automatic compression and format selection (WebP where supported)

## 5. Technical Implementation Details

### CSS Modules
- Use CSS Modules for scoping (following existing pattern)
- Create new module file: `LandingPage.module.css`
- Implement cyberpunk-specific variables for colors and effects

### Color Variables
```css
:root {
  --cyber-black: #050505;
  --dark-grey: #121212;
  --neon-cyan: #00f3ff;
  --neon-magenta: #ff00ff;
  --electric-green: #39ff14;
  --light-grey: #E0E0E0;
}
```

### Responsive Breakpoints
- Desktop: 3-column grid (≥1024px)
- Tablet: 2-column grid (768px - 1023px)
- Mobile: Single column (<768px)

## 6. Accessibility Considerations

- Maintain sufficient color contrast for text readability
- Implement keyboard navigation support
- Add appropriate ARIA labels for interactive elements
- Ensure focus indicators are visible
- Provide alternative text for images

## 7. Performance Requirements

- Optimize images and background assets
- Implement lazy loading where appropriate
- Minimize JavaScript bundle size
- Ensure fast loading times for initial render