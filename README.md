node-live-color
=
Example for Stack Overflow answer:

* [Getting data from/writing data to localhost with Express](https://stackoverflow.com/questions/43499382/getting-data-from-writing-data-to-localhost-with-express/43500104#43500104)

Installation
-
Clone the git repo:
```sh
git clone https://github.com/rsp/node-live-color.git
```
or download the ZIP file:

* https://github.com/rsp/node-live-color/archive/master.zip

Inside the project directory install dependencies:
```sh
npm i
```

Running
-
Start the server:
```sh
npm start
```
And access the URL shown in the browser. By default it's:

* http://localhost:3338/

but you can start the server listening on a differet port:
```sh
PORT=4444 npm start
```

Changing color
-
Send color=HTMLCOLOR in the body
with Content-Type: `application/x-www-form-urlencoded`
to POST `/color` endpoint.

```sh
curl -X POST -d 'color=#2ecc71' localhost:3338/color

curl -X POST -d 'color=#639' localhost:3338/color

curl -X POST -d 'color=black' localhost:3338/color
```

Issues
-
For any bug reports or feature requests please
[post an issue on GitHub][issues-url].

Author
-
[**Rafał Pocztarski**](https://pocztarski.com/)
<br/>
[![Follow on GitHub][github-follow-img]][github-follow-url]
[![Follow on Twitter][twitter-follow-img]][twitter-follow-url]
<br/>
[![Follow on Stack Exchange][stackexchange-img]][stackoverflow-url]

License
-
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

[github-url]: https://github.com/rsp/node-live-color
[readme-url]: https://github.com/rsp/node-live-color#readme
[issues-url]: https://github.com/rsp/node-live-color/issues
[license-url]: https://github.com/rsp/node-live-color/blob/master/LICENSE.md
[license-img]: https://img.shields.io/github/license/rsp/node-live-color.svg
[travis-url]: https://travis-ci.org/rsp/node-live-color
[travis-img]: https://travis-ci.org/rsp/node-live-color.svg?branch=master
[snyk-url]: https://snyk.io/test/github/rsp/node-live-color
[snyk-img]: https://snyk.io/test/github/rsp/node-live-color/badge.svg
[david-url]: https://david-dm.org/rsp/node-live-color
[david-img]: https://david-dm.org/rsp/node-live-color/status.svg
[github-follow-url]: https://github.com/rsp
[github-follow-img]: https://img.shields.io/github/followers/rsp.svg?style=social&label=Follow
[twitter-follow-url]: https://twitter.com/intent/follow?screen_name=pocztarski
[twitter-follow-img]: https://img.shields.io/twitter/follow/pocztarski.svg?style=social&label=Follow
[stackoverflow-url]: https://stackoverflow.com/users/613198/rsp
[stackexchange-url]: https://stackexchange.com/users/303952/rsp
[stackexchange-img]: https://stackexchange.com/users/flair/303952.png
