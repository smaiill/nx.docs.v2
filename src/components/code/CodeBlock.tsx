import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Copy } from '../icons/Copy'
import { Typography } from '../typography/Typography'

export interface ICodeBlock {
  title?: string
}

const CodeBlock = (props: PropsWithChildren<ICodeBlock>) => {
  const { children, title } = props
  const [copySucces, setCopySucces] = useState(false)
  const [activeTimeout, setActiveTimeout] = useState<NodeJS.Timeout | null>(
    null,
  )

  useEffect(() => {
    if (copySucces) {
      activeTimeout && clearTimeout(activeTimeout)
      setActiveTimeout(null)
      const _timeout = setTimeout(() => {
        setCopySucces(false)
        setActiveTimeout(_timeout)
      }, 2000)
    }

    return () => {
      activeTimeout && clearTimeout(activeTimeout)
    }
  }, [copySucces])

  return (
    <div className="codeblock">
      {title && (
        <header className="codeblock__header">
          <Typography variant="span">{title}</Typography>
        </header>
      )}

      <div className="codeblock__body">
        <button
          onClick={() => setCopySucces(true)}
          className={`copy__code ${copySucces ? '--active' : ''}`}
        >
          <Copy _color="#555356" />
        </button>
        <pre>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  )
}

export { CodeBlock }