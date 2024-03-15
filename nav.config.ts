import { IConfig } from './src/types'

const c: IConfig = {
  // [Mondatory], Please replace following Github url with your own Github address which you forked in. 
  gitRepoUrl: 'https://github.com/unix9021/nav',

  // Deployment branch name
  branch: 'main',

  // If routing is hash mode. if it deployed into github pages or using Vercel, it has to be set to true
  hashMode: true,

  // is it displaying the Github icon on top right corner of the web page
  showGithub: false,

  // what is your website address. It is good for your SEO
  homeUrl: 'https://nav.51sec.org',

  // Web Site Tiltle
  title: 'unix9021 Navigation',

  // Web Site description
  description: 'Websties',

  // Web Site Keyword
  keywords: '',

  // Default Theme: Light | Sim | Side | App | Shortcut
  theme: 'Side',

  // The content at the bottom of the website, copyright information, record number, can be HTML
  footerContent: `
    <div><center><table><tbody>    <tr>
    <td><div style="font-weight: bold;">Total collected \${total} websites.  
    Copyright ©2024 <a href="https://www.51sec.org" target="_blank">51Sec</a>.  
    All Rights Reserved. </div></td>
    </tr></tbody></table></center></div>
</div>
<!-- End Ezoic - bottom_of_page 129 - bottom_of_page -->
  `,

  // Alibaba icon https://www.iconfont.cn/
  // IT will be used to show side theme's topic one level and second level menu icons Side 主题一级、二级菜单图标展示
  iconfontUrl: '//at.alicdn.com/t/font_2522843_wl70o31sy6.js',

  // Sim Theme Configuration
  simThemeConfig: {
    // Post Image
    posterImageUrls: [
      'https://cdn.jsdelivr.net/gh/51sec/nav@image/sim-wallpaper.jpg'
    ],
    description: 'Here collected total <b>${total}</b> websites, helping your work, living and studying'
  }
}

export default c
