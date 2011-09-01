var constants = require('./sanitize_constants');
exports.Config = {
  elements: [
    'a', 'b', 'blockquote', 'br', 'caption', 'cite', 'code', 'col',
    'colgroup', 'dd', 'dl', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'i', 'img', 'li', 'ol', 'p', 'pre', 'q', 'small', 'strike', 'strong',
    'sub', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'u',
    'ul'],

  attributes: {
    'a'         : ['href', 'title'],
    'blockquote': ['cite'],
    'col'       : ['span', 'width'],
    'colgroup'  : ['span', 'width'],
    'img'       : ['align', 'alt', 'height', 'src', 'title', 'width'],
    'ol'        : ['start', 'type'],
    'q'         : ['cite'],
    'table'     : ['summary', 'width'],
    'td'        : ['abbr', 'axis', 'colspan', 'rowspan', 'width'],
    'th'        : ['abbr', 'axis', 'colspan', 'rowspan', 'scope',
                     'width'],
    'ul'        : ['type']
  },

  protocols: {
    'a'         : {'href': ['ftp', 'http', 'https', 'mailto',
                                constants.RELATIVE]},
    'blockquote': {'cite': ['http', 'https', constants.RELATIVE]},
    'img'       : {'src' : ['http', 'https', constants.RELATIVE]},
    'q'         : {'cite': ['http', 'https', constants.RELATIVE]}
  }
}
