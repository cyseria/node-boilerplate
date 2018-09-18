```
├── app
│   ├── graphql
│   │   ├── common // 公有的类型定义， 目前就定义了 Date 类型
│   │   │   ├── scalars
│   │   │   │     └── date.js
│   │   │   └── resolver.js
│   │   │   └── schema.graphql
│   │   ├──query //  query 类型，入口定义
│   │   │   ├── schema.graphql
│   │   └── user  // 一个名为 User 的 graphql 模型
│   │       ├── connector.js  
│   │       ├── resolver.js
│   │       └── schema.graphql 
│   ├── model
│   │   └── user.js
│   └── router.js 
```