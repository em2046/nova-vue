# Select 选择器

下拉选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](/radio/) 是更好的选择。

## 代码演示

### 基本

基本使用。

<demo-select-basic/>

<<< @/docs/.vuepress/components/demo/select/basic.vue

### 多选

多选，从已有条目中选择。

<demo-select-multiple/>

<<< @/docs/.vuepress/components/demo/select/multiple.vue

### 分组

用 `OptGroup` 进行选项分组。

<demo-select-opt-group/>

<<< @/docs/.vuepress/components/demo/select/opt-group.vue

### 联动

省市联动是典型的例子。

<demo-select-coordinate/>

<<< @/docs/.vuepress/components/demo/select/coordinate.vue

## API

### Select props

| 参数            | 说明                      | 类型                                                              | 默认值 |
| --------------- | ------------------------- | ----------------------------------------------------------------- | ------ |
| appendToBody    | 是否渲染到 body 上        | boolean                                                           | true   |
| disabled        | 是否禁用                  | boolean                                                           | false  |
| multiple        | 设置 Select 的模式为多选  | boolean                                                           | false  |
| placeholder     | 选择框默认文字            | string                                                            | -      |
| dropdownClass    | 下拉菜单的 className 属性 | string                                                            | -      |
| value / v-model | 指定当前选中的条目        | string \| number \| boolean \|<br>(string \| number \| boolean)[] | -      |

### Select Slots

| 参数 | 说明                       |
| ---- | -------------------------- |
| -    | Option / OptGroup 组件列表 |

### Select Events

| 事件名称 | 说明                                    | 类型             |
| -------- | --------------------------------------- | ---------------- |
| change   | 选中 option 时，调用此函数              | function\(value) |
| update   | 不使用 v-model 时，调用此函数更新 value | function\(value) |

### Select Methods

| 方法名称 | 说明     | 参数 |
| -------- | -------- | ---- |
| focus\() | 获取焦点 | -    |
| blur\()  | 移除焦点 | -    |

### OptGroup props

| 参数  | 说明 | 类型   | 默认值 |
| ----- | ---- | ------ | ------ |
| label | 组名 | string | -      |

### OptGroup Slots

| 参数  | 说明                  |
| ----- | --------------------- |
| -     | Option 组件列表       |
| label | 设置后覆盖 label 属性 |

### Option props

| 参数     | 说明                              | 类型                        | 默认值 |
| -------- | --------------------------------- | --------------------------- | ------ |
| disabled | 是否禁用                          | boolean                     | false  |
| label    | 选中该 Option 后，Select 的 title | string                      | -      |
| value    | 默认根据此属性值进行筛选          | string \| number \| boolean | -      |

### Option Slots

| 参数 | 说明                  |
| ---- | --------------------- |
| -    | 设置后覆盖 label 属性 |
