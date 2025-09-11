
# NoLossLottery

A decentralized no-loss lottery application built with React and Aptos blockchain.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Persistent Deployment

This project is configured for continuous deployment using Netlify and GitHub Actions. This ensures that your application remains deployed even when you sign out and come back later.

### Setup Instructions

1. **Push your code to GitHub**
   - Create a repository on GitHub
   - Push your code to the repository

2. **Set up Netlify**
   - Create an account on [Netlify](https://www.netlify.com/)
   - Connect your GitHub repository
   - Configure the build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

3. **Configure GitHub Actions**
   - The workflow file is already created at `.github/workflows/deploy.yml`
   - Add the following secrets to your GitHub repository:
     - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
     - `NETLIFY_SITE_ID`: The API ID of your Netlify site

4. **Verify Deployment**
   - After pushing to the main branch, GitHub Actions will automatically deploy to Netlify
   - Your site will remain deployed and accessible at the Netlify URL

## Optimization

The React components have been optimized with proper memoization using `memo` and `useCallback` to prevent unnecessary re-renders and improve performance.
  