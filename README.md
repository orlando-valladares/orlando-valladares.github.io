# Orlando Valladares — personal website

This repository contains the Hugo source for Orlando Valladares's bilingual personal website. The maintained site lives in `01_hugo-apero-main/hugo-apero-main/exampleSite/`; the adjacent `hugo-apero-main/` files provide the customized Apéro theme.

## Preview locally

From the repository root, run:

```bash
hugo server --source 01_hugo-apero-main/hugo-apero-main/exampleSite --themesDir ../../
```

Then open `http://127.0.0.1:1313/` in a browser. See `WEBSITE-WORKFLOW.md` for content editing and troubleshooting.

## Publish

Push the `main` branch, then choose **Settings → Pages → Source → GitHub Actions** on GitHub. The included workflow builds with Hugo Extended and deploys the generated static site.

## Privacy boundary

Research repositories and original working materials are intentionally excluded by `.gitignore`. Do not upload this folder through GitHub's browser drag-and-drop interface. Use Git from this repository so the ignore rules are enforced, and inspect `git status` before every commit.

