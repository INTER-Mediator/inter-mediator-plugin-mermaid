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
  // https://github.com/mermaid-js/mermaid/blob/develop/docs/usage.md
  options: {
    startOnLoad: false
  },

  instantiate: function (parentNode) {
    'use strict'
    const classOfParent = parentNode.getAttribute('class')
    if (!classOfParent || classOfParent.length == 0 || classOfParent.indexOf('_im_widget_mermaid') < 0) {
      const sp = (classOfParent && classOfParent.length > 0) ? ' ' : ''
      parentNode.setAttribute('class', `${classOfParent}${sp}_im_widget_mermaid`)
      const node = document.createElement('DIV')
      const newId = parentNode.getAttribute('id') + '-mermaid'
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
        const target = node
        return function (str) {
          IMParts_Catalog.mermaid.values[theId] = str
        }
      })()
    }
  },

  ids: [],
  values: [],

  finish: function () {
    'use strict'
    mermaid.initialize(IMParts_Catalog.mermaid.options);
    for (const id in IMParts_Catalog.mermaid.values) {
      if (IMParts_Catalog.mermaid.values[id].length > 0) {
        const node = document.getElementById(id)
        const parent = node.parentNode
        mermaid.mermaidAPI.render(id, IMParts_Catalog.mermaid.values[id], function (svgCode, bindFunctions) {
          parent.innerHTML = svgCode
        });
      }
    }
  }
}
