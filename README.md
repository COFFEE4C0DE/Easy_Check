# Easy Check

Protótipo visual mobile-first que centraliza as principais informações acadêmicas de um estudante e demonstra como elas continuam disponíveis mesmo sem conexão.

O projeto foi criado para uma apresentação universitária sobre Business Agility e Scrum e representa duas histórias do MVP:

- visualizar informações acadêmicas importantes em uma única interface;
- consultar dados previamente sincronizados durante uma simulação offline.

O Easy Check é exclusivamente front-end. Não há backend, autenticação, banco de dados, APIs ou armazenamento offline real.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- React Router

## Como executar

Requisitos: Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra o endereço local informado pelo Vite no terminal.

Para validar e gerar a versão de produção:

```bash
npm run lint
npm run build
```

Os arquivos gerados ficam em `dist/`.

## Deploy no Vercel

O projeto possui `vercel.json` com fallback para aplicações SPA. Assim, as rotas `/agenda` e `/offline` continuam funcionando quando abertas diretamente ou após atualizar a página.

Deploy atual: [easy-check-black.vercel.app](https://easy-check-black.vercel.app/)

Para publicar pelo GitHub:

1. Importe o repositório no painel do Vercel.
2. Mantenha o preset `Vite` detectado automaticamente.
3. Use `npm run build` como comando de build e `dist` como diretório de saída.
4. Faça o deploy. Novos pushes na branch principal poderão gerar deploys automaticamente.

Para publicar pela CLI:

```bash
# Faça login e vincule o diretório na primeira execução
npx vercel login
npx vercel link

# Publique em produção
npx vercel --prod
```

## Telas

### Dashboard — `/`

Centraliza saudação, próxima aula, atividades, prova, avisos e prazos. É a tela principal da demonstração da US01.

### Agenda — `/agenda`

Exibe uma linha do tempo simples com os próximos compromissos acadêmicos. A tela existe para manter a navegação completa sem ampliar o escopo do MVP.

### Conteúdo offline — `/offline`

Mostra o status da disponibilidade local, a última sincronização, as categorias salvas e o botão de sincronização. É a tela principal da demonstração da US02.

## Modo demo Online/Offline

O controle de conexão fica no cabeçalho, ao lado do avatar `DA`.

1. Clique no indicador `Online` ou `Offline`.
2. Selecione o estado que deseja simular.
3. No modo Offline, o banner `Sem conexão` aparece, mas todas as informações permanecem acessíveis.

Na rota `/offline`, o botão `Sincronizar agora` demonstra dois comportamentos:

- Online: mostra `Sincronizando...` e depois `Atualizado agora`;
- Offline: informa que a sincronização ocorrerá quando a conexão for restabelecida.

O estado é controlado somente em memória pelo React e reinicia ao recarregar a página.

## Dados mockados

Todos os dados usados na interface estão centralizados em:

```text
src/data/mockData.ts
```

Edite esse arquivo para alterar o estudante, aula, atividades, prova, aviso, última sincronização e totais de conteúdo salvo.

## Roteiro para screenshots

- Dashboard online: acesse `/` e selecione `Online`.
- Conteúdo offline: acesse `/offline` com o modo `Online` para destacar os dados salvos e a sincronização.
- Dashboard offline: acesse `/`, abra o controle de conexão e selecione `Offline`.

O layout tem referência principal de 390 × 844 px e permanece centralizado, com largura máxima de 460 px, em telas maiores.
