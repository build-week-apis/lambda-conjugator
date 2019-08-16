
exports.up = function(knex, Promise) {
  return knex.schema.createTable('verbConjugations', table => {
    table.increments();

    table.string("infinitive", 128);
    table.string("infinitive_english", 128);
    table.string("mood", 128);
    table.string("mood_english", 128);
    table.string("tense", 128);
    table.string("tense_english", 128);
    table.string("verb_english", 128);
    table.string("form_1s", 128);
    table.string("form_2s", 128);
    table.string("form_3s", 128);
    table.string("form_1p", 128);
    table.string("form_2p", 128);
    table.string("form_3p", 128);
    table.string("gerund", 128);
    table.string("gerund_english", 128);
    table.string("pastparticiple", 128);
    table.string("pastparticiple_english", 128);
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('verbConjugations');
};

// Table Headers
// infinitive	infinitive_english	mood	mood_english	tense	tense_english	verb_english	form_1s	form_2s	form_3s	form_1p	form_2p	form_3p	gerund	gerund_english	pastparticiple	pastparticiple_english
