# PROYECTO DE FINAL DE DAMO
## _APLICACIÓN DE APRENDIZAJE PARA TOCAR LA GUITARRA_

[![N|Solid](https://www.upc.edu/comunicacio/ca/identitat/descarrega-arxius-grafics/fitxers-marca-principal/upc-positiu-p3005.png)](https://www.epsevg.upc.edu/ca/escola)


Proyecto de investigación de la asignatura de DAMO, EPSEVG-UPC.

- Autor: Mario Kochan
- Fecha: 16/12/2022
- Profesor: Guillem Godoy

## Características

- Proyecto realizado con [JavaScript], [HTML], [Java], [XML] y [JSON]
- Uso de [GITHUB]
- Creación del .md con [Dillinger](https://dillinger.io/)
- Uso de [CreateJS], [HowlerJS], [Nginx] y [Android Studio]

## Idea general
La idea general es desplegar una aplicación web que se pueda ejecutar de forma nativa en el entorno Android.
Para eso, programaremos una aplicación web con HTML y JavaScript nativo y la desplegaremos en Android mediante la componente de la WebView.

## Aplicación Android
En el IDE de Android Studio, que sera donde programaremos la aplicación nativa de Android, generaremos un nuevo proyecto. En el archivo main.java incluimos el componente de WebView. Este componente sera el responsable de ejecutar una página web en la aplicación. Para ello le indicamos que URL debe utilitzar, que en nuestro caso, es el localhost. 
```sh
    webView = (WebView) findViewById(R.id.mainweb);
    webView.getSettings().setJavaScriptEnabled(true);
    webView.loadUrl("http://10.0.2.2/index.html");
    webView.setWebViewClient(new MyWebViewClient());
```
Hay que tener cuidado en el momento de configurar el localhost en Android, ya que el propio Android Studio, para emular el dipositivo telefono, crea una máquina virtual y por ende, el localhost de esta máquina tiene una IP diferente. Nuestra IP local, que es usualmente la 127.0.0.1, en el emulador serà la 10.0.2.2.

Aparte, debemos configurar el acceso a Internet de la propia Aplicacion, para ello le damos permisos a la aplicación para usar Internet y configuramos la configuración de seguridad para incluir el subdominio de 10.0.2.2 como seguro. Este archivo el xml/network_ security_config.xml .
```sh
    <?xml version="1.0" encoding="utf-8" ?>
    <network-security-config>
        <base-config cleartextTrafficPermitted="true"></base-config>
        <domain-config cleartextTrafficPermitted="true">
            <domain includeSubdomains="true">10.0.2.2</domain>
        </domain-config>
    </network-security-config>
```
Incluimos otras funcionalidades para que la aplicación sea más interactiva con el usuario, por ejemplo cuando vuelve atrás: 
```sh
   @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
            return;
        }
        super.onBackPressed();
    }
```

## Aplicación web
Para la aplicación web, haremos uso de HTML y JavaScript para crear dos páginas web que se adapten a los datos extraidos a un JSON. 

En el index.html generamos una página donde habrá una lista de canciones posibles. Además, añadiremos un buscador para poder buscar las canciones pertinentes.
![index.html](https://lh3.googleusercontent.com/pw/AL9nZEX3JXaYAC2KE5rS5tRRvPYxACKiTWHpsMXnOIHSSNPbygsBz6ubgqTt6gxwiP1gO2p1FcDdc1XNb61hF1R0RSIAbE7NAsb9Wzf84sbclpUTdc7d8IRPaZTZcG1vSoe5-GOK8xE36BcNaQkDtt5BFXtM=w480-h845-no?authuser=0 'index.html')

En cancion.html, generaremos una página nueva dónde se podrá visualizar el pentagrama de la canción, junto con la canción de fondo, con botones para control el pentagrama y su velocidad. 
La velocidad del pentagrama va a la par de los BMP y los Beats correspondientes por canción.

![cancion.html]
(https://lh3.googleusercontent.com/pw/AL9nZEVWu6Xnc1gYGPCMkx4Afb8XpvkBYDM63LHEmhtGTJcQLx1mU4xbs5wT-SuAzAW7SGqZv0eeIt10LDz3J0u-HUGvAWQ1yR8Uj-5Aw0fLT8MklbUsm0NinDCWpCnrF7XAlKK2f-KWRlyIPLUiJeuzsfPw=w471-h853-no?authuser=0 'cancion.html')

### Ejecución de la aplicación
Se debe abrir la consola de comando y ejecutar el servidor nginx en nuestro ordenador.
```sh
nginx.exe
```
Y luego ejecutar el emulador de Android Studio para poder visualizar bien la página:
![cancion_mobile.html](https://lh3.googleusercontent.com/pw/AL9nZEUJpkKLekxTHaJ9rEogiVJqHhKpmyF-xFevm_5FTFpH-uDdJWrdxnaeZvyLlL3GWoRapCCz_5U7TjgMRTUTfUgYTW6zL0QALzrGQm-29BkBWKr37p_JV0m-NI0uKuHQiTt63jrTXMMW7kbU8nzmSIeN=w597-h953-no?authuser=0)
![index_mobile.html](https://lh3.googleusercontent.com/pw/AL9nZEVyEeT4I2jBhPNYZIwTnmv2v8_7MMMQK8gPkWZvsWbdCA3zXyOBJK-c-I8AYvypz8oLsYutEqZ641SiTHQgl6j5rBjwAIVKTRYLlVQ_EdLmC8UvH4FHxbzddJye85AFTBHNiChgMlnB2SqBewcWmPgp=w585-h953-no?authuser=0)



   [GITHUB]: <https://github.com/>
   [JavaScript]: <https://www.javascript.com/>
   [HTML]: <https://www.w3schools.com/html/>
   [CreateJS]: <https://createjs.com/>
   [XML]: <https://es.wikipedia.org/wiki/Extensible_Markup_Language>
   [Java]: <https://www.java.com/es/>
   [JSON]: <https://es.wikipedia.org/wiki/JSON>
   [HowlerJS]: <https://howlerjs.com/>
   [Nginx]: <https://nginx.org/en/>
   [Android Studio]: <>
