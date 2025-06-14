# Deploying Multiple Apps from Monorepo to Vercel

This document provides instructions for deploying both the `right-credit` and `under-writing` applications from this monorepo to Vercel.

## Prerequisites

- A Vercel account
- Your repository connected to Vercel

## Deployment Steps

### 1. Deploy the right-credit app

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." > "Project"
3. Select your repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/right-credit`
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install --include=dev`
5. Click "Deploy"

### 2. Deploy the under-writing app

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." > "Project"
3. Select the same repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/under-writing`
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install --include=dev`
5. Click "Deploy"

## Environment Variables

If your applications require environment variables, make sure to add them in the Vercel project settings for each application separately.

## Troubleshooting

If you encounter build errors:

1. Make sure all dependencies are correctly installed
2. Check that the `vercel-build` script exists in each app's package.json
3. Verify that the project.json files are correctly configured for each app
4. Ensure the root directory paths are correct in the Vercel project settings