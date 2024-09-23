import { FC, memo } from 'react'
import ReactMarkdown, { Options } from 'react-markdown'

/**
 * MemoizedReactMarkdown is a memoized version of the ReactMarkdown component.
 * It takes in the following props:
 * - children: The content to be rendered as markdown.
 * - className: The CSS class name to be applied to the rendered markdown.
 */
export const MemoizedReactMarkdown: FC<Options> = memo(
  ReactMarkdown,
  (prevProps, nextProps) => prevProps.children === nextProps.children && prevProps.className === nextProps.className
)
