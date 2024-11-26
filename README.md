# TradeConnect Landing Page

A modern, animated landing page built with Next.js, TypeScript, and Tailwind CSS. Features a dynamic background with floating emojis and social media integration.

## Features

- 🎨 Responsive design with Tailwind CSS
- ✨ Animated background with floating emojis
- 🔄 Smooth hover transitions
- 📱 Mobile-friendly layout
- 🚀 Fast static site deployment
- 🌙 Social media integration

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Lucide React Icons
- GitHub Pages

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for GitHub Pages deployment. To deploy:

1. Fork or clone this repository
2. Update the `basePath` in `next.config.ts` with your repository name
3. Update social media links in `src/components/SocialTradingTeaser.tsx`
4. Push to your GitHub repository
5. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Set source to "GitHub Actions"

The site will automatically deploy when you push to the main branch.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run export` - Export static site

## Customization

You can customize the landing page by:

1. Modifying the color scheme in `tailwind.config.ts`
2. Updating social media links in `SocialTradingTeaser.tsx`
3. Adjusting animations in the component files
4. Adding new sections or features as needed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this code for your own projects.
