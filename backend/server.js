const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const romanLaws = {
  "451bc": "A XII táblás törvények: a jog és eljárás írásba foglalása a római polgárok számára.",
  "287bc": "Lex Hortensia: a plebejusok határozatai minden polgárra kötelezővé váltak.",
  "xvii bc": "Lex Julia de Maritandis Ordinibus: házasság és társadalmi rend szabályainak szigorítása.",
  "42ad": "Lex de repetundis: provinciák kormányzóinak korrupció elleni elszámoltathatósága.",
  "71ad": "Lex Iulia de adulteriis coercendis: házasságtörés körüli jogi rendelkezések szigorítása."
};

app.get("/law/:year", (req, res) => {
  const year = req.params.year.toLowerCase();
  const law = romanLaws[year];

  if (law) {
    res.json({ year: year.toUpperCase(), law });
  } else {
    res.json({ error: "Nincs adat ehhez a római törvényhez" });
  }
});

app.listen(3000, () => {
  console.log("A római jog szervere fut a http://api-k8s-beadando-szemethylevente.jcloud.jedlik.cloud címen");
});