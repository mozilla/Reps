Reps OKR Dashboard
====

This tool captures the Reps' programs OKRs. This is copied from the [okr-dashboard](https://github.com/mozilla-rpweb/okr-dashboard) by mozilla-rpweb.

Important Note
---

Please do only edit files in the ```src``` folder, otherwise you are directly changing the built files. We had to move the built files in the root of this folder due to how gh-pages work.

Adding OKRs
---

All OKRs are living in the ```okrs.json``` file.

Start the webserver
---

```
$ npm install
$ npm start
```

Build for ghpages
----

This website is hosted on GitHub Pages. Therefore we need to build the source so it can be displayed. To do so, run the following command.

```
$ npm run build
```
