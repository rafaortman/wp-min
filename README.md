# Procedimentos padrão
- Criar base de dados
- Fazer download da última versão do WordPress
- Instalar WordPress 
- Se preciso, inserir no terminal ```sudo chmod -R 777 /Users/rafaelortman/Sites```
- Baixar o tema
- Instalar o tema
- Para permitir administração de plugins e temas inserir no wp-config: ```define( 'FS_METHOD', 'direct' );```
- Instalar e ativar plugins 
    - Advanced Custom Fields PRO
    - Contact Form 7
    - Editor Clássico
    - SVG Support (inserir no início do arquivo svg ```<?xml version="1.0" encoding="utf-8"?>```)
- Editar gulpfile.js alterando a pasta de instalação do tema
- Alterar os permalinks para nome do post
- Inserir a descrição do site
- Instalar o Analytics e outros scripts 