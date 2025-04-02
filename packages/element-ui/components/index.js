import LzButton from './button'
import Title from './title'

const components = [LzButton, Title]

const  install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component) 
  })
}

export {
  LzButton,
  Title
}

export default {
  install,
}