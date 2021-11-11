import { ref, reactive, computed } from 'vue';

export interface DropProps {
  onDragover: (e: DragEvent) => void;
  onDragenter: (e: DragEvent) => void;
  onDragleave: (e: DragEvent) => void;
  onDrop: (e: DragEvent) => void;
  onPaste: (e: ClipboardEvent) => void;
}

export interface DropAreaOptions {
  onFiles?: (files: File[], event?: DragEvent) => void;
  onUri?: (url: string, event?: DragEvent) => void;
  onDom?: (content: any, event?: DragEvent) => void;
  onText?: (text: string, event?: ClipboardEvent) => void;
}

export const useDrop = (opts = {}) => {
  const isHovering = ref<boolean>(false);
  const options = reactive<DropAreaOptions>(opts);

  const callback = (dataTransfer: DataTransfer, e: DragEvent | ClipboardEvent) => {
    const uri = dataTransfer.getData('text/uri-list');
    const dom = dataTransfer.getData('custom');

    if (dom && options.onDom) {
      let data = dom;
      try {
        data = JSON.parse(dom);
      } catch (e) {
        data = dom;
      }
      options.onDom(data, e as DragEvent);
      return;
    }

    if (uri && options.onUri) {
      options.onUri(uri, e as DragEvent);
      return;
    }

    if (dataTransfer.files && dataTransfer.files.length && options.onFiles) {
      options.onFiles(Array.from(dataTransfer.files), e as DragEvent);
      return;
    }

    if (dataTransfer.items && dataTransfer.items.length && options.onText) {
      dataTransfer.items[0].getAsString((text) => {
        options?.onText?.(text, e as ClipboardEvent);
      });
    }
  };

  const events = computed<DropProps>(() => {
    return {
      onDragover(e: DragEvent) {
        e.preventDefault();
      },
      onDragenter(e: DragEvent) {
        e.preventDefault();
        isHovering.value = true;
      },
      onDragleave(e: DragEvent) {
        isHovering.value = false;
      },
      onDrop(e: DragEvent) {
        e.preventDefault();
        isHovering.value = false;
        callback(e.dataTransfer as DataTransfer, e);
      },
      onPaste(e: ClipboardEvent) {
        callback(e.clipboardData as DataTransfer, e);
      },
    };
  });

  return { events, isHovering };
};
