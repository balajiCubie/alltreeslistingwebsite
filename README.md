# 🌳 All Trees Listing Website

Welcome to the **All Trees Listing Website** — an open, community-driven platform to discover, explore, and protect every tree species on Earth.

Built with **Next.js**, this project uses a local JSON database for development and static site generation (SSG). It’s designed to scale to thousands of tree species, each with detailed taxonomy, descriptions, images, maps, and community contributions.

---

## ✨ **Project Goals**

✅ List and showcase **10,000+ tree species**
✅ Enable **search, filter, and browse** by taxonomy, region, status, and uses
✅ Display rich detail pages for every species (`/trees/[slug]`)
✅ Host an interactive world map and region-based tree listings
✅ Empower the community to **contribute photos, facts, and conservation status**
✅ Build a foundation for future integration with real-time databases or CMS

---

## ⚙️ **Tech Stack**

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** Tailwind CSS (optional, or your choice)
- **Database:** Local JSON files (file-based “mini DB”)
- **Images & Maps:** Stored in `/public/images` and `/public/maps`
- **Deployment-ready:** Supports Static Generation (SSG) and Incremental Static Regeneration (ISR)

---

## 📂 **Project Structure**

```plaintext
/ ── pages/          # Next.js routes
     ├─ index.tsx    # Home page
     ├─ trees/       # Listing & detail pages
         ├─ index.tsx
         ├─ [slug].tsx

/ ── components/     # Reusable UI components
     ├─ common/      # Navbar, Footer, CTA Banner, etc.
     ├─ home/        # Hero, FeaturedSpecies, Map, etc.
     ├─ trees/       # TreeCard, TreeGrid, FilterBar, TaxonomySidebar
     ├─ species/     # SpeciesHero, QuickFacts, Gallery, Description

/ ── data/           # Local JSON “database”
     ├─ trees/
         ├─ index.json            # Master list of all trees
         ├─ azadirachta-indica.json  # One file per species (optional)
     ├─ taxonomy.json
     ├─ regions.json
     ├─ climate-zones.json
     ├─ contributors.json

/ ── public/         # Images, maps, static files

/ ── styles/         # Global styles if needed
🌱 How to Use the Local JSON Database
/data/trees/index.json
Contains the minimal data for the /trees listing page.

/data/trees/[slug].json
Contains full species details for the dynamic /trees/[slug] pages.

taxonomy.json, regions.json
Support filters, maps, and taxonomy trees.

When you build the site:

getStaticPaths reads all slugs from index.json

getStaticProps pulls the detailed species file by slug

🚀 Getting Started
Clone the repo

bash
Copy
Edit
git clone https://github.com/yourusername/all-trees-listing.git
cd all-trees-listing
Install dependencies

bash
Copy
Edit
npm install
# or
yarn install
Run the dev server

bash
Copy
Edit
npm run dev
# or
yarn dev
Visit http://localhost:3000 🚀

🗃️ Add Your Own Trees
Add a new entry to /data/trees/index.json

(Optional) Create a full detail file /data/trees/[slug].json

Add images to /public/images/[slug]/

🔒 Future Improvements
✅ Migrate from local JSON to a real-time database (Supabase, Firestore, or MongoDB)
✅ Add user auth for contributors
✅ Build a moderation dashboard
✅ Add internationalization (local names, translations)
✅ Support region-specific versions of the site

🤝 Community & License
This project is open to contributions.
🌱 License: MIT (or your preferred license).
🌳 Be part of the mission to help people discover, protect, and plant trees around the world!

📫 Contact
Made with 💚 for nature and open data.
[Your Name] • [Your Email] • [Your Website]

yaml
Copy
Edit

---

## ✅ **Next Steps**

When you’re ready, I can:
- ⚡ Generate your starter `/data` folder as real JSON.
- 🧩 Create a `CONTRIBUTING.md` for community contributors.
- 📄 Add an example `.env` and `.gitignore` if you move to Supabase later.

Just say **“Make it!”** and I’ll build it for you. 🌍✨
