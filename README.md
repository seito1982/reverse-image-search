# Next.js Blog

**Demo Website** : [modokemdev.com/nextjs-blog](https://modokemdev.com/nextjs-blog/)

This repository was built following the [Learn Next.js](https://nextjs.org/learn) tutorial. It is a [Next.js](https://nextjs.org/) blog app deployed to [GitHub Pages](https://pages.github.com/) using [gh-pages](https://www.npmjs.com/package/gh-pages). We are rendering the data at build time, including the `md` files for each post.  

You can find in [Releases](https://github.com/marcoandre1/nextjs-blog/releases) a starter template configured to deploy directly to GitHub Pages.

> To run this project locally, clone the project and run `npm run dev`.  
> To deploy, update `next.config.js` file and from `git bash` run `npm run export` followed by `npm run deploy`.


# Deploy instruction
Google search engin can access the domain-owned server to perform the reverse-image-search
In the development and test progress, Google search robot can't access to your own public directory, '127.0.0.1/upload'
So for the test, the uploaded assets is not applied for google image search 
Instead, this asset 'https://infernaco.com/demo/img/cover/06.jpg' is used for development and test.

For the deployment to your remote server, we must replace the IS_TEST_ON_LOCAL = false in the constant/index.js.
This makes google search to apply the uploaded your own assets
