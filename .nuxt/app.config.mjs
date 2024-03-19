
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
<<<<<<< HEAD
    "buildId": "dev"
=======
    "buildId": "7de2e346-3e4b-4d3d-841b-34cc9d99ff5f"
>>>>>>> fb71c679b8eb4ebee189463b1d576140e73b16e5
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /*@__PURE__*/ defuFn(inlineConfig)
