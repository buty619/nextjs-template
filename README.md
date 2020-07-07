![inhouse_logo](/public/images/inHouse.png)

# 🏠 inHouse Dev

## Templeate to create Nextjs react app with

- Next Js
- TypeScript
- Type Check (`npm run typeCheck`)
- Global Types definition
- Sass support
- classnames
- set global css
- set global utils css
- use of getStaticProps
- fetch to api
- husky for git flow
- prettier

---

### Instalation

```
git clone https://github.com/buty619/nextjs-template.git my-new-project
cd my-new-project
npm install
```

### Develop

```
npm run dev
```

---

### Aditional INFO

1. to make type check use `npm run typeCheck`
2. to make prettier check use `npm run prettier`
3. to male prettier fix use `npm run prettier:fix`
4. to see state handle, use of classnames and manage of routs please go to /posts/first-post

---

## Important Next js Docs

**Two Forms of Pre-rendering**

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

**When to Use Static Generation v.s. Server-side Rendering**

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

**Lets Rock**
