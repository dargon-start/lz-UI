import {App} from 'vue'
import lzButton from './components/button'

const elmPlusComponents = [
  lzButton
]

export const installer = (app: App) => {
  elmPlusComponents.forEach((comp) => app.use(comp))
}