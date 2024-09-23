/* eslint-disable @next/next/no-img-element */
import { Message } from '@/types/apps/chatTypes'
import { ImagesIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

type Image = {
  url: string
  img_src: string
  title: string
}

const SearchImages = ({ query, chat_history }: { query: string; chat_history: Message[] }) => {
  const [images, setImages] = useState<Image[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [slides, setSlides] = useState<any[]>([])

  return (
    <>
      {!loading && images === null && (
        <button
          onClick={async () => {
            setLoading(true)

            const chatModelProvider = localStorage.getItem('chatModelProvider')
            const chatModel = localStorage.getItem('chatModel')

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/images`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                chat_history: chat_history,
                chat_model_provider: chatModelProvider,
                chat_model: chatModel
              })
            })

            const data = await res.json()

            const images = data.images
            setImages(images)
            setSlides(
              images.map((image: Image) => {
                return {
                  src: image.img_src
                }
              })
            )
            setLoading(false)
          }}
          className='flex w-full flex-row items-center justify-between rounded-lg border border-dashed border-[#1C1C1C] px-4 py-2 text-sm text-white transition duration-200 hover:bg-[#1c1c1c] active:scale-95'
        >
          <div className='flex flex-row items-center space-x-2'>
            <ImagesIcon size={17} />
            <p>Search images</p>
          </div>
          <PlusIcon className='text-[#24A0ED]' size={17} />
        </button>
      )}
      {loading && (
        <div className='grid grid-cols-2 gap-2'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='aspect-video h-32 w-full animate-pulse rounded-lg bg-[#1C1C1C] object-cover' />
          ))}
        </div>
      )}
      {images !== null && images.length > 0 && (
        <>
          <div className='grid grid-cols-2 gap-2'>
            {images.length > 4
              ? images.slice(0, 3).map((image, i) => (
                  <img
                    onClick={() => {
                      setOpen(true)
                      setSlides([slides[i], ...slides.slice(0, i), ...slides.slice(i + 1)])
                    }}
                    key={i}
                    src={image.img_src}
                    alt={image.title}
                    className='aspect-video size-full cursor-zoom-in rounded-lg object-cover transition duration-200 hover:scale-[1.02] active:scale-95'
                  />
                ))
              : images.map((image, i) => (
                  <img
                    onClick={() => {
                      setOpen(true)
                      setSlides([slides[i], ...slides.slice(0, i), ...slides.slice(i + 1)])
                    }}
                    key={i}
                    src={image.img_src}
                    alt={image.title}
                    className='aspect-video size-full cursor-zoom-in rounded-lg object-cover transition duration-200 hover:scale-[1.02] active:scale-95'
                  />
                ))}
            {images.length > 4 && (
              <button
                onClick={() => setOpen(true)}
                className='flex h-auto w-full flex-col justify-between rounded-lg bg-[#111111] p-2 text-white transition duration-200 hover:scale-[1.02] hover:bg-[#1c1c1c] active:scale-95'
              >
                <div className='flex flex-row items-center space-x-1'>
                  {images.slice(3, 6).map((image, i) => (
                    <img
                      key={i}
                      src={image.img_src}
                      alt={image.title}
                      className='aspect-video h-6 w-12 rounded-md object-cover lg:h-3 lg:w-6 lg:rounded-sm'
                    />
                  ))}
                </div>
                <p className='text-xs text-white/70'>View {images.length - 3} more</p>
              </button>
            )}
          </div>
          <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
        </>
      )}
    </>
  )
}

export default SearchImages
