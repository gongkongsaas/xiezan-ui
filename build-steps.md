# 使用vue-cli创建项目
+ 构建的preset文件
  ```json
  {
    "useTaobaoRegistry": true,
    "latestVersion": "4.5.9",
    "lastChecked": 1606206257106,
    "packageManager": "yarn",
    "presets": {
      "preset": {
        "useConfigFiles": true,
        "plugins": {}
      },
      "assistech-vue": {
        "useConfigFiles": true,
        "plugins": {
          "@vue/cli-plugin-babel": {},
          "@vue/cli-plugin-typescript": {
            "classComponent": false,
            "useTsWithBabel": true
          },
          "@vue/cli-plugin-eslint": {
            "config": "prettier",
            "lintOn": [
              "save",
              "commit"
            ]
          }
        },
        "vueVersion": "3"
      }
    }
  }
  ```

# CSS编译

**采用less**

```
yarn add less -D
```

**添加的脚本命令**

```
"build-css": "lessc ./src/styles/index.less ./dist/index.css"
```

# vue中的tsx编译

**添加配置文件 tsconfig.build.json**

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "module": "esnext",
    "target": "esnext",
    "declaration": true,
    "jsx": "react",
    "jsxFactory": "h",
    "moduleResolution":"Node",
    "allowSyntheticDefaultImports": true,
  },
  "include": [
    "src"
  ],
  "exclude": [
    "src/**/*.test.tsx",
    "src/**/*.stories.tsx"
  ]
}
```

# 构建命令

```json
"scripts": {
    "build-ts": "tsc -p tsconfig.build.json",
    "build-css": "lessc ./src/styles/index.less ./dist/index.css",
    "clean": "rimraf ./dist",
    "build:lib": "yarn clean && yarn build-ts && yarn build-css",
    "prepublishOnly": "yarn lint && yarn build-ts"
}
```

# 发布

```
yarn publish
```



