export const ADMIN_PAGE = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_UR as string,
  SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY as string
}
export const APP_CONFIG = {
  // config Oauth
  status: {
    public: 1,
    private: 2
  },

  Mode_API: { Nor: 'Normal', Pro: 'Premium', Bu: 'Business' },
  Featured: {
    Event_TIME_LINE: {
      Form_Config: {
        Max_Width: { Base: '460px', Title: '800px' }
      },
      Card_Config: {
        Layout: {
          height: '100%',
          width: '100%',
          maxHeight: '100vh',
          maxWidth: '800px',
          p: 1,
          paddingTop: 3,
          paddingRight: 1
        }
      }
    },
    Size: {
      Border_Radius: '8px',
      Font_Text: '16px',
      Font_Text_MARKDOWN: '15px',
      LOADING: { PADDING_LEFT: '30px' },
      DRAWER: {
        Width: { BASE: '460px' }
      }
    },
    Color: {
      // ${theme.palette.primary.main}
    }
  },
  //config react query
  reactQuery: {
    defaultOption: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false
      }
    }
  },

  image: {
    MIN_FILE_SIZE: 1, //1byte
    MAX_FILE_SIZE: 1024 * 1024 * 5,
    Width_Base: 265
  },
  token_chat: {
    // MIN_FILE_SIZE: 1, //1byte
    MAX_TOKEN_SIZE: 1024 * 4
  },
  video: {
    MIN_FILE_SIZE: 1024, //1kb
    MAX_FILE_SIZE: 1024 * 1024 * 5
  }
}

export const arrNavs = [
  {
    name: '',
    // icon: <WifiIcon size={20} />,
    icon: '',

    link: '/#'
  }
]
export const arrNavs2 = [
  {
    name: '',
    // icon: <WifiIcon fill='#737373' size={20} />,
    // iconActive: <WifiIcon fill='#EBEBEB' size={20} />,
    icon: '',
    iconActive: '',
    disabled: false,
    link: '/#'
  },
  {
    name: '',
    // icon: <CommentIcon fill='#737373' size={20} />,
    // iconActive: <CommentIcon fill='#EBEBEB' size={20} />,
    icon: '',
    iconActive: '',
    link: '/#',
    disabled: true
  }
]
export const arrNavs3 = [
  {
    name: '',
    // icon: <NewspapersIcon fill='#737373' size={20} />,
    // iconActive: <NewspapersIcon fill='#EBEBEB' size={20} />,
    icon: '',
    iconActive: '',
    disabled: true,
    link: '/#'
  },
  {
    name: '',
    // icon: <TrendIconV2 fill='#737373' size={20} />,
    // iconActive: <TrendIconV2 fill='#EBEBEB' size={20} />,
    disabled: true,
    link: '/#'
  }
]
export const views = {
  news: 'news',
  social: 'social'
}
export const soColorOpt: { [key: string]: { value: string; label: string; color: string } } = {
  newsTopic: {
    value: 'newsTopic',

    label: 'News',

    color: '#1ED760'
  },
  forumTopic: {
    value: 'forumTopic',

    label: 'Forum',

    color: '#FFE450'
  },
  fbGroupTopic: {
    value: 'fbGroupTopic',

    label: 'Facebook',

    color: '#1A4CFF'
  }
}

export const packOpt: { [key: string]: { title: string; value: string } } = {
  free: {
    title: 'Starter',

    value: 'free'
  },

  starter: {
    title: 'Starter',

    value: 'starter'
  },

  premium: {
    title: 'Premium',

    value: 'premium'
  }
}

export const typePackOpt = {
  month: { value: 'month', starter: '250', premium: '300' },
  year: { value: 'year', starter: '3000000', premium: '6000000' }
}

export const getNameSoChart = (key: string) => {
  if (!key) return ''
  return soColorOpt[key]?.label
}
export const getColorSoChart = (key: string) => {
  if (!key) return ''
  return soColorOpt[key]?.color
}
