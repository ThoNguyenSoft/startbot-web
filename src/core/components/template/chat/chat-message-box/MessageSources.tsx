/* eslint-disable @next/next/no-img-element */
import { Source } from '@/types/apps/chatTypes'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const MessageSources = ({ sources }: { sources: Source[] }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const closeModal = () => {
    setIsDialogOpen(false)
    document.body.classList.remove('overflow-hidden-scrollable')
  }

  const openModal = () => {
    setIsDialogOpen(true)
    document.body.classList.add('overflow-hidden-scrollable')
  }

  return (
    <div className='grid grid-cols-2 gap-2 lg:grid-cols-4'>
      {sources.slice(0, 3).map((source, i) => (
        <a
          className='flex flex-col space-y-2 rounded-lg bg-bgElevated p-3 font-medium transition duration-200 hover:bg-bgElevated'
          key={i}
          href={source.metadata.url}
          target='_blank'
        >
          <p className='truncate text-sm font-bold text-textDefault'>{source.metadata.title}</p>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center space-x-1'>
              <img
                src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${source.metadata.url}`}
                width={24}
                height={24}
                alt='favicon'
                className='size-6 rounded-full'
              />
              <p className='text-textDefault/50 truncate text-xs'>
                {source.metadata.url.replace(/.+\/\/|www.|\..+/g, '')}
              </p>
            </div>
            <div className='text-textDefault/50 flex flex-row items-center space-x-1 text-xs'>
              <div className='size-[4px] rounded-full bg-white/50' />
              <span>{i + 1}</span>
            </div>
          </div>
        </a>
      ))}
      {sources.length > 3 && (
        <button
          onClick={openModal}
          className='flex flex-col justify-between space-y-2 rounded-lg bg-bgElevated px-4 py-2 transition duration-200 hover:bg-bgElevated'
        >
          <div className='flex flex-row items-center space-x-1'>
            {sources.slice(3, 6).map((source, i) => (
              <img
                src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${source.metadata.url}`}
                width={24}
                height={24}
                alt='favicon'
                className='size-6 rounded-full'
                key={i}
              />
            ))}
          </div>
          {/* <p className='text-textDefault/50 text-xs'>See more {sources.length - 3}</p> */}
          <p className='text-textDefault/50 text-xs'>See more</p>
        </button>
      )}
      <Transition appear show={isDialogOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={closeModal}>
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-200'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-100'
                leaveFrom='opacity-100 scale-200'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md rounded-2xl border border-divider bg-background p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title className='text-lg font-medium leading-6 text-textDefault'>
                    Information source
                  </Dialog.Title>
                  <div className='mt-2 grid max-h-[300px] grid-cols-2 gap-2 overflow-auto pr-2'>
                    {sources.map((source, i) => (
                      <a
                        className='flex flex-col space-y-2 rounded-lg border border-divider bg-bgElevated p-3 font-medium transition duration-200 hover:bg-bgElevated'
                        key={i}
                        href={source.metadata.url}
                        target='_blank'
                      >
                        <p className='truncate text-xs text-textDefault'>{source.metadata.title}</p>
                        <div className='flex flex-row items-center justify-between'>
                          <div className='flex flex-row items-center space-x-1'>
                            <img
                              src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${source.metadata.url}`}
                              width={16}
                              height={16}
                              alt='favicon'
                              className='size-4 rounded-lg'
                            />
                            <p className='text-textDefault/50 truncate text-xs'>
                              {source.metadata.url.replace(/.+\/\/|www.|\..+/g, '')}
                            </p>
                          </div>
                          <div className='text-textDefault/50 flex flex-row items-center space-x-1 text-xs'>
                            <div className='size-[4px] rounded-full bg-white/50' />
                            <span>{i + 1}</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default MessageSources
