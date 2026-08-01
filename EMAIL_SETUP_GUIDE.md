# Contact Form Email Setup Guide

Direct AJAX submissions to plain email addresses (e.g. `https://formspree.io/purkaitshubham5@gmail.com`) are blocked by Formspree's security policy to prevent bots from scraping email addresses and spamming inputs. 

To make your contact form send messages to your email, you must use one of the two integrated AJAX-friendly services: **Web3Forms** (default, recommended) or **Formspree Form ID**.

---

## Option A: Web3Forms (Recommended - Free & 10-Second Setup)

Web3Forms is designed specifically for static sites and React forms. Getting a key is free, fast, and does not require creating a password-protected dashboard account.

### How to set it up:
1. Go to [web3forms.com](https://web3forms.com).
2. Enter your email: `purkaitshubham5@gmail.com` under **"Enter your email to receive Access Key"**.
3. Click **Create Access Key**.
4. You will instantly receive your Access Key in your inbox (or copy it directly from the confirmation screen).
5. Open [src/data/portfolioData.js](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/data/portfolioData.js).
6. Set the `contactConfig` properties like this:
   ```javascript
   contactConfig: {
     email: "purkaitshubham5@gmail.com",
     service: "web3forms",
     web3FormsAccessKey: "YOUR_PASTED_ACCESS_KEY_HERE", // <-- Paste your key here
     formspreeFormId: ""
   }
   ```
7. Save the file. Form submissions will now deliver straight to your email.

---

## Option B: Formspree Form ID (Requires account dashboard creation)

If you prefer to use Formspree, you must create a Form ID inside their dashboard instead of posting directly to your email address:

### How to set it up:
1. Go to [formspree.io](https://formspree.io) and register/login.
2. Click **New Form**.
3. Name your form and set the recipient email to `purkaitshubham5@gmail.com`.
4. Formspree will create the form and display a endpoint URL like `https://formspree.io/f/mqkvzprz`.
5. Extract the **Form ID** at the end of the URL (e.g., `"mqkvzprz"`).
6. Open [src/data/portfolioData.js](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/data/portfolioData.js) and configure:
   ```javascript
   contactConfig: {
     email: "purkaitshubham5@gmail.com",
     service: "formspree",
     web3FormsAccessKey: "",
     formspreeFormId: "mqkvzprz" // <-- Paste your Formspree Form ID here
   }
   ```
7. Save the file.

---

## Troubleshooting

- **"Web3Forms Access Key is not configured" error:** This warning displays directly on the screen if you try to submit the form while the placeholder `"YOUR_WEB3FORMS_ACCESS_KEY_HERE"` is still in the file.
- **Check Spam Folder:** Web3Forms and Formspree emails can sometimes go to your spam or junk folder on the very first delivery. Please verify and mark them as "Not Spam" to ensure future messages land directly in your inbox.
