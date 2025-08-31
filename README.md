# 🎭 Arkanthia - Site Web Communauté Féerique

## 🌟 Description

Arkanthia est un site web moderne et élégant pour une association organisant des bals à thème féerique. Le site présente une ambiance mystique et sombre, inspirée des univers fantastiques, avec une typographie distinctive utilisant la police Starstruck pour les titres. L'expérience utilisateur est immersive et interactive, plongeant les visiteurs dans l'univers mystique des six royaumes d'Arkanthia.

## ✨ Fonctionnalités Principales

### 🎨 Design & Ambiance
- **Thème féerique sombre** avec des couleurs mystiques et des gradients enchanteurs
- **Police Starstruck** pour les titres principaux (téléchargée depuis DaFont)
- **Police Cherish** pour les sous-titres (Google Fonts)
- **Design responsive** adapté à tous les appareils (mobile, tablette, desktop)
- **Interface épurée** et efficace, sans animations complexes

### 📱 Navigation & Structure
- **Menu burger responsive** pour mobile et tablette
- **Navigation fluide** entre toutes les pages
- **Smooth scrolling** pour une expérience utilisateur optimale
- **Footer complet** avec liens de navigation et informations de contact

## 🏰 Pages du Site

### 1. **Accueil (`index.html`)**
- **Hero Section** avec présentation immersive
- **Qui Nous Sommes** - Histoire et présentation de l'association
- **Prochain Bal** - Mise en avant de l'événement à venir
- **FAQ Preview** - Aperçu des questions fréquentes
- **Contact Preview** - Informations de contact essentielles
- **Lore Preview** - Introduction aux royaumes mystiques

### 2. **Événements (`evenements.html`)**
- **Prochain Événement** : Le Bal des Damnés (Halloween, royaume de Vordemir)
- **Billetteries** : Liens vers HelloAsso (Standard et Premium)
- **Événements Précédents** : Le Grand Bal (15/03/2025)
- **Galeries Photos** : 6 liens vers Google Photos avec descriptions détaillées
- **Fonctionnalités** : Tags thématiques, descriptions complètes, images d'événements

### 3. **Lore (`lore.html`)**
- **Hero Section** avec présentation du monde d'Arkanthia
- **Les Six Royaumes** avec cartes détaillées :
  - **Vordemir** : Montagnes enneigées, cités souterraines, mystère
  - **Al Bagarde** : Communauté fière, connaissances anciennes, indépendance
  - **Nephridian** : Marais luxuriants, plantes luminescentes, lueur féerique
  - **Draesyl** : Forêt luxuriante, pins majestueux, paradis sylvestre
  - **Sitara** : Lévitation, architecture grandiose, peuple ailé
  - **Etherdock** : Port cosmopolite, côte galactique, voies maritimes

#### **Le Livre des Âmes** (Section Interactive)
- **Description** : Archive des âmes liées aux festivités d'Arkanthia
- **Deux pages de personnages** :
  - **Page 1 : Circé Briarlaine** - Impératrice d'Arkanthia, Princesse de Sitara
  - **Page 2 : Azael Al Vadran** - Empereur d'Arkanthia, Prince d'Albagarde
- **Navigation fluide** entre les pages avec boutons "Page suivante/précédente"
- **Informations détaillées** : Titres, caractéristiques physiques et personnelles, backstory complète
- **Fonctionnalités** : Ouverture/fermeture du livre, navigation circulaire

#### **Test d'Appartenance**
- **Lien direct** vers ChatGPT pour découvrir son royaume de prédilection
- **Description immersive** du processus de découverte

#### **Archives d'Arkanthia** (Section Interactive)
- **4 parchemins historiques** :
  - Circe Briarlaine sur le Trône
  - L'Incident du Banquet
  - Albagarde Rejoint l'Alliance
  - L'Alliance
- **Images illustratives** pour chaque archive
- **Contenu riche** sur l'histoire politique et les intrigues royales

### 4. **FAQ (`faq.html`)**
- **8 questions fréquentes** avec réponses détaillées :
  - Venir seul(e) au bal
  - Alternatives à la danse
  - Paiement en plusieurs fois (Mini-billetterie PayPal)
  - Accessibilité du lieu
  - Vestiaires sur place
  - Semi-LARP et création de personnage
  - Aide pour la création de personnage
  - Rejoindre l'équipe
- **Liens internes** vers le Test d'Appartenance et le formulaire de contact
- **Call-to-action** pour contacter l'association

