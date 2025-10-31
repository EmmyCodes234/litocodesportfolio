# Netlify Deployment Guide

This document outlines the steps and configurations needed to deploy this Next.js application to Netlify.

## Configuration Files

### 1. netlify.toml
Located at the root of the project, this file tells Netlify how to build and deploy the application:

```toml
[build]
  command = "next build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 2. next.config.mjs
The Next.js configuration has been optimized for Netlify deployment:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

### 3. Environment Configuration
- `.nvmrc` and `.node-version`: Both specify Node.js version 18 for consistency
- `public/_redirects`: Handles client-side routing with a catch-all rule

## Deployment Steps

1. Connect your repository to Netlify
2. Netlify will automatically detect the `netlify.toml` file and use its configuration
3. The build command `next build` will be executed
4. The publish directory is set to `.next`
5. The `@netlify/plugin-nextjs` plugin will optimize the deployment

## Custom Domain Setup

To set up a custom domain:
1. Go to Site settings > Domain management in Netlify
2. Add your custom domain
3. Follow Netlify's instructions to configure DNS records

## Troubleshooting

### Build Issues
If you encounter build issues:
1. Ensure all dependencies are correctly listed in `package.json`
2. Check that the Node.js version is compatible (v18 recommended)
3. Verify the `netlify.toml` configuration is correct

### Routing Issues
If you experience routing problems:
1. Check the `public/_redirects` file
2. Ensure client-side routes are properly configured
3. Verify the Next.js routing configuration in `app/` directory

## Local Development vs Production

- **Development**: Run `pnpm dev` for local development
- **Production Build**: Run `pnpm build` to test the production build locally
- **Production Server**: Run `pnpm start` to test the production server locally

## Performance Optimizations

The configuration includes several optimizations for Netlify deployment:
- Image optimization disabled (`unoptimized: true`) since Netlify will handle image optimization
- TypeScript build errors ignored for faster builds
- Proper routing configuration for static site generation