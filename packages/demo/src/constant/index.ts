export const ANIMATE = {
  // 预设动画配置
  preset: [
    { name: 'back', alias: '渐近', directions: ['left', 'right', 'down', 'up'] },
    { name: 'bounce', alias: '弹跳', directions: ['left', 'right', 'down', 'up', 'default'] },
    {
      name: 'fade',
      alias: '淡化',
      directions: [
        'left',
        'right',
        'down',
        'up',
        'downBig',
        'upBig',
        'leftBig',
        'rightBig',
        'topLeft',
        'bottomRight',
        'topRight',
        'bottomLeft',
        'default'
      ]
    },
    { name: 'flip', alias: '翻转', directions: ['x', 'y'] },
    { name: 'lightSpeed', alias: '光速', directions: ['left', 'right'] },
    { name: 'rotate', alias: '旋转', directions: ['downLeft', 'upRight', 'downRight', 'upLeft', 'default'] },
    { name: 'roll', alias: '翻滚', directions: ['default'] },
    { name: 'zoom', alias: '缩放', directions: ['left', 'right', 'down', 'up', 'default'] },
    { name: 'slide', alias: '滑动', directions: ['left', 'right', 'down', 'up'] }
  ]
}
