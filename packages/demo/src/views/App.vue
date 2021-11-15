<template>
  <Layout style="min-height: 100vh">
    <Sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <MenuItem key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </MenuItem>
        <MenuItem key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </MenuItem>
        <SubMenu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <MenuItem key="3">Tom</MenuItem>
          <MenuItem key="4">Bill</MenuItem>
          <MenuItem key="5">Alex</MenuItem>
        </SubMenu>
        <SubMenu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <MenuItem key="6">Team 1</MenuItem>
          <MenuItem key="8">Team 2</MenuItem>
        </SubMenu>
        <MenuItem key="9">
          <file-outlined />
          <span>File</span>
        </MenuItem>
      </Menu>
    </Sider>

    <Layout>
      <Header style="background: #fff; padding: 0" />
      <Content style="margin: 0 16px">
        <Breadcrumb style="margin: 16px 0">
          <BreadcrumbItem>User</BreadcrumbItem>
          <BreadcrumbItem>Bill</BreadcrumbItem>
        </Breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">Bill is a cat.</div>
      </Content>
      <Footer style="text-align: center">Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Layout, Breadcrumb, Menu } from 'ant-design-vue'
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue'

const { Sider, Footer, Header, Content } = Layout
const { Item: BreadcrumbItem } = Breadcrumb
const { Item: MenuItem, SubMenu } = Menu

export default defineComponent({
  components: {
    Layout,
    Sider,
    Header,
    Content,
    Footer,
    Menu,
    MenuItem,
    SubMenu,
    Breadcrumb,
    BreadcrumbItem,

    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined
  },
  data() {
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(['1'])
    }
  }
})
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
