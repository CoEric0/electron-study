/**
 * electron-vite 配置文件，指定主进程、预加载脚本和渲染进程的构建选项
 */
import { resolve } from 'node:path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
// import tsconfigPaths from 'vite-tsconfig-paths'; // 如果你使用了路径别名

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      outDir: 'out/main', // 这里指定主进程编译输出目录
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/main/index.ts'),
        },
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      outDir: 'out/preload', // 这里指定预加载脚本编译输出目录
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/preload/index.ts'),
        },
      },
    },
  },
  renderer: {
    // 如果你使用了 tsconfig paths alias, 需要安装 vite-tsconfig-paths
    // plugins: [tsconfigPaths()],
    root: resolve(__dirname, 'src/renderer'), // 指定渲染进程源码根目录
    build: {
      outDir: 'out/renderer', // 这里指定渲染进程编译输出目录
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/renderer/index.html'),
        },
      },
    },
  },
});