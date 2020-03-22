## Esempi

### Taolu

Creazione
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
