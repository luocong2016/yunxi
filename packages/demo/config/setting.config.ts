export default {
  /* 语言设置 */
  lang: 'CN',

  /* 布局设置 */
  layout: 'side', // 导航布局，可选 side 和 head，分别为侧边导航和顶部导航
  pageWidth: 'fixed', // 内容区域宽度，fixed:固定宽度，fluid:流式宽度
  fixedHeader: false, // 是否固定头部状态栏
  fixedSideBar: true, // 是否固定侧边栏
  fixedTabs: false, // 是否固定页签头
  weekMode: false, // 是否色弱模式
  multiPage: false, // 是否开启多页签模式
  cachePage: true, // 是否缓存页面数据，仅多页签模式下生效
  hideSetting: false, // 是否隐藏设置抽屉

  /* 路由设置 */
  asyncRoutes: false, // 是否开启异步路由
  filterMenu: true, // 是否开启权限过滤菜单

  /* 项目设置 */
  systemName: 'Vue3 Antd Admin', // 系统名称
  copyright: '2021 lutz', // 版权
  showPageTitle: false, // 是否显示页面标题

  /* 动画设置 */
  animate: {
    disabled: false, // 是否禁用动画
    name: 'bounce', // 动画效果
    direction: 'left' // 动画方向
  },

  /* footer 链接 */
  footerLinks: [{ link: 'https://ant.design', name: 'Ant Design' }]
}
