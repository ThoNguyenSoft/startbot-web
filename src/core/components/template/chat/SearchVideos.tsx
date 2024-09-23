/* eslint-disable @next/next/no-img-element */
import { Message } from '@/types/apps/chatTypes'
import { PlayCircle, PlusIcon, VideoIcon } from 'lucide-react'
import { useState } from 'react'
import Lightbox, { GenericSlide, VideoSlide } from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

type Video = {
  url: string
  img_src: string
  title: string
  iframe_src: string
}

declare module 'yet-another-react-lightbox' {
  export interface VideoSlide extends GenericSlide {
    type: 'video-slide'
    src: string
    iframe_src: string
  }

  interface SlideTypes {
    'video-slide': VideoSlide
  }
}

const Searchvideos = ({ query, chat_history }: { query: string; chat_history: Message[] }) => {
  const [videos, setVideos] = useState<Video[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [slides, setSlides] = useState<VideoSlide[]>([])

  return (
    <>
      {!loading && videos === null && (
        <button
          onClick={async () => {
            setLoading(true)

            const chatModelProvider = localStorage.getItem('chatModelProvider')
            const chatModel = localStorage.getItem('chatModel')

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos`, {
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

            const videos = data.videos
            setVideos(videos)
            setSlides(
              videos.map((video: Video) => {
                return {
                  type: 'video-slide',
                  iframe_src: video.iframe_src,
                  src: video.img_src
                }
              })
            )
            setLoading(false)
          }}
          className='flex w-full flex-row items-center justify-between rounded-lg border border-dashed border-[#1C1C1C] px-4 py-2 text-sm text-white transition duration-200 hover:bg-[#1c1c1c] active:scale-95'
        >
          <div className='flex flex-row items-center space-x-2'>
            <VideoIcon size={17} />
            <p>Search videos</p>
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
      {videos !== null && videos.length > 0 && (
        <>
          <div className='grid grid-cols-2 gap-2'>
            {videos.length > 4
              ? videos.slice(0, 3).map((video, i) => (
                  <div
                    onClick={() => {
                      setOpen(true)
                      setSlides([slides[i], ...slides.slice(0, i), ...slides.slice(i + 1)])
                    }}
                    className='relative cursor-pointer transition duration-200 hover:scale-[1.02] active:scale-95'
                    key={i}
                  >
                    <img
                      src={video.img_src}
                      alt={video.title}
                      className='relative aspect-video size-full rounded-lg object-cover'
                    />
                    <div className='bg-black/70 absolute bottom-1 right-1 flex flex-row items-center space-x-1 rounded-md px-2 py-1 text-white/70'>
                      <PlayCircle size={15} />
                      <p className='text-xs'>Video</p>
                    </div>
                  </div>
                ))
              : videos.map((video, i) => (
                  <div
                    onClick={() => {
                      setOpen(true)
                      setSlides([slides[i], ...slides.slice(0, i), ...slides.slice(i + 1)])
                    }}
                    className='relative cursor-pointer transition duration-200 hover:scale-[1.02] active:scale-95'
                    key={i}
                  >
                    <img
                      src={video.img_src}
                      alt={video.title}
                      className='relative aspect-video size-full rounded-lg object-cover'
                    />
                    <div className='bg-black/70 absolute bottom-1 right-1 flex flex-row items-center space-x-1 rounded-md px-2 py-1 text-white/70'>
                      <PlayCircle size={15} />
                      <p className='text-xs'>Video</p>
                    </div>
                  </div>
                ))}
            {videos.length > 4 && (
              <button
                onClick={() => setOpen(true)}
                className='flex h-auto w-full flex-col justify-between rounded-lg bg-[#111111] p-2 text-white transition duration-200 hover:scale-[1.02] hover:bg-[#1c1c1c] active:scale-95'
              >
                <div className='flex flex-row items-center space-x-1'>
                  {videos.slice(3, 6).map((video, i) => (
                    <img
                      key={i}
                      src={video.img_src}
                      alt={video.title}
                      className='aspect-video h-6 w-12 rounded-md object-cover lg:h-3 lg:w-6 lg:rounded-sm'
                    />
                  ))}
                </div>
                {/* <p className='text-xs text-white/70'>See more {videos.length - 3} </p> */}
                <p className='text-xs text-white/70'>See more</p>
              </button>
            )}
          </div>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            render={{
              slide: ({ slide }) =>
                slide.type === 'video-slide' ? (
                  <div className='flex size-full flex-row items-center justify-center'>
                    <iframe
                      src={slide.iframe_src}
                      className='aspect-video max-h-[95vh] w-[95vw] rounded-2xl md:w-[80vw]'
                      allowFullScreen
                      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    />
                  </div>
                ) : null
            }}
          />
        </>
      )}
    </>
  )
}

export default Searchvideos
