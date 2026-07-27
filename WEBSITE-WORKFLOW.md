# Orlando Valladares website workflow

This is the operating guide for the personal Hugo site in `01_hugo-apero-main/hugo-apero-main/exampleSite/`. The site uses the local Apéro template one level above it and is designed for GitHub Pages.

## The two files you edit for the research stories

You do not need a second content system. These two Markdown files already are the website source of truth:

- **Economics — Hurricane Mitch:** `01_hugo-apero-main/hugo-apero-main/exampleSite/content/project/mitch/index.md`
- **Anthropology — Upper Valley housing:** `01_hugo-apero-main/hugo-apero-main/exampleSite/content/project/upper-valley/index.md`

This is the minimal workflow because Hugo reads those files directly. Creating separate “easy-edit” copies would make the site and the drafts drift apart. The `.es.md` file beside each one is the Spanish version.

The public repository deliberately excludes the original research repositories. The two website Markdown files are therefore the maintained web-story source of truth; the linked paper PDFs remain available under `exampleSite/static/documents/papers/`. Keep any original LaTeX, data, interviews, and full-resolution working material in private research storage rather than adding it to this public website repository.

In either master file:

1. Edit `question`, `title`, `subtitle`, and `abstract` between the opening `---` lines.
2. Edit story prose inside `<p>...</p>` and headings inside `<h2>...</h2>` below the front matter.
3. Edit a figure description inside `caption="..."`. Keep the surrounding `{{< story-image ... >}}` punctuation unchanged.
4. Keep class names such as `story-chapter--results` unchanged unless you also intend to alter the design.
5. Preview locally, switch through EN / ES, and then make the corresponding translation edits.

### Self-editing checklist

- [ ] **Economics / Mitch:** Did I edit `content/project/mitch/index.md`?
- [ ] **Anthropology / Upper Valley:** Did I edit `content/project/upper-valley/index.md`?
- [ ] Did I preserve the two `---` front-matter boundaries?
- [ ] Did I keep every image path under `static/img/projects/` and use the matching path after `src="img/projects/..."`?
- [ ] Did I update `index.es.md` if the public Spanish translation should change too?
- [ ] Did I preview both languages before publishing?

## Put the site online with GitHub Pages

Use a repository named `YOUR-USERNAME.github.io` if you want the shortest permanent address for LinkedIn and email: `https://YOUR-USERNAME.github.io/`. A differently named repository produces `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

1. Create the repository on GitHub. If you want the shortest permanent address, name it `YOUR-USERNAME.github.io`; otherwise the repository name becomes part of the URL.
2. In a terminal, make `04_sitioweb/` the Git repository root and use `git add .`. Do **not** drag the whole local folder into GitHub's browser uploader: Git must apply the included `.gitignore`, which excludes private research material and generated builds.
3. Before committing, run `git status --short` and confirm that neither `02_scrollsites/` nor `03_elements/` appears. Then commit and push the root `.github/workflows/pages.yml` file with the rest of the tracked source to `main`.
4. In GitHub, open **Settings → Pages**, set **Source** to **GitHub Actions**, then push any commit to `main`.
5. Open the **Actions** tab. When “Deploy Hugo site to GitHub Pages” succeeds, GitHub displays the permanent URL. Copy that address into LinkedIn and emails.

The included workflow installs Hugo Extended, builds the site with GitHub’s own Pages URL, and publishes `exampleSite/public/` as a deployment artifact. The generated `public/` directory is ignored locally and is not committed. GitHub’s Pages workflow requires the Pages permissions and an uploaded build artifact; the included workflow supplies both. See the [official GitHub Pages workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).


## Where to make changes

- Site configuration and reversible colour switches: `01_hugo-apero-main/hugo-apero-main/exampleSite/config.toml`
- Header links and the language selector: `01_hugo-apero-main/hugo-apero-main/layouts/partials/header.html`
- About page: `01_hugo-apero-main/hugo-apero-main/exampleSite/content/_index.md`
- Blogs: `01_hugo-apero-main/hugo-apero-main/exampleSite/content/blog/`
- Projects: `01_hugo-apero-main/hugo-apero-main/exampleSite/content/project/`
- Website images: `01_hugo-apero-main/hugo-apero-main/exampleSite/static/img/`
- Look and behavior: `01_hugo-apero-main/hugo-apero-main/assets/custom.scss` and `exampleSite/static/js/scroll-story.js`

The template's source assets are in the parent `hugo-apero-main/` directory. The darker terracotta version of Apéro's Peach palette is in `assets/theme/peach.scss`.

## Reversible colour treatments

`exampleSite/config.toml` contains two small switches:

```toml
[params.design]
homeVariant = "brick"
projectVariant = "nocturne"
```

- Set `homeVariant = "light"` to return the About page to the standard light Peach treatment.
- Set `projectVariant = "light"` to return individual project stories to the light treatment. The Projects listing and Blog always remain light.

The warm dark project treatment is intentionally brown-black with terracotta and cream accents, rather than neutral black and gray; this keeps the reading mode visibly tied to the rest of the site.


## Languages

The header has a persistent EN / ES selector. It takes the reader to the corresponding version of the current page, and every header link then remains in that language. The About page and both current project stories are published in English and Spanish.

For each future post or project, create two sibling files with the same slug:

```text
my-post.md       # English
my-post.es.md    # Spanish
```

If the Spanish translation does not exist, the selector safely falls back to the Spanish home page rather than showing a mixed-language page.

## Add a blog post

Each blog post is intentionally a two-pane reading experience. The site does **not** label the panes. The convention is left: more economic/analytic writing; right: more anthropological/interpretive writing.

Create `content/blog/a-short-slug.md`, then start from this exact front matter. `draft: false` is necessary because the Blog section defaults new child pages to draft status until you deliberately publish them.

```md
---
title: "Your title"
subtitle: "Optional one-line subtitle"
date: 2026-07-22
draft: false
left: |
  ## A left-hand opening

  Your more economic or analytic writing goes here. Markdown works normally:
  paragraphs, links, lists, and headings.

