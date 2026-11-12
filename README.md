# Antixor Catering Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/antixor-catering-website/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, multi-section catering business website reconstructed from the supplied reference image.

## Sections included
- Announcement strip and sticky navigation
- Hero section with catering food photography and calls to action
- About the caterer / chef introduction
- Four catering service cards
- Signature menu with dish cards
- Four-step event planning process
- Event photo gallery
- Interactive testimonial slider
- Catering statistics
- Contact call-to-action and footer

## Run locally

No build tools, npm packages, or framework installation are required.

```bash
python -m http.server 8000
```

Open **http://localhost:8000**.

You can also open `index.html` directly in a modern browser. Internet access is needed for Google Fonts and the remote Unsplash photographs.

## Project structure

```text
antixor-catering-website/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Customize
- Replace the sample food photos in `index.html` with your own licensed images.
- Update the email address, phone number and address in the footer and quote link.
- Edit service descriptions and menu items directly in `index.html`.
- Adjust brand colors at the top of `style.css` under `:root`.

## Notes
This is a front-end reconstruction of the visual reference, not the original website source. Contact form submission is represented by email links; no backend, booking database, or payment integration is included.
