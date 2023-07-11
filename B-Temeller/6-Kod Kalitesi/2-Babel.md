## Babel

Babel, JavaScript kodunun eski tarayıcılar tarafından anlaşılabilir hale getirilmesini sağlayan bir JavaScript derleyicisidir.

Örneğin nullish coalescing operatorü (??) gibi yeni bir özellik, eski tarayıcılar tarafından anlaşılamaz. Bu durumda Babel, bu özelliği eski tarayıcılar tarafından anlaşılabilir hale getirir.

```js
// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;
```