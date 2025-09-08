# Content Management Guide

## How to Create and Update Blog Posts

### 1. Blog Post File Structure

Blog posts are stored as Markdown files in the following directory:
```
/src/content/blog/posts/
```

Each blog post should be named using kebab-case (lowercase with hyphens):
- Good: `aida-to-ai-messaging-frameworks-workflows.md`
- Bad: `AIDA to AI Messaging.md`

### 2. Blog Post Frontmatter

Every blog post must start with YAML frontmatter between `---` markers. Here's the required structure:

```yaml
---
title: "Your Blog Post Title"
date: 2025-08-26
description: "SEO-friendly description that appears in search results and social shares"
tags: ["AI Workflows", "Marketing", "Automation"]
read_time: "6 min read"
author: "Anoop Kurup"
category: "Strategy"
---
```

#### Required Fields:
- **title**: The main title of your blog post
- **date**: Publication date in YYYY-MM-DD format
- **description**: Meta description for SEO (150-160 characters recommended)
- **author**: Author name (defaults to "Anoop Kurup" if omitted)
- **category**: Primary category (Strategy, Lead Generation, Professional Services Marketing, etc.)

#### Optional Fields:
- **tags**: Array of relevant tags for categorization
- **read_time**: Estimated reading time (e.g., "5 min read")
- **featured**: Set to `true` to feature the post on homepage

### 3. Writing Blog Content

After the frontmatter, write your content using standard Markdown syntax:

```markdown
---
title: "Your Title"
date: 2025-01-15
description: "Your description"
author: "Anoop Kurup"
category: "Strategy"
---

Your blog content starts here. The first paragraph serves as an introduction.

## Section Headings

Use `##` for main section headings, `###` for subsections.

