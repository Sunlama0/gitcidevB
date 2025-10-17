Lucas a commencé par cloner le dépôt du professeur afin de le décentraliser et d’éviter les Pull Requests sur le GitHub d’origine.  
Yohann a ensuite collaboré directement sur le dépôt GitHub de Lucas, sans fork, pour faciliter le travail à deux.

Yohann a développé la première fonctionnalité addTask sur la branche feature/add-task.  
Lucas a ensuite ajouté toggleTask sur une branche dédiée.  
Lors du développement de countDone sur la branche feature/count-done, un conflit réel est apparu dans le fichier lib/tasks.js.  
Nous l’avons résolu directement sur GitHub grâce à l’outil Resolve conflicts en conservant la bonne version du code avant de finaliser le merge.

Nous avons configuré la CI GitHub Actions qui exécute automatiquement les tests Jest à chaque push ou Pull Request.  

Enfin, la documentation complète a été rédigée sur la branche doc et fusionnée dans main.  
Toutes les actions CI sont vertes et les Pull Requests (dont celle du conflit) sont visibles sur GitHub.

Lien du dépôt : https://github.com/Sunlama0/gitcidevB
