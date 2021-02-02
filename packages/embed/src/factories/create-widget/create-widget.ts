import { createIframe } from '../../utils'

import { WidgetOptions } from './widget-options'

export type Widget = {
  refresh: () => void
}

export const createWidget = (formUrl: string, options: WidgetOptions): Widget => {
  const iframe = createIframe(formUrl, 'widget', options)

  const widget = document.createElement('div')
  widget.className = 'typeform-widget'
  widget.append(iframe)

  const container = options.container || document.body
  container.append(widget)

  return {
    refresh: () => iframe.contentWindow?.location.reload(),
  }
}
