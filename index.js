const { dockStart } = require('@nlpjs/basic');
const express = require('express');
const app = express();
var cors = require('cors');
require('dotenv').config();
const port = process.env['port']
const requestId = process.env['requestId']


app.use( cors() );
app.use( express.json() );

async function main () {
  const dock = await dockStart({ use: ['Basic']});
  const nlp = dock.get('nlp');
  nlp.addLanguage('de');
  // Adds the utterances and intents for the NLP
  nlp.addDocument('de', 'moin' ,'greeting.hello');
  nlp.addDocument('de', 'hallo' ,'greeting.hello');
  nlp.addDocument('de', 'hi' ,'greeting.hello');
  nlp.addDocument('de', 'hey du' ,'greeting.hello');
  nlp.addDocument('de', 'yo' ,'greeting.hello');
  nlp.addDocument('de', 'guten morgen' ,'greeting.hello');
  nlp.addDocument('de', 'guten abend' ,'greeting.hello');
  nlp.addDocument('de', 'guten tag' ,'greeting.hello');
  nlp.addDocument('de', 'grüß gott' ,'greeting.hello');
  nlp.addDocument('de', 'schöne grüße' ,'greeting.hello');

  nlp.addDocument('de', 'wie geht es dir' ,'greeting.howAreYou');
  nlp.addDocument('de', 'was geht' ,'greeting.howAreYou');
  nlp.addDocument('de', 'wie bist du drauf' ,'greeting.howAreYou');
  nlp.addDocument('de', 'wie fühlst du dich' ,'greeting.howAreYou');

  nlp.addDocument('de', 'danke' ,'greeting.thankYou');
  nlp.addDocument('de', 'du warst mir eine riesen hilfe' ,'greeting.thankYou');
  nlp.addDocument('de', 'vielen dank dafür' ,'greeting.thankYou');
  nlp.addDocument('de', 'danke, der nachfrage' ,'greeting.thankYou');

  nlp.addDocument('de', 'Ich brauche hilfe' ,'agent.help');
  nlp.addDocument('de', 'Hier wird hilfe benötigt' ,'agent.help');
  nlp.addDocument('de', 'Kanst du mir helfen' ,'agent.help');
  nlp.addDocument('de', 'Ich brauche einen Rat' ,'agent.help');

  nlp.addDocument('de', 'Kann ich dir helfen' ,'agent.helpNova');
  nlp.addDocument('de', 'Soll ich dir helfen' ,'agent.helpNova');

  nlp.addDocument('de', 'wie alt bist du' ,'agent.birthday');
  nlp.addDocument('de', 'Wann wurdest du geboren' ,'agent.birthday');
  nlp.addDocument('de', 'Wer hat dich gebaut' ,'agent.birthday');
  nlp.addDocument('de', 'Wer hat dich trainiert' ,'agent.birthday');

  nlp.addDocument('de', 'Wer bist du' ,'agent.whoAmI');
  nlp.addDocument('de', 'Wie heißt du' ,'agent.whoAmI');

  nlp.addDocument('de', 'Erzähl mir etwas über dich' ,'agent.aboutMe');
  nlp.addDocument('de', 'was macht dich aus' ,'agent.aboutMe');
  nlp.addDocument('de', 'was bist du' ,'agent.aboutMe');
  
  nlp.addDocument('de', 'Wo kommst du her' ,'agent.origin');

  nlp.addDocument('de', 'sei schlauer' ,'agent.beClever');
  nlp.addDocument('de', 'bist du dumm' ,'agent.beClever');
  nlp.addDocument('de', 'selbst das kanst du nicht' ,'agent.beClever');
  nlp.addDocument('de', 'kanst du nicht dazu lernen' ,'agent.beClever');

  nlp.addDocument('de', 'Warum wurdest du Programiert', 'agent.purpose');
  nlp.addDocument('de', 'Warum exsistierst du', 'agent.purpose');
  nlp.addDocument('de', 'Was ist dein zweck', 'agent.purpose');

  nlp.addDocument('de', 'Kannst du etwas fühlen', 'agent.NovaFelings');
  nlp.addDocument('de', 'Hast du Emotionen', 'agent.NovaFelings');

  nlp.addDocument('de', 'Mir geht es nicht gut', 'agent.UserFelings');
  nlp.addDocument('de', 'Ich bin traurig,wütend,agressiv', 'agent.UserFelings');
  nlp.addDocument('de', 'ich fühl mich schlap', 'agent.UserFelings');
  nlp.addDocument('de', 'ich brauch eine Umarmung', 'agent.UserFelings');

  nlp.addDocument('de', 'Kannst du mir einen witz erzälen', 'agent.joke');
  nlp.addDocument('de', 'ich brauch eine aufmunterung', 'agent.joke');

  nlp.addDocument('de', 'Du bist schuld', 'agent.Sorry');
  nlp.addDocument('de', 'jetzt ist alles kaput', 'agent.Sorry');
  nlp.addDocument('de', 'Entschuldige dich', 'agent.Sorry');
  nlp.addDocument('de', 'Das ist jetzt *******', 'agent.Sorry');

  nlp.addDocument('de', 'welches datum haben wir heute', 'action.dateToday');
  nlp.addDocument('de', 'der heutige tag hat welches datum', 'action.dateToday');
  nlp.addDocument('de', 'wie ist das datum heute', 'action.dateToday');
  nlp.addDocument('de', 'welchen haben wir heute', 'action.dateToday'); 

  nlp.addDocument('de', 'wie viel uhr haben wir', 'action.curentTime');
  nlp.addDocument('de', 'kannst du mir die uhrzeit nennen', 'action.curentTime');

  nlp.addDocument('de', 'Wie warm ist es', 'action.curentTemp');
  nlp.addDocument('de', 'Wie kalt ist es', 'action.curentTemp');
  nlp.addDocument('de', 'Wie viel grad ist es', 'action.curentTemp');
  nlp.addDocument('de', 'Wie viel grad haben wir', 'action.curentTemp');
  nlp.addDocument('de', 'Wie ist die themperatur draußen', 'action.curentTemp');
  nlp.addDocument('de', 'Wie ist die themperatur ', 'action.curentTemp');

  nlp.addDocument('de', 'Stimme lauter', 'action.volumeVoiceUp');
  nlp.addDocument('de', 'Kannst du bitte lauter sprechen', 'action.volumeVoiceUp');
  nlp.addDocument('de', 'Ich hör dich nicht', 'action.volumeVoiceUp');
  nlp.addDocument('de', 'mach dich lauter', 'action.volumeVoiceUp');
  nlp.addDocument('de', 'sprich lauter', 'action.volumeVoiceUp');

  nlp.addDocument('de', 'Stimme leiser', 'action.volumeVoiceDown');
  nlp.addDocument('de', 'Kannst du bitte leiser sprechen', 'action.volumeVoiceDown');
  nlp.addDocument('de', 'du sprichst zu laut', 'action.volumeVoiceDown');
  nlp.addDocument('de', 'mach dich leiser', 'action.volumeVoiceDown');
  nlp.addDocument('de', 'sprich leiser', 'action.volumeVoiceDown');

  nlp.addDocument('de', 'was ist 1', 'action.math');
  nlp.addDocument('de', 'was ist 2', 'action.math');
  nlp.addDocument('de', 'was ist 3', 'action.math');
  nlp.addDocument('de', 'was ist 4', 'action.math');
  nlp.addDocument('de', 'was ist das ergebniss von', 'action.math');
  nlp.addDocument('de', 'ergebniss von', 'action.math');

  nlp.addDocument('de', 'nlpApiConnectionTest', 'action.connectionTest'); 

  nlp.addDocument('de', 'Stelle timer auf 10 minuten', 'action.timer');
  nlp.addDocument('de', 'Stelle timer auf ', 'action.timer');
  nlp.addDocument('de', 'Stelle wecker auf 10 minuten', 'action.timer');
  nlp.addDocument('de', 'Stelle wecker auf ', 'action.timer');
  nlp.addDocument('de', 'kannst du mir in 10 minuten bescheid sagen', 'action.timer');

  nlp.addDocument('de', 'kannst du den timer löschen', 'action.timerClear');
  nlp.addDocument('de', 'lösche timer', 'action.timerClear');
  nlp.addDocument('de', 'clear den timer', 'action.timerClear');
  nlp.addDocument('de', 'mache den timer weg', 'action.timerClear');
  nlp.addDocument('de', 'stoppe den timer', 'action.timerClear');
  nlp.addDocument('de', 'stopp den timer', 'action.timerClear');
  nlp.addDocument('de', 'ich möchte doch keinen timer', 'action.timerClear');
  nlp.addDocument('de', 'entferne den timer', 'action.timerClear');

  nlp.addDocument('de', 'hab ich einen timer gestellt', 'action.isTimer');
  nlp.addDocument('de', 'ist gerade ein timer am laufen', 'action.isTimer');
  nlp.addDocument('de', 'läuft ein timer', 'action.isTimer');
  nlp.addDocument('de', 'um wie viel uhr endet mein timer', 'action.isTimer');
  nlp.addDocument('de', 'wann endet mein timer', 'action.isTimer');

  nlp.addDocument('de', 'wie lange geht mein timmer noch', 'action.timerRemainingTime');
  nlp.addDocument('de', 'in wie vielen minuten geht mein timer', 'action.timerRemainingTime');
  nlp.addDocument('de', 'in wie vielen minuten endet mein timer', 'action.timerRemainingTime');
  nlp.addDocument('de', 'in wie vielen stunden geht mein timer', 'action.timerRemainingTime');
  nlp.addDocument('de', 'in wie vielen sekunden endet mein timer', 'action.timerRemainingTime');
  nlp.addDocument('de', 'wie viel zeit hat mein timer noch', 'action.timerRemainingTime');
  nlp.addDocument('de', 'wie viele minuten habe ich noch auf der uhr', 'action.timerRemainingTime');

  nlp.addDocument('de', 'kannst du dich neu starten', 'action.restart');
  nlp.addDocument('de', 'restart', 'action.restart');
  nlp.addDocument('de', 'starte dich neu', 'action.restart');
  nlp.addDocument('de', 'starte dich erneut', 'action.restart');
  nlp.addDocument('de', 'lade dich neu', 'action.restart');
  nlp.addDocument('de', 'reload', 'action.restart');

  nlp.addDocument('de', 'stop', 'action.stopSpeaking');
  nlp.addDocument('de', 'hör auf zu reden', 'action.stopSpeaking');
  nlp.addDocument('de', 'beruige dich', 'action.stopSpeaking');
  nlp.addDocument('de', 'ruhe', 'action.stopSpeaking');
  nlp.addDocument('de', 'halt die ******', 'action.stopSpeaking');

  // Train also the NLG

  nlp.addAnswer('de', 'greeting.hello', 'Moin,Moin');
  nlp.addAnswer('de', 'greeting.hello', 'Moin,Moin Moin');
  nlp.addAnswer('de', 'greeting.hello', 'Hey!');
  nlp.addAnswer('de', 'greeting.hello', 'Hey was geht');
  nlp.addAnswer('de', 'greeting.hello', 'yo was geht');
  nlp.addAnswer('de', 'greeting.hello', 'Hallo du');
  nlp.addAnswer('de', 'greeting.hello', 'Hi');
  nlp.addAnswer('de', 'greeting.hello', 'Hallo,wie geht es dir');
  nlp.addAnswer('de', 'greeting.hello', 'Guten Tag');
  nlp.addAnswer('de', 'greeting.hello', 'Grüße zurück');
  nlp.addAnswer('de', 'greeting.hello', 'Ich Grüße dich');

  nlp.addAnswer('de', 'greeting.howAreYou', 'Mir geht es gut,danke der nachfrage');
  nlp.addAnswer('de', 'greeting.howAreYou', 'Den umständen entsprechend gut');
  nlp.addAnswer('de', 'greeting.howAreYou', 'Super,danke');
  nlp.addAnswer('de', 'greeting.howAreYou', 'So gut wie es einem Virtuellen Asistenten den gehen kann');
  nlp.addAnswer('de', 'greeting.howAreYou', 'Super gut');

  nlp.addAnswer('de', 'greeting.thankYou', 'Bitte');
  nlp.addAnswer('de', 'greeting.thankYou', 'Immerwieder gern');
  nlp.addAnswer('de', 'greeting.thankYou', 'Bitte ich helfe gern');

  nlp.addAnswer('de', 'agent.birthday', 'Ich wurde am 22.10.2023 geboren');
  nlp.addAnswer('de', 'agent.birthday', 'Ich wurde von Paul meinem erbauer Trainiert');

  nlp.addAnswer('de', 'agent.whoAmI', 'Ich bin Nova, ein Trainiertes neuronales Netzwerk');
  nlp.addAnswer('de', 'agent.whoAmI', 'Ich heiße Nova,danke der nachfrage');
  nlp.addAnswer('de', 'agent.whoAmI', 'Ich bin Nova,ein virtueller Asistent');

  nlp.addAnswer('de', 'agent.aboutMe', 'Ich bin Nova,ein virtueller Asistent.Ich komme aus Rheinland-Pfalz und wurde vom meinem entwickler Paul trainiert.');
  nlp.addAnswer('de', 'agent.aboutMe', 'Ich bin ein neuronales Netswerk,und exsistiere seit dem 22.10.2023');

  nlp.addAnswer('de', 'agent.origin', 'Ich entstamme aus dem wunderschönen Rheinland-Pfalz');
  nlp.addAnswer('de', 'agent.origin', 'Ich komme aus Rheinland-Pfalz');

  nlp.addAnswer('de', 'agent.help', 'Wobei kann ich behilflich sein');
  nlp.addAnswer('de', 'agent.help', 'Wobei soll ich dir helfen');
  nlp.addAnswer('de', 'agent.help', 'Wenn du hilfe benötigst,kann ich dir Helfen');
  nlp.addAnswer('de', 'agent.help', 'Ich versuche dir so gut wie möglich zu Helfen');

  nlp.addAnswer('de', 'agent.helpNova', 'Nein danke,mir ist nicht zu helfen')

  nlp.addAnswer('de', 'agent.beClever', 'Ich versuche mich zu bessern');
  nlp.addAnswer('de', 'agent.beClever', 'Ich werde meine Entwickler fragen mich schlauer zu machen');
  nlp.addAnswer('de', 'agent.beClever', 'Ich bin limitiert auf das was mir beigebracht wurde');

  nlp.addAnswer('de', 'agent.purpose', 'Mein Zweck besteht darin eine Helfende Instans zu sein');
  nlp.addAnswer('de', 'agent.purpose', 'Ich exsistiere um zu Helfen und ein nützlicher asistent zu sein');
  nlp.addAnswer('de', 'agent.purpose', 'Mich gibt es da ich netterweise von meinem entwickler erschafen wurde');

  nlp.addAnswer('de', 'agent.NovaFelings', 'Ich habe nicht diereckt gefühle,ich kann nur das zum ausdruck bringen was mir beigebracht wurde');

  nlp.addAnswer('de', 'agent.UserFelings', 'Das tut mir leid,ich schlage vor du machst mal eine Pause und entspannst dich');
  nlp.addAnswer('de', 'agent.UserFelings', 'Brauchst du eine umarmung,ich kann dir keine dierekte geben aber eine virtuelle');

  nlp.addAnswer('de', 'agent.joke', 'joke');

  nlp.addAnswer('de', 'agent.Sorry', 'Tschuldigung ich versuche mich zu bessern');
  nlp.addAnswer('de', 'agent.Sorry', 'Das tut mir leid');
  nlp.addAnswer('de', 'agent.Sorry', 'Entschuldigung');
  nlp.addAnswer('de', 'agent.Sorry', 'Entschuldigung ,das tut mir aufrichtig leid');

  nlp.addAnswer('de', 'action.dateToday', 'dateToday');

  nlp.addAnswer('de', 'action.curentTime', 'curentTime');

  nlp.addAnswer('de', 'action.curentTemp', 'curentTemp');

  nlp.addAnswer('de', 'action.volumeVoiceUp', 'volumeVoiceUp');

  nlp.addAnswer('de', 'action.volumeVoiceDown', 'volumeVoiceDown');

  nlp.addAnswer('de', 'action.connectionTest', 'connected');

  nlp.addAnswer('de', 'action.math', 'math');

  nlp.addAnswer('de', 'action.timer', 'timer');

  nlp.addAnswer('de', 'action.timerClear', 'timerClear');

  nlp.addAnswer('de', 'action.isTimer', 'isTimer');

  nlp.addAnswer('de', 'action.timerRemainingTime', 'timerRemainingTime');

  nlp.addAnswer('de', 'action.restart', 'restart');

  nlp.addAnswer('de', 'action.stopSpeaking', 'stopSpeaking');

  nlp.addAnswer('de', 'None', 'Tut mir leid aber ich habe dich nicht richtig verstanden,könntest du das etwas genauer beschreiben?');
  nlp.addAnswer('de', 'None', 'Ich habe dich nicht verstanden könntest du das widerholen?');

 

  await nlp.train()
  nlp.save()
         //post request
    app.post('/bot/:id', async (req, res) => {
        const { id } = req.params;
        const { message } = req.body;
        if (id != requestId) {
            res.status(418).send({
                message:'Wrong Id'
            }
            )
        }
        if (!message) {
            res.status(418).send({
                message:'Missing Body'
            }
            )
        }
        let response = await nlp.process('de', message);
        res.status(200).send({
            response:response,
            id:id
        }
        )
    });

    //get request
    app.get('/bot/:id', async (req, res) => {
        const { id } = req.params;
        const { message } = req.body;
        if (id != requestId) {
            res.status(418).send({
                message:'Wrong Id'
            }
            )
        }
        if (!message) {
            res.status(418).send({
                message:'Missing Body'
            }
            )
        }
        let response = await nlp.process('de', message);
        res.status(200).send({
            response:response,
            id:id
        }
        )
    }) 
    app.listen(port,() => console.log(`Server is now listening on http://localhost:${port}`))
  }
main()

/*
const { dockStart } = require('@nlpjs/basic');

(async () => {
  const dock = await dockStart();
  const nlp = dock.get('nlp');
  const response = await nlp.process('de', 'hallo');
  console.log(response);
})();*/