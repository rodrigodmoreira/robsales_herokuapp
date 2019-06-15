# ROBSALES
## TP final BD/MDS
### Integrantes
- Rodrigo Dias
- Robson A.K.A Arthur Estevão
- Gabriel Nogueira
- Antônio Sousa
- V1ruz A.K.A Matheus Coelho
___
### Para alterar o projeto
**IMPORTANTE:** Tenha em mente que são 2 projetos em 1 para ser feito o deploy utilizando apenas um Dyno no Heroku
 - Nessa mesma ideia, cada projeto possui seu próprio conjunto de bibliotecas, logo `npm install` deve ocorrer na raíz do repositório (api em NodeJS) e dentro da pasta client (front ReactJS) para rodar localmente.
 - Consequentemente, é necessário dois terminais para rodar as duas aplicações (back/front).

Baixar pacotes utilizados:
- `npm install`

Executar api NodeJS localmente:
- `npm run start` ou `npm start`

Executar client ReactJS localmente:
- `cd client && npm run start` ou `cd client && npm start`
- **Obs.:** caso exiba mensagem de outro serviço/app já executando na mesma porta (3000), confirmar (Y) a utilização de outra porta (geralmente vai para 3001).

Adicionar novos pacotes/bibliotecas ao projeto:
- `npm install --save nome_do_pacote`
___
### Para conectar ao banco Postgres hospedado no Heroku através do pgAdmin
1. Adicionar linha no seu hba_file:
- `host    all         all         0.0.0.0/0         md5`
- **Obs.:** Para encontrar o lugar do arquivo no pc rapidamente:
  1. Logar pelo terminal no psql como postgres
  2. Utilizar o comando `show hba_file;`

2. Credenciais para preencher no Heroku:
- **IMPORTANTE:** Utilizar credenciais mais recentes disponibilizadas (o Heroku rotaciona essas credenciais periodicamente)
- **IMPORTANTE 2:** Pode ser possível a nessecidade de ativar a utilização de SSL = true na conexão (não precisei, mas pode ser necessario)
- Host
  - `ec2-184-73-169-163.compute-1.amazonaws.com`
- Database (vai no lugar de database maitenance)
  -  `d3p7sc681qfvsd`
- User
  -  `xqsapqxuhzsakn`
- Port
  -  `5432`
- Password
  -  `80a71205f703f4bd2fd967f477a778d423e8e612e89bad2b3e4d76e3b60deab3`

3. Devido a arquitetura do serviço fornecido pelo Heroku, é possível ver bancos além do utilizado no projeto. Para filtrar, na aba Advanceds da conexão, adicione o nome do banco entre aspas simples em DB Restrictions:
- `'d3p7sc681qfvsd'`
