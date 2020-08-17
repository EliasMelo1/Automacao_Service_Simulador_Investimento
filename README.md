# Cypress + Joi

Projeto para realização de testes de serviço utilizando o Cypress + Joi 

## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")
- [Joi](https://www.npmjs.com/package/@hapi/joi "Joi")

## Tutorial, Instalação e execução

### Executar este projeto em sua maquina

* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:

**Instalar as dependências:**  
```
npm i
```

# Executar este projeto em sua maquina

* Em um terminal execute o comando abaixo para abrir o cypress:
```
npm run cypress:open 
```

* Em um terminal execute o comando abaixo para rodar os teste:
```
npm run cypress:run 
```

### Trick

* Você pode abrir o projeto utilizando o `npx`:
```
npx cypress open
```

# Informações

API: A API do Simulador de Investimento está disponível em:

Get: Url: http://5b847b30db24a100142dce1b.mockapi.io/api/v1/simulador

Response:

{ "id": 1, "meses": ["112", "124", "136", "148"], "valor": ["2.802", "3.174", "3.564", "3.971"] }


# Proposta de solução
 * Validar status 200 e body não vazio
 * Validar valores ordenado de forma crescente
 * Validar diferença de 12 meses entre os meses
 * Validar contrato
