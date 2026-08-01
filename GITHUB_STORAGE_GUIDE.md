# GitHub Cloud Storage Setup Guide

You can use GitHub repositories as a zero-cost, dynamic cloud storage manager (CMS) for the **"My Life"** and **"My Failures"** sections of your portfolio.

This guide will help you create these repositories and link them to your website.

---

## Step 1: Create the Repositories on GitHub

1. Log in to your GitHub account at [GitHub.com](https://github.com).
2. Create **two separate public repositories** (they must be **Public** so the website can read the files without auth tokens):
   - **Repository 1:** Name it `portfolio-my-life`
   - **Repository 2:** Name it `portfolio-my-failures`
3. Check the box **"Add a README file"** when creating each repository so that the repositories initialize with a default `main` branch.

---

## Step 2: Upload Your Photos

To upload photos to your new repositories:
1. Go to your repository page (e.g., `https://github.com/YOUR_USERNAME/portfolio-my-life`).
2. Click **Add file** -> **Upload files** at the top right of the file browser.
3. Drag and drop your image files (`.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, or `.svg`).
4. Click **Commit changes** at the bottom of the page to save the upload.

*Note: The website will automatically detect and load any valid image file in these repositories, ordering them alphabetically by filename.*

---

## Step 3: Link Your GitHub Account to the Code

Now, configure the website code to fetch from your GitHub account instead of the default placeholders:

1. Open the file [src/data/portfolioData.js](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/data/portfolioData.js).
2. Find the `githubStorageConfig` object at the top of the file:
   ```javascript
   githubStorageConfig: {
     username: "shubham", // <-- Change this to your GitHub Username
     lifeRepo: "portfolio-my-life",
     failuresRepo: "portfolio-my-failures"
   }
   ```
3. Replace `"shubham"` with your actual **GitHub username** (e.g., `"purkaitshubham"`).
4. Save the file.

---

## Verification & Fallbacks

- When you start the website, it will fetch your uploaded images dynamically.
- **Fail-Safe Fallback:** If the repositories don't exist yet, are set to private, or fail to load for any reason, the site will automatically fall back to loading the default Unsplash photos.
