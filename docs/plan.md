# AI Development Documentation

**Project:** Portfolio Template  
**Student:** Ana Callejón Alén  
**Course:** Web Foundations, WEB ATELIER (UDIT)  
**AI Tools:** ChatGPT and Claude  
**Period:** November 2024 - January 2025

## Overview

This document explains how I used AI assistants while building this portfolio. I worked with ChatGPT and Claude mainly for JavaScript functionality and CSS animations. The AI helped me implement features I hadn't learned yet and debug problems I couldn't solve on my own.

## How I Used AI

I didn't have a structured plan for using AI from the start. Instead, I used it more organically as I built the site. When I ran into something I didn't know how to do or got stuck on a bug, I'd ask ChatGPT or Claude for help. This meant I don't have saved prompts or a clear record of each interaction, since it was more conversational and iterative.

Generally, I would:

1. Try to solve something myself first
2. If stuck, describe the problem to the AI
3. Get a suggested solution or explanation
4. Read through the code and try to understand it
5. Modify it to fit my project
6. Test and refine

## Features Built with AI Help

### Custom Cursor

I wanted an interactive cursor that changes based on what's underneath it. I asked the AI how to track mouse position and detect background colors. The AI showed me how to use `mousemove` events and `getComputedStyle()` to check element colors.

I took that code and adapted it to work with my specific color scheme. I also added the logic to hide the cursor on mobile and make it respond to link hovers.

**Files:** `assets/js/main.js`

### Infinite Carousel

I needed the project images to scroll infinitely in two rows going opposite directions. The AI suggested duplicating the content and using CSS keyframe animations with `transform: translateX()`.

I implemented this but adjusted the timing, spacing, and made it work responsively with different speeds for mobile.

**Files:** `assets/css/components.css`, HTML files with carousel structure

### Project Modal

When you click a project card, a modal opens with details. I asked the AI how to build a modal that shows/hides and populates with different content. The AI provided the basic structure for backdrop, modal container, and content injection.

I designed the modal appearance myself (glassmorphism effect, two-column layout) and added responsive behavior and the close button.

**Files:** `assets/js/main.js`, `assets/css/components.css`, `projects.html`

### Filtering System

The project gallery needed filtering by category. I asked how to filter elements based on data attributes. The AI showed me how to use `getAttribute()` and class toggling.

I added support for multiple categories per project and connected it to my button styling.

**Files:** `assets/js/main.js`, `projects.html`

### Hamburger Menu Refinement

I had already built the basic hamburger menu structure, but it wasn't working smoothly. I asked the AI to help debug the toggle behavior and add scroll locking when the menu is open.

The AI helped me clean up the JavaScript logic. I had already created the HTML and most of the CSS.

**Files:** `assets/css/layout.css`, `assets/js/main.js`

### Scroll Animations

I wanted elements to fade in as you scroll down the page. The AI recommended using Intersection Observer instead of scroll events for better performance and showed me the basic setup.

I applied this to different sections and customized the thresholds and animation timing.

**Files:** `assets/js/main.js`, `assets/css/components.css`

### Blob Animation (404 Page)

For the 404 page button, I wanted an organic morphing shape. I asked how to create this effect and the AI suggested using `border-radius` keyframes.

I took the concept and created my own keyframe values to get the look I wanted, matching my color scheme.

**Files:** `assets/css/components.css`

### Color-Changing Text (404 Page)

The "404" text needed to transition smoothly between pink and blue. The AI explained the `background-clip: text` technique with gradient animations.

I set up the gradient positions and timing to create the effect I wanted.

**Files:** `assets/css/components.css`

## What I Built Independently

These parts were developed using course materials and class notes:

- Overall page layouts and structure
- Responsive design approach and breakpoints
- Semantic HTML for all pages
- Visual design (colors, typography, spacing)
- All written content
- Form styling
- Basic CSS transitions and hover effects
- Grid and Flexbox layouts

## Why No Saved Prompts

I didn't save my prompts because I wasn't planning to use AI from the beginning. It happened more naturally as I built the site. When I'd hit a wall or want to try something new, I'd open ChatGPT or Claude and describe what I needed. Sometimes it was debugging specific errors, other times it was asking how to implement a feature.

This approach meant conversations were often back-and-forth, with me asking follow-up questions or saying "that didn't work, how do I fix it?" It wasn't structured enough to document each interaction as a formal plan.

## Learning Process

Even though AI helped with implementation, I made sure to understand what the code was doing before using it. I would:

- Read through suggested code line by line
- Look up unfamiliar methods or properties on MDN
- Test the code in isolation before adding it to my project
- Modify it to fit my specific needs
- Ask the AI to explain parts I didn't understand

This meant I spent extra time learning, but I felt comfortable with the final code because I understood how it worked.

## Breakdown

Rough estimate of AI involvement by category:

- JavaScript functionality: Heavy AI assistance, adapted and customized by me
- CSS animations: AI provided structure, I designed and refined
- HTML structure: Mostly me, minimal AI input
- Visual design: All me (colors, layout, typography)
- Content: All me (text, images, project descriptions)
- Responsive design: Mostly me, some AI help with specific issues

## Reflection

Using AI helped me build features I wouldn't have been able to implement on my own at this stage of learning. It accelerated development and taught me techniques I'll use in future projects.

The trade-off was that I had to spend time understanding AI-generated code instead of figuring it out from scratch. But I think this was worthwhile because I still learned the concepts while producing a more polished final result.

If I were to do it again, I would document my prompts from the start. Not having that record makes it harder to show exactly what came from AI versus what I developed myself.

## Verification

All features were tested across browsers and devices. Every piece of AI-assisted code was reviewed and understood before going into the final project. No code was used blindly.

---

Ana Callejón Alén  
January 2025
