var imageSize = require('image-size');
var path = require('path');
hexo.extend.filter.register('after_render:html', (source) => {
    return source.replace(/