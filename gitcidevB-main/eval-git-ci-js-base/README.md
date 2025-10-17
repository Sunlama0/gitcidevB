# Évaluation – Git, GitHub, CI

Lucas Aveline et Yohann Toumine
17/10/2025

## Mini Description
Mini application de gestion des tâches

## Liste des commande que nous avons utiliser :
- git clone
- git init
- git checkout -b
- git switch
- git add.
- git commit -m
- gut push origin main
- git push 
- git restore
- npm test
- git pull
- git branch
- git rebase

## Description :

- switch : permet uniquement de changer de branche
- checkout : plus ancien et sert aussi à revenir à un commit ou à restaurer un fichier.

- pull : récupère et fusionne les changements.
- fetch : récupère sans fusionner, utile pour voir les changements avant de les appliquer.

- rebase : permet de réécrire l’historique en plaçant ses commits à la suite des derniers du serveur.
- revert : crée un nouveau commit inverse pour annuler un précédent sans modifier l’historique.

## Nos recherches sur tag, stash et release

Tag : Permet de marquer une version stable du projet.

Stash : Met temporairement de côté des modifications locales sans les commiter.

Release : Une release associe un tag à une version officielle sur GitHub. Elle permet de publier une version téléchargeable avec changelog et fichiers associés.

## Lien des PR et dépot : 
- https://github.com/Sunlama0/gitcidevB
- https://github.com/Sunlama0/gitcidevB/pull/1 -> Mise en place du projet puis création de addtask et test ajouté
- https://github.com/Sunlama0/gitcidevB/pull/2 -> Mise en place du toggletask qui inverse le statut done
- https://github.com/Sunlama0/gitcidevB/pull/3 -> Ajout de countDone() et de tests dans tasks.test.js + Conflit car nous avons modifier tous les deux et importer le fichier countDone() qui était différents puis nous avons choisi une version et résolu le conflit
- https://github.com/Sunlama0/gitcidevB/pull/4 -> Ajout de la docuementation