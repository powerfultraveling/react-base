import type { ReactNode } from 'react'

export interface Image {
  id: string
  url: string
}

export interface Book {
  id: string
  title: string
}

export interface AccordionItem {
  id: string
  title: string | ReactNode
  content: string | ReactNode
}
