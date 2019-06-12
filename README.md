# ROBSALES
## TP final BD/MDS
### Integrantes
- Rodrigo Dias
- Robson A.K.A Arthur Estevão
- Gabriel Nogueira
- Antônio Sousa
- V1ruz A.K.A Matheus Coelho
___
### Alterar projeto
Baixar pacotes utilizados:
- `npm install`

Adicionar novos pacotes:
- `npm install --save nome_do_pacote`

Executar projeto:
- `npm run start` ou `npm start`
___
### Conectar ao Postgres-Heroku
1. Adicionar no seu hba_file (para encontrar o lugar: psql -> show hba_file;):
- `host    all         all         0.0.0.0/0         md5`

2. Credenciais:
- Host
  - `exemplo.compute-1.amazonaws.com`
- Database (vai no lugar de database maitenance)
  -  `nome_database`
- User
  -  `nome_usuario`
- Port
  -  `5432`
- Password
  -  `senha_usuario`
- **Obs.:** Utilizar credenciais disponibilizadas recentemente pois o Heroku rotaciona em alguns casos as informações

3. Na aba Advanceds da conexão, adicionar o nome do banco entre aspas simples em DB Restrictions:
- `'nome_database'`
