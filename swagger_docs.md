# Swagger의 문서를 작성하는 방법의 예시입니다.

```
openapi: 3.0.0
info:
  version: 1.0.0
  title: GWON_TITLE
  description: TEST_SWAGGER

servers:
  # Added by API Auto Mocking Plugin
  # Added by API Auto Mocking Plugin

  # Added by API Auto Mocking Plugin
  # Added by API Auto Mocking Plugin
  - description: SwaggerHub API Auto Mocking
    url: https://virtserver.swaggerhub.com/RNJSDUD980_1/SWAGGER_TEST/1.0.0
  - description: local환경 구축
    url: http://localhost:8020
  - description: 43.201.149.0:5000 서버 경로
    url: http://43.201.149.0:8000
paths:
  /api/mail:
    post:
      summary: 메일 전송
      requestBody:
        description: email
        required: true
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/Email'

      responses:
        "200":
          description: send email

components:
  schemas:
    Email:
      type: object
      properties:
        email:
          type: string
          description: mail
          example: rnjsdud980@naver.com
```

위의 파일은 Body값으로 객체를 받고 객체 안에 {email : example@email.com}의 식으로 프로퍼티를 전달해주고 받은 email에 메일을 발송해주는 api입니다.

---

```
 - description: local환경 구축
    url: http://localhost:8020
  - description: 43.201.149.0:5000 서버 경로
    url: http://43.201.149.0:8000
```

이 부분은 테스트를 해볼 url을 설정할 수 있습니다.

- 다만 제 경우에는 localhost환경으로 테스트를 시도하면 403에러가 발생했습니다.
  - 여러가지 검색을 해보아도 이 부분은 해결하지 못해 ec2 instance를 이용해 진행했습니다.
  - 127.0.0.1로 바꾸는 방법은 실패했습니다.

---

```
paths:
  /api/mail:
    post:
      summary: 메일 전송
      requestBody:
```

이 부분은 경로를 설정하고 메소드, 제목 등을 넣는 공간입니다.

requestBody는 Body를 이용해 데이터를 전송하겠다는 뜻입니다.

---

```
description: email
        required: true
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/Email'

      responses:
        "200":
          description: send email
```

description을 이용해 보내는 데이터에 대해 간단한 설명,
required를 이용해 필수값 여부를 결정합니다.

schema는 보내는 데이터의 타입, 예시 등의 틀을 정해 스키마를 만듭니다.

위의 $ref는 해당 경로를 참고하게 되며 위는 components에 있는 Email스키마를 사용한다는 의미입니다.

```
components:
  schemas:
    Email:
      type: object
      properties:
        email:
          type: string
          description: mail
          example: rnjsdud980@naver.com
```

components는 프로그래밍 언어의 함수와 비슷한 개념입니다. 코드의 반복을 줄이고 재사용성을 높이기 위해 사용합니다.

위의 컴포넌트는 Email이라는 이름으로 스키마를 정의해 놓았습니다.

이는

```
$ref: '#/components/schemas/Email'
```

에서 알 수 있는데 함수를 호출하 듯 사용하는 모습을 볼 수 있습니다.
