import { defineComponent, ref } from 'vue'
import { NotificationOutlined } from '@ant-design/icons-vue'
import { Dropdown, Spin, Tabs, List, Avatar, Badge } from 'ant-design-vue'

const { TabPane } = Tabs
const { Item: ListItem } = List
const { Meta: ListItemMeta } = ListItem

import "./index.less"

type NoticeList = {
  title: string;
  description: string;
  avatar: string;
}

export default defineComponent({
  setup() {
    /* $data */
    const loading = ref<boolean>(false)
    const show = ref<boolean>(false)
    const data = ref<NoticeList[]>([
      {
        title: '你收到了 14 份新周报',
        description: '一年前',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png'
      },
      {
        title: '你推荐的 曲妮妮 已通过第三轮面试',
        description: '一年前',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png'
      },
      {
        title: '这种模板可以区分多种通知类型',
        description: '一年前',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png'
      }
    ])
    /* $methods */
    const fetchNotice = () => {
      if (loading.value) {
        loading.value = false;
        return;
      }
    }
    /* render */
    return () => <Dropdown
      class="header-notice"
      trigger={['click']}
      v-model={[show.value, "visible"]}
      v-slots={{
        default: () => <span class="header-notice__badge" onClick={fetchNotice}>
          <Badge class="notice-badge" count="12">
            <NotificationOutlined style={{ fontSize: '16px', padding: '4px' }} />
          </Badge>
        </span>,
        overlay: () => <Spin spinning={loading.value}>
          <Tabs
            class="header-notice__dropdown-tabs"
            tabBarStyle={{ textAlign: 'center' }}
            style={{ width: '297px' }}
          >
            <TabPane tab="通知" key="1">
              <List
                class="header-notice__tab-pane"
                itemLayout="horizontal"
                dataSource={data.value}
                v-slots={{
                  renderItem: ({ item }: any) => <ListItem>
                    <ListItemMeta
                      title={item.title}
                      description={item.description}
                      v-slots={{
                        avatar: () => <Avatar src={item.avatar} />
                      }}
                    />
                  </ListItem>
                }}
              />
            </TabPane>
            <TabPane tab="消息" key="2">
              <List class="header-notice__tab-pane" />
            </TabPane>
            <TabPane tab="待办" key="3">
              <List class="header-notice__tab-pane" />
            </TabPane>
          </Tabs>
        </Spin>
      }}
    />
  }
})
