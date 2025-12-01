# 🚀 Desafio CRUD de Tarefas

Desafio CRUD de Tarefas do [curso Node.js da RocketSeat](https://app.rocketseat.com.br/journey/node-js-2023/contents).

## 📚 Rotas

Abaixo estão definidas as rotas desenvolvidas e como utilizar cada uma delas:

### 📋 Listar tarefas

- **GET /tasks**
  - Retorna todas as tarefas.
  - Parâmetro opcional: `search` (filtra por título ou descrição).

### ✍️ Criar tarefa

- **POST /tasks**
  - Cria uma nova tarefa.
  - Body: `{ "title": string, "description": string }`

### 📥 Importar tarefas via CSV

- **POST /tasks/import**
  - Importa tarefas a partir de um arquivo CSV.
  - CSV deve conter colunas: `title`, `description`.

### 📝 Atualizar tarefa

- **PUT /tasks/:id**
  - Atualiza título e descrição de uma tarefa.
  - Body: `{ "title": string, "description": string }`

### ✅ Marcar tarefa como concluída

- **PUT /tasks/:id/done**
  - Marca a tarefa como concluída (`isDone: true`).

### 🗑️ Deletar tarefa

- **DELETE /tasks/:id**
  - Remove uma tarefa pelo ID.
