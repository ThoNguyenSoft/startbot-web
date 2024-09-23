import { MemoizedReactMarkdown } from '@/core/components/atom/markdown'
import { checkSubstring, cn } from '@/lib/utils/utils'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { CodeBlock } from './codeblock'

// ** Types Imports

type Props = {
  content: string
  className?: string
  handleClickStrong?: (children: string[]) => void
  strongText?: string
}
// type Props = { content: string; className?: string }

const MarkDown = ({ content, className, handleClickStrong }: Props) => {
  // const MarkDown = ({ content, className }: Props) => {
  // const inputRef = useRef<HTMLInputElement>(null)
  // const [strongText, setstrongText] = useState('hello')
  // const handleClickStrong = (children: string[]) => {
  //   if (!children) return
  //   setstrongText(children[0])
  //   const valInput = { query: children[0] }
  //   console.log('Clicked text:', valInput)
  //   // mPost(valInput)
  // }

  return (
    <MemoizedReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      components={{
        h1({ children }) {
          return <h1 className={cn('text-2xl font-bold', className)}>{children}</h1>
        },
        h2({ children }) {
          return <h2 className={cn('text-xl font-bold', className)}>{children}</h2>
        },
        h3({ children }) {
          // return <h3 className={cn('text-textDefault text-lg font-bold', className)}>{children}</h3>
          return <h3 className={cn('text-lg font-bold', className)}>{children}</h3>
        },
        h4({ children }) {
          return <h4 className={cn('text-base font-bold', className)}>{children}</h4>
        },
        h5({ children }) {
          return <h5 className={cn('text-sm font-bold', className)}>{children}</h5>
        },
        h6({ children }) {
          return <h6 className={cn('text-xs font-bold', className)}>{children}</h6>
        },
        ul({ children }) {
          return <ul className={cn('ml-6 list-disc', className)}>{children}</ul>
        },
        ol({ children }) {
          // return <ol className={cn('ml-6 list-decimal', className)}>{children}</ol>
          return <ol className={cn('ml-6 list-none', className)}>{children}</ol>
        },
        li({ children }) {
          return <li className={cn('mb-2 pl-2', className)}>{children}</li>
        },
        blockquote({ children }) {
          return <blockquote className={cn('border-l-4 border-primary pl-4', className)}>{children}</blockquote>
        },

        p({ children }) {
          // return <p className={cn('mb-6 mt-[16px] leading-relaxed last:mb-0', className)}>{children}</p>
          return <p className='mb-6 mt-[16px] pt-2 leading-relaxed'>{children}</p>
        },
        strong({ children }) {
          return (
            <strong
              // ref={inputRef}
              onClick={() => handleClickStrong && handleClickStrong(children as string[])}
              // className='cursor-pointer text-primary-text hover:underline'
              className='cursor-pointer text-[#d7f77d]'
            >
              {children}
            </strong>
          )
        },
        code({ node, inline, className, children, ...props }) {
          if (children?.length) {
            if (children[0] == '▍') {
              return <span className='mt-1 animate-pulse cursor-default'>▍</span>
            }

            children[0] = (children[0] as string).replace('`▍`', '▍')
          }

          const match = /language-(\w+)/.exec(className || '')

          if (inline) {
            return (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }

          return (
            <CodeBlock
              key={Math.random()}
              language={(match && match[1]) || ''}
              value={String(children).replace(/\n$/, '')}
              {...props}
            />
          )
        }
      }}
    >
      {checkSubstring(content)}
    </MemoizedReactMarkdown>
  )
}

export default MarkDown
