import type { AccordionItem } from '../../libs/types'

interface Props {
  accordionItem: AccordionItem
  isOpened: boolean
  handleClick: (id: string) => void
}

function SDependentAccordion({ accordionItem, isOpened, handleClick }: Props) {
  const openedClass = 'max-h-[1000px]'
  const closeClass = 'max-h-0 overflow-hidden'

  const { id, title, content } = accordionItem

  return (
    <div>
      <button className="block w-full" onClick={() => handleClick(id)}>
        {title}
      </button>
      <div className={isOpened ? openedClass : closeClass}>{content}</div>
    </div>
  )
}

export default SDependentAccordion
