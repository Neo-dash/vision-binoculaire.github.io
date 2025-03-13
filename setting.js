//window.disableTapAdvanceSlide = true;
//window.disableTapAdvanceAnimation = true;
//window.disableHyperlinkToSlide = true;
//window.overrideTransition = {ef:3853,t:2};
//window.disableSwipe = true;
//window.disableFullscreen = true
//window.exactFit = true
//window.loopUntilEsc = true
//window.disableTextSelection = true
//window.evalPostMessage = true //allow parent iframe to post any command to inner
//window.showNavigationGuide = true //show a message "click or swipe or use keyboard to navigate"

//window.enableThumbnailPanelIcon = true
//window.enableSpeakerNoteIcon = true

//window.thumbNaviPath = '../thumb1'
//window.thumbNaviName = 'Slide'
//window.thumbNaviWidth = 100
//window.thumbNaviHeight = 75



//override thumbnail navigation classes
/*var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.thumbNaviImage { } \n .thumbNaviPanel {}';
document.getElementsByTagName('head')[0].appendChild(style);*/


function onSlideIndexChange(sldNo){
	//
}

function onAnimationStart(index){
	//console.log('ani start:' + index)
}

function onAnimationEnd(index){
	//var count = getSlideCount()
	//console.log('ani end:' + index + '/' + count)
}

function onAnimationNextBuild(slideNo,stepNo,toAnimate){
	//window.parent.postMessage('onAnimationNextBuild(' + slideNo + ',' + stepNo + ',' + toAnimate + ')',"*")
}

	
function onSlideShowTimeUpdate(slideNo,time,total){
	//console.log(slideNo,time,total)
}

