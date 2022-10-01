/*
 * INTER-Mediator
 * Copyright (c) INTER-Mediator Directive Committee (http://inter-mediator.org)
 * This project started at the end of 2009 by Masayuki Nii msyk@msyk.net.
 *
 * INTER-Mediator is supplied under MIT License.
 * Please see the full license for details:
 * https://github.com/INTER-Mediator/INTER-Mediator/blob/master/dist-docs/License.txt
 */
IMParts_Catalog.mermaid = {
  instanciate: function (parentNode) {
    'use strict'
    const classOfParent = parentNode.getAttribute('class')
    if (classOfParent.indexOf('_im_widget_mermaid') < 0) {
      const sp = classOfParent.length == 0 ? '' : ' '
      parentNode.setAttribute('class', `${classOfParent}${sp}_im_widget_mermaid`)
      const node = document.createElement('DIV')
      node.setAttribute('data-im-control', 'enclosure')
      node.setAttribute('class', '_im_widget_mermaid_canvas')
      const newId = parentNode.getAttribute('id') + '-popupsel'
      node.setAttribute('id', newId)
      parentNode.appendChild(node)
      IMParts_Catalog.mermaid.ids.push(newId)

      parentNode._im_getComponentId = (function () {
        const theId = newId
        return function () {
          return theId
        }
      })()

      parentNode._im_setValue = (function () {
        const theId = newId
        return function (str) {
          mermaidAPI.initialize({
            startOnLoad: true,
          });
          $(function () {
            mermaidAPI.render(theId, str, function (svgGraph) {
              console.log(svgGraph);
            });
          });
        }
      })()
    }
  },

  ids: [],

  finish: function () {
    'use strict'
  }
}
