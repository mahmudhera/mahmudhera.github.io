# Publishing this website with GitHub Pages

## Recommended repository name

Because the GitHub username is `mahmudhera`, use this exact repository name:

```text
mahmudhera.github.io
```

That creates the personal website URL:

```text
https://mahmudhera.github.io/
```

## Option A: Create and upload through the GitHub website

1. Sign in to GitHub.
2. Open the **New repository** page.
3. Set **Repository name** to `mahmudhera.github.io`.
4. Set the repository to **Public**.
5. Do not initialize it with a README, `.gitignore`, or license, because those files are already included here.
6. Create the repository.
7. On the empty repository page, choose **uploading an existing file**.
8. Upload all files and the `assets` directory from this folder. Do not upload the outer folder itself.
9. Commit the files to the `main` branch.
10. Open **Settings → Pages**.
11. Under **Build and deployment**, choose **Deploy from a branch**.
12. Select branch **main** and folder **/(root)**, then click **Save**.
13. Wait for deployment to finish (GitHub notes that publication can take up to 10 minutes), then open `https://mahmudhera.github.io/`.

## Option B: Create and publish from a terminal

After creating an empty public repository named `mahmudhera.github.io` on GitHub, open a terminal in this folder and run:

```bash
git init
git add .
git commit -m "Migrate personal website from Google Sites"
git branch -M main
git remote add origin git@github.com:mahmudhera/mahmudhera.github.io.git
git push -u origin main
```

Then open **Settings → Pages** in the repository and set:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**

## Updating the site later

Edit `index.html`, `styles.css`, or the files in `assets`, then run:

```bash
git add .
git commit -m "Update website"
git push
```

GitHub Pages will automatically redeploy the site.

## Optional custom domain

To use a custom domain later:

1. Open **Settings → Pages**.
2. Enter the domain under **Custom domain**.
3. Follow GitHub's displayed DNS instructions.
4. Enable **Enforce HTTPS** after the DNS configuration becomes active.
