// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'en',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false
    cookie_expiration: 7,
    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
                console.log('onFirstAction fired');

        
    },

    onAccept: function (cookie) {
        // ...
         //       console.log('onAccept fired!')

        
       
        // If analytics category is disabled => disable google analytics
        if (cc.allowedCategory('analytics')) {
            
       typeof gtag === 'function' && gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }else if (cc.allowedCategory('targeting')) {
            /*typeof fbq === 'function' && fbq('consent', 'update', {
                'analytics_storage': 'grant'
            });*/
            
            fbq('consent', 'grant');
        }else{
            
        } 
        
    },

    onChange: function (cookie, changed_preferences) {
        // ...
        
           console.log('onChange fired!');

        // If analytics category is disabled => disable google analytics
        if (!cc.allowedCategory('analytics')) {
            typeof gtag === 'function' && gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }else if (!cc.allowedCategory('targeting')) {
          //fbq('consent', 'revoke');
             /*typeof fbq === 'function' && fbq('consent', 'update', {
                'analytics_storage': 'revoke'
            });*/
            typeof fbq === 'function' && fbq('consent', 'revoke');
        }else{
            
        }
        
        
    },

    gui_options: {
        consent_modal: {
            layout: 'box',               // box/cloud/bar
            position: 'middle center',     // bottom/middle/top + left/right/center
            transition: 'slide',           // zoom/slide
            swap_buttons: false            // enable to invert buttons
        },
        settings_modal: {
            layout: 'box',                 // box/bar
            // position: 'left',           // left/right
            transition: 'slide'            // zoom/slide
        }
    },
    languages: {
        'en': {
            consent_modal: {
                title: 'Utilizamos cookies',
                description: 'Este sitio utiliza cookies de Google y Disqus para brindar sus servicios y analizar el tráfico. <button type="button" data-cc="c-settings" class="cc-link">Elegir cookies</button>',
                primary_btn: {
                    text: 'Aceptar todos',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Rechazar todos',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Preferencias de cookies',
                save_settings_btn: 'Guardar configuración',
                accept_all_btn: 'Aceptar todos',
                reject_all_btn: 'Rechazar todas',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Nombre de la cookie'},
                    {col2: 'Proveedor'},
                    {col3: 'Expira'},
                    {col4: 'Descripcion'}
                ],
                blocks: [
                    {
                        title: 'Uso de cookies 📢',
                        description: 'Utilizamos cookies para garantizar las funcionalidades básicas del sitio web y mejorar su experiencia en el sitio web. Puede elegir que cookies podemos utilizar y cual no cuando lo desee. Para obtener más detalles relacionados con las cookies por favor leer: <a href="/politica-de-privacidad" class="cc-link">Políticas de privacidad</a>.'
                    }, {
                        title: 'Cookies estrictamente necesarias / Estadística Disqus',
                        description: 'Estas cookies son esenciales para el correcto funcionamiento del sitio web. Sin estas cookies, el sitio web no funcionaría correctamente.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                         cookie_table: [             // list of all expected cookies
                            {
                                col1: 'disqusauth',       // match all cookies starting with "_ga"
                                col2: 'disqus.com',
                                col3: 'Pixel / Session',
                                col4: 'Registra si un usuario está conectado. Esto permite al propietario de la web hacer inaccesibles algunas partes de la web, basándose en el estado de conexión del usuario.',
                                is_regex: true
                            },
                            {
                                col1: 'jungler/event.gif',       // match all cookies starting with "_ga"
                                col2: 'disqus.com',
                                col3: '1 día',
                                col4: 'Identifica  al visitante a través de dispositivos y visitas con el propósito de optimizar la función de chat de la web.',
                                is_regex: true
                            } 
                        ]
                    }, {
                        title: 'Cookies de rendimiento y análisis',
                        description: 'Estas cookies permiten que el sitio web recuerde las elecciones que ha realizado en el pasado.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 años',
                                col4: 'Registra una identificación única que se utiliza para generar datos estadísticos acerca de cómo utiliza el visitante el sitio web.',
                                is_regex: true
                            },
                            {
                                col1: '_ga_#',
                                col2: 'google.com',
                                col3: '2 años',
                                col4: 'Recopila datos sobre el número de veces que un usuario ha visitado el sitio web además de las fechas de la primera visita y de la más reciente. Utilizada por Google An alytics.',
                            }
                        ]
                    }, {
                        title: 'Más información',
                        description: 'Para cualquier consulta en relación con nuestra política de cookies y sus elecciones, puedes enviarme un <a class="cc-link" href="mailto:infolacadenagt@gmail.com">correo</a>.',
                    }
                ]
            }
        }
    }
});
