import { defineComponent } from 'vue'
import { ConfigProvider } from 'ant-design-vue'

export default defineComponent({
  setup() {
    const getPopupContainer = (triggerNode: HTMLElement, dialogContext: any) => {
      return dialogContext ? dialogContext.getDialogWrap() : document.body;
    }

    return () => <ConfigProvider>
      <router-view />
    </ConfigProvider>
  }
})
