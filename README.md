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