right: |
  ## A right-hand opening

  Your more anthropological or interpretive writing goes here.
---
```

Use a normal Markdown file for the post. Keep the front-matter indentation exactly as shown: the `|` tells Hugo that each pane can hold several paragraphs.

If a post does not need two panes, omit `left` and `right` and place ordinary Markdown below the front matter. The template will then render a conventional single-column post.

## Add a project story

Projects are scroll-led web essays, not PDFs embedded in a page. Create a folder and an `index.md`, for example:

```text
content/project/my-project/index.md
static/img/projects/my-project/figure-one.png
static/img/projects/my-project/figure-two.jpg
```

Use this front matter:

```md
---
title: "Project title"
subtitle: "A precise subtitle"
description: "One-sentence description for the project opening."
excerpt: "The short sentence that appears on the Projects page."
layout: scroll-story
draft: false
---
```

Then build the story from repeated sections. The first column is the argument and the second is a sticky visual while the reader scrolls.

```md
<div class="story-section">
  <div class="story-copy">
    <p class="story-kicker">A short chapter label</p>
    <h2>A clear claim or question</h2>
    <p>Write the section in plain prose.</p>
    <aside class="story-note">Optional caveat, method note, or takeaway.</aside>
  </div>
  <div class="story-visual">
    {{< story-image src="img/projects/my-project/figure-one.png" alt="Describe the visual for screen readers" caption="Short source note and interpretation." >}}
  </div>
</div>
```

Prefer 4–7 sections with one visual each: a hook, context, evidence, method, finding, and limitation/next step is a dependable sequence. Write captions that say what a figure is and name its data source. Put only web-sized copies in `static/img/projects/`; preserve the original research files where they already live.

Before publishing an ethnographic project, review names, quotes, locations, health, immigration, work, and family details, as well as faces, homes, vehicles, numbers, documents, and addresses in every image. The Upper Valley story is intentionally conservative: it omits individual quotations and uses the presentation's note that non-author photographs had permission.

## Preview locally

Hugo Extended is installed in this workspace. From the `04_sitioweb/` repository root, run:

```bash
hugo server --source 01_hugo-apero-main/hugo-apero-main/exampleSite --themesDir ../../ --buildDrafts
```

Open the local address Hugo prints. Omit `--buildDrafts` when checking the same pages visitors will see. Build the production output with:

```bash
hugo --source 01_hugo-apero-main/hugo-apero-main/exampleSite --themesDir ../../ --minify
```

The generated `public/` folder is disposable build output; do not hand-edit it.

## Common problems

- **Images or CSS are missing on GitHub Pages:** the `baseURL` is usually wrong, especially for a project site. Keep story image paths relative, as in `img/projects/...`, rather than hard-coding a leading `/`.
- **Sass build fails:** install or configure Hugo Extended, not the regular binary.
- **Hugo cannot find the theme:** run the commands from `hugo-apero-main/` and retain `--themesDir ../../`; this site uses the local template instead of downloading a theme at build time.
- **A new post is absent:** set `draft: false` in its front matter; new child pages remain drafts until you deliberately publish them.
- **Unexpected demo content appears:** only the site’s active About, Blog, Projects, and two research-story content files should be present. Keep new work under those same content sections.
- **A source photo or figure should not be public:** remove its copied web asset and its story shortcode. Never alter the original project file to fix the site.
- **A visual is too large:** resize a web copy to a reasonable dimension, retain the source original in private research storage, and use descriptive alt text and a caption.
