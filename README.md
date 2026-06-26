# Human Evolutionary and Statistical Genetics Lab

A static GitHub Pages website for the Human Evolutionary and Statistical Genetics Lab.
The site presents the lab's research directions, team, publications, software, news, and
opportunities.

The site is organized as a small multi-page lab website:

- `index.html`: home
- `research.html`: research areas
- `team.html`: people and mentoring
- `publications.html`: selected publications
- `software.html`: methods and tools
- `news.html`: lab updates
- `opportunities.html`: openings and contact
- `postdoctoral-fellow.html`: postdoctoral fellow position description
- `students.html`: graduate and undergraduate student opportunities

The site is built from:

- IU-inspired crimson visual styling
- Custom lab logo and generated visual assets
- Static HTML, CSS, and JavaScript

## Local Preview

```bash
python3 -m http.server 8765
```

Then visit `http://127.0.0.1:8765`.

## Deploy With GitHub Pages

1. Push this repository to GitHub.
2. Open `Settings` -> `Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main`. The workflow in `.github/workflows/pages.yml` publishes the site.

## Content To Customize

- Add real lab member profiles as the group forms.
- Keep the main information architecture as Research, Team, Publications, Software, News, and Opportunities.
- Add public profile links, including Google Scholar, PubMed, ORCID, GitHub, or lab software repositories.
- Add new News items with a valid `datetime`; the page sorts newer items first.

Hero and background images were generated for this project. Site built with Codex; logo designed with ChatGPT.
