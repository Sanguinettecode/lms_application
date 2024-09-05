**Documentação de Casos de Uso para CRUD Básico de um LMS**

**Objetivo:**
Este documento descreve os casos de uso para um CRUD (Create, Read, Update, Delete) básico de um LMS (Learning Management System).

**Requisitos Básicos:**
1. O sistema deve permitir que os usuários administradores criem, leiam, atualizem e excluam cursos.
2. Os cursos devem ter atributos como título, descrição, duração, data de início e data de término.
3. O sistema deve validar os dados de entrada para garantir a consistência e a integridade dos dados.
4. O sistema deve fornecer uma interface amigável para os usuários administradores interagirem com os cursos.

**Casos de Uso:**

1. **Criar Curso**
   - Pré-condições: O usuário administrador está logado no sistema.
   - Fluxo principal:
     1. O usuário administrador seleciona a opção de criar um novo curso.
     2. O sistema exibe um formulário para preencher os dados do curso.
     3. O usuário administrador preenche os dados do curso e clica em "Salvar".
     4. O sistema valida os dados de entrada e salva o curso no banco de dados.
     5. O sistema exibe uma mensagem de confirmação de criação do curso.
   - Fluxo alternativo (dados inválidos):
     1. O usuário administrador preenche os dados do curso e clica em "Salvar".
     2. O sistema detecta dados inválidos e exibe uma mensagem de erro.
     3. O usuário administrador corrige os dados e repete o processo.

2. **Ler Curso**
   - Pré-condições: O usuário administrador está logado no sistema.
   - Fluxo principal:
     1. O usuário administrador seleciona a opção de listar os cursos.
     2. O sistema exibe uma lista de cursos com suas respectivas informações.
     3. O usuário administrador seleciona um curso para visualizar os detalhes.
     4. O sistema exibe os detalhes do curso.
   - Fluxo alternativo (nenhum curso encontrado):
     1. O usuário administrador seleciona a opção de listar os cursos.
     2. O sistema não encontra nenhum curso e exibe uma mensagem de aviso.

3. **Atualizar Curso**
   - Pré-condições: O usuário administrador está logado no sistema e selecionou um curso para atualizar.
   - Fluxo principal:
     1. O usuário administrador seleciona a opção de editar um curso.
     2. O sistema exibe um formulário preenchido com os dados atuais do curso.
     3. O usuário administrador modifica os dados do curso e clica em "Salvar".
     4. O sistema valida os dados de entrada e atualiza o curso no banco de dados.
     5. O sistema exibe uma mensagem de confirmação de atualização do curso.
   - Fluxo alternativo (dados inválidos):
     1. O usuário administrador modifica os dados do curso e clica em "Salvar".
     2. O sistema detecta dados inválidos e exibe uma mensagem de erro.
     3. O usuário administrador corrige os dados e repete o processo.

4. **Excluir Curso**
   - Pré-condições: O usuário administrador está logado no sistema e selecionou um curso para excluir.
   - Fluxo principal:
     1. O usuário administrador seleciona a opção de excluir um curso.
     2. O sistema exibe uma mensagem de confirmação para o usuário administrador.
     3. O usuário administrador confirma a exclusão.
     4. O sistema remove o curso do banco de dados.
     5. O sistema exibe uma mensagem de confirmação de exclusão do curso.
   - Fluxo alternativo (cancelar exclusão):
     1. O usuário administrador seleciona a opção de excluir um curso.
     2. O sistema exibe uma mensagem de confirmação para o usuário administrador.
     3. O usuário administrador cancela a exclusão.
     4. O sistema não remove o curso do banco de dados e exibe uma mensagem de aviso.