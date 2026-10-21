const users = [
  { nom: "AKAKPO", prenom: "Darios", statut: 0, age: 22, role: admin },
  { nom: "Parker", prenom: "Peter", statut: 0, age: 18, role: user },
  { nom: "Doe", prenom: "Jane", statut: 0, age: 23, role: user },
  { nom: "Doe", prenom: "John", statut: 0, age: 29, role: user },
  { nom: "Ron", prenom: "Carolan", statut: 0, age: 32, role: user },
]; // Créer une fonction flechée nommée getAdmin qui prend en parametre le tableau et retourne un tableau conenant tous les utilisateur ayant le rôle admin
//Faire appel à la fonction pour afficher le résultat

const getAdmin = (users) => {
  return users.filter((user) => user.role === "admin");
};
console.log(getAdmin(users));

let user = { nom: "Mayinga", prenom: "Benoit", statut: 1, age: 22, role: user };

let nomU = user.nom;
let prenomU = user.prenom;
let roleU = user.role;

console.log(nomU, prenomU, roleU);
//Destructuration

const { prenom, nom, role } = user;

//Utilisation de map pour créer un tableau uniquement composé des élément voulue

let userMap = users.map(({ prenom, role }) => {
  return {
    p: prenom,
    r: role,
  };
});
console.log(userMap);
/*
        TP à faire
-DESTRUCTURATION
Récuperer le 1er Utilisateur et le mettre dans une variable appelée user1, le 3eme dans user3 et on ignore le 2eme

-SPREAD OPERATOR
créer un autre tableau contenant toutes les données du premier tableau plus un utilisateur à la fin sans utiliser push
Modifier le statut du 2e utilisateur du tableau users
*/

let [user1, , user3] = users;

console.log(user1, user3);

const nouveauTableau = [
  ...users,
  { nom: "Smith", prenom: "John", statut: 0, age: 30, role: "user" },
];
const updatedUsers = [users[0], { ...users[1], statut: 1 }, ...users.slice(2)];

console.log(updatedUsers);
