Ce document résume sans code le fonctionnement des pages



                      dashboard.js

-Le composant affiche un tableau de bord pour un utilisateur connecté, montrant des informations telles que le nom d'utilisateur, le numéro de compte, les plantes dans l'inventaire et le solde de "moonflowers" (MF).

-La fonction fetchCards effectue une requête GET à l'API /api/cards/${userId} pour récupérer les données des cartes de l'utilisateur, puis met à jour l'état du composant avec ces données.
Le composant rend ensuite les informations dans une mise en page structurée à l'aide de composants Semantic UI React.

                      shop.js
