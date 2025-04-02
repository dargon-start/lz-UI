import LzButton  from './button'

const components = [LzButton]

const install = (app: any) => {
  components.forEach((component: any) => {
    app.component(component.name, component)
  })
}

export {
  LzButton,
}

export default {
  install,
}