### Key Features:
- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- `Code snippets` for technical terms
- [Links](https://example.com) for external references

## Code Blocks

For longer code examples:

```javascript
// Your code here
function example() {
  return "Hello World";
}
```

## Lists and Formatting

1. Numbered lists for sequential steps
2. Use proper formatting for readability

- Bullet points for features
- Keep paragraphs focused and scannable


### 4. Creating a New Blog Post

1. **Navigate to the blog posts directory:**
   ```
   cd /src/content/blog/posts/
   ```

2. **Create a new Markdown file:**
   ```
   touch your-post-slug.md
   ```

3. **Add frontmatter and content:**
   - Copy the frontmatter template above
   - Fill in your specific details
   - Write your content below the closing `---`

4. **Preview your post:**
   - Start the development server: `npm run dev`
   - Navigate to: `http://localhost:3000/blog/posts/your-post-slug`

### 5. Updating Existing Blog Posts

1. **Locate the file:**
   ```
   /src/content/blog/posts/existing-post-slug.md
   ```

2. **Edit the content:**
   - Update frontmatter fields as needed
   - Modify the Markdown content
   - Save the file

3. **Changes appear automatically** when the development server is running

### 6. Blog Post Styling

The blog system uses custom CSS classes for optimal typography:

- **Paragraph spacing**: Automatically applied with `mb-8` spacing
- **Typography**: Large, readable text with `text-lg` and proper line height
- **Color scheme**: Charcoal text (`text-charcoal`) for readability
- **Links**: Automatically styled with hover effects

---

## How to Add Images to Image Placeholders

### 1. Image Directory Structure

All images should be stored in:
```
/public/images/
```

Organize images by type:
```
/public/images/
├── blog/           # Blog post images
├── hero/           # Hero section images
├── about/          # About page images
├── workshops/      # Workshop images
└── case-studies/   # Case study images
```

### 2. Image Naming Convention

Use descriptive, kebab-case names:
- Good: `ai-workflow-diagram.jpg`
- Good: `anoop-kurup-profile.jpg`
- Bad: `IMG_001.jpg`
- Bad: `photo 1.png`

### 3. Recommended Image Specifications

#### Hero Section Images:
- **Dimensions**: 600x400px or 3:2 aspect ratio
- **Format**: JPG or WebP for photographs, PNG for graphics
- **File size**: Under 200KB for optimal loading

#### Blog Images:
- **Dimensions**: 800x450px or 16:9 aspect ratio
- **Format**: JPG or WebP
- **File size**: Under 150KB

#### Profile Images:
- **Dimensions**: Square (400x400px recommended)
- **Format**: JPG or PNG
- **File size**: Under 100KB

### 4. Adding Images to Components

#### Hero Section Images:
In any page component, update the `heroImage` prop:

```tsx
<PageTemplate
  title="Your Page Title"
  subtitle="Your subtitle"
  heroBackground="gradient"
  heroIcon="chart"
  heroImage="/images/hero/your-hero-image.jpg"
>
```

#### About Page Profile Image:
Edit `/src/app/about/page.tsx`:

```tsx
// Find this section and update the src attribute:
<div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
  <img 
    src="/images/about/anoop-kurup-profile.jpg" 
    alt="Anoop Kurup"
    className="w-full h-full object-cover rounded-lg"
  />
</div>
```

#### Blog Post Hero Images:
Edit the specific blog post file and add a `heroImage` field to frontmatter:

```yaml
---
title: "Your Blog Post Title"
date: 2025-08-26
description: "Your description"
author: "Anoop Kurup"
category: "Strategy"
heroImage: "/images/blog/your-blog-hero-image.jpg"
---
```

Then update the blog post template to use this field.

### 5. Blog Post Images in Content

To add images within blog post content, use standard Markdown syntax:

```markdown
![Alt text description](/images/blog/your-image.jpg)
```

For better control, use HTML:

```html
<img src="/images/blog/your-image.jpg" alt="Descriptive alt text" class="w-full rounded-lg shadow-soft mb-8" />
```

### 6. Image Optimization Tips

1. **Compress images** before uploading using tools like:
   - TinyPNG.com
   - ImageOptim (Mac)
   - Squoosh.app

2. **Use appropriate formats:**
   - JPG for photographs
   - PNG for graphics with transparency
   - WebP for modern browsers (best compression)

3. **Always include alt text** for accessibility and SEO

4. **Test on mobile** to ensure images look good on smaller screens

### 7. Replacing Image Placeholders

Most image placeholders in the codebase look like this:

```tsx
<div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
  <span className="text-slate-500">Image placeholder</span>
</div>
```

Replace with:

```tsx
<div className="aspect-square rounded-lg overflow-hidden">
  <img 
    src="/images/your-folder/your-image.jpg" 
    alt="Descriptive alt text"
    className="w-full h-full object-cover"
  />
</div>
```

### 8. Testing Images

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to your page:**
   ```
   http://localhost:3000/your-page
   ```

3. **Check that images:**
   - Load correctly
   - Are properly sized
   - Have appropriate alt text
   - Look good on mobile devices

---

## Quick Reference

### New Blog Post Checklist:
- [ ] Create `.md` file in `/src/content/blog/posts/`
- [ ] Add complete frontmatter
- [ ] Write engaging content
- [ ] Add hero image (optional)
- [ ] Test in browser
- [ ] Check mobile responsiveness

### Image Upload Checklist:
- [ ] Optimize image size and quality
- [ ] Use descriptive filename
- [ ] Place in appropriate `/public/images/` subdirectory
- [ ] Update component with correct path
- [ ] Add descriptive alt text
- [ ] Test loading and appearance

---

## Newsletter Functionality Setup

The website includes a newsletter subscription system using HTML embed codes from email service providers. This approach is simpler, more reliable, and perfect for static sites.

### 1. Choose Your Email Service Provider

**Recommended Options:**

#### ConvertKit (Recommended for Professional Services)
- Professional features and automation
- Great for service-based businesses
- Excellent deliverability
- Advanced segmentation

#### Mailchimp
- Popular and user-friendly
- Good free plan
- Wide integration options
- Built-in analytics

#### EmailOctopus
- Cost-effective option
- Simple and clean
- Good deliverability
- Easy setup

### 2. Create Your Newsletter Form

#### For ConvertKit:
1. **Sign up** at https://convertkit.com/
2. **Create a Form**:
   - Go to ConvertKit Dashboard → Forms
   - Click "Create Form" → Choose "Inline" or "Modal" type
   - Customize the form design (optional - your site will override most styling)
3. **Get Embed Code**:
   - Go to "Publish" tab → "Embed"
   - Copy the HTML embed code

#### For Mailchimp:
1. **Sign up** at https://mailchimp.com/
2. **Create a Form**:
   - Go to Audience → Signup Forms → Form Builder
   - Design your form
3. **Get Embed Code**:
   - Go to Signup Forms → Embedded Forms
   - Copy the HTML embed code

#### For EmailOctopus:
1. **Sign up** at https://emailoctopus.com/
2. **Create a Form**:
   - Go to Forms → Create Form
   - Design and configure your form
3. **Get Embed Code**:
   - Click on your form → Embed
   - Copy the HTML embed code

### 3. Add Embed Code to Your Website

1. **Open the Newsletter Component**:
   Edit `/src/components/Newsletter.tsx`

2. **Replace the Placeholder**:
   Find this section:
   ```jsx
   <div className="newsletter-placeholder border-2 border-dashed...">
     Replace this div with your email provider's embed code
   </div>
   ```

3. **Add Your Embed Code**:
   Replace the entire placeholder div with your HTML embed code:
   ```jsx
   {/* Replace with your actual embed code */}
   <form action="https://your-provider.com/subscribe" method="post" className="newsletter-form">
     <input type="email" name="email" placeholder="Enter your email address" required />
     <button type="submit">Subscribe</button>
   </form>
   ```

4. **Add the CSS Class**:
   Make sure your form element has the class `newsletter-form` to apply the custom styling.

### 4. Testing Your Newsletter

1. **Start Development Server**:
   ```bash
   npm run dev
   ```

2. **Navigate to Newsletter Section**:
   - Visit http://localhost:3000 (homepage)
   - Or any blog post page
   - Scroll to the newsletter section

3. **Test Subscription**:
   - Enter a test email address
   - Click Subscribe
   - Check your email provider dashboard for new subscriber
   - Verify confirmation email is sent (if configured)

### 5. Newsletter Component Usage

The Newsletter component is already integrated throughout the site:

#### Homepage Newsletter:
Located at the bottom of the homepage with both newsletter signup and work buttons.

#### Blog Post Newsletter:
Appears at the bottom of individual blog posts with newsletter signup only.

#### Custom Implementation:
```tsx
import Newsletter from "@/components/Newsletter";

// Full newsletter with work buttons
<Newsletter showWorkButtons={true} />

// Newsletter only (used in blog posts)
<Newsletter showWorkButtons={false} />
```

### 6. Customizing the Design

The Newsletter component includes built-in CSS styling that automatically applies to embedded forms:

#### Styling Features:
- **Rounded Input Fields**: Matches your site's design
- **Custom Button Styling**: Azure blue background with hover effects
- **Responsive Design**: Works on all screen sizes
- **Focus States**: Proper accessibility support

#### To Modify Styling:
Edit the `<style jsx>` section in `/src/components/Newsletter.tsx`:

```jsx
:global(.newsletter-form input[type="email"]) {
  /* Customize input styling */
  background-color: your-color !important;
  border-color: your-border-color !important;
}

:global(.newsletter-form button) {
  /* Customize button styling */
  background-color: your-brand-color !important;
}
```

### 7. Newsletter Management

#### Subscriber Management:
- **ConvertKit**: Dashboard → Subscribers → View all subscribers, segments, and tags
- **Mailchimp**: Audience → All Contacts → Manage subscribers and segments
- **EmailOctopus**: Lists → [Your List] → View subscribers and manage segments

#### Creating Email Campaigns:
1. **ConvertKit**: Campaigns → Create Campaign → Design your email
2. **Mailchimp**: Campaigns → Create Campaign → Choose your audience
3. **EmailOctopus**: Campaigns → New Campaign → Select your list

#### Adding Welcome Sequences:
- Set up automated welcome emails in your provider's automation section
- Include links to your best content or services
- Provide clear value from the first email

### 8. Advanced Configuration

#### Custom Thank You Pages:
Most email providers allow you to redirect to a custom thank you page after subscription.

#### Double Opt-in Setup:
Enable double opt-in in your email provider settings for better deliverability and compliance.

#### Analytics Integration:
Add tracking pixels or integrate with Google Analytics to track newsletter conversion rates.

### 9. Troubleshooting

#### Common Issues:

**Form not submitting:**
- Check that the embed code is properly formatted
- Ensure the `newsletter-form` class is added to the form element
- Verify the form action URL is correct

**Styling looks wrong:**
- Check that custom CSS is being applied
- Inspect the form elements to see if provider CSS is overriding
- Add `!important` to CSS rules if needed

**Subscribers not appearing:**
- Check your email provider's dashboard
- Verify the form is pointing to the correct list/audience
- Check spam folder for confirmation emails

#### Testing Checklist:
- [ ] Email provider account set up
- [ ] Form created and configured
- [ ] Embed code added to Newsletter component
- [ ] `newsletter-form` class added to form element
- [ ] Local testing completed successfully
- [ ] Form styling looks correct
- [ ] Test subscription appears in provider dashboard
- [ ] Confirmation emails working (if enabled)

---

### File Paths Quick Reference:
- Blog posts: `/src/content/blog/posts/`
- Images: `/public/images/`
- Blog components: `/src/app/blog/`
- Page templates: `/src/components/PageTemplate.tsx`
- Newsletter Component: `/src/components/Newsletter.tsx`
- Environment Variables: No longer needed (HTML embed approach)