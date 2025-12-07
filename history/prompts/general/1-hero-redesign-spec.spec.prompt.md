---
id: 1
title: "hero-redesign-spec"
stage: "spec"
date: "2025-12-07"
surface: "agent"
model: "Claude Sonnet 4.5"
feature: "hero-redesign"
branch: "1-hero-redesign"
user: "user"
command: "/sp.specify Sleek Dark Theme Hero Section"
labels: ["design", "ui", "docusaurus"]
links:
  spec: "null"
  ticket: "null"
  adr: "null"
  pr: "null"
files:
  - ".spec/hero_redesign.md"
  - ".spec/checklists/requirements.md"
tests: []
---

## Prompt Text
```
/sp.specify

Create a file named .spec/hero_redesign.md.

## 1. Goal: Sleek Dark Theme Hero Section
The default hero section of the landing page (index.js or Home.js) must be replaced with a custom component focused on a sleek, dark aesthetic.

## 2. Docusaurus Implementation
- **Swizzling:** Swizzle the main component that renders the landing page (e.g., Hero component or override Home.js).
- **Styling:** Use CSS Modules (e.g., styles.module.css) for scoped styling.

## 3. Design Requirements
- **Color Scheme:** Primary background must be a deep, sleek dark color (e.g., `#121212` or similar charcoal black).
- **Text:** All primary text (title, tagline) must be bright white or a very light gray.
- **Project Title:** Display the title prominently: "Physical AI & Humanoid Robotics Textbook".
- **Tagline:** Use a compelling tagline related to embodied intelligence and ROS 2.
- **Call-to-Action (CTA):** Replace the default button with a prominent, contrasting button (e.g., cyan or electric blue) labeled **"Start Reading the Textbook"** that links directly to the documentation root (`/docs/`).
- **Aesthetics:** The section must occupy full viewport height (or near full height) on desktop.
```

## Response Text
Created a comprehensive specification file (.spec/hero_redesign.md) that details the requirements for implementing a sleek dark theme hero section. The specification includes:

- Design requirements with color scheme specifications
- Content requirements for title and tagline
- Technical requirements for Docusaurus implementation using swizzling
- Call-to-action button specifications with proper linking
- Success criteria and user scenarios
- Scope definition (in/out of scope)
- Constraints and assumptions

Also created a quality checklist to validate the specification completeness.

## Outcome
Successfully created a detailed specification for the hero redesign feature that follows the required format and includes all necessary information for planning and implementation.