allSlideNotes = [{id:4,notes:'<p>« L\'évolution de l\'œil commence pendant la période précambrienne, alors que se forme une opsine primitive, à l\'origine des opsines des yeux actuels, responsables de la photoréception. La radiation évolutive du Cambrien est ensuite marquée par l\'évolution convergente d\'yeux complexes chez de nombreux embranchements formés à cette époque. Les yeux ainsi formés présentent une grande diversité de structures, notamment sur la manière dont la lumière est captée et concentrée. Par la suite, les yeux évoluent sous l\'influence des pressions sélectives de leur environnement, et les changements d\'habitats ou de mode de vie sont souvent associés à des changements importants dans la structure et la fonction de l\'œil. »</p>'},
{id:6,notes:'<p>Les yeux d’une grande partie des animaux sont placés latéralement sur leur tête, comme chez les poissons. L’œil droit permet de voir l’ensemble du champ visuel droit, et l’œil gauche le champ visuel gauche. Il n’y a pas ou peu de zone de recouvrement, commune aux champs visuels perçus par chaque œil. Tous les axones de chaque nerf optique décussent au niveau du chiasma, apportant l’information visuel à l’hémisphère cérébral controlatéral. (figure 2).</p>'},
{id:7,notes:'<p>La frontalisation des orbites a entrainé un recouvrement des champs visuels perçus par chacun des deux yeux. Ceci est particulièrement vrai chez les prédateurs, dont la zone de recouvrement des champs de vision permet l’analyse de la profondeur.</p>'},
{id:8,notes:'<p>Cette nouvelle capacité nécessité une réorganisation des voies visuelles, afin que l’information de la même partie de l’environnement captée par chacun des deux yeux puisse être comparée dans une même région corticale. Une partie des axones des cellules ganglionnaires adoptent désormais un trajet direct, alors que d’autres continuent à décusser au niveau du chiasma. Ainsi  l’information de la rétine nasale d’un œil et comparée à celle de la rétine temporale de l’autre œil (figure 3).</p>'},
{id:9,notes:'<p>Les mouvements oculaires lents stabilisent notre regard sur un objet mobile ou une scène en mouvement. C’est le cas de la phase lente des nystagmus physiologiques, de la poursuite oculaire et paradoxalement de la fixation. Les mouvements rapides permettent de réorienter notre attention d’un objet vers un autre. C’est le cas des saccades, qui permettent l’exploration de ce qui nous entoure, mais également des phases rapides du nystagmus physiologique, qui recentrent le globe dans l’orbite. Il existe ainsi un répertoire de mouvements oculaires, chacun représentant un système physiologique avec ses caractéristiques propres (latence de déclenchement, rapidité d’éxécution…) et sa finalité (stabilisation, réorientation…).</p>'},
{id:10,notes:'<p>Notre regard est le produit de la combinaison de ces différents systèmes : réflexe vestibulo-oculaire, nystagmus opto-cinétique, saccades, poursuite, vergence.</p>'},
{id:17,notes:'<p>Deux de ces canaux ont une importance primordiale dans la fonction visuelle. Au niveau de la fovéola la transmission de l’information se fait de façon monosynaptique d’un cone vers une cellule ganglionnaire naine. Ce système parvocellulaire dispose ainsi d’un champ récépteur extrêmement précis : c’est le système de l’acuité visuelle fine. Le système magnocellulaire repose sur une cellule ganglionnaire parasol reliée à un grand nombre de photorécépteur. Sa résolution est beaucoup plus basse. C’est un système intervenant essentiellement dans la detection du mouvement. Chaque système envoie par des canaux séparés ses informations au thalamus puis au cortex visuel primaire</p>'},
{id:18,notes:'<p>Notre acuité visuelle repose ainsi sur un système fovéolaire, centrale, monosynaptique. L’angle minimum de résolution est ainsi défini par la séparation entre deux cones adjacents, limitant l’acuité visuelle maximum à 20/10. La diminution drastique de la densité spatiale dès que l’on sort de la fovéola explique la limitation brutale de l’acuité visuelle à mesure que l’on utilise une partie parafovéolaire pour lire</p>'},
{id:19,notes:'<p>Ceci est d’autant plus vrai que des que l’on quitte la fovéola, le système devient plurisynaptique et la taille des CR augmente. Ceci est parfaitement illustré par l’élargissement des champs dendritiques en fonction de l’excentration, dans les systèmes parvo comme magnocellulaire. il existe de fait une limite physique à la meilleure acuité visuelle, l’angle minimum de résolution augmentant mathématiquement avec l’excentration</p>'},
{id:28,notes:'<p>Le caractère binoculaire de ces neurones est sous- tendu par</p><p>le fait qu’ils répondent à la stimulation d’un oeil ou de l’autre</p><p>Ce sont Hubel et Wiesel qui, en électrophysiologie, ont défini les</p><p>premiers ces cellules et les ont classés selon leur réponse prédominante</p><p>ou préférentielle à la stimulation d’un oeil ou de l’autre.</p><p>En effet, on enregistre les cellules dans un des deux hémisphères</p><p>cérébraux et l’oeil stimulé peut être ipsilatéral (hémisphère droit et</p><p>oeil droit ou hémisphère gauche et oeil gauche) ou controlatéral</p><p>(hémisphère droit et oeil gauche ou hémisphère gauche et oeil</p><p>droit). On distingue sept classes de cellules dans la couche II/III [5</p>'},
{id:31,notes:'<p>Parallèlement à ces modifications du globe oculaire se mettent en place après la naissance des phénomènes de maturation corticale. Ces phénomènes sont présents dans tous l’encéphale. La myélinisation progressive du SNC permet d’améliorer la conduction de l’information du globe vers le cortex visuel. Ici on peut voir l’expansion progressive de ce réseau connectique dans le temps. Les images de tractographie montrent également le renforcement de ces connections</p>'},
{id:32,notes:'<p>Les phénomènes d’apotose et de synaptogénèse débute avant la naissance et vont se poursuivre les premières années de vie. Ce qui avait été décrit dans le cortex visuel par Rakic en 1986 s’observe également dans d’autres aires corticales. Il existe dans les 1ères semaines de vie une véritable explosion du nombre de connections synaptiques. Ces connections vont se renforcer pendant une période précise, matérialisé ici par cette barre grise. Cette période passée, les connections non fonctionnelles vont progressivement être éliminée.</p>'},
{id:33,notes:'<p>La loi de Hebb postule que seule les synapses fonctionnelles sont conservées au cours du développement. Dans cet exemple, le thalamus recoit à la fois des afférences de l’œil droit et des afférence de l’œil gauche. La cellule réceptrice ne conservera que les synapses recevant des décharges d’activité synchrone, qui signifie que leur origine provient de la même rétine. L’élagage des connections asynchrones aboutit ainsi à la formation de colonne monoculaire</p>'},
{id:34,notes:'<p>Les études récentes montre ainsi que l’activité spontanée rétinienne est nécessaire à la mise en place des réseaux synaptiques au moment de l’ouverture de l’œil ; l’expérience sensorielle est nécessaire au maintient de ces connections</p>'},
{id:36,notes:'<p>L’amélioration de la stéréo-acuité a lieu de manière relativement brutale, aux alentours de la 16ème semaine de vie. A la 21ème semaine de vie, l’enfant a atteint une stéréoacuité d’une minute d’arc. Ce phénomène est extrêmement rapide en comparaison de l’amélioration de l’acuité visuelle</p>'},
{id:41,notes:'<p>Ce qui est vrai au niveau thalamique l’est également au niveau cortical, comme l’avait montré dès les années 70 les travaux de Hubel et Wiesel. Une expérience visuelle anormale survenant durant cette période sensible du développement aboutit à la perte totale des cellules réceptrices d’un œil. On peut voir en haut à droite sur une coupe de cerveau de singe l’alternance normale des colonnes de dominance de l’œil droit (en noir) et de l’œil gauche (en gris). L’altération de l’expérience visuelle droite aboutit à une atrophie de ces colonnes au niveau corticale.</p>'},
{id:42,notes:'<p>Il existe donc une période du développement pendant laquelle la fonction monoculaire est extrêmement plastique. Son instauration nécessite une expérience visuelle normale. Une altération de cette expérience aboutit à la déstructuration de l’organisation corticale. Par analogie avec les expériences chez l’animal, on situe la maximum de la période critique de la fonction monoculaire entre 0 et 2 ans, la plasticité corticale diminuant progressivement jusqu’à l’âge de 6 ans, puis rapidement au delà</p>'},
{id:60,notes:'<p>Les cellules binoculaires peuvent ne pas être</p><p>sensibles à la disparité et leur réponse est indépendante de la</p><p>disparité entre les champs récepteurs des cellules monoculaires</p><p>qui les activent (fig. 21-49a).</p>'},
{id:61,notes:'<p>D’autres cellules sont sensibles à</p><p>une grande disparité et leur activité est maximale lorsque la</p><p>disparité entre leurs deux cellules monoculaires est maximale</p><p>(fig. 21-49b)</p>'},
{id:62,notes:'<p>Et enfin, il existe des cellules sensibles à une</p><p>faible disparité dont l’activité est maximale lorsque la disparité</p><p>entre les champs récepteurs de leurs deux cellules monoculaires</p><p>est minimale (fig. 21-49c).</p>'},
{id:70,notes:'<p>Les yeux d’une grande partie des animaux sont placés latéralement sur leur tête, comme chez les poissons. L’œil droit permet de voir l’ensemble du champ visuel droit, et l’œil gauche le champ visuel gauche. Il n’y a pas ou peu de zone de recouvrement, commune aux champs visuels perçus par chaque œil. Tous les axones de chaque nerf optique décussent au niveau du chiasma, apportant l’information visuel à l’hémisphère cérébral controlatéral. (figure 2).</p>'}]