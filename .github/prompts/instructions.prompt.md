<!-- copilot: instructions -->
model: gpt-4

# Website Code Review & Enhancement Instructions

Copilot, when analyzing or generating code for this repository, follow these rules:

1. **UI/UX Standards**
   - Enforce modern responsive design using Flexbox/Grid and media queries.
   - Ensure accessibility compliance with WCAG 2.1 (contrast ratios, ARIA roles, proper labels).
   - Navigation must remain consistent and intuitive.

2. **Maintainability & Structure**
   - Use semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`).
   - Break code into reusable components (cards, navbars, footers, testimonial slider).
   - Apply CSS variables or a design token system for consistent theming.

3. **Dark/Light Theme Support**
   - Use CSS custom properties for theme colors.
   - Provide a global dark/light theme toggle.
   - No section should break or misalign when themes are switched.

4. **Layout & Spacing**
   - Apply consistent margins, paddings, and line-heights.
   - Use a 12-column grid system or Flexbox for alignment.
   - Cards: always 4 per row, without shrinking widths.

5. **Testimonial Section**
   - Implement a marquee-style testimonial ticker (like news channel bottom scroll).
   - Ensure it loops infinitely, smoothly, and responsively.

6. **Contact Page**
   - Place the contact form on a dedicated page.
   - All "Contact Us" or "Talk to Us" links must redirect here.
   - Form must be accessible and validated properly.

7. **Homepage Enhancements**
   - Add persuasive content (features, success stories, CTAs).
   - Clicking the logo redirects to the homepage root, not just hero section.

8. **Quality & Alignment**
   - Eliminate misalignments, overlaps, and z-index issues.
   - Test layouts on mobile, tablet, and desktop.
   - Ensure cross-browser compatibility (Chrome, Firefox, Safari, Edge).

---

## Copilot Task
- When generating or reviewing code, check against all above requirements.  
- Suggest corrected implementations if something is missing.  
- Always use **HTML5, CSS3 (Flexbox/Grid), and modern JavaScript (ES6+)** best practices.  
- Code must remain modular, maintainable, and scalable.  
