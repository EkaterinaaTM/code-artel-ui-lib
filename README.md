# code-artel-ui-lib

>

[![NPM](https://img.shields.io/npm/v/code-artel-ui-lib.svg)](https://www.npmjs.com/package/code-artel-ui-lib)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save code-artel-ui-lib
```

## Usage

```tsx
import * as React from "react";

import MyComponent from "code-artel-ui-lib";

class Example extends React.Component {
  render() {
    return <MyComponent />;
  }
}
```

## Команды

* build - сборка билда библиотеки
* prepare
* predeploy
* deploy
* storybook - запуск сторибук для разработки
* build-storybook - собрать статику сторибука
* test:snapshot - запуск тестирования 
* test:snapshot:update - обновить снепшоты изображения компонентов

## Тестирование

В проекте подключено автоматезированное тестирование скриншотами всех компонентов историй,
для запуска теста запустите команду `yarn test:snapshot` для обновления скриншотов `yarn test:snapshot:update`.

Если кодовая база была изменена необходимо пересобрать билд истории командой `yarn build-storybook` т.к. для тестирования используется не сами компоненты, 
а статический билд storybook.

Скриншоты хранятся в дирректории `src/__image_snapshots__`.

Файл теста лежит в дирректории `src/imageSnapshots.test.js`.
