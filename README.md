# web_experiment
experiment for HTML, CSS, JavaScript and other frameworks

# contents

|title|contents|
|:----|:-------|
|browserback.js|script to ditect browserback|

# description

## browserback.js

#### `isVisited`
store  `history.length` it to cookie as `p_length`
when called again compare current `history.length` to previous one
if current one is same to previous one, this means the page has already been visited 
(cuz history.length was not change) and this indicate that user tried browser back.
**this fail when usr backed only once and then viewd another page without using back button!**

#### `isLink`
more easier way. simply ditect `link` class in html and store `isLink` flag to cookie only if they are clicked.
the point of this function is to `removeCookie` when `isLink` flag is ditected.
without this, the script will fail.
