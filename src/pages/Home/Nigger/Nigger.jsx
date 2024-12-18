import { Box, Typography } from "@mui/material";
import Item from "./Item.jsx";

import photo_1 from "../../../assets/gallery/photo_1.jpg";
import photo_2 from "../../../assets/gallery/photo_2.jpg";
import photo_3 from "../../../assets/gallery/photo_3.jpg";
import photo_4 from "../../../assets/gallery/photo_4.jpg";
import photo_5 from "../../../assets/gallery/photo_5.jpg";
import photo_6 from "../../../assets/gallery/photo_6.jpg";
import photo_7 from "../../../assets/gallery/photo_7.jpg";
import photo_8 from "../../../assets/gallery/photo_8.jpg";
import photo_9 from "../../../assets/gallery/photo_9.jpg";
import photo_10 from "../../../assets/gallery/photo_10.jpg";

export default function Nigger() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Item
        text={`Równonoc Jesienna - Jesień astronomiczna rozpoczyna się od równonocy jesiennej, która zazwyczaj przypada na 22 lub 23 września. W tym wyjątkowym dniu długość dnia i nocy jest niemal identyczna. Symbolizuje to moment równowagi między światłem a ciemnością, co w wielu kulturach było obchodzone jako czas refleksji i przygotowania do zimy. Po równonocy dni stają się krótsze, co jest naturalnym sygnałem dla przyrody do rozpoczęcia przygotowań na chłodniejsze miesiące.`}
        image={photo_1}
        index={1}
      />
      <Item
        text={`Barwna Transformacja Liści - Jesienią drzewa zaczynają zmieniać kolory swoich liści, co jest jednym z najbardziej charakterystycznych elementów tej pory roku. Proces ten wynika z rozpadu chlorofilu, zielonego pigmentu, który dominuje w liściach przez większość roku. Kiedy chlorofil zanika, na pierwszy plan wysuwają się karotenoidy (odpowiedzialne za żółte i pomarańczowe barwy) oraz antocyjany (czerwone i fioletowe). Ta niezwykła transformacja tworzy malownicze krajobrazy, które przyciągają zarówno artystów, jak i fotografów.`}
        reverse
        image={photo_2}
        index={2}
      />
      <Item
        text={`Najlepszy Czas na Herbatę - Jesień to idealna pora roku, aby sięgnąć po rozgrzewające napoje. Herbata z imbirem, miodem, cytryną czy goździkami nie tylko poprawia nastrój, ale także wzmacnia odporność. Wiele osób w tym czasie wybiera również mieszanki herbaciane z dodatkiem suszonych owoców, takich jak jabłka, maliny czy żurawina. W chłodne wieczory nic nie smakuje lepiej niż filiżanka aromatycznej herbaty wypita pod kocem przy dobrej książce.`}
        image={photo_3}
        index={3}
      />
      <Item
        text={`Spadające Kasztany - Zbieranie kasztanów i żołędzi to klasyczna jesienna aktywność, szczególnie popularna wśród dzieci. Kasztany, które spadają z drzew, mogą stać się świetnym materiałem do tworzenia różnorodnych dekoracji i zabaw. Ludzie robią z nich figurki zwierząt, ludziki czy ozdoby na stół. Jest to także świetny sposób na spędzenie czasu na świeżym powietrzu, ciesząc się pięknem jesiennej przyrody.`}
        reverse
        image={photo_4}
        index={4}
      />
      <Item
        text={`Zimny Poranek, Ciepłe Dni - „Babie lato” to zjawisko pogodowe charakterystyczne dla jesieni, gdy mimo chłodnych poranków i wieczorów, w ciągu dnia można cieszyć się ciepłem promieni słonecznych. Delikatne pajęczyny unoszące się w powietrzu są typowym symbolem tego okresu. Babie lato często kojarzy się z nostalgią i jest idealnym czasem na spacery, pikniki czy krótkie wyjazdy za miasto.`}
        image={photo_5}
        index={5}
      />
      <Item
        text={`Jesień a Nastrój - Jesień, choć piękna, może wpływać na nastrój wielu osób. Skrócenie dnia i mniejsza ilość światła słonecznego prowadzą do spadku poziomu serotoniny, co może wywoływać jesienną melancholię. Jednak jesień to również doskonały czas na spędzanie czasu z bliskimi, przygotowywanie rozgrzewających potraw i docenianie uroków tej pory roku, takich jak spacery wśród kolorowych liści czy wieczory spędzone przy kominku.`}
        reverse
        image={photo_6}
        index={6}
      />
      <Item
        text={`Grzybobranie - W Polsce jesień to czas grzybobrania, które jest nie tylko tradycją, ale także sposobem na relaks i kontakt z naturą. W lasach można znaleźć różnorodne gatunki grzybów, takie jak borowiki, maślaki, kurki czy podgrzybki. Grzybobranie to również świetna okazja do spędzenia czasu z rodziną i nauki rozpoznawania gatunków jadalnych od tych trujących.`}
        image={photo_7}
        index={7}
      />
      <Item
        text={`Migracje Zwierząt - Jesień to czas intensywnych przygotowań zwierząt do zimy. Wiele gatunków ptaków, takich jak bociany, żurawie czy jaskółki, migruje na południe w poszukiwaniu ciepła i pożywienia. Inne zwierzęta, jak wiewiórki, zbierają zapasy na zimę. Te zmiany w przyrodzie są niezwykle fascynujące i świadczą o harmonii oraz adaptacji zwierząt do zmieniających się warunków.`}
        reverse
        image={photo_8}
        index={8}
      />
      <Item
        text={`Dynia – Symbol Jesieni - Dynia to nieodłączny element jesieni. Jest symbolem Halloween, ale także cennym źródłem składników odżywczych, takich jak witaminy A, C, E oraz błonnik. Z dyni można przygotować wiele potraw, w tym zupy, ciasta, placki czy puree. Jej nasiona są zdrową i smaczną przekąską, bogatą w cynk i białko. Dodatkowo, dynia często zdobi nasze domy, nadając im przytulny, jesienny klimat.`}
        image={photo_9}
        index={9}
      />
      <Item
        text={`Zapach Jesieni - Charakterystyczny zapach jesieni pochodzi z procesów rozkładu liści, wilgotnej gleby oraz zmian w powietrzu. Substancje chemiczne, takie jak geosmina, odpowiadają za ziemisty zapach, który jest szczególnie intensywny po deszczu. Dla wielu osób ten zapach jest nieodłącznym elementem jesiennych spacerów i budzi pozytywne skojarzenia z naturą.`}
        reverse
        image={photo_10}
        index={10}
      />
    </Box>
  );
}
