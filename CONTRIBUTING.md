# 🤝 Contributing to All Trees Listing Website

We welcome contributions from the community to help us build the most comprehensive and accurate tree listing website! Whether you're a botanist, a developer, a photographer, or just a tree enthusiast, your help is invaluable.

---

## ✨ **How to Contribute**

There are many ways you can contribute to this project:

1.  **Add New Tree Species:** Help us expand our database by adding new tree species.
2.  **Enhance Existing Data:** Improve the accuracy and completeness of existing tree entries.
3.  **Submit Photos:** Provide high-quality images of tree species.
4.  **Improve Codebase:** Fix bugs, add features, or improve documentation.
5.  **Suggest Features:** Share your ideas for new functionalities or improvements.

---

## 🌿 **Adding New Tree Species**

To add a new tree species, follow these steps:

1.  **Fork the Repository:**
    Click the "Fork" button at the top right of this page to create a copy of this repository in your GitHub account.

2.  **Clone Your Fork:**
    ```bash
    git clone https://github.com/yourusername/all-trees-listing.git
    cd all-trees-listing
    ```

3.  **Create a New Branch:**
    ```bash
    git checkout -b feature/add-new-species-name
    ```
    (Replace `new-species-name` with the slug of the tree you're adding, e.g., `feature/add-oak-tree`)

4.  **Add Data to `/data/trees/index.json`:**
    Open `src/data/trees/index.json` and add a new entry for your tree. Ensure the `slug` is unique and lowercase, using hyphens for spaces.

    Example:
    ```json
    {
      "slug": "new-species-name",
      "common_name": "New Species Common Name",
      "scientific_name": "Genus species",
      "family": "Family Name",
      "region": "Region Name",
      "conservation_status": "Least Concern",
      "image": "/images/new-species-name/main.jpg"
    }
    ```

5.  **Create a Detailed JSON File (Optional but Recommended):**
    For comprehensive entries, create a new JSON file in `src/data/trees/` named after your tree's slug (e.g., `src/data/trees/new-species-name.json`). This file should contain all detailed information about the species.

    Example (`src/data/trees/new-species-name.json`):
    ```json
    {
      "slug": "new-species-name",
      "common_name": "New Species Common Name",
      "scientific_name": "Genus species",
      "family": "Family Name",
      "description": "Detailed description of the tree...",
      "uses": ["Use 1", "Use 2"],
      "habitat": "Habitat description",
      "conservation_status": "Least Concern",
      "images": [
        "/images/new-species-name/main.jpg",
        "/images/new-species-name/leaves.jpg"
      ],
      "map_data": {
        "latitude": 0.0,
        "longitude": 0.0,
        "zoom": 4
      },
      "taxonomy": {
        "kingdom": "Plantae",
        "phylum": "Tracheophyta",
        "class": "Magnoliopsida",
        "order": "Order Name",
        "family": "Family Name",
        "genus": "Genus Name",
        "species": "Genus species"
      },
      "contributors": [
        {
          "name": "Your Name",
          "id": "your-github-username"
        }
      ]
    }
    ```

6.  **Add Images:**
    Place all images related to your new species in a new subdirectory within `/public/images/` named after your tree's slug (e.g., `/public/images/new-species-name/`).

7.  **Update Related JSON Files (if applicable):**
    If your new species introduces a new family, genus, region, or climate zone, please update the respective JSON files in the `src/data/` directory:
    *   `src/data/taxonomy.json`
    *   `src/data/regions.json`
    *   `src/data/climate-zones.json`
    *   `src/data/contributors.json` (add yourself as a contributor!)

8.  **Test Your Changes:**
    Run the development server to ensure your additions are displayed correctly:
    ```bash
    npm install
    npm run dev
    ```
    Visit `http://localhost:3000` and navigate to your new tree's page (`/trees/new-species-name`).

9.  **Commit Your Changes:**
    ```bash
    git add .
    git commit -m "feat: Add new tree species: [New Species Common Name]"
    ```

10. **Push to Your Fork:**
    ```bash
    git push origin feature/add-new-species-name
    ```

11. **Create a Pull Request (PR):**
    Go to your forked repository on GitHub and click the "Compare & pull request" button. Provide a clear title and description for your PR.

---

## 💻 **Code Contributions**

For code-related contributions (bug fixes, new features, refactoring):

1.  Follow steps 1-3 from "Adding New Tree Species" to fork, clone, and create a new branch.
2.  Make your code changes.
3.  Ensure your code adheres to the project's coding style (if any).
4.  Test your changes thoroughly.
5.  Commit your changes with a descriptive message (e.g., `fix: Resolve issue with tree search filter`).
6.  Push your branch to your fork.
7.  Create a Pull Request (PR) with a clear description of the problem solved or feature added.

---

## ❓ **Questions or Suggestions?**

If you have any questions, suggestions, or need help, please open an issue on our [GitHub Issues page](https://github.com/yourusername/all-trees-listing/issues).

---

## 📜 **License**

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping us grow the All Trees Listing Website! 🌳💚
