import { cn } from '@/lib/utils/utils'
import { Popover, Switch, Transition } from '@headlessui/react'
import { SiReddit, SiYoutube } from '@icons-pack/react-simple-icons'
import { BadgePercent, CopyPlus, Globe, Pencil, SwatchBook } from 'lucide-react'
import { Fragment } from 'react'

export const Attach = () => {
  return (
    <button
      type='button'
      className='rounded-xl p-2 text-white/50 transition duration-200 hover:bg-[#1c1c1c] hover:text-white'
    >
      <CopyPlus />
    </button>
  )
}

const focusModes = [
  {
    key: 'webSearch',
    title: 'All',
    description: 'Searches across all of the internet',
    icon: <Globe size={20} />
  },
  {
    key: 'academicSearch',
    title: 'Academic',
    description: 'Search in published academic papers',
    icon: <SwatchBook size={20} />
  },
  {
    key: 'writingAssistant',
    title: 'Writing',
    description: 'Chat without searching the web',
    icon: <Pencil size={16} />
  },
  {
    key: 'wolframAlphaSearch',
    title: 'Wolfram Alpha',
    description: 'Computational knowledge engine',
    icon: <BadgePercent size={20} />
  },
  {
    key: 'youtubeSearch',
    title: 'Youtube',
    description: 'Search and watch videos',
    // onPointerEnterCapture={undefined}
    // onPointerLeaveCapture={undefined}
    icon: <SiYoutube className='mr-0.5 h-5 w-auto' onPointerOverCapture={undefined} onPointerMoveCapture={undefined} />
  },
  {
    key: 'redditSearch',
    title: 'Reddit',
    description: 'Search for discussions and opinions',
    // onPointerEnterCapture={undefined}
    // onPointerLeaveCapture={undefined}
    icon: <SiReddit className='mr-0.5 h-5 w-auto' onPointerOverCapture={undefined} onPointerMoveCapture={undefined} />
  }
]

export const Focus = ({ focusMode, setFocusMode }: { focusMode: string; setFocusMode: (mode: string) => void }) => {
  return (
    <Popover className='fixed w-full max-w-60 md:max-w-md lg:max-w-lg'>
      <Popover.Button
        type='button'
        className='rounded-xl p-2 text-white/50 transition duration-200 hover:bg-[#1c1c1c] hover:text-white active:scale-95'
      >
        {/* {focusMode !== 'webSearch' ? (
          <div className='flex flex-row items-center space-x-1'>
            {focusModes.find(mode => mode.key === focusMode)?.icon}
            <p className='text-xs font-medium'>{focusModes.find(mode => mode.key === focusMode)?.title}</p>
            <ChevronDown size={20} />
          </div>
        ) : (
          <ScanEye />
        )} */}
      </Popover.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-150'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <Popover.Panel className='absolute z-10 w-full'>
          <div className='grid max-h-[200px] w-full grid-cols-1 gap-1 overflow-y-auto rounded-lg border border-[#1c1c1c] bg-[#0A0A0A] p-2 md:max-h-none md:grid-cols-2 lg:grid-cols-3'>
            {focusModes.map((mode, i) => (
              <Popover.Button
                onClick={() => setFocusMode(mode.key)}
                key={i}
                className={cn(
                  'flex cursor-pointer flex-col items-start justify-start space-y-2 rounded-lg p-2 text-start transition duration-200',
                  focusMode === mode.key ? 'bg-[#111111]' : 'hover:bg-[#111111]'
                )}
              >
                <div
                  className={cn(
                    'flex flex-row items-center space-x-1',
                    focusMode === mode.key ? 'text-[#24A0ED]' : 'text-white'
                  )}
                >
                  {mode.icon}
                  <p className='text-sm font-medium'>{mode.title}</p>
                </div>
                <p className='text-xs text-white/70'>{mode.description}</p>
              </Popover.Button>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export const CopilotToggle = ({
  copilotEnabled,
  setCopilotEnabled
}: {
  copilotEnabled: boolean
  setCopilotEnabled: (enabled: boolean) => void
}) => {
  return (
    <div className='group flex cursor-pointer flex-row items-center space-x-1 transition duration-200 active:scale-95'>
      <Switch
        checked={copilotEnabled}
        onChange={setCopilotEnabled}
        className='relative inline-flex h-5 w-10 items-center rounded-full border border-[#1C1C1C] bg-[#111111] sm:h-6 sm:w-11'
      >
        <span className='sr-only'>Copilot</span>
        <span
          className={cn(
            copilotEnabled ? 'translate-x-6 bg-[#24A0ED]' : 'translate-x-1 bg-white/50',
            'inline-block size-3 rounded-full transition-all duration-200 sm:size-4'
          )}
        />
      </Switch>
      <p
        onClick={() => setCopilotEnabled(!copilotEnabled)}
        className={cn(
          'text-xs font-medium transition-colors duration-150 ease-in-out',
          copilotEnabled ? 'text-[#24A0ED]' : 'text-white/50 group-hover:text-white'
        )}
      >
        Copilot
      </p>
    </div>
  )
}
