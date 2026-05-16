function mostrarSeccion(seccion){

    document.getElementById("pistola").style.display = "none";
    document.getElementById("cartucho").style.display = "none";
    document.getElementById("bala").style.display = "none";

    document.getElementById(seccion).style.display = "block";
}


function mostrarInfo(parte){

    const info = document.getElementById("info");

    // ================= PISTOLA =================

    if(parte === "gatillo"){
        info.innerHTML = `
            <h2>Gatillo</h2>
            <p>
            Mecanismo de accionamiento manual que, al ser presionado con el dedo índice, libera el sistema de disparo y permite que el proyectil sea impulsado fuera del cañón.
            </p>
        `;
    }

    if(parte === "canon"){
        info.innerHTML = `
            <h2>Cañón</h2>
            <p>
            Tubo metálico, generalmente cilíndrico, por donde se impulsa y se dirige el proyectil al momento del disparo, determina la precisión, la velocidad y la estabilidad del disparo.
            </p>
        `;
    }

    if(parte === "cargador"){
        info.innerHTML = `
            <h2>Cargador</h2>
            <p>
            Dispositivo que almacena y suministra los cartuchos al mecanismo de disparo, permitiendo que el arma pueda realizar varios disparos consecutivos sin necesidad de recargar manualmente cada cartucho.
            </p>
        `;
    }

    if(parte === "boca"){
        info.innerHTML = `
            <h2>Boca del cañón</h2>
            <p>
            Apertura en la parte frontal del cañón de un arma de fuego, por donde finalmente sale el proyectil al momento del disparo. Es el extremo que conecta directamente el interior del cañón con el exterior.
            </p>
        `;
    }

    if(parte === "empunadura"){
        info.innerHTML = `
            <h2>Empuñadura</h2>
            <p>
            Parte del armazón diseñada para ser sujetada con la mano, funcionando como el punto de contacto directo entre el tirador y el arma. Su diseño influye en la seguridad, la precisión y el control del retroceso.
            </p>
        `;
    }

    if(parte === "alza"){
        info.innerHTML = `
            <h2>Alza</h2>
            <p>
            Dispositivo de puntería situado en la parte trasera del arma, que junto con el punto de mira delantero permite al tirador alinear correctamente el arma con el blanco.
            </p>
        `;
    }

    if(parte === "guardamonte"){
        info.innerHTML = `
            <h2>Guardamonte</h2>
            <p>
            Pieza metálica o polimérica que rodea y protege al gatillo, evitando que se accione accidentalmente por golpes, roces o caídas.
            </p>
        `;
    }

    if(parte === "calibre"){
        info.innerHTML = `
            <h2>Calibre</h2>
            <p>
            Medida interna aproximada del diámetro del cañón.
            </p>
        `;
    }

    if(parte === "puntoMira"){
        info.innerHTML = `
            <h2>Punto de mira</h2>
            <p>
            Elemento de puntería situado en la parte frontal del cañón, que sirve como referencia visual para alinear el arma con el blanco en conjunto con el alza.
            </p>
        `;
    }

    if(parte === "seguroCargador"){
        info.innerHTML = `
            <h2>Seguro de cargador</h2>
            <p>
            Mecanismo que libera o asegura el cargador.
            </p>
        `;
    }

    // ================= CARTUCHO =================

    if(parte === "cartucho"){
        info.innerHTML = `
            <h2>Cartucho</h2>
            <p>
            Cilindro de metal que contiene una cantidad determinada de metal propulsor y que conforma una carga completa para un arma de fuego.
            </p>
        `;
    }

    if(parte === "Composición"){
        info.innerHTML = `
            <h2>Composición</h2>
            <p>
              <ul>
            <li>Bala</li>
            <li>Casquillo</li>
            <li>Pólvora</li>
            <li>Cápsula detonante</li>
        </ul>
        `;
    }

    if(parte === "Clasificación"){
        info.innerHTML = `
            <h2>Clasificación</h2>
            <p>
               <ul>
            <li>Por tipo de arma: armas cortas, armas largas, escopetas</li>
            <li>Por sistema de percusión: central, anular</li>
            <li>Por su uso: militar, policial, deportivo,caza</li>
            <li>Por calibre: pequeño, mediano, grande</li>
        </ul>

        `;
    }

if(parte === "DatosForenses"){
        info.innerHTML = `
            <h2>Datos Forenses</h2>
            <p>
            La aplicación forense se estudia en:
            <p>
               <ul>
            <li>Marcas de fabricación: inscripciones del casquillo</li>
            <li>Huella balistica: estrías en el proyectil y mascas del percutor/extractor en el casquillo</li>
            <li>Estado del cartucho: íntegro, disparado, fallado, deflagrado</li>
    
        </ul>

        `;
    }


    // ================= BALA =================

    if(parte === "Bala"){
        info.innerHTML = `
            <h2>Bala</h2>
            <p>
            Parte del cartucho que sale expulsada por el cañón del arma a alta velocidad. Se divide en:
            </p>
                 <ul>
            <li>Nariz: parte que va al frente de la bala, enfrenta las corrientes de aire</li>
            <li>Cuerpo: todo lo que toca las paredes, se forman los campos y estrias (Huella balística)</li>
            <li>Base o culote: recibe la energía y gases de la carga de propulsión </li>
    
        </ul>
        `;
    }

    if(parte === "Casquillo"){
        info.innerHTML = `
            <h2>Casquillo</h2>
            <p>
            Carcasa fabricada de diferentes materiales.La cual presenta diferentes formas, longitudes y su principal función es sostener todos los elementos de un cartucho.
            </p>
        `;
    }

    if(parte === "Fulminante"){
        info.innerHTML = `
            <h2>Fulminante</h2>
            <p>
            Componente ubicado en la base del casquillo que inicia la combustión de la pólvora al ser golpeado por el percutor.
            </p>
        `;
    }

    if(parte === "Pólvora"){
        info.innerHTML = `
            <h2>Pólvora</h2>
            <p>
            Material propulsor utilizado en municiones para arma de fuego.
            </p>
                <ul>
            <li>Negra: presenta abundante humo, es amorfa, se compone de K, C, S.</li>
            <li>Sin humo: está basada en compuestos orgánicos nítricos que se transforman casi por completo en gases al quemarse.</li>
    
        </ul>

        `;
    }

}