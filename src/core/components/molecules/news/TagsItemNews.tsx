import { Fragment } from 'react'

const TagsItemNews = ({ tag, symbols }: { tag: string; symbols?: string[] }) => {
  return (
    <Fragment>
      {symbols ? (
        symbols?.includes(tag?.toLowerCase()) && (
          <span key={tag} className='rounded-2xl bg-[#EBEBEB] p-1 px-1.5 text-xs font-bold text-[#0B0B0B]'>
            {tag?.toUpperCase()}
          </span>
        )
      ) : (
        <span key={tag} className='rounded-2xl bg-[#EBEBEB] p-1 px-1.5 text-xs font-bold text-[#0B0B0B]'>
          {tag?.toUpperCase()}
        </span>
      )}
    </Fragment>
  )
}

export default TagsItemNews
