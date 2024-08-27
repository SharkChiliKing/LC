# 背景设置

初步拟定方案，背景设置由原来在designerStore中的独立属性，移到elemConfigs中作为一个组件配置。-1为背景设置的特定id

# 本地背景图片预览

本地背景图片的生成，可以使用两种方式。

1. 将上传的图片转换为base64格式，然后将base64格式的图片作为背景图片。（性能很差）
2. 将上传的图片保存到indexedDB中，使用URL.createObjectURL()方法生成图片的URL，然后将图片的URL作为背景图片。（性能较好）

我使用mobx^6.7.0作为我react的状态管理工具。 我有2个组件A、B。他们使用同一个mobx的store。store中有两个属性F1，F2.
正常将，只要修改这个store中任何一个属性，A、B都会重新渲染。但现在我希望，修改属性F1时，A、B都会重新渲染，修改属性F2时，只有B会重新渲染。我该如何实现呢？

DesignerStarter
DesignerStore
HeaderStore
CompListStore
LeftMenusStore
RightStore
EventOperateStore
ContextMenuStore




