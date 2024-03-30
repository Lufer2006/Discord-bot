# Bot_discord_console
podras hablar mediante tu consola de host/pc y todo saldra mediante tu bot. siempre cuando especifiques el canal a usar

## requisitos
- discord.js: 11.6.4  (solo usar v11, ya que hay un error en v12 cuando usamos client.channels.get (normalmente en v12 es client.channels.cache.get y lo que hace es cargar la informacion de la cache. lo cual no detecta correctamente el id de canal y la consola arrojara CANAL NO ENCONTRADO) 
- readline: "^1.3.0
## COMO INSTALAR
- primero instalar los packetes nesesarios
    # en host
  simplemente mete los archivos tal y como estan, automaticamente por el archivo package.json cuando arranque los instalara automaticamente
    # en pc
    /npm install discord.js/release
    /npm install readline/release

  ## CONFIGURACION
## TOKEN: ## En index.js al final donde dice TOKEN-BOT debes poner el token de tu bot, para conseguirlo debes ir al portal de desarrollador de discord

 ## CANAL: ## para que tu hables mediante el bot en un canal especifico ve al archivo index.js busca la linea #16 debe decirte  let channel = client.channels.get('ID_DEL_CANAL'); debes remplazar ID_DEL_CANAL. por el ID de tu canal en tu servidor de discord. (el id del canal para conseguirlo das click izquierdo y te saldra una opcion que dice copiar id del canal. si no te sale debes ir a ajustes del discord y habilitar las opciones de desarrollador.

  *si todo sale bien, solo debes escribir en tu consola y deberia aparecer tu mensaje en el bot*
