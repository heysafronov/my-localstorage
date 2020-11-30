# Easy Using localStorage with JavaScript

You can use with React, Angular, Vue, etc. Playground [here](https://codesandbox.io/s/my-localstorage-drzxj).

> Supports working with objects.

## Installation
```
npm i my-localstorage
```

## Declare in JS
```js
import { ls } from 'my-localstorage'
```

## [Guide](https://www.npmjs.com/package/my-localstorage)

### Set item
```js
ls.setItem(key, value)
```
```js
ls.setItem('000', 'hello')
```

### Get item
```js
ls.getItem(key)
```
```js
ls.getItem('000')
// 'hello'
```

### Set object
```js
ls.setObject(key, value)
```
```js
ls.setObject('111', {first_name: 'Kurt', last_name: 'Cobain'})
```


### Get object
```js
ls.getObject(key)
```
```js
ls.getObject('111')
// {first_name: 'Kurt', last_name: 'Cobain'}
```

### Edit object (add a new key to an object)
```js
ls.editObject(key, value)
```
```js
ls.editObject('111', {middle_name: 'Donald'})
// ls.getObject('111') -> {first_name: 'Kurt', last_name: 'Cobain', middle_name: 'Donald'}
```

### Edit object (edit key value)
```js
ls.editObject(key, value)
```
```js
ls.editObject('111', {middle_name: 'Mike'})
// ls.getObject('111') -> {first_name: 'Kurt', last_name: 'Cobain', middle_name: 'Mike'}
```

### Remove item
```js
ls.removeItem(key)
```
```js
ls.removeItem('000')
```

### Clear all
```js
ls.clear()
```
