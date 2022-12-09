# Swagger-autogen

npm install swagger-ui-express
<br>npm install swagger-autogen

# swagger-autogen을 이용해 스웨거와 라우터들을 연결하고 자동으로 api명세를 작성하도록 만들 수 있음.

가장 중요한 것은 app.js와 swagger.js

app.js에서

```
const swagger_file = require("./swagger/swagger-output.json");
const swaggerUi = require("swagger-ui-express");
```

이 부분을 상단에 추가한 뒤

```
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger_file));
```

이 부분을 수정/추가했음.

---

또한 swagger.js에서

```
const output_file = "./swagger/swagger-output.json";
const endpoints_file = ["./routers/index.js"];
```

부분과 하단에

```
swaggerAutogen(outputFile, endpointsFiles, doc);
```

를 추가해 swagger-autogen을 사용할 수 있게 처리.

이후 package.json에 'prestart'라는 스크립트를 넣어 'start'가 실행되기 전에 자동으로 실행되도록 만듦.

이 상태에서 파일을 실행하면

```
> gwonswagger@1.0.0 prestart
> node ./swagger/swagger.js

Swagger-autogen:  Success ✔

> gwonswagger@1.0.0 start
> node app.js

서버 켜짐!
```

를 볼 수 있고 routers안의 index.js를 보면

```
router.use(
  "/user",
  () => {
    /**
     * #swagger.tags = ['Users']
     */
  },
  user
);
```

이렇게 구성을 했는데 중간 화살표 함수는 swagger가 라우터를 읽을 때 태그 구성 등 여러가지 환경을 구성할 수 있음.

---
