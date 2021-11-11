type getDragPropsFn = (data: any) => {
  draggable: 'true';
  key?: string;
  onDragstart: (e: DragEvent) => void;
  onDragend: (e: DragEvent) => void;
};

interface IConfig {
  onDragstart?: (data: any, e: DragEvent) => void;
  onDragend?: (data: any, e: DragEvent) => void;
  getPropsWithKey?: boolean;
}

export const useDrag = (config?: IConfig): getDragPropsFn => {
  const getProps = (data: any) => {
    return {
      draggable: 'true' as const,
      key: config && config.getPropsWithKey === false ? undefined : JSON.stringify(data),
      onDragstart(e: DragEvent) {
        config?.onDragstart?.(data, e);
        e.dataTransfer?.setData('custom', JSON.stringify(data));
      },
      onDragend(e: DragEvent) {
        config?.onDragend?.(data, e);
      },
    };
  };

  return getProps;
};
