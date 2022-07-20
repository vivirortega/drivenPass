<div align="center">
<h1>Driven Pass. </h1>
</div>

<h1>Rotas:</h1>

```yml 
POST /sign-up
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum" 
} 
```

```yml 
POST /login
    - Rota para fazer login
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum" 
} 
```

```yml 
POST /create-credential
    - Rota para criar credencial
    - headers: "Authorization": "Bearer $token"
    - body:{
        "title": "lorem@gmail.com",
        "url": "loremipsum",
        "password": "encrypted"
} 
```

```yml 
GET /credentials/:id
    - Rota retorna uma credencial
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```

```yml 
DELETE /credentials/:id
    - Rota para deletar uma credencial
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```

```yml 
POST /create-note/
    - Rota para criar uma nota
    - headers: "Authorization": "Bearer $token"
    - body:{
    "title": "test",
    "content": "a content test"
} 
```


```yml 
GET /notes/:id
    - Rota para ver uma nota
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```


```yml 
DELETE /notes/:id
    - Rota para deletar uma nota
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```

```yml 
POST /create-card/
    - Rota para criar um cartão
    - headers: "Authorization": "Bearer $token"
    - body:{
    "number": "1234567891234567",
    "name": "vivi",
    "exp_date": "19/07/2022",
    "cvc": "123",
    "password": "nicepassword",
    "is_virtual": false,
    "type": "debit",
} 
```
```yml 
GET /cards/:id
    - Rota para ver um cartão
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```

```yml 
DELETE /cards/:id
    - Rota para deletar um cartão
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```

```yml 
POST /create-wifi/
    - Rota para criar um wifi
    - headers: "Authorization": "Bearer $token"
    - body:{
    "title": "test",
    "password": "encryp password"
} 
```

```yml 
GET /wifi/:id
    - Rota para ver um wifi
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```

```yml 
DELETE /wifi/:id
    - Rota para deletar um wifi
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```
