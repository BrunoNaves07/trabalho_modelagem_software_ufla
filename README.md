# Trabalho Prático de Modelagem e Implementação de Software - UFLA 2021/1
- Bruno Carlos de Mesquita Naves
- Stenio Henrique Machado Silva
- Wender Beraldo Lemes Pereira

## Aplicação
Esta aplicação foi desenvolvida pelo professor Paulo Afonso Pereira como parte de estudo prático
da disciplina de Modelagem e Implementação de Software da Universidade Federal de Lavras.

[Repositório original feito pelo professor](https://github.com/gcc132-2020-2/climabr)

A implementação feita pelo grupo foi a de Geolocalização.

# ClimaBR

Uma aplicação simples para consulta à previsão do tempo de cidades brasileiras.

## Geolocalização com Algorítmo de Haversine

Esta aplicação tem consigo a implementação do Algorítmo de Haversine utilizado com a biblioteca de Geolocalização
do Ionic.

# Como usar?

Clone este repositório.

Entre na pasta do projeto e execute o comando abaixo para instalar as dependências:

## Link para Teste
O aplicativo esta hospedado na Hostgator plano compartilhado.
[Aplicativo hospedado para testar](https://climabr.bnine.com.br/)


`npm install`

Acesse o site https://openweathermap.org/api, faça seu cadastro e crie uma chave de API.

Crie um arquivo chamado `api-config.ts` no diretório `src/environment` do projeto, contendo o conteúdo abaixo (não se esqueça de alterar a propriedade `api_key` para a sua chave de API):

```ts
export const OPEN_WEATHER_CONFIG = {
  api_key: '<your-api-key>',
  api_url: 'https://api.openweathermap.org/data/2.5/onecall',
  api_icon_url: 'http://openweathermap.org/img/wn',
};
```

Para abrir a aplicação, execute o comando:

`ionic serve`

Bora!
