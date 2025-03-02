export const staticConfigYaml=`
server:
  port: 3001
  session-store: memory-saved
db:
  motor: postgresql
  host: localhost
  database: ejemplo_noticias_db
  schema: ejemplo_noticias
  user: ejemplo_noticias_admin
login:
  table: usuarios
  userFieldName: usuario
  passFieldName: md5clave
  rolFieldName: rol
  infoFieldList: [usuario, rol]
  activeClausule: activo
  unloggedLandPage: false
  plus:
    allowHttpLogin: true
    fileStore: true
    loginForm:
      formTitle: entrada
      formImg: unlogged/tables-lock.png
    noLoggedUrlPath: /pub
client-setup:
  menu: true
  lang: es
  user-scalable: no
install:
  dump:
    db:
      owner: ejemplo_noticias_owner
    scripts:
      post-adapt:
      - ../node_modules/pg-triggers/lib/recreate-his.sql
      - ../node_modules/pg-triggers/lib/table-changes.sql
      - ../node_modules/pg-triggers/lib/function-changes-trg.sql
      - ../node_modules/pg-triggers/lib/enance.sql    
logo: 
  path: client/img
`;