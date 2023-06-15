# Linkedin Learning auto skip

Permet de lire les vidéos Linkedin Learning de passer automatiquement à la vidéo suivante.

---

## Comment utiliser le script ?
### Extension chrome

Vous pouvez utiliser ce script depuis une extension chrome.

Pour installer l'extension sur chrome il faut :  
  - Cloner le dépôt
  - Dans l'onglet Extensions : [chrome://extensions/](chrome://extensions/)
    - Activer le mode développeur
    - Cliquer sur "Chargez l'extension non empaquetée"
    - Sélectionner le dossier "Chrome Extension" contenu dans le projet précédemment cloné

### Tampermonkey
#### Automatique

Le lien ci-dessous devrait vous emmener sur la page d'installation du script sur Tampermonkey : [tampermonkey_Llas.user.js](https://github.com/xalsie/linkedIn-learning-auto-skip/raw/master/tampermonkey_Llas.user.js)

Si cette méthode ne fonctionne pas, je vous invite à utiliser la méthode manuelle.

#### Manuelle

Il est possible d'utiliser Tampermonkey pour charger ce script automatiquement, pour cela vous avez besoin de [TamperMonker](https://tampermonkey.net/).

Ensuite il vous suffit de cliquer sur l'icone de Tampermonkey puis de cliquer sur "Dashboard". Une fois dans le panneau d'administration de vos scripts, vous devez aller dans l'onglet "Utilities" et dans la partie "URL", entrez le lien suivant:

```
https://github.com/xalsie/linkedIn-learning-auto-skip/raw/master/tampermonkey_Llas.user.js
```

Puis cliquez sur "Import".

### Depuis la console javascript

Allez sur la page d'une formation Linkedin learning.
Copiez-collez le code du fichier [script.Llas.js](https://github.com/xalsie/linkedIn-learning-auto-skip/raw/master/tampermonkey_Llas.user.js) dans la console javascript de votre navigateur puis lancez le.

---

## Comment ouvrir la console javascript ?

- [Chrome Documentation](https://developer.chrome.com/devtools/docs/shortcuts)
- [Firefox Documentation](https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts)
- [Internet Explorer Documentation](https://msdn.microsoft.com/en-us/library/ie/dn322041%28v=vs.85%29.aspx)
- [Safari Documentation](https://support.apple.com/en-ie/guide/safari-developer/keyboard-shortcuts-reference-dev654e5967f/mac)
- [Opera Documentation](http://www.opera.com/dragonfly/documentation/)
