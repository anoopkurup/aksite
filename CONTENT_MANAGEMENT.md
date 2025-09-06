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
```

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

The website includes a fully functional newsletter subscription system integrated with ConvertKit. Here's how to set it up and manage it:

### 1. ConvertKit Account Setup

1. **Create a ConvertKit Account**:
   - Sign up at https://convertkit.com/
   - Choose a plan (Creator plan recommended for professional use)

2. **Create a Form**:
   - Go to ConvertKit Dashboard → Forms
   - Click "Create Form" → Choose "Newsletter" type
   - Design your form (the website form will override the design)
   - Save and note the Form ID

3. **Get API Credentials**:
   - Go to Settings → Advanced → API Keys
   - Copy your API Key (starts with "ck_")
   - Copy your Form ID from the form settings

### 2. Environment Variables Configuration

1. **Update Local Environment**:
   Edit `/Users/anoopkurup/Documents/aksite-nextjs/.env.local`:
   ```
   CONVERTKIT_API_KEY=ck_your_actual_api_key_here
   CONVERTKIT_FORM_ID=1234567
   ```

2. **Vercel Deployment Setup**:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add the same variables:
     - `CONVERTKIT_API_KEY`: Your ConvertKit API key
     - `CONVERTKIT_FORM_ID`: Your ConvertKit form ID

### 3. Testing Newsletter Functionality

1. **Local Testing**:
   ```bash
   npm run dev
   ```
   - Navigate to any page with the newsletter form
   - Enter a test email and click Subscribe
   - Check ConvertKit dashboard for new subscriber

2. **Test API Directly** (optional):
   ```bash
   curl -X POST http://localhost:3000/api/newsletter \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com"}'
   ```

### 4. Newsletter Component Usage

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

### 5. Newsletter Management

#### Adding Tags to Subscribers:
The API automatically adds the tag `website-newsletter` to all subscribers. To modify tags:

Edit `/src/app/api/newsletter/route.ts`:
```typescript
body: JSON.stringify({
  api_key: CONVERTKIT_API_KEY,
  email: email,
  tags: ['website-newsletter', 'blog-readers'], // Add more tags
}),
```

#### Customizing Success Messages:
Edit the API route response messages in `/src/app/api/newsletter/route.ts`:
```typescript
return NextResponse.json(
  { 
    success: true, 
    message: 'Your custom success message here!' 
  },
  { status: 200 }
);
```

#### Monitoring Subscriptions:
- Check ConvertKit Dashboard → Subscribers for new signups
- View API logs in Vercel Dashboard → Functions → Logs
- Monitor error rates and success rates

### 6. Troubleshooting

#### Common Issues:

**"Newsletter service configuration error"**:
- Check that environment variables are set correctly
- Verify ConvertKit API key is valid
- Ensure Form ID exists and is active

**"This email address is already subscribed"**:
- This is normal ConvertKit behavior
- The user will see this message and can check their email

**Network errors**:
- Check internet connection
- Verify Vercel deployment is working
- Check ConvertKit API status

#### Testing Checklist:
- [ ] Environment variables configured
- [ ] ConvertKit form created and active
- [ ] Local development server working
- [ ] Production deployment successful
- [ ] Test email subscription works
- [ ] Success/error messages display correctly
- [ ] New subscribers appear in ConvertKit

### 7. Advanced Configuration

#### Custom Email Templates:
Configure in ConvertKit Dashboard → Sequences to send welcome emails to new subscribers.

#### Analytics Integration:
The newsletter API logs successful subscriptions. You can extend this to integrate with Google Analytics or other tracking tools.

#### Rate Limiting:
For high-traffic sites, consider adding rate limiting to the API route to prevent abuse.

---

### File Paths Quick Reference:
- Blog posts: `/src/content/blog/posts/`
- Images: `/public/images/`
- Blog components: `/src/app/blog/`
- Page templates: `/src/components/PageTemplate.tsx`
- Newsletter API: `/src/app/api/newsletter/route.ts`
- Newsletter Component: `/src/components/Newsletter.tsx`
- Environment Variables: `/.env.local` (local), Vercel Dashboard (production)