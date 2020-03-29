## TODO
### Server
- [x] Sposta /auth/login da app.controller in auth.controller
- [x] Fare entity User e usarla per la login con diversa strategy
- [x] Proteggere entità User con login
- [x] Fare entità Step con relazione 1-N a Taolu
- [ ] Fare entità Element con relazione N-N con Step

### Client
- [ ] Fare base applicazione
- [ ] Fare CRUD Taolu
- [ ] Fare login
- [ ] Fare CRUD User, accessibile dopo autenticazione
- [ ] Fare dettaglio Taolu con CRUD di Step
- [ ] Fare dettaglio Step con selezione e CRUD Elements

### App
- [ ] Fare base applicazione
- [ ] Fare elenco Taolu
- [ ] Fare login
- [ ] Fare elenco User, per testare rotte protette da login
- [ ] Fare player Taolu


## Migrations
```
CREATE TABLE `taolu` (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	TEXT
);
CREATE TABLE `step` (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`sortOrder`	INTEGER,
	`taoluId`	INTEGER
);
```


## Esempi


### User
Login:
```
curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
```


### Autenticazione
```
curl http://localhost:3000/auth/profile
{"statusCode":401,"error":"Unauthorized"}

curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTU4NTA5NDMyMywiZXhwIjoxNTg1MDk0OTIzfQ.-6o4r2trgtdTYtZus-9z_8rIb1I3UXIv_8glfInNxb8"}

curl http://localhost:3000/auth/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTU4NTA5NDMyMywiZXhwIjoxNTg1MDk0OTIzfQ.-6o4r2trgtdTYtZus-9z_8rIb1I3UXIv_8glfInNxb8"
{"userId":1,"username":"john"}

curl http://localhost:3000/users -H "Authorization: Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTU4NTQwNDUzNiwiZXhwIjoxNTg1NDA1MTM2fQ.c-k8D1vT5oB8gpKDV544xO_Jq9hlbLeqWyZgpGc01J8"
```


### Taolu

Insert
```
curl -X POST -d '{"name":"asdasdasdasas"}' -H "Content-Type: application/json" http://localhost:3000/taolu
```

Update
```
curl -X PATCH -d '{"instance": {"name":"Ji Ben Taolu"}}' -H "Content-Type: application/json" http://localhost:3000/taolu/1
```

Delete
```
curl -X DELETE http://localhost:3000/taolu/3
```


Elenco
```
curl http://localhost:3000/taolu 
```

Get elemento
```
curl http://localhost:3000/taolu/1 
```

### Step
Elenco
```
curl http://localhost:3000/steps 
```

Insert
```
curl -X POST -d '{"sortOrder": 1, "taoluId": 1}' -H "Content-Type: application/json" http://localhost:3000/steps
```