### 5. **Contact (`contact.html`)**
- **Message d'accueil** personnalisé et engageant
- **Formulaire complet** avec :
  - Nom et Email (obligatoires)
  - Motif de demande (7 options : Demande d'informations, Bénévole, Prestataire, Partenariat, Livre des âmes, Réclamation, Autre)
  - Message détaillé
  - Bouton d'envoi
- **Réseaux sociaux** avec icônes et liens :
  - Facebook, Instagram, TikTok, Pinterest, Discord
- **Design responsive** optimisé pour tous les appareils

## 🛠️ Technologies Utilisées

### **Frontend**
- **HTML5** - Structure sémantique et accessible
- **CSS3** - Styles modernes avec variables CSS et media queries
- **JavaScript** - Interactions et navigation entre pages
- **Responsive Design** - Breakpoints mobile (≤768px), tablette (769px-1024px), desktop (>1024px)

### **Ressources Externes**
- **DaFont** - Police Starstruck pour les titres
- **Google Fonts** - Polices Inter, Playfair Display et Cherish
- **Unsplash** - Images de haute qualité pour les arrière-plans
- **Pinterest** - Images des royaumes et personnages
- **HelloAsso** - Intégration billetterie
- **ChatGPT** - Test d'appartenance
- **Google Photos** - Galeries d'événements

## 📁 Structure du Projet

```
Arkanthia/
├── index.html              # Page d'accueil avec sections principales
├── evenements.html         # Page des événements et galeries photos
├── lore.html              # Page du lore avec royaumes et Livre des Âmes
├── faq.html               # Page FAQ avec 8 questions-réponses
├── contact.html           # Page contact avec formulaire et réseaux sociaux
├── css/
│   ├── styles.css         # Styles principaux avec variables CSS
│   └── responsive.css     # Styles responsive (optionnel)
├── js/
│   └── main.js            # JavaScript pour navigation et interactions
├── fonts/
│   └── Starstruck.ttf     # Police Starstruck (DaFont)
├── img/                   # Images et logos du site
└── README.md              # Documentation complète
```

## 🎨 Palette de Couleurs

### **Variables CSS Principales**
```css
:root {
    --primary-color: #1a1a2e;        /* Bleu très sombre */
    --secondary-color: #16213e;      /* Bleu sombre */
    --accent-color: #0f3460;         /* Bleu profond */
    --quaternary-color: #e94560;     /* Rouge-orange vif */
    --mystic-purple: #8b5cf6;        /* Violet mystique */
    --text-color: #ffffff;           /* Texte blanc */
    --text-secondary: #a0a0a0;      /* Texte secondaire */
}
```

### **Gradients et Effets**
- **Arrière-plans** : Dégradés sombres et mystiques
- **Boutons** : Effets de hover avec transitions
- **Cartes** : Ombres et bordures subtiles
- **Navigation** : Transparences et effets de glassmorphism

## 📱 Responsive Design

### **Breakpoints Définis**
- **Mobile** : `max-width: 768px`
  - Menu burger avec animation slideDown
  - Grilles adaptées en colonnes uniques
  - Typographie optimisée pour petits écrans
  - Boutons et formulaires adaptés au tactile

- **Tablette** : `min-width: 769px` et `max-width: 1024px`
  - Grilles en 2 colonnes
  - Navigation adaptée aux écrans moyens
  - Espacement optimisé

- **Desktop** : `min-width: 1025px`
  - Grilles en 3-4 colonnes
  - Navigation horizontale complète
  - Espacement généreux et typographie large

### **Fonctionnalités Responsives**
- **Menu mobile** : Burger menu avec animation et fermeture automatique
- **Grilles adaptatives** : Flexbox et CSS Grid qui s'adaptent aux écrans
- **Images responsives** : Tailles et ratios adaptés
- **Formulaires** : Champs et boutons optimisés pour tous les appareils

## 🎭 Contenu des Royaumes

### **Vordemir**
> "Oubliés depuis plus de cinq siècles, les Vordens vivent reclus dans les montagnes enneigées d'Arkanthia, à l'extrême limite du monde connu. Leurs cités, creusées à même la roche, sont dissimulées dans les falaises glacées, inaccessibles aux regards et aux voyageurs."

### **Al Bagarde**
> "Les Albagardiens incarnent une communauté fière et indépendante. Accueillir un étranger parmi eux n'est pas chose facile, leur méfiance envers les inconnus étant profondément enracinée. Cette prudence découle de la nécessité de préserver les connaissances anciennes transmises de génération en génération."

### **Nephridian**
> "Le royaume de Nephridian s'étend dans un enchevêtrement enchanté de marais luxuriants, peuplés de plantes luminescentes qui éclairent la pénombre d'une lueur féerique."

### **Draesyl**
> "Forêt luxuriante composée de majestueux pins, Draesyl est un véritable paradis sylvestre. Les sols fertiles, recouverts de mousse douce, accueillent une diversité de flore et de faune."

### **Sitara**
> "En lévitation, le royaume de Sitara émerge des nuages comme un joyau céleste. Son architecture grandiose, ornée de dorures et de sculptures délicates, reflète la noblesse de son peuple ailé."

### **Etherdock**
> "Etherdock est un port cosmopolite situé sur la côte galactique du continent d'Arkanthia. Son histoire remonte à l'époque où les premiers navigateurs ont découvert les voies maritimes cosmiques."

## 🚀 Installation et Utilisation

### **Prérequis**
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur web local (recommandé pour le développement)

### **Installation Rapide**
1. Clonez le repository
2. Ouvrez `index.html` dans votre navigateur
3. Ou servez les fichiers via un serveur web local

## 🔧 Personnalisation

### **Modifier les Couleurs**
Éditez les variables CSS dans `css/styles.css` :
```css
:root {
    --primary-color: #1a1a2e;        /* Votre couleur principale */
    --secondary-color: #16213e;      /* Votre couleur secondaire */
    --quaternary-color: #e94560;     /* Votre couleur d'accent */
    /* ... */
}
```

### **Standards de Code**
- **HTML** : Sémantique et accessible
- **CSS** : Variables CSS et classes réutilisables
- **JavaScript** : Code commenté et fonctions modulaires
- **Responsive** : Test sur tous les breakpoints

## 📃 Sources

- **DaFont** pour la police Starstruck
- **Google Fonts** pour les polices complémentaires
- **Unsplash** pour les images de qualité
- **Pinterest** pour les illustrations des royaumes
- **HelloAsso** pour l'intégration billetterie
- **ChatGPT** pour le Test d'Appartenance
- **La communauté féerique** pour l'inspiration et le soutien

---

## 🌟 **Arkanthia** - Où la magie rencontre la réalité ✨

*Plongez dans l'univers mystique des six royaumes et découvrez votre destin féerique...*

---

**Dernière mise à jour** : Août 2025  
**Version** : 0.8 - Site complet avec Livre des Âmes interactif  
**Statut** : Production - Prêt pour les événements féeriques 