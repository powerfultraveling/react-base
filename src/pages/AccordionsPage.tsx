import { useState } from 'react'
import SDependentAccordion from '../components/Share/SDependentAccordion'

function AccordionPage() {
  const INITIAL_VALUE = null
  const [active, setActive] = useState<null | string>(INITIAL_VALUE)

  // TODO: fake data
  const items = [
    {
      id: '1',
      title: 'test',
      content: 'ds kj jkjdsk dslkj l djslk jkdjslk j'
    },
    {
      id: '2',
      title: 'test',
      content: 'ds kj jkjdsk dslkj l djslk jkdjslk j'
    },
    {
      id: '3',
      title: 'test',
      content: 'ds kj jkjdsk dslkj l djslk jkdjslk j'
    }
  ]

  function handleAccordionChange(id: string) {
    if (active === id) {
      return setActive(INITIAL_VALUE)
    }

    setActive(id)
  }

  const renderedElements = items.map((item) => {
    const isOpened = item.id === active
    const baseTitleClass = 'border border-black rounded-t p-2'

    const title = (
      <div className={isOpened ? `${baseTitleClass} border-b-0` : baseTitleClass}>{item.title}</div>
    )
    const content = <div className="border border-black rounded-b p-2">{item.content}</div>

    const accordionItem = { ...item, title, content }

    return (
      <SDependentAccordion
        accordionItem={accordionItem}
        handleClick={handleAccordionChange}
        isOpened={active === item.id}
        key={item.id}
      />
    )
  })

  return <div className="space-y-4">{renderedElements}</div>
}

export default AccordionPage
