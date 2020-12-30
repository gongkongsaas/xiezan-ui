# 使用vue-cli构建
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