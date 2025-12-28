# MNS Transport Website

A modern, high-trust website for MNS Transport - a Romanian road transport company specializing in freight transport with curtain-sider trucks.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** - Fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router 7** - Client-side routing
- **React Hook Form** + **Zod** - Form handling and validation
- **i18next** - Internationalization (Romanian + English)
- **Lucide React** - Icon library

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── TrustStatsBar.tsx
│   ├── InsuranceBadge.tsx
│   ├── ResponseSLAChip.tsx
│   ├── LiveTrackingFeature.tsx
│   ├── ProcessTimeline.tsx
│   ├── CoverageCountriesList.tsx
│   ├── Testimonials.tsx
│   ├── FAQAccordion.tsx
│   ├── QuoteCTA.tsx
│   └── LanguageSwitcher.tsx
├── content/
│   └── company.ts       # Business config & content
├── locales/
│   ├── ro.json          # Romanian translations
│   └── en.json          # English translations
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Fleet.tsx
│   ├── Coverage.tsx
│   ├── Quote.tsx
│   ├── Contact.tsx
│   ├── Privacy.tsx
│   ├── Cookies.tsx
│   └── Terms.tsx
├── App.tsx
├── main.tsx
├── i18n.ts
└── index.css
```

## Configuration

### Business Details

Edit `src/content/company.ts` to update:

- Company name and taglines
- Contact information (phone, email, WhatsApp)
- Business statistics (years, trucks, km/month, on-time %)
- Coverage countries
- Services list
- FAQs
- Legal text placeholders

### Translations

Edit `src/locales/ro.json` and `src/locales/en.json` for UI text translations.

### Important Contact Fields to Update

In `src/content/company.ts`:

```typescript
contact: {
  phone: '+40 XXX XXX XXX',      // Display format
  phoneClean: '+40XXXXXXXXX',    // Click-to-call format
  email: 'contact@mnstransport.ro',
  whatsapp: '+40XXXXXXXXX',      // WhatsApp number
  address: {
    ro: 'Adresa reală',
    en: 'Real address',
  },
},
```

## Form Handling & Integrations

### Quote Form

The quote form in `/quote` validates client-side using Zod and submits data via `onSubmit`.

To connect to your backend:

1. **Email Provider**

   ```typescript
   // In src/pages/Quote.tsx, modify onSubmit:
   const onSubmit = async (data: QuoteFormData) => {
     await fetch('/api/quote', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data),
     })
     setSubmitted(true)
   }
   ```

2. **CRM Webhook**

   ```typescript
   // Add CRM callback in onSubmit:
   await fetch('https://your-crm.com/webhook', {
     method: 'POST',
     body: JSON.stringify({
       ...data,
       source: 'website',
       timestamp: new Date().toISOString(),
     }),
   })
   ```

3. **WhatsApp Flow**

   After form submission, the success screen includes a WhatsApp button with a prefilled message. Customize the message in the Quote page.

## SEO

- Meta tags configured in `index.html`
- `sitemap.xml` and `robots.txt` in `/public`
- Semantic HTML throughout
- Update canonical URL in `index.html` to your domain

## Deployment

### Docker

```bash
# Build image
docker build -t mnstransport .

# Run container
docker run -p 80:80 mnstransport
```

### Static Hosting

```bash
npm run build
# Upload contents of /dist to your hosting provider
```

For SPA routing, ensure your server redirects all requests to `index.html`.

## Assets to Replace

1. **Logo** - Currently using a simple "M" placeholder. Replace the logo in:
   - `src/components/Header.tsx`
   - `src/components/Footer.tsx`
   - `public/favicon.svg`

2. **Fleet Images** - Placeholder boxes in `src/pages/Fleet.tsx`. Add real photos:
   - Create `/public/images/fleet/` directory
   - Add optimized images (WebP recommended)
   - Update image sources in Fleet.tsx

3. **Testimonials** - Update placeholder testimonials in `src/content/company.ts`

4. **Legal Texts** - Complete privacy policy, cookies policy, and terms in `src/content/company.ts`

## Environment Variables

Create `.env` for environment-specific config:

```env
VITE_API_URL=https://api.mnstransport.ro
VITE_ANALYTICS_ID=
```

## Performance Optimization

- Images: Use WebP format, add `loading="lazy"`
- Fonts: Inter font loaded from Google Fonts
- CSS: Tailwind purges unused styles in production
- Bundle: Vite handles code splitting automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Private - All rights reserved.
