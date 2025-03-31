
export const withInstall =(comp) => {
  comp.install = (app) => {
    console.log('comp', comp);
    
    app.component(comp.name, comp)
  }
  return comp 
}