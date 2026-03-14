// ====================================
// Bible Verses Database
// ====================================

export const verses = [
  { text: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.', ref: 'Juan 3:16' },
  { text: 'Todo lo puedo en Cristo que me fortalece.', ref: 'Filipenses 4:13' },
  { text: 'Jehová es mi pastor; nada me faltará.', ref: 'Salmos 23:1' },
  { text: 'Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.', ref: 'Proverbios 3:5' },
  { text: 'Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.', ref: 'Romanos 8:28' },
  { text: 'No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.', ref: 'Isaías 41:10' },
  { text: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.', ref: 'Jeremías 29:11' },
  { text: 'El Señor es mi luz y mi salvación; ¿de quién temeré?', ref: 'Salmos 27:1' },
  { text: 'Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.', ref: 'Gálatas 5:22' },
  { text: 'Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos.', ref: 'Deuteronomio 31:6' },
  { text: 'En el principio creó Dios los cielos y la tierra.', ref: 'Génesis 1:1' },
  { text: 'Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.', ref: 'Jeremías 33:3' },
  { text: 'Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.', ref: 'Mateo 18:20' },
  { text: 'Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.', ref: 'Juan 14:6' },
  { text: 'Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.', ref: '1 Tesalonicenses 5:18' },
  { text: 'El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.', ref: '1 Corintios 13:4' },
  { text: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.', ref: 'Efesios 2:8' },
  { text: 'Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.', ref: 'Mateo 11:28' },
  { text: 'He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él.', ref: 'Apocalipsis 3:20' },
  { text: 'Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.', ref: 'Mateo 5:9' },
  { text: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.', ref: 'Salmos 119:105' },
  { text: 'Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.', ref: 'Mateo 22:37' },
  { text: 'Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.', ref: 'Salmos 19:1' },
  { text: 'No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente.', ref: 'Romanos 12:2' },
  { text: 'Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.', ref: 'Josué 1:9' },
  { text: 'Ama a tu prójimo como a ti mismo.', ref: 'Marcos 12:31' },
  { text: 'Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.', ref: 'Mateo 7:7' },
  { text: 'El Señor es bueno; es refugio en el día de la angustia, y conoce a los que en Él confían.', ref: 'Nahúm 1:7' },
  { text: 'Alégrate, joven, en tu juventud; y tome placer tu corazón en los días de tu adolescencia.', ref: 'Eclesiastés 11:9' },
  { text: 'Grande es el Señor y digno de toda alabanza; su grandeza es insondable.', ref: 'Salmos 145:3' },
  { text: 'Si Dios es por nosotros, ¿quién contra nosotros?', ref: 'Romanos 8:31' },
  { text: 'Yo he venido para que tengan vida, y para que la tengan en abundancia.', ref: 'Juan 10:10' },
  { text: 'Sean fuertes y valientes. No teman ni se asusten, porque el Señor su Dios siempre los acompañará.', ref: 'Deuteronomio 31:6' },
  { text: 'Así brille la luz de ustedes delante de todos, para que vean sus buenas obras y glorifiquen al Padre.', ref: 'Mateo 5:16' },
  { text: 'Encomienda al Señor tu camino; confía en él, y él actuará.', ref: 'Salmos 37:5' },
  { text: 'Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.', ref: 'Proverbios 22:6' },
  { text: 'El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.', ref: 'Salmos 91:1' },
  { text: 'Acerquémonos con confianza al trono de la gracia para recibir misericordia y hallar gracia.', ref: 'Hebreos 4:16' },
  { text: 'Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.', ref: 'Salmos 37:4' },
  { text: 'Con amor eterno te he amado; por tanto, te prolongué mi misericordia.', ref: 'Jeremías 31:3' },
];

export function getVerseOfDay() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  return verses[dayOfYear % verses.length];
}

export function getRandomVerses(count, exclude = []) {
  const available = verses.filter(v => !exclude.includes(v.ref));
  const shuffled = available.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
