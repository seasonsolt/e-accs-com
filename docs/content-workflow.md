# Content Workflow

E-ACCS uses GitHub as the source of truth for public knowledge content.

## Add A Page

Create an MDX file under the right section:

```text
pages/ai-coding/my-new-note.mdx
```

Add frontmatter:

```mdx
---
title: My New Note
---

# My New Note
```

Then register it in that section's `_meta.js`:

```js
export default {
  index: '总览',
  'my-new-note': 'My New Note'
}
```

## Rename Or Reorder Pages

Edit the nearest `_meta.js`.

The object key is the file or directory name. The value is the label shown in navigation.

## Publish

Push to GitHub. Cloudflare Pages will build and publish the site automatically when the repository is connected.
