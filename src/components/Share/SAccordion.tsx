import { useState } from 'react'

import type { ReactNode } from 'react'

interface Props {
  title: string | ReactNode
  content: string | ReactNode
}

function SAccordion({ title, content }: Props) {
  const [isOpened, setIsOpened] = useState(false)

  const openedClass = 'max-h-[1000px]'
  const closeClass = 'max-h-0 overflow-hidden'

  return (
    <div>
      <div onClick={() => setIsOpened(!isOpened)}>{title}</div>
      <div className={isOpened ? openedClass : closeClass}>{content}</div>
    </div>
  )
}

export default SAccordion
