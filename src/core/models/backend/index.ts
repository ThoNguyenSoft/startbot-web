import { AssistantModel } from './assistants'
import { AuthModel } from './auth/auth'
import { NewsModel } from './events/news'
import { BusinessProfileModel } from './profile/business-profile'
import { ProfileModel } from './profile/profile'
import { SoNetModel } from './social-network/so-net'
import { SoNetWlModel } from './social-network/so-net-wl'
import { UserModel } from './users'
import { WatchlistModel } from './watchlist/watchlist'

/* Creating a new instance model and Service. */
const apiFactory = {
  assistant: new AssistantModel(),
  auth: new AuthModel(),
  businessProfile: new BusinessProfileModel(),
  soNet: new SoNetModel(),
  soNetWl: new SoNetWlModel(),

  news: new NewsModel(),
  profile: new ProfileModel(),
  user: new UserModel(),
  watchlist: new WatchlistModel()
}

export default apiFactory
