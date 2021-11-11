import * as vue from 'vue';
import { Ref, InjectionKey, ComponentInternalInstance, ComponentPublicInstance, VNodeNormalizedChildren, VNode } from 'vue';

declare const inBrowser: boolean;
declare const supportsPassive = true;
declare function raf(fn: FrameRequestCallback): number;
declare function cancelRaf(id: number): void;
declare function doubleRaf(fn: FrameRequestCallback): void;

declare function onMountedOrActivated(hook: () => any): void;

declare type UseClickAwayOptions = {
    eventName?: string;
};
declare function useClickAway(target: Element | Ref<Element | undefined>, listener: EventListener, options?: UseClickAwayOptions): void;

declare type TargetRef = EventTarget | Ref<EventTarget | undefined>;
declare type UseEventListenerOptions = {
    target?: TargetRef;
    capture?: boolean;
    passive?: boolean;
};
declare function useEventListener(type: string, listener: EventListener, options?: UseEventListenerOptions): void;

declare function usePageVisibility(): vue.Ref<VisibilityState>;

declare const useRect: (elementOrRef: Element | Window | Ref<Element | Window | undefined>) => DOMRect;

declare type ParentProvide<T> = T & {
    link(child: ComponentInternalInstance): void;
    unlink(child: ComponentInternalInstance): void;
    children: ComponentPublicInstance[];
    internalChildren: ComponentInternalInstance[];
};
declare function useParent<T>(key: InjectionKey<ParentProvide<T>>): {
    parent: ParentProvide<T>;
    index: vue.ComputedRef<number>;
} | {
    parent: null;
    index: vue.Ref<number>;
};

declare function flattenVNodes(children: VNodeNormalizedChildren): VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[];
declare function sortChildren(parent: ComponentInternalInstance, publicChildren: ComponentPublicInstance[], internalChildren: ComponentInternalInstance[]): void;
declare function useChildren<Child extends ComponentPublicInstance = ComponentPublicInstance<{}, any>, ProvideValue = never>(key: InjectionKey<ProvideValue>): {
    children: Child[];
    linkChildren: (value?: ProvideValue | undefined) => void;
};

declare type ScrollElement = HTMLElement | Window;
declare function getScrollParent(el: Element, root?: ScrollElement | undefined): Window | Element | undefined;
declare function useScrollParent(el: Ref<Element | undefined>, root?: ScrollElement | undefined): Ref<Window | Element | undefined>;

declare function useToggle(defaultValue?: boolean): readonly [vue.Ref<boolean>, (value?: boolean) => void];

declare function useWindowSize(): {
    width: Ref<number>;
    height: Ref<number>;
};

declare type getDragPropsFn = (data: any) => {
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
declare const useDrag: (config?: IConfig | undefined) => getDragPropsFn;

interface DropProps {
    onDragover: (e: DragEvent) => void;
    onDragenter: (e: DragEvent) => void;
    onDragleave: (e: DragEvent) => void;
    onDrop: (e: DragEvent) => void;
    onPaste: (e: ClipboardEvent) => void;
}
interface DropAreaOptions {
    onFiles?: (files: File[], event?: DragEvent) => void;
    onUri?: (url: string, event?: DragEvent) => void;
    onDom?: (content: any, event?: DragEvent) => void;
    onText?: (text: string, event?: ClipboardEvent) => void;
}
declare const useDrop: (opts?: {}) => {
    events: vue.ComputedRef<DropProps>;
    isHovering: vue.Ref<boolean>;
};

export { DropAreaOptions, DropProps, UseClickAwayOptions, UseEventListenerOptions, cancelRaf, doubleRaf, flattenVNodes, getScrollParent, inBrowser, onMountedOrActivated, raf, sortChildren, supportsPassive, useChildren, useClickAway, useDrag, useDrop, useEventListener, usePageVisibility, useParent, useRect, useScrollParent, useToggle, useWindowSize };
