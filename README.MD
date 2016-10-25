# Ionic Collapsible Comment Threads (Customised by Surgeons)

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
<ion-thread template="my/custom/template.html" comments="comments"></ion-thread>
```

## Customizing

To customise the thread (comment container) template define a template url:

```html
<ion-thread template="my/custom/template.html" comments="comments"></ion-thread>
```

To custom the comment template, you can define a **comment_template** in the $scope.

```js
scope.comment_template = "my/custom/template.html";
```

Or you can update the path in your custom thread and comment templates

```html
<ion-comment template="my/custom/template.html" comment="comment"></ion-comment>
```

Included is the `scss/ionic.threads.scss` if you want to customise the styling. 

There are variables for colours, font sizes and thread indentation. 

Add `ionic.threads.scss` to your `scss` folder and include it in your `ionic.app.scss` file with:

```javascript
@import "www/lib/ionic-threads/scss/ionic.threads.scss";
```

## License

MIT