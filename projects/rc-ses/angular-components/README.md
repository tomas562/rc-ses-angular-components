# RC-SES Angular komponentų biblioteka

Šioje repozitorijoje rasite RC-SESAngular komponentų bibliotekos išeities kodą. Biblioteką sudaro:
 - pagal bendrą RC-SES gidą stilizuoti funkcionalūs paslaugų užsakymo formų komponentai;
 - struktūriniai sąsajos išdėstymo komponentai formų ir paslaugos užsakymo puslapio atvaizdavimui;
 - pavyzdinės (demo) formos komponentas su visais šioje bibliotekos versijoje prieinamais komponentais;

## Prerekvizitai

1. Įsitikinkite, kad turite įdiegtą bent **18.3** arba naujesnę [Node.js](https://nodejs.org/en) versiją;
2. Jei to dar nepadarėte, lokaliai klonuokite `rc-ses-angular-components` projektą:
    ```bash
    git clone git@github.com:registrucentras/rc-ses-angular-components.git
    ```
3. Terminale atidarykite klonuoto projekto šakinį aplanką ir sudiekite projektui reikiamas bibliotekas:
    ```bash
    npm i
    ```

## Pavyzdinės formos

Repozitorijoje galite rasti pavyzdinių formų ir komponentų implementaciją (`src\projects\app\src\app\sample-form-multiple-steps` ir `src\projects\app\src\app\sample-form-multiple-steps`).

Norėdami peržiūrėti pavyzdinę formą naršyklėje:

 - startuokite aplikaciją dev rėžime: `npm run build`;
 - naršyklėje atidarykite [http://http://localhost:4200/](http://http://localhost:4200/);

## *npm* biblioteka

Versijuojama sukompiliuota *npm* biblioteka bus prieinama artimiausiu metu.
