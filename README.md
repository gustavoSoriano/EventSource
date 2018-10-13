# EventSource
Exemplo de como manter um conexão http aberta no servidor e receber atualizações frequentes. Uma alternativa ao WebSocket api e Ajax Long Polling

```
A interface EventSource é usada para receber eventos enviados pelo servidor (server-sent events). 
Ele se conecta via HTTP em um servidor e recebe eventos com o formato text/event-stream. 
A conexão permanece aberta até ser fechada chamando EventSource.close().

https://developer.mozilla.org/pt-BR/docs/Web/API/EventSource

```

## Compatibilidade

```
https://caniuse.com/#search=EventSourcee
```
