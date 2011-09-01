var constants = require('sanitize_constants');
exports.Config = {
  elements: [
     'a', 'b', 'blockquote', 'br', 'cite', 'code', 'dd', 'dl', 'dt', 'em',
     'i', 'li', 'ol', 'p', 'pre', 'q', 'small', 'strike', 'strong', 'sub',
     'sup', 'u', 'ul'],

   attributes: {
     'a'         : ['href'],
     'blockquote': ['cite'],
     'q'         : ['cite']
   },

   add_attributes: {
     'a': {'rel': 'nofollow'}
   },

   protocols: {
     'a'         : {'href': ['ftp', 'http', 'https', 'mailto',
                                 constants.RELATIVE]},
     'blockquote': {'cite': ['http', 'https', constants.RELATIVE]},
     'q'         : {'cite': ['http', 'https', constants.RELATIVE]}
   }
}
