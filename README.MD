# Ionic Collapsible Comment Threads (Customised by Creative Little Dots)

Based on [nickplesha/ionic-threads](https://github.com/nickplesha/ionic-threads)

Threaded comments for Ionic and Angular. Used for collapsible nested comment threads with multiple levels of indendation for Wordpress, Reddit or various other social networks. Can also be used to display any other list of comments.

## Usage

Include `ionic.threads.js` and `ionic.threads.css` after the rest of your Ionic and Angular includes.

```html
<script src="lib/ionic-threads/js/ionic.threads.js"></script>
<link href="lib/ionic-threads/css/ionic.threads.css" rel="stylesheet">
```

Add `ionicThreads` as a module dependency of your app. Then use the following AngularJS directives:

```html
<ion-thread comments="entity.comments" reply-to-comment="replyToComment(comment)"></ion-thread>
```

## Full Usage

To customise the thread (comment container) template define a template url:

```html
<ion-thread comments="entity.comments" comment-template="views/comment.html" reply-to-comment="replyToComment(comment)"></ion-thread>
```

To customise the comment template, you can define a **comment-template** attribute on the directive

```html
<ion-thread comments="entity.comments" comment-template="views/comment.html" reply-to-comment="replyToComment(comment)"></ion-thread>
```

Included is the `scss/ionic.threads.scss` if you want to customise the styling. 

There are variables for colours, font sizes and thread indentation. 

Add `ionic.threads.scss` to your `scss` folder and include it in your `ionic.app.scss` file with:

```css
@import "www/lib/ionic-threads/scss/ionic.threads.scss";
```

## License

MIT
