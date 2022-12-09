# swagger-autogen! 이 브랜치에서는 ReadMe2.md를 참고해주세요!

12월 6일

- Schema 추가 설명 필요



## [참고 : 노드 스웨거](https://any-ting.tistory.com/105)

## [참고 : 협업을 위한 스웨거](https://overcome-the-limits.tistory.com/101)

## Swagger란 무엇인가?

Swagger는 Open API Specification(OAS)를 위한 프레임워크입니다. 간단한 설정으로 프로젝트에서 지정한 URL들을 HTML 화면으로 확인할 수 있게 해주는 프로젝트입니다. Swagger를 활용해서 API 명세를 작성한다면, 보다 쉽게 API 명세를 작성할 수 있습니다.

## Swagger를 사용하지 않으면?

1. API 명세서가 전혀 존재하지 않아서, 코드를 전부 확인하는 과정에서 개발 시간이 너무 오래 걸립니다.
2. 클라이언트 개발자는 서버 개발자에게 API가 어떻게 동작하는지 물어보면서 개발해야 합니다.
3. 개발할 때는 시간이 적게 걸릴 수 있지만, 유지 보수를 할 때, 시간이 상당히 오래 걸립니다.

`npm i swagger-jsdoc swagger-ui-express`

- swagger-jsdoc : jsdoc주석으로 Swagger API 문서를 표현하기 위해 사용
- swagger-ui-express: swagger-ui와 express를 연결하기 위해 사용

```
const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0", //스웨거의 버전
    info: { // 스웨거 문서의 정보
      version: "1.0.0",
      title: "권영 스웨거 연습장",
      description: "Practice Swagger!",
    },
    servers: [
      {
        url: "http://localhost:3000", // 요청 URL
      },
    ],
  },
  apis: ["./routers/*.js"], //Swagger 파일 연동
};
const specs = swaggereJsdoc(options);

module.exports = { swaggerUi, specs };
```

swagger.js

---

위의 코드에서 apis가 가장 중요한데 Swagger와 express를 연결시켜주는 부분이기 때문!

```
const { swaggerUi, specs } = require("./swagger/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
```

app.js

---

위의 부분을 이용해 Swagger에서 제공하는 UI로 문서를 유지보수 할 수 있음.

```
/**
 * @swagger
 * /api/user/{user_id}:
 *  get:
 *    summary: "특정 유저조회 Path 방식"
 *    description: "요청 경로에 값을 담아 서버에 보낸다."
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: user_id
 *        required: true
 *        description: 유저 아이디
 *        schema:
 *          type: string
 *    responses:
 *      "200":
 *        description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다. (유저 조회)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ok:
 *                  type: boolean
 *                users:
 *                  type: object
 *                  example: [{ "id": 1, "name": "유저1" }]
 */
```

- 기본적으로 Swagger는 yml파일을 지원하고 그 안의 속성들은 정해져 있음.
- 파일 안에 들어갈 속성만 잘 활용할 수 있다면 어려운 부분이 없음.

위의 코드에서

`/api/user/{user_id}:`

이 부분을 이용해 해당 라우터의 경로를 지정해 줄 수 있음.

그 아래 `get`으로 메소드를 지정,

description은 말 그대로 설명이며 Tag는 같은 태그끼리 묶어주는 역할을 함.

- 위의 tag: [Users]로 인해 이 태그를 가지는 api들은 하나의 토글로 묶이게 됨.

---

parameters를 이용해

- in : 보내는 데이터 종류(query, path == params, body 등)를 지정,
- required로 필수 여부를 지정
- schema는 좀더 활용 해 봐야 할 것 같음.@@@@@@@@@@@@@@@

이후 responses를 이용해 응답을 확인할 수 있음.

---

# 파일 실행 방법

1. 현재 사용되는 라이브러리는 4개. (npm ci로 다운받기)

- swagger-jsdoc, swagger-ui-express, express, nodemon

2. npm start를 이용해 서버 가동
3. localhost:3000/api-docs 들어가보기
