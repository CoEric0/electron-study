# 结合 React 和 Electron
1. 依然在 render 这同一文件夹下
2. 在入口 HTML 中拆分为两个脚本，就此完成解耦
    1. electron 的脚本负责后端功能；（同步服务，文件服务……）
    2. react 脚本则负责界面引入。（Root， Render）