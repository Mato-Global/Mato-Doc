import DefaultTheme from 'vitepress/theme'
import TeamPage from './components/TeamPage.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('TeamPage', TeamPage)
  }
}
