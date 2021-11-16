import { defineComponent } from 'vue'
import { UserOutlined, SettingOutlined, PoweroffOutlined } from '@ant-design/icons-vue'
import { Dropdown, Avatar, Menu } from 'ant-design-vue'

const { Item: MenuItem, Divider: MenuDivider } = Menu

import './index.less'

export default defineComponent({
  setup() {
    const user = {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
      name: 'Lutz'
    }

    return () => <Dropdown
      class="header-avatar"
      v-slots={{
        default: () => <div class="header-avatar__avatar">
          <Avatar size="small" shape="circle" src={user.avatar} />
          <span class="header-avatar__avatar--name">{user.name}</span>
        </div>,

        overlay: () => <Menu class="header-avatar__menu">
          <MenuItem>
            <UserOutlined />
            <span>个人中心</span>
          </MenuItem>
          <MenuItem>
            <SettingOutlined />
            <span>设置</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <PoweroffOutlined />
            <span>退出登录</span>
          </MenuItem>
        </Menu>
      }}
    />
  }
})
