// ====================================
// Interactive Stories Data
// ====================================

export const stories = {
  noah: {
    id: 'noah',
    title: 'El Arca de Noé',
    description: 'Construye un arca para salvar a la creación del gran diluvio.',
    cover: 'assets/stories/noah.png',
    difficulty: 'Fácil',
    reward: 100,
    xp: 50,
    startNode: 'start',
    nodes: {
      start: {
        text: 'Dios ve que la tierra está llena de maldad, pero encuentra gracia en ti, Noé. Te dice: "Hazte un arca de madera de gofer; harás aposentos en el arca, y la calafatearás con brea". El cielo se oscurece.',
        image: 'assets/stories/noah.png',
        choices: [
          { text: '🛠️ Obedecer y empezar a construir de inmediato', nextNode: 'build' },
          { text: '🗣️ Hablar con los vecinos para advertirles del peligro', nextNode: 'warn_neighbors' }
        ]
      },
      build: {
        text: 'Pasan los años. Construyes el Arca con tus hijos Sem, Cam y Jafet. La gente se burla de ti porque no hay señales de lluvia en el desierto. ¿Qué haces ante las burlas?',
        choices: [
          { text: '🙏 Continuar trabajando con fe y paciencia', nextNode: 'animals' },
          { text: '🛑 Detenerte un momento para discutir y defenderte', nextNode: 'argue' }
        ]
      },
      warn_neighbors: {
        text: 'Intentas advertir a la gente, pero se ríen de ti. "¡No ha llovido en años, viejo loco!", te gritan. El tiempo apremia y el arca aún no está lista.',
        choices: [
          { text: '🛠️ Volver al trabajo rápidamente en el Arca', nextNode: 'build' },
          { text: '😔 Sentirte desanimado por su incredulidad', nextNode: 'discouraged' }
        ]
      },
      discouraged: {
        text: 'Te sientas junto a las maderas y respiras profundo. Recuerdas la promesa de Dios de salvarte a ti y a tu familia. Tu fe te renueva.',
        choices: [
          { text: '🛠️ Levantar la herramienta y seguir construyendo', nextNode: 'build' }
        ]
      },
      argue: {
        text: 'Al discutir, pierdes tiempo valioso y la ira entra en tu corazón. El trabajo se retrasa. Sin embargo, decides que lo mejor es concentrarse en lo importante.',
        choices: [
          { text: '🛠️ Ignorar las burlas y retomar la construcción', nextNode: 'animals' }
        ]
      },
      animals: {
        text: '¡El Arca está terminada! De repente, una procesión milagrosa comienza de la nada: animales de dos en dos, macho y hembra, entran caminando pacíficamente al Arca.',
        choices: [
          { text: '🚪 Entrar al Arca con tu familia y cerrar las puertas', nextNode: 'flood' }
        ]
      },
      flood: {
        text: 'Las cataratas de los cielos se abren y el abismo estalla. Llueve durante 40 días y 40 noches. El Arca flota sobre las aguas. Estás a salvo con tu familia y los animales.',
        choices: [
          { text: '🕊️ Esperar a que las aguas bajen y enviar un ave', nextNode: 'dove' }
        ]
      },
      dove: {
        text: 'Envías una paloma. Regresa la primera vez, pero la segunda vez trae una rama de olivo en el pico. ¡Las aguas están bajando! Finalmente, el Arca se asienta en el monte Ararat.',
        choices: [
          { text: '🌈 Salir del Arca y dar gracias a Dios', nextNode: 'end' }
        ]
      },
      end: {
        text: 'Sales a tierra seca. Dios pone un hermoso arcoíris en el cielo como pacto de que nunca más destruirá la tierra con agua. ¡Has salvado la vida en la tierra!',
        isEnd: true,
        message: '¡Felicidades! Completaste la historia de Noé con obediencia y fe.'
      }
    }
  },
  david: {
    id: 'david',
    title: 'David y Goliat',
    description: 'Enfrenta al gigante filisteo con una honda y mucha fe.',
    cover: 'assets/stories/david.png',
    difficulty: 'Media',
    reward: 120,
    xp: 60,
    startNode: 'start',
    nodes: {
      start: {
        text: 'Llegas al campamento del ejército de Israel para llevar comida a tus hermanos mayores. Allí, escuchas a un gigante de casi 3 metros, Goliat, desafiando a Israel al combate.',
        image: 'assets/stories/david.png',
        choices: [
          { text: '🛡️ Preguntar qué recompensa tendrá quien lo venza', nextNode: 'ask_king' },
          { text: '😠 Sentirte indignado por los insultos que lanza a Dios', nextNode: 'indignant' }
        ]
      },
      ask_king: {
        text: 'Te llevan ante el Rey Saúl. Él te mira de arriba abajo: "Eres solo un muchacho, y él un hombre de guerra". Tú recuerdas cómo Dios te libró del león y el oso.',
        choices: [
          { text: '👑 Aceptar la armadura del Rey Saúl para pelear', nextNode: 'armor' },
          { text: '❌ Rechazar la armadura y pelear como pastor', nextNode: 'stones' }
        ]
      },
      indignant: {
        text: 'Dices en voz alta: "¿Quién es este filisteo incircunciso para que provoque a los escuadrones del Dios viviente?". El Rey Saúl escucha tu valentía.',
        choices: [
          { text: '👑 Ir a hablar con el Rey Saúl sobre el combate', nextNode: 'ask_king' }
        ]
      },
      armor: {
        text: 'Te pones el casco de bronce y la pesada coraza. Al intentar dar un paso, te das cuenta de que no puedes moverte con soltura ni has practicado con ella.',
        choices: [
          { text: '❌ Quitarte la armadura y confiar en tu honda', nextNode: 'stones' }
        ]
      },
      stones: {
        text: 'Vas al arroyo y recoges cinco piedras lisas del lecho del río. Las metes en tu bolsa de pastor y caminas hacia el centro del valle, donde Goliat te espera riéndose.',
        choices: [
          { text: '🪨 Elegir una piedra y avanzar corriendo', nextNode: 'fight_start' }
        ]
      },
      fight_start: {
        text: 'Goliat grita: "¿Soy yo un perro para que vengas a mí con palos?". Tú le respondes: "¡Tú vienes a mí con espada, pero yo voy en el nombre de Jehová!".',
        choices: [
          { text: '🎯 Poner la piedra en la honda y girarla con fuerza', nextNode: 'sling_shot' }
        ]
      },
      sling_shot: {
        text: 'Corres hacia el filisteo. Giras la honda y sueltas un extremo. La piedra vuela silbando por el aire y se clava directamente en la frente de Goliat.',
        choices: [
          { text: '🏆 El gigante cae al suelo de bruces', nextNode: 'end' }
        ]
      },
      end: {
        text: 'El campamento filisteo huye aterrado, mientras el ejército de Israel celebra una gran victoria. Has demostrado que Dios no salva con espada, sino con fe.',
        isEnd: true,
        message: '¡Felicidades! Venciste a Goliat con confianza en el Señor.'
      }
    }
  },
  daniel: {
    id: 'daniel',
    title: 'Daniel en el Foso',
    description: 'Permanece fiel a Dios ante un edicto del Rey Darío.',
    cover: 'assets/stories/daniel.png',
    difficulty: 'Difícil',
    reward: 150,
    xp: 75,
    startNode: 'start',
    nodes: {
      start: {
        text: 'Eres uno de los gobernadores más sabios del imperio. Otros oficiales, celosos de ti, engañan al Rey Darío para firmar una ley: "Ninguna persona puede orar a ningún dios excepto al Rey durante 30 días".',
        image: 'assets/stories/daniel.png',
        choices: [
          { text: '🙏 Ignorar la ley y orar a Dios como siempre', nextNode: 'pray' },
          { text: '🚪 Orar pero con las ventanas cerradas en secreto', nextNode: 'secret_pray' }
        ]
      },
      pray: {
        text: 'Vas a tu casa, abres las ventanas hacia Jerusalén y te arrodillas a orar tres veces al día dando gracias a Dios. Los oficiales espías te ven y corren a decírselo al Rey.',
        choices: [
          { text: '👑 Dejarte llevar por los guardias ante el Rey Darío', nextNode: 'arrest' }
        ]
      },
      secret_pray: {
        text: 'Decides orar en secreto por miedo. Pero tu corazón siente que estás ocultando tu fe. Quieres dar testimonio de la gloria del Dios vivo.',
        choices: [
          { text: '☀️ Abrir las ventanas y orar con valentía', nextNode: 'pray' }
        ]
      },
      arrest: {
        text: 'El Rey Darío está muy triste porque te aprecia, pero su propia ley no puede cambiarse. Te dice: "El Dios tuyo, a quien tú continuamente sirves, él te libre". Te arrojan al foso de los leones.',
        choices: [
          { text: '🦁 Caer en el foso oscuro y esperar a que rujan', nextNode: 'den' }
        ]
      },
      den: {
        text: 'Te encuentras en la oscuridad rodeado de ojos amenazantes que brillan. De repente, una luz celestial aparece y los leones se sientan pacíficamente a tu alrededor. ¿Qué haces?',
        choices: [
          { text: '🙏 Sentarte a dar gracias a Dios por el milagro', nextNode: 'morning' },
          { text: '🦁 Intentar acariciar a uno de los leones', nextNode: 'pet_lion' }
        ]
      },
      pet_lion: {
        text: 'Te acercas a un león y este ronronea como un gatito. Dios ha cerrado la boca de las fieras para protegerte de todo daño.',
        choices: [
          { text: '☀️ Esperar a que amanezca', nextNode: 'morning' }
        ]
      },
      morning: {
        text: 'Amanece. El Rey Darío corre al foso y grita con dolor: "¡Daniel, siervo del Dios viviente! ¿Te ha podido salvar tu Dios?".',
        choices: [
          { text: '🗣️ ¡Rey, vive para siempre! ¡Dios envió su ángel!', nextNode: 'end' }
        ]
      },
      end: {
        text: 'El Rey Darío, lleno de gozo, te saca del foso. Ni un rasguño hay en ti. Entonces firma un nuevo edicto mandando a todo el reino a temer al Dios de Daniel, que salva y libra.',
        isEnd: true,
        message: '¡Felicidades! Mantuviste tu fe firme y Dios te protegió.'
      }
    }
  },
  moses: {
    id: 'moses',
    title: 'Moisés y el Mar Rojo',
    description: 'Guía al pueblo de Israel hacia la libertad cruzando el mar.',
    cover: 'assets/stories/moses.png',
    difficulty: 'Media',
    reward: 130,
    xp: 65,
    startNode: 'start',
    nodes: {
      start: {
        text: 'Has guiado al pueblo de Israel fuera de Egipto tras las diez plagas. Sin embargo, os encontráis atrapados: el Mar Rojo al frente y el ejército del Faraón cargando por detrás.',
        image: 'assets/stories/moses.png',
        choices: [
          { text: '🙏 Clamar a Dios por ayuda y protección', nextNode: 'pray' },
          { text: '🗣️ Decir al pueblo que mantengan la calma y tengan fe', nextNode: 'calm' }
        ]
      },
      pray: {
        text: 'Dios te responde: "¿Por qué clamas a mí? Di a los hijos de Israel que marchen. Y tú, alza tu vara y extiende tu mano sobre el mar, y divídelo".',
        choices: [
          { text: '🌊 Alzar la vara hacia el Mar Rojo', nextNode: 'part_sea' }
        ]
      },
      calm: {
        text: 'Dices al pueblo: "No temáis; estad firmes y ved la salvación que Jehová hará hoy con vosotros". El pueblo se detiene, pero las tropas de Egipto están muy cerca.',
        choices: [
          { text: '🌊 Alzar la vara hacia el mar para que se divida', nextNode: 'part_sea' }
        ]
      },
      part_sea: {
        text: 'Levantas tu vara de madera. Un gran viento recio del oriente sopla toda la noche y las aguas se dividen formando dos inmensos muros sólidos a los lados. Hay tierra seca.',
        choices: [
          { text: '🚶‍♂️ Indicar al pueblo que cruce de inmediato', nextNode: 'crossing' }
        ]
      },
      crossing: {
        text: 'Cruzan por el fondo del mar. Es una marcha larga pero segura. El ejército egipcio decide seguiros con sus carros de guerra adentrándose en el lecho seco.',
        choices: [
          { text: '🛡️ Llegar al otro lado y mirar atrás al Faraón', nextNode: 'other_side' }
        ]
      },
      other_side: {
        text: 'Ya casi todo el pueblo está a salvo en la otra orilla. Los carros egipcios están en medio del mar. Dios te dice que extiendas tu mano una vez más.',
        choices: [
          { text: 'Extendiendo tu mano sobre las aguas', nextNode: 'close_sea' }
        ]
      },
      close_sea: {
        text: 'Extiendes tu mano. Las aguas vuelven a su curso normal con furia sobre el ejército de Faraón. El pueblo de Israel queda libre para siempre de Egipto.',
        choices: [
          { text: '🎶 Celebrar la libertad con cánticos a Dios', nextNode: 'end' }
        ]
      },
      end: {
        text: 'Miriam toma un pandero y todo el pueblo danza y canta de gozo. Habéis cruzado el mar y la libertad os espera. ¡El Éxodo ha comenzado!',
        isEnd: true,
        message: '¡Felicidades! Abriste camino en medio del mar con el poder de Dios.'
      }
    }
  }
};
