
J'utilise `const` par défaut, pour une valeur qui ne doit pas changer (un nom, un taux de réduction). Si je la modifie par erreur, JavaScript affiche une erreur.
J'utilise `let` quand la valeur change au cours du programme (un compteur, un total, un score).
J'évite `var` : sa portée est toute la fonction et non le bloc `{ }`, donc une variable déclarée dans un `if` reste visible en dehors. Cela provoque des erreurs difficiles à repérer.


`==` convertit les types avant de comparer, alors que `===` compare la valeur et le type, sans conversion.

console.log(5 == "5");  =>  true  (le texte "5" est converti en nombre)
console.log(5 === "5"); =>  false (un nombre n'est pas une chaîne)
