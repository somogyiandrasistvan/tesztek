let lista = [
  { nev: "marci", tul1: "szeret edzeni", tul2: "szeret sütni" },
  { nev: "cartmen", tul1: "kövér", tul2: "ideges" },
  { nev: "virag", tul1: "szereti a viragot", tul2: "szereti a tulipant" },
];

$(function () {
  const ELEM = $("article table");
  ELEM.html("<thead></thead><tbody></tbody>");
  const ELEMBODY = $("article table tbody");
  const ELEMHEAD = $("article table thead");
  ELEMHEAD.html("<th>NÉV</th><th>TUL1</th><th>TUL2</th>");

  for (let index = 0; index < lista.length; index++) {
    ELEMBODY.append(
      "<tr><td>" +
        lista[index].nev +
        "</td><td>" +
        lista[index].tul1 +
        "</td><td>" +
        lista[index].tul2 +
        "</td></tr>"
    );
  }
});
