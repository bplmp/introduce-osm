var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  backdrop = require('bespoke-backdrop'),
  hash = require('bespoke-hash');

bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  bullets('ul:not(.no-bullets) li, ol:not(.no-bullets) li, .bullet'),
  scale(),
  backdrop(),
  hash()
]);

require('prism');
require('prism-clojure/prism.clojure.js');
