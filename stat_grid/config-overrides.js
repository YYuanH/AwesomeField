const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import',{
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { 
          '@primary-color': 'rgba(164, 174, 255, 0.85)', // 全局主色
          '@link-color': '#1890ff', // 链接色
          '@success-color': '#52c41a', // 成功色
          '@warning-color': '#faad14', // 警告色
          '@error-color': '#f5222d', // 错误色
          '@font-size-base': '14px', // 主字号
          '@heading-color': 'rgba(245, 245, 245, 0.85)', // 标题色
          '@text-color': 'rgba(245, 245, 245, 0.85)', // 主文本色
          '@text-color-secondary' : 'rgba(225, 225, 225, 0.75)', // 次文本色
          '@disabled-color' : 'rgba(215, 215, 215, 0.35)', // 失效色
          '@border-radius-base': '4px', // 组件/浮层圆角
          '@border-color-base': '#d9d9d9', // 边框色
          '@box-shadow-base': '0 2px 8px rgba(245, 245, 245, 0.35)', // 浮层阴影
        }, // modify color of themes
      }),
);