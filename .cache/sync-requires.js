const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("C:\\Users\\Admin\\Desktop\\gatsby-demos-zechg\\mdx-blog\\src\\templates\\post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Admin\\Desktop\\gatsby-demos-zechg\\mdx-blog\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\Admin\\Desktop\\gatsby-demos-zechg\\mdx-blog\\src\\pages\\about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\Users\\Admin\\Desktop\\gatsby-demos-zechg\\mdx-blog\\src\\pages\\blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Admin\\Desktop\\gatsby-demos-zechg\\mdx-blog\\src\\pages\\index.js"))),
  "component---src-pages-photos-js": hot(preferDefault(require("C:\\Users\\Admin\\Desktop\\gatsby-demos-zechg\\mdx-blog\\src\\pages\\photos.js")))
}

