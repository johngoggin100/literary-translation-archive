const ACC = {
  src:'#9e8f7a', a:'#6b7a5e', b:'#7a5e6b', c:'#5e6b7a',
  d:'#7a6b5e', e:'#5e7a6b', f:'#6b5e7a', g:'#7a7a5e'
};

function srcCol(lang, yr, note) {
  return {id:'src', tr:`Original ${lang}`, yr:yr, note:note, acc:ACC.src,
          src:true, badges:['Source Text'], text:'', ratings:[], comments:[]};
}

// col(id, tr, yr, note, acc, badges, text, ratings, comments)
// ALL string args use backticks to avoid apostrophe issues
function col(id, tr, yr, note, acc, badges, text, ratings, comments) {
  return {id:id, tr:tr, yr:yr, note:note, acc:acc, src:false,
          badges:badges, text:text, ratings:ratings||[], comments:comments||[]};
}

const AUTHORS = {

ancient: [
  {
    id:'homer', name:'Homer', dates:'c. 8th century BCE', lang:'Ancient Greek',
    desc:`The blind poet of antiquity, credited with the Iliad and Odyssey — two foundational epics of Western literature. Translations have multiplied across millennia, each reinventing Homer for its era.`,
    acc:`homer`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Homer_British_Museum.jpg/440px-Homer_British_Museum.jpg`,
    works:[
      {
        id:'odyssey', title:`The Odyssey`, year:`c. 8th c. BCE`,
        desc:`Odysseus's decade-long voyage home after the fall of Troy.`,
        chips:[`Epic`,`Journey`,`Mythology`],
        passages:[
          {
            label:`Book I — Invocation of the Muse`,
            cols:[
              {id:`homer-od-src`,tr:`Homer`,yr:`c. 8th c. BCE`,note:`Ancient Greek`,acc:`homer`,src:true,badges:[],
               text:`Ἄνδρα μοι ἔννεπε, Μοῦσα, πολύτροπον, ὃς μάλα πολλὰ / πλάγχθη, ἐπεὶ Τροίης ἱερὸν πτολίεθρον ἔπερσε.`,ratings:[],comments:[]},
              col(`homer-od-pope`,`Alexander Pope`,1725,`Heroic couplets; aristocratic elevation`,`pope-odyssey`,['Verse','Neoclassical'],
                `Tell me, O Muse, of that ingenious hero who travelled far and wide
after he had sacked the famous town of Troy.
Many cities did he visit, and many were the nations
with whose manners and customs he was acquainted;
moreover he suffered much by sea while trying to save his own life
and bring his men safely home; but do what he might
he could not save his men, for they perished through their own sheer folly
in eating the cattle of the Sun-god Hyperion; and so they never saw home again.`,[],[]),
              col(`homer-od-butcher`,`Butcher & Lang`,1879,`Elevated archaic prose`,`butcher-lang`,['Prose','Victorian'],
                `Tell me, O muse, of that ingenious hero who travelled far and wide
after he had sacked the famous town of Troy.
Many cities did he visit, and many were the nations
with whose manners and customs he was acquainted;
moreover he suffered much by sea while trying to save his own life
and bring his men safely home.
Do what he might he could not save his men,
for they perished through their own sheer folly
in eating the cattle of the Sun-god Hyperion;
so the god prevented them from ever reaching home.`,[],[]),
              col(`homer-od-rieu`,`E. V. Rieu`,1946,`Plain readable prose; Penguin Classics`,`rieu-odyssey`,['Prose','Accessible'],
                `Tell me, O Muse, of that ingenious hero who travelled far and wide
after he had sacked the famous town of Troy.
Many cities did he visit, and many were the nations
with whose manners and customs he was acquainted;
moreover he suffered much by sea while trying to save his own life
and bring his men safely home.
But do what he might, he could not save his men,
for they perished through their own sheer folly
in eating the cattle of the Sun-god Hyperion;
and so the god prevented them from ever reaching home.`,[],[]),
              col(`homer-od-fitzgerald`,`Robert Fitzgerald`,1961,`Lyrical American verse`,`fitzgerald-odyssey`,['Verse','Lyrical'],
                `Sing in me, Muse, and through me tell the story
of that man skilled in all ways of contending,
the wanderer, harried for years on end,
after he plundered the stronghold
on the proud height of Troy.
He saw the townlands and learned the minds of many distant men,
and weathered many bitter nights and days
in his deep heart at sea, while he fought only
to save his life, to bring his shipmates home.
But he could not save them, hard as he strove.`,[],[]),
              col(`homer-od-fagles`,`Robert Fagles`,1996,`Contemporary verse; acclaimed for vigor`,`fagles-odyssey`,['Verse','Contemporary'],
                `Sing to me of the man, Muse, the man of twists and turns
driven time and again off course, once he had plundered
the hallowed heights of Troy.
Many cities of men he saw and learned their minds,
many pains he suffered, heartsick on the open sea,
fighting to save his life and bring his crewmen home.
But he could not save them from disaster, hard as he strove —
the recklessness of their own ways destroyed them all,
the blind fools, they devoured the cattle of the Sun
and the Sungod blotted out the day of their return.`,[],[]),
              col(`homer-od-wilson`,`Emily Wilson`,2017,`First woman to translate Homer into English`,`wilson-odyssey`,['Verse','Contemporary','Feminist'],
                `Tell me about a complicated man.
Muse, tell me how he wandered and was lost
when he had wrecked the holy town of Troy,
and where he went, and who he met, the pain
he suffered in the storms at sea, and how
he worked to save his life and bring his men
back home. He failed to keep them safe; poor fools,
they ate the Sun God's cattle, and the god
kept them from home. Now goddess, child of Zeus,
tell me the whole story from the start.`,[],[]),
            ]
          },
          {
            label:`Book XI — The Dead (Elpenor Speaks)`,
            cols:[
              col(`homer-od-xi-rieu`,`E. V. Rieu`,1946,`Plain prose`,`rieu-odyssey`,['Prose'],
                `And the first soul to approach me was that of my companion Elpenor.
His body had not yet been given to the earth; we had left it in Circe's hall,
unmourned and unburied, since other tasks had claimed us.
I wept when I saw him, and my heart was wrung with pity.
"Elpenor," I cried, "how did you come here to this region of darkness?
You made better speed on foot than I did in my black ship."
He groaned and answered: "Royal son of Laertes, resourceful Odysseus,
it was the malice of heaven and the wine I had drunk that undid me.
I lay down on the roof of Circe's house and never thought of using the ladder —
I tumbled straight off the roof, broke my neck, and my soul came down to Hades." `,[],[]),
              col(`homer-od-xi-fitzgerald`,`Robert Fitzgerald`,1961,`Lyrical verse`,`fitzgerald-odyssey`,['Verse'],
                `The first soul I saw was Elpenor.
His body lay as yet unburied under the wide earth.
We had left him behind in Circe's hall,
unmourned and uninterred, since the work at hand had urged us on.
I broke into tears when I saw him, and my heart was moved to pity,
and I spoke, and my words had wings:
"Elpenor, how did you come here
to the western gloom? You have outrun me on foot;
I came in a black ship."
He groaned, and answered me: "Son of Laertes, resourceful Odysseus,
the evil will of a god and oceans of wine undid me." `,[],[]),
              col(`homer-od-xi-fagles`,`Robert Fagles`,1996,`Vigorous contemporary verse`,`fagles-odyssey`,['Verse','Contemporary'],
                `And the first soul I saw was the ghost of Elpenor,
my companion, not yet buried under the broad earth.
We had left him behind at Circe's house,
unmourned, unburied — other labors pressed us then.
I wept when I saw him now, my heart went out to him
and I called out a winged word: "Elpenor,
how did you travel down to the world of darkness?
Faster on foot, I see, than I in my black ship."
He groaned and answered: "Son of Laertes, ready Odysseus,
the doom of an evil spirit brought me low, combined with oceans of wine." `,[],[]),
              col(`homer-od-xi-wilson`,`Emily Wilson`,2017,`Modern spare verse`,`wilson-odyssey`,['Verse','Contemporary'],
                `The first to come was the ghost of Elpenor.
His body was not buried yet beneath
the broad-pathed earth. We left him in the hall
of Circe, without tears or funeral rites,
since other tasks were pressing. When I saw him
I wept and felt compassion in my heart.
I called to him with words that flew like arrows:
"Elpenor! How did you arrive down here
so fast? You have beaten me on foot. I came
by ship." He groaned and said: "Ill luck and wine." `,[],[]),
            ]
          },
          {
            label:`Book XXIV — Priam Before Achilles`,
            cols:[
              col(`homer-od-xxiv-rieu`,`E. V. Rieu`,1946,`Dignified prose`,`rieu-odyssey`,['Prose'],
                `Great Priam entered unseen and going up to Achilles,
he clasped his knees and kissed his hands,
those terrible man-slaying hands that had killed so many of his sons.
Achilles was seized with wonder at the sight of Priam,
and his companions were also astonished and looked at one another.
But Priam prayed, and said: "Think of your own father, god-like Achilles,
who is of like years with me, on the sad threshold of old age.
And perhaps those who dwell round about are wearing him down,
and there is no one to keep from him war and ruin.
Yet while he hears of you being alive, he is glad at heart." `,[],[]),
              col(`homer-od-xxiv-fagles`,`Robert Fagles`,1996,`Powerful verse`,`fagles-odyssey`,['Verse'],
                `And Priam, the noble king of Troy, slipped past unseen
and kneeling down beside Achilles, clasped his knees
and kissed his hands, those terrible, man-killing hands
that had slaughtered Priam's many sons in battle.
Awesome — as when the madness seizes one who murders
a man in his own fatherland and flees abroad
to a wealthy host, and a sense of wonder grips
those who behold him — so Achilles watched in wonder
as majestic Priam gazed on him.
The men around him marvelled too, trading glances.`,[],[]),
              col(`homer-od-xxiv-wilson`,`Emily Wilson`,2017,`Clear modern verse`,`wilson-odyssey`,['Verse','Contemporary'],
                `Great Priam came in undetected, kneeled before Achilles,
and clasped his knees and kissed his hands,
those terrible, murderous hands that killed so many of his sons.
As when a heavy doom comes over someone who has killed a man
in his own country and flees abroad to a wealthy patron,
and those who see him stare in amazement,
so Achilles stared in amazement when he saw godlike Priam,
and his companions stared and exchanged glances.
Priam prayed and spoke directly to great Achilles:
"Remember your own father, godlike Achilles, on the threshold of old age." `,[],[]),
            ]
          },
        ]
      },
      {
        id:'iliad', title:`The Iliad`, year:`c. 8th c. BCE`,
        desc:`The wrath of Achilles and the siege of Troy — the first great war poem.`,
        chips:[`Epic`,`War`,`Mythology`],
        passages:[
          {
            label:`Book I — Wrath of Achilles`,
            cols:[
              {id:`homer-il-src`,tr:`Homer`,yr:`c. 8th c. BCE`,note:`Ancient Greek`,acc:`homer`,src:true,badges:[],
               text:`Μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος / οὐλομένην, ἣ μυρί' Ἀχαιοῖς ἄλγε' ἔθηκε.`,ratings:[],comments:[]},
              col(`homer-il-pope`,`Alexander Pope`,1715,`Heroic couplets; Augustan grandeur`,`pope-iliad`,['Verse','Neoclassical'],
                `Achilles' wrath, to Greece the direful spring
Of woes unnumber'd, heavenly goddess, sing!
That wrath which hurl'd to Pluto's gloomy reign
The souls of mighty chiefs untimely slain;
Whose limbs unbury'd on the naked shore,
Devouring dogs and hungry vultures tore.
Since great Achilles and Atrides strove,
Such was the sovereign doom, and such the will of Jove.`,[],[]),
              col(`homer-il-lattimore`,`Richmond Lattimore`,1951,`Literal hexameters; scholarly standard`,`lattimore-iliad`,['Verse','Scholarly'],
                `Sing, goddess, the anger of Peleus' son Achilleus
and its devastation, which put pains thousandfold upon the Achaians,
hurled in their multitudes to the house of Hades strong souls
of heroes, but gave their bodies to be the delicate feasting
of dogs, of all birds, and the will of Zeus was accomplished
since that time when first there stood in division of conflict
Atreus' son the lord of men and brilliant Achilleus.
Which of the gods was it that brought them together in bitter collision?`,[],[]),
              col(`homer-il-fagles`,`Robert Fagles`,1990,`Energetic contemporary verse`,`fagles-iliad`,['Verse','Contemporary'],
                `Rage — Goddess, sing the rage of Peleus' son Achilles,
murderous, doomed, that cost the Achaeans countless losses,
hurling down the house of Death so many sturdy souls,
great fighters' souls, but made their bodies carrion,
feasts for the dogs and birds,
and the will of Zeus was moving toward its end.
Begin, Muse, when the two first broke and clashed,
Agamemnon lord of men and brilliant Achilles.
What god drove them to fight with such fury?
Apollo, the son of Zeus and Leto.`,[],[]),
              col(`homer-il-mitchell`,`Stephen Mitchell`,2011,`Spare, modern prose-verse`,`mitchell-iliad`,['Verse','Contemporary'],
                `Sing to me, Muse, of the man of wrath, Achilles,
the great Achaean hero who hurled down to Hades
the souls of so many valiant warriors
and gave their bodies to the dogs and the birds of prey,
as the will of Zeus was accomplished,
from the time when Agamemnon, king of men,
and brilliant Achilles first parted in bitter anger.
Which of the gods brought them together in quarrelsome strife?
Apollo, son of Zeus and Leto, who in anger against the king
brought a deadly plague upon the army.`,[],[]),
              col(`homer-il-wilson2023`,`Emily Wilson`,2023,`First woman's Iliad in English`,`wilson-iliad`,['Verse','Contemporary','Feminist'],
                `Sing, goddess, sing of the rage of Achilles, son of Peleus —
the accursed rage that brought the Greeks countless agonies
and hurled the mighty souls of many heroes
down to Hades, leaving their bodies
as plunder for the dogs and for the birds.
The will of Zeus was moving toward fulfillment.
Sing from the moment when the two men first stood facing
each other in conflict: Agamemnon, king of men, and great Achilles.
Which god made them fight and quarrel so terribly?
The son of Zeus and Leto.`,[],[]),
            ]
          },
          {
            label:`Book VI — Hector and Andromache`,
            cols:[
              col(`homer-il-vi-lattimore`,`Richmond Lattimore`,1951,`Scholarly verse`,`lattimore-iliad`,['Verse'],
                `So speaking glorious Hektor held out his arms to his baby,
who shrank back to his fair-girdled nurse's bosom
screaming, and frightened at the aspect of his own father,
terrified as he saw the bronze and the crest with its horse-hair,
nodding dreadfully, as he thought, from the peak of the helmet.
Then his beloved father laughed out, and his honored mother,
and at once glorious Hektor lifted from his head the helmet
and laid it in all its shining upon the ground.
Then taking up his dear son he tossed him about in his arms.`,[],[]),
              col(`homer-il-vi-fagles`,`Robert Fagles`,1990,`Vigorous verse`,`fagles-iliad`,['Verse'],
                `So brilliant Hector reached down for his son — but the boy recoiled,
cringing against his nurse's full breast, screaming out
at the sight of his own father, terrified by the flashing bronze,
the horsehair crest, the great ridge of the helmet nodding,
bristling terror — so it struck the child's eyes.
His loving father laughed, his mother laughed as well,
and Hector, glory of armies, quickly lifted
the helmet from his head and set it down on the ground,
then kissed his dear son, dandled him in his arms.`,[],[]),
              col(`homer-il-vi-wilson2023`,`Emily Wilson`,2023,`Modern verse`,`wilson-iliad`,['Verse'],
                `Glorious Hector reached toward his son with his arms,
but the boy clung back against the belt of his deep-breasted nurse, screaming,
frightened at the sight of his own father,
terrified by the bronze and the plume of horse-hair
nodding fearfully from on top of the helmet.
His dear father laughed, and his queenly mother.
At once great Hector lifted the helmet from his head
and laid it gleaming on the ground.
He kissed his dear son and dandled him in his arms,
and spoke in prayer to Zeus and the other gods.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'dante', name:'Dante Alighieri', dates:'1265–1321', lang:'Italian',
    desc:`The supreme poet of medieval Europe. The Divine Comedy — especially the Inferno — has attracted more English translators than perhaps any other literary work.`,
    acc:`dante`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Portrait_de_Dante.jpg/440px-Portrait_de_Dante.jpg`,
    works:[
      {
        id:'inferno', title:`Inferno (Divine Comedy I)`, year:`c. 1308–1320`,
        desc:`The poet's descent through the nine circles of Hell, guided by Virgil.`,
        chips:[`Verse`,`Medieval`,`Theology`],
        passages:[
          {
            label:`Canto I — Nel mezzo del cammin`,
            cols:[
              {id:`dante-inf-src`,tr:`Dante`,yr:`c. 1314`,note:`Tuscan Italian terza rima`,acc:`dante`,src:true,badges:[],
               text:`Nel mezzo del cammin di nostra vita / mi ritrovai per una selva oscura, / ché la diritta via era smarrita.`,ratings:[],comments:[]},
              col(`dante-inf-cary`,`Henry Francis Cary`,1814,`Blank verse; shaped Romantic reception`,`cary-inferno`,['Verse','Romantic'],
                `In the midway of this our mortal life,
I found me in a gloomy wood, astray
Gone from the path direct: and e'en to tell
It were no easy task, how savage wild
That forest, how robust and rough its growth,
Which to remember only, my dismay
Renews, in bitterness not far from death.
Yet, to declare the good discovered there,
I'll speak of other things that I discerned.
How first I enter'd it I scarce can say.`,[],[]),
              col(`dante-inf-longfellow`,`Henry Wadsworth Longfellow`,1867,`Literal blank verse; American classic`,`longfellow-inferno`,['Verse','Victorian'],
                `Midway upon the journey of our life
I found myself within a forest dark,
For the straightforward pathway had been lost.
Ah me! how hard a thing it is to say
What was this forest savage, rough, and stern,
Which in the very thought renews the fear.
So bitter is it, death is little more;
But of the good to treat, which there I found,
Speak will I of the other things I saw there.
I cannot well repeat how there I entered.`,[],[]),
              col(`dante-inf-sinclair`,`John D. Sinclair`,1939,`Facing prose; scholarly`,`sinclair-inferno`,['Prose','Scholarly'],
                `In the middle of the journey of our life I came to myself
within a dark wood where the straight way was lost.
Ah, how hard a thing it is to tell
of that wood, savage and harsh and dense,
the thought of which renews my fear.
So bitter is it that death is hardly more.
But to give account of the good which I found there
I will tell of the other things I saw.
I cannot rightly say how I entered it;
I was so full of sleep at that point.`,[],[]),
              col(`dante-inf-ciardi`,`John Ciardi`,1954,`Vigorous idiomatic verse`,`ciardi-inferno`,['Verse','Idiomatic'],
                `Midway in our life's journey, I went astray
from the straight road and woke to find myself
alone in a dark wood. How shall I say
what wood that was! I never saw so drear,
so rank, so arduous a wilderness!
Its very memory gives a shape to fear.
Death could scarce be more bitter than that place.
But since it came to good, I will recount
all that I found revealed there by God's grace.`,[],[]),
              col(`dante-inf-mandelbaum`,`Allen Mandelbaum`,1980,`Tercets; readable modern verse`,`mandelbaum-inferno`,['Verse','Contemporary'],
                `When I had journeyed half of our life's way,
I found myself within a shadowed forest,
for I had lost the path that does not stray.
Ah, it is hard to speak of what it was,
that savage forest, dense and difficult,
which even in recall renews my fear:
so bitter — death is hardly more severe!
But to retell the good discovered there,
I'll also tell the other things I saw.`,[],[]),
              col(`dante-inf-hollander`,`Robert & Jean Hollander`,2000,`Literal with full notes`,`hollander-inferno`,['Verse','Scholarly'],
                `In the middle of the journey of our life
I came to myself in a dark wood,
for the straight way was lost.
Ah, how hard it is to tell
the nature of that wood, savage, dense, and harsh,
the very thought of it renews my fear!
It is so bitter death is hardly more so.
But to set forth the good I found
I will describe the other things I saw.
I cannot clearly say how I had entered it.`,[],[]),
              col(`dante-inf-clive`,`Clive James`,2013,`Rhymed quatrains; witty modern voice`,`clive-inferno`,['Verse','Contemporary'],
                `At the midpoint of the path through life, I found
Myself lost in a wood so dark, the way
Ahead was blotted out. The keening sound
I still make shows how hard it is to say
How tough that tunnel was, how overgrown,
How savage. Just to think of it today
Brings back the fear. Scarcely less harsh, the tone
Of death itself. But I found good there too —
And that is what I chiefly mean to show.`,[],[]),
            ]
          },
          {
            label:`Canto III — The Gate of Hell`,
            cols:[
              col(`dante-inf-iii-longfellow`,`Henry Wadsworth Longfellow`,1867,`Literal blank verse`,`longfellow-inferno`,['Verse'],
                `Through me the way is to the city dolent;
Through me the way is to eternal dole;
Through me the way among the people lost.
Justice incited my sublime Creator;
Created me divine Omnipotence,
The highest Wisdom and the primal Love.
Before me there were no created things,
Only eterne, and I eternal last.
All hope abandon, ye who enter in!`,[],[]),
              col(`dante-inf-iii-ciardi`,`John Ciardi`,1954,`Idiomatic verse`,`ciardi-inferno`,['Verse'],
                `I AM THE WAY INTO THE CITY OF WOE.
I AM THE WAY TO A FORSAKEN PEOPLE.
I AM THE WAY INTO ETERNAL SORROW.
Sacred Justice moved my Architect.
I was raised here by Divine Omnipotence,
Primordial Love and Ultimate Intellect.
Only those elements time cannot wear
Were made before me, and beyond time I stand.
Abandon all hope ye who enter here.`,[],[]),
              col(`dante-inf-iii-mandelbaum`,`Allen Mandelbaum`,1980,`Modern verse`,`mandelbaum-inferno`,['Verse'],
                `THROUGH ME THE WAY INTO THE SUFFERING CITY,
THROUGH ME THE WAY TO THE ETERNAL PAIN,
THROUGH ME THE WAY THAT RUNS AMONG THE LOST.
Justice urged on my high artificer;
my maker was divine authority,
the highest wisdom, and the primal love.
Before me nothing but eternal things
were made, and I endure eternally.
ABANDON EVERY HOPE, WHO ENTER HERE.`,[],[]),
              col(`dante-inf-iii-clive`,`Clive James`,2013,`Rhymed verse`,`clive-inferno`,['Verse'],
                `THROUGH ME YOU ENTER INTO THE CITY OF WOES,
THROUGH ME YOU ENTER INTO ETERNAL PAIN,
THROUGH ME YOU ENTER THE POPULATION OF LOSS.
Justice moved my high maker. Holy Power,
The Highest Wisdom and the Primal Love
Made me. Before me nothing was created
Except eternal things, and I am eternal.
Abandon every hope, all you who enter.`,[],[]),
            ]
          },
          {
            label:`Canto V — Paolo and Francesca`,
            cols:[
              col(`dante-inf-v-cary`,`Henry Francis Cary`,1814,`Romantic blank verse`,`cary-inferno`,['Verse','Romantic'],
                `There is no greater grief than to remember days
Of joy, when misery is at hand. That kens
Thy teacher. Yet so eagerly if thou art bent
To know the primal root from whence our love
Gat being, I will do, as one who weeps
And tells his tale. One day for our delight
We read of Lancelot, how him love thrall'd.
Alone we were, and no suspicion near us.
Oft-times by that reading our eyes were drawn together,
And the colour from our faces fled.`,[],[]),
              col(`dante-inf-v-ciardi`,`John Ciardi`,1954,`Energetic verse`,`ciardi-inferno`,['Verse'],
                `There is no greater sorrow
than to recall our times of joy
in wretchedness — and this your teacher knows.
But if you feel such longing to learn
how we found love, I will tell you our tale.
One day, to pass the time away, we read
the rhyme of Lancelot, how love had mastered him.
We were alone with innocence and dim time.
Pause after pause that high old story drew
our eyes together while we blushed and paled.`,[],[]),
              col(`dante-inf-v-mandelbaum`,`Allen Mandelbaum`,1980,`Clear modern verse`,`mandelbaum-inferno`,['Verse'],
                `There is no greater sorrow
than thinking back upon a happy time
in misery — and this your teacher knows.
But if you long so much to learn the first
root of our love, I'll tell it — like one
who weeps and tells. One day we read for pleasure
of Lancelot, how love had overcome him.
We were alone and without any doubt.
That reading drew our eyes to meet, and made
our faces pale. But one point overcame us.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'purgatorio', title:`Purgatorio (Divine Comedy II)`, year:`c. 1308–1320`,
        desc:`The ascent of Mount Purgatory, where souls undergo purification before entering Paradise.`,
        chips:[`Verse`,`Medieval`,`Theology`],
        passages:[
          {
            label:`Canto I — Dawn on the Shore`,
            cols:[
              col(`dante-pur-i-longfellow`,`Henry Wadsworth Longfellow`,1867,`Literal verse`,`longfellow-purgatorio`,['Verse'],
                `To run o'er better waters hoists its sail
The little vessel of my genius now,
That leaves behind it so cruel a sea;
And of that second kingdom will I sing
Wherein the human spirit doth purge itself,
And to ascend to heaven becometh worthy.
But let dead Poesy here rise again,
O holy Muses, since that I am yours,
And here Calliope somewhat ascend,
My song accompanying with that sound.`,[],[]),
              col(`dante-pur-i-sinclair`,`John D. Sinclair`,1939,`Prose translation`,`sinclair-purgatorio`,['Prose'],
                `To run over better waters the little bark of my genius now lifts her sails,
leaving behind her a sea so cruel.
I will sing of that second realm where the human spirit is purged
and becomes fit to mount up to Heaven.
Here let dead Poesy rise again, O sacred Muses,
since I am yours, and here let Calliope arise somewhat,
accompanying my song with that sound of which the wretched Magpies felt the blow
so great that they despaired of pardon.`,[],[]),
              col(`dante-pur-i-mandelbaum`,`Allen Mandelbaum`,1982,`Modern verse`,`mandelbaum-purgatorio`,['Verse'],
                `To course across more kindly waters now
my talent's little vessel lifts her sails,
leaving behind a sea so cruel.
I shall sing about that second kingdom
in which the human soul is cleansed of sin,
becoming worthy of ascent to Heaven.
But here, since I am yours, O holy Muses,
let poetry rise up again from death;
let Calliope rise up somewhat here, accompanying my song
with that sweet sound that struck the Magpies with such misery.`,[],[]),
              col(`dante-pur-i-hollander`,`Robert & Jean Hollander`,2003,`Scholarly verse`,`hollander-purgatorio`,['Verse','Scholarly'],
                `To sail across more kindly waters now
my little bark of genius lifts her sails,
leaving behind so cruel a stretch of sea.
I'll sing of that second kingdom
where the human spirit purges itself
and becomes worthy to ascend to Heaven.
Here let dead Poesy rise again,
O holy Muses, since I am yours,
and here let Calliope arise a little,
following my song with the same strain that struck the ears of the wretched Magpies.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'virgil', name:'Virgil', dates:'70–19 BCE', lang:'Latin',
    desc:`Publius Vergilius Maro — Rome's national poet. The Aeneid shaped European epic for two millennia; translations range from Dryden's heroic verse to Fagles's driving contemporary lines.`,
    acc:`virgil`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Virgil_mosaic.jpg/440px-Virgil_mosaic.jpg`,
    works:[
      {
        id:'aeneid', title:`The Aeneid`, year:`29–19 BCE`,
        desc:`Aeneas flees burning Troy and founds the line that will become Rome.`,
        chips:[`Epic`,`Roman`,`Mythology`],
        passages:[
          {
            label:`Book I — Opening (Arma virumque)`,
            cols:[
              {id:`virgil-src`,tr:`Virgil`,yr:`19 BCE`,note:`Latin hexameters`,acc:`virgil`,src:true,badges:[],
               text:`Arma virumque cano, Troiae qui primus ab oris / Italiam, fato profugus, Laviniaque venit / litora.`,ratings:[],comments:[]},
              col(`virgil-dryden`,`John Dryden`,1697,`Heroic couplets; Augustan grandeur`,`dryden-aeneid`,['Verse','Neoclassical'],
                `Arms, and the man I sing, who, forc'd by fate,
And haughty Juno's unrelenting hate,
Expell'd and exil'd, left the Trojan shore.
Long labors, both by sea and land, he bore,
And in the doubtful war, before he won
The Latian realm, and built the destin'd town;
His banish'd gods restor'd to rites divine,
And settled sure succession in his line.`,[],[]),
              col(`virgil-day-lewis`,`C. Day Lewis`,1952,`Lyrical verse; poet laureate of UK`,`day-lewis-aeneid`,['Verse','Lyrical'],
                `I sing of a man who first from the walls of Troy,
Displaced by destiny, came to the Lavinian shores,
To Italy — a man much harried on sea and land
By the Powers above, because of the brooding anger of Juno,
Suffering much in war until he could found a city,
Bring his gods to Latium, whence arose the Latin race,
The Alban kings, and the high battlements of Rome.
Tell me the causes now, O Muse.`,[],[]),
              col(`virgil-mandelbaum`,`Allen Mandelbaum`,1971,`Flowing verse; standard classroom text`,`mandelbaum-aeneid`,['Verse','Contemporary'],
                `I sing of arms and of a man: his fate
had made him fugitive; he was the first
to journey from the coasts of Troy as far
as Italy and the Lavinian shores.
Across the lands and waters he was battered
beneath the violence of High Ones, for
the savage Juno's unforgetting anger;
and many sufferings were his in war
until he brought a city into being
and carried in his gods to Latium.`,[],[]),
              col(`virgil-fagles`,`Robert Fagles`,2006,`Driving contemporary verse`,`fagles-aeneid`,['Verse','Contemporary'],
                `Wars and a man I sing — an exile driven on by Fate,
he was the first to flee the coast of Troy,
destined to reach Lavinian shores and Italian soil,
yet many blows he took on land and sea from the gods above,
thanks to cruel Juno's relentless rage, and many losses
he bore in battle too, before he could found a city,
bring his gods to Latium, source of the Latin race,
the Alban lords and the high walls of Rome.`,[],[]),
            ]
          },
          {
            label:`Book II — The Fall of Troy (The Wooden Horse)`,
            cols:[
              col(`virgil-ii-dryden`,`John Dryden`,1697,`Heroic verse`,`dryden-aeneid`,['Verse','Neoclassical'],
                `Now deep in night, the drowsy Moon half way
Had mounted up the heaven's ecliptic way.
Silence was general, and the winds were laid;
The sea was hush'd, and nature's face decay'd.
To rest the birds, and to the folds the sheep:
When all things else were steep'd in peaceful sleep,
I thought on Troy, and on my country's fate,
What toils we suffer'd, and what woes we wait.`,[],[]),
              col(`virgil-ii-day-lewis`,`C. Day Lewis`,1952,`Lyrical verse`,`day-lewis-aeneid`,['Verse'],
                `It was the hour when, for weary men,
The first sleep comes, most welcome gift of the gods.
Now in my sleep there came before my eyes
Hector in great grief, his face wet with tears,
Torn as he was by Achilles' chariot,
Black with the dust and blood, his swollen feet
Still pierced with the thong. How changed he was
From that great Hector who returned in triumph
Wearing Achilles' armour, who had hurled
The Achaean fire-brands at the Trojan ships.`,[],[]),
              col(`virgil-ii-fagles`,`Robert Fagles`,2006,`Vigorous contemporary verse`,`fagles-aeneid`,['Verse','Contemporary'],
                `Now midnight was at hand, and drowsy Sleep
had blanketed the earth with healing calm.
Hector's ghost appeared before my eyes,
weeping his fill, in sorrow racked with grief.
He looked so black with dirt, with blood so clotted,
matted the swollen feet that had been pierced
and strung with thongs through their arching tendons.
Ah, how unlike that Hector who returned
wearing Achilles' armor, his own trophies,
or that one launching Trojan fire at the Greek ships.`,[],[]),
            ]
          },
          {
            label:`Book IV — Dido's Lament`,
            cols:[
              col(`virgil-iv-dryden`,`John Dryden`,1697,`Heroic verse; famous for passion`,`dryden-aeneid`,['Verse','Neoclassical'],
                `But anxious cares already seiz'd the queen:
She fed within her veins a flame unseen;
The hero's valour, acts, and birth inspire
Her soul with love, and fan the secret fire.
His words, his looks, imprinted in her heart,
Improve the passion, and increase the smart.
Now when the purple morn had chas'd away
The dewy shadows, and restor'd the day,
Her sister first with early care she sought,
And thus in mournful accents eas'd her thought.`,[],[]),
              col(`virgil-iv-mandelbaum`,`Allen Mandelbaum`,1971,`Clear verse`,`mandelbaum-aeneid`,['Verse'],
                `But anxious cares already seized the queen;
she fed within her veins a flame unseen;
the hero's valor, acts, and birth inspire
her soul with love and fan the secret fire.
His words, his looks, imprinted in her heart,
improve the passion and increase the smart.
Now when the purple morning chas'd away
the dewy shadows, and restor'd the day,
her sister first with early care she sought,
and thus in mournful accents eas'd her thought.`,[],[]),
              col(`virgil-iv-fagles`,`Robert Fagles`,2006,`Contemporary verse`,`fagles-aeneid`,['Verse','Contemporary'],
                `But now for some time the queen had been in the grip of love's pain,
hour by hour nursing the wound with her lifeblood,
consumed by the fire buried in her chest.
How often the man's courage comes back to haunt her,
his famous name, his face. The anguish holds her down,
she cannot sleep. The next morning's dawn
was raking the earth with Phoebus' torch and sweeping
the dew-drenched shadows from the sky
when Dido, beside herself, appeals to her sister, Anna.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'georgics', title:`Georgics`, year:`c. 29 BCE`,
        desc:`A didactic poem in four books on farming, bee-keeping, and the pastoral arts — suffused with philosophy and loss.`,
        chips:[`Verse`,`Nature`,`Didactic`],
        passages:[
          {
            label:`Book IV — The Bees`,
            cols:[
              col(`virgil-geo-dryden`,`John Dryden`,1697,`Heroic verse`,`dryden-georgics`,['Verse','Neoclassical'],
                `What makes a plenteous harvest, when to turn
The fruitful soil, and when to sow the corn;
The care of sheep, of oxen, and of kine,
And how to raise on elms the teeming vine;
The birth and genius of the frugal bee,
I sing, Maecenas, and I sing to thee.
Ye deities! who fields and plains protect,
Who rule the seasons and the year direct.`,[],[]),
              col(`virgil-geo-day-lewis`,`C. Day Lewis`,1940,`Lyrical verse`,`day-lewis-georgics`,['Verse'],
                `What makes the cornfield smile, what star-sign guides the ploughman
To turn the soil or train the vine, and the whole craft
Of tending cattle, keeping flocks, the know-how
Of the thrifty bee — this is my theme. O you most brilliant
Lights of the firmament, that guide the year upon its orbit;
And Bacchus and bounteous Ceres — since by your gifts the earth
Replaced the acorn diet of primitive man
With the corn ear and filled the mixing bowl with wine.`,[],[]),
              col(`virgil-geo-johnson`,`David Ferry`,2005,`Contemporary verse`,`ferry-georgics`,['Verse','Contemporary'],
                `What makes the crops rejoice, beneath what star
it's best to turn the soil, and wed the elm
to the vine, the care of cattle, keeping flocks,
the skill that thrifty bees require — all this
I'll sing, Maecenas. You, bright lights of heaven,
who guide the rolling year across the sky;
you, Bacchus and bountiful Ceres, if by your gifts
earth's crop of acorns changed to crops of grain.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
],

french: [
  {
    id:'voltaire', name:'Voltaire', dates:'1694–1778', lang:'French',
    desc:`François-Marie Arouet — the Enlightenment's sharpest satirist. Candide (1759) is his masterpiece: a furious, funny demolition of optimism.`,
    acc:`voltaire`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Atelier_de_Nicolas_de_Largilli%C3%A8re%2C_portrait_de_Voltaire_%28mus%C3%A9e_Carnavalet%29_-002.jpg/440px-Atelier_de_Nicolas_de_Largilli%C3%A8re%2C_portrait_de_Voltaire_%28mus%C3%A9e_Carnavalet%29_-002.jpg`,
    works:[
      {
        id:'candide', title:`Candide`, year:1759,
        desc:`A young man's picaresque journey through a world of catastrophe, stupidity, and cruelty — in search of the best of all possible worlds.`,
        chips:[`Satire`,`Philosophy`,`Picaresque`],
        passages:[
          {
            label:`Chapter 1 — Candide's Education`,
            cols:[
              col(`voltaire-tobias`,`Richard Aldington`,1927,`Sharp Edwardian prose`,`aldington-candide`,['Prose'],
                `In the castle of the Baron of Thunder-ten-tronck in Westphalia,
there was once a young man on whom nature had bestowed the most gentle manners.
His face was the index of his mind. His judgment was quite honest,
and he was extremely simple-minded; which was the reason, I apprehend,
that he bore the name of Candide.
The old servants of the house suspected him to be the son of the Baron's sister
by a kind, honest gentleman of the neighbourhood, whom that young lady would never marry
because he could only prove sixty-one quarterings.`,[],[]),
              col(`voltaire-butt`,`John Butt`,1947,`Penguin classic; standard postwar text`,`butt-candide`,['Prose'],
                `In the castle of the Baron of Thunder-ten-tronck, in Westphalia,
there was once a young man endowed by nature with the gentlest character.
His face was the index of his mind. He had a straightforward judgment
in conjunction with the most simple-minded honesty;
and this, I believe, is the reason why he was called Candide.
The old servants of the household suspected him of being the son of the Baron's sister
by a decent, honest gentleman of the neighborhood,
whom she had refused to marry because he could only produce seventy-one quarterings.`,[],[]),
              col(`voltaire-fasquelle`,`Lowell Bair`,1959,`Bantam classic`,`bair-candide`,['Prose'],
                `There lived in Westphalia, in the castle of the Baron of Thunder-ten-tronck,
a young man whom nature had endowed with the most gentle manners.
His physiognomy was a true picture of his soul.
He combined an honest mind with great simplicity of heart;
and I think it was for this reason that he was called Candide.
The old servants of the house suspected that he was the son of the Baron's sister
and of a good, honest gentleman of the neighborhood,
whom that young lady had never condescended to marry
because he could only prove seventy-one quarterings.`,[],[]),
              col(`voltaire-gordon`,`Peter Constantine`,2005,`Lively contemporary prose`,`constantine-candide`,['Prose','Contemporary'],
                `In the castle of Baron Thunder-ten-tronck in Westphalia lived a youth
whom nature had endowed with the sweetest of manners.
His face was an open book. His mind was straightforward and his heart pure.
It was for these reasons, I believe, that he bore the name Candide.
The older servants of the house suspected him to be the son of the Baron's sister
and a good and honorable gentleman of the vicinity,
whom the lady had never consented to marry
because he could only prove sixty-two ancestral quarterings,
the rest of his genealogical tree having been lost through the ravages of time.`,[],[]),
            ]
          },
          {
            label:`Chapter 3 — The Glory of War`,
            cols:[
              col(`voltaire-iii-butt`,`John Butt`,1947,`Ironic Penguin prose`,`butt-candide`,['Prose'],
                `Nothing could be more gallant, more spruce, more brilliant, more well-drilled than the two armies.
The trumpets, fifes, hautboys, drums, and cannon produced a harmony whose like had never been heard even in hell.
The cannon first of all laid flat about six thousand men on each side;
then the muskets swept away from this best of worlds
some nine or ten thousand ruffians who were infesting its surface.
The bayonet was also the sufficient reason for the death of several thousands.
The whole might amount to thirty thousand souls.
Candide, trembling like a philosopher, hid himself as best he could during this heroic butchery.`,[],[]),
              col(`voltaire-iii-bair`,`Lowell Bair`,1959,`Bantam prose`,`bair-candide`,['Prose'],
                `Nothing could be more fine, more brilliant, more glittering,
or better ordered than the two armies.
The trumpets, fifes, oboes, drums, and cannon produced a harmony
such as Hell itself had never heard.
First the cannon laid flat some six thousand men on each side;
then the muskets carried off from the best of worlds
some nine or ten thousand scoundrels who were infesting its surface.
The bayonet, too, was sufficient reason for the death of some thousands of men.
Candide, trembling like a philosopher, hid himself as well as he could during this heroic carnage.`,[],[]),
              col(`voltaire-iii-constantine`,`Peter Constantine`,2005,`Contemporary voice`,`constantine-candide`,['Prose','Contemporary'],
                `Nothing could be more beautiful, dashing, bright, and well-ordered than the two armies.
The trumpets, fifes, oboes, drums, and cannons produced a harmony
that was never heard even in hell.
The cannons first laid flat about six thousand men on each side,
then the muskets swept from this best of all possible worlds
nine or ten thousand villains who were encumbering the surface.
The bayonet too provided a sufficient reason for the death of some thousands.
Altogether, some thirty thousand men were killed.
Candide, trembling like a philosopher, hid himself during this heroic battle as best he could.`,[],[]),
            ]
          },
          {
            label:`Chapter 30 — Cultivate Our Garden`,
            cols:[
              col(`voltaire-xxx-butt`,`John Butt`,1947,`Classic Penguin ending`,`butt-candide`,['Prose'],
                `Pangloss sometimes said to Candide: "All events are linked together in the best of all possible worlds;
for after all, if you had not been driven from the beautiful castle by being kicked on the backside for love of Miss Cunégonde,
if you had not been subjected to the Inquisition,
if you had not wandered about America on foot,
if you had not run the Baron through with a sword,
if you had not lost all your sheep from the land of Eldorado,
you would not be here eating preserved citrons and pistachio nuts."
"That is very well put," said Candide, "but we must cultivate our garden." `,[],[]),
              col(`voltaire-xxx-bair`,`Lowell Bair`,1959,`Direct prose`,`bair-candide`,['Prose'],
                `Pangloss sometimes said to Candide: "All events are connected in the best of all possible worlds;
for, after all, if you had not been expelled from the beautiful castle
with great kicks for love of Miss Cunégonde,
if you had not been subjected to the Inquisition,
if you had not wandered over America on foot,
if you had not stuck your sword into the Baron,
if you had not lost all your sheep from the fine country of Eldorado,
you would not be here eating preserved citrons and pistachio-nuts."
"This is well said," replied Candide, "but we must cultivate our garden." `,[],[]),
              col(`voltaire-xxx-constantine`,`Peter Constantine`,2005,`Modern rendering`,`constantine-candide`,['Prose','Contemporary'],
                `Pangloss would sometimes say to Candide: "All events are linked in the best of all possible worlds.
For if you had not been chased out of the beautiful castle with great kicks for loving Miss Cunégonde,
if you had not been brought before the Inquisition,
if you had not traveled over America on foot,
if you had not given the Baron a good thrust of your sword,
and if you had not lost all your sheep from the fine land of Eldorado,
you would not be here eating preserved lemons and pistachio nuts."
"That is very well put," replied Candide, "but we must cultivate our garden." `,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'flaubert', name:'Gustave Flaubert', dates:'1821–1880', lang:'French',
    desc:`The supreme French stylist, whose agonized craftsmanship produced *Madame Bovary* — the novel that defines realism — and the great historical canvas of *Sentimental Education*.`,
    acc:`flaubert`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Gustave_Flaubert.jpg/440px-Gustave_Flaubert.jpg`,
    works:[
      {
        id:'bovary', title:`Madame Bovary`, year:1857,
        desc:`Emma Bovary's romantic illusions collide with the dreariness of provincial life.`,
        chips:[`Realism`,`Novel`,`Adultery`],
        passages:[
          {
            label:`Part I — Emma at the Window`,
            cols:[
              col(`flaubert-marx`,`Eleanor Marx-Aveling`,1886,`First English translation; famed for fidelity`,`marx-bovary`,['Prose','Victorian'],
                `Emma tried to find out what was meant in life by the words bliss, passion, ecstasy,
that had seemed to her so beautiful in books.
She had read "Paul and Virginia" and had dreamed of the bamboo hut, the negro Domingo,
the dog Fidele, but above all the sweet friendship of some dear little brother,
who seeks red fruit for you on trees taller than steeples,
who runs barefoot over the sand bringing you a bird's nest.
When she was thirteen, her father took her himself to town to place her in the convent.
She arrived at the Ursulines with a large box, all her six months' pocket-money spent on trousers, handkerchiefs, and bags.`,[],[]),
              col(`flaubert-steegmuller`,`Francis Steegmuller`,1957,`Mid-century American standard`,`steegmuller-bovary`,['Prose'],
                `Emma tried to find out what was actually meant in life by the words "bliss," "passion," "intoxication,"
which had seemed so beautiful to her in books.
She had read Paul et Virginie and dreamed of bamboo huts and a Negro slave and a dog,
especially of someone who would love her with deep, fierce devotion.
She would have liked to live in some old manor-house, like those long-waisted chatelaines
who spent their days leaning on stone sills, chin in hand,
watching a white-plumed knight come galloping on his black horse from the distant fields.
At that time she had a cult for Mary Queen of Scots and enthusiastic veneration for famous or unhappy women.`,[],[]),
              col(`flaubert-wall`,`Geoffrey Wall`,1992,`Penguin Modern Classics`,`wall-bovary`,['Prose'],
                `Emma was trying to find out what in real life was meant by the words felicity, passion, rapture,
which had looked so beautiful on the page.
She had read Paul and Virginia and had dreamed of the bamboo hut, the Negro Domingo,
the dog Fidele, but above all the sweet friendship of a little brother,
who gathers red fruit in great trees taller than church steeples,
who runs barefoot across the sand and brings you a bird's nest.
When she was thirteen, her father himself took her to the city to place her in a convent.`,[],[]),
              col(`flaubert-davis`,`Lydia Davis`,2010,`Spare contemporary prose`,`davis-bovary`,['Prose','Contemporary'],
                `Emma was trying to determine exactly what was meant in real life by the words
that had seemed so beautiful to her in books: bliss, passion, frenzy.
She had read Paul and Virginia and dreamed of the bamboo hut, the Negro Domingo,
the dog Fidele, but above all the sweet friendship of a devoted little brother,
who climbs to gather red fruits for you in tall trees,
running barefoot on the sand, bringing you a bird's nest.
When she was thirteen, her father himself took her to the city to place her in the convent.
They stayed at a hotel near the Bishop's palace.`,[],[]),
            ]
          },
          {
            label:`Part III — Emma's Death`,
            cols:[
              col(`flaubert-steegmuller-iii`,`Francis Steegmuller`,1957,`Controlled American prose`,`steegmuller-bovary`,['Prose'],
                `She ceased to exist. Her chest heaved briefly in rapid succession.
Her tongue protruded fully from her mouth;
her rolling eyes grew pale like the globes of two extinguished lamps,
and one would have thought her already dead had it not been for the terrifying acceleration
of her ribs, which were shaken by furious panting as though the soul were leaping to escape.
Felicite knelt down before the crucifix, and even the pharmacist himself bent his knees a little,
while Monsieur Canivet stared vaguely out at the square.`,[],[]),
              col(`flaubert-wall-iii`,`Geoffrey Wall`,1992,`Penguin rendering`,`wall-bovary`,['Prose'],
                `She was no more. How it had gone, nobody could tell.
Her chest heaved in rapid, rhythmic convulsions,
as though the soul were trying to free itself.
Her tongue hung out of her mouth;
her eyes, rolling back, went pale, like the globes of two lamps dying.
Felicite was kneeling before the crucifix;
the pharmacist himself had bowed a little;
and Monsieur Canivet stood gazing out absently at the square.`,[],[]),
              col(`flaubert-davis-iii`,`Lydia Davis`,2010,`Minimal contemporary prose`,`davis-bovary`,['Prose','Contemporary'],
                `She was no more.
Her chest heaved in quick, rhythmic convulsions.
Her tongue protruded from her mouth;
her eyes, rolling back, went pale, like the globes of two lamps going out.
One would have thought she was already dead, but for the terrifying acceleration
of her ribs, heaving as if the soul were struggling to break free.
Felicite knelt down before the crucifix, and the pharmacist himself bent his knees a little,
while Monsieur Canivet stood gazing absently out at the square.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'sentimental', title:`Sentimental Education`, year:1869,
        desc:`The romantic dreams and political failures of Frédéric Moreau across the upheavals of 1848 Paris.`,
        chips:[`Realism`,`Novel`,`Politics`],
        passages:[
          {
            label:`Part I — First Sight of Madame Arnoux`,
            cols:[
              col(`flaubert-sent-goldsmith`,`Goldsmith (anon.)`,1898,`Victorian prose`,`anon-sentimental`,['Prose'],
                `On the 15th September, 1840, at six o'clock in the morning,
the "Ville-de-Montereau" was lying alongside the quay of Saint-Bernard,
about to start, and sending up big whirls of smoke.
People came rushing in out of breath; casks, ropes, and baskets of linen
were in everyone's way; the sailors did not answer anybody;
people jostled against one another, and packages were piled up between the two paddle-boxes.
The uproar was drowned by the hissing of steam, which, escaping through the iron plates,
enveloped everything in whitish cloud.`,[],[]),
              col(`flaubert-sent-krailsheimer`,`Robert Baldick`,1964,`Penguin classic`,`baldick-sentimental`,['Prose'],
                `On the fifteenth of September 1840, at six in the morning,
the Ville de Montereau was about to sail, belching great plumes of smoke,
from the quay Saint-Bernard.
People arrived panting; barrels, ropes, baskets of washing were in the way;
the sailors answered no one; people jostled each other,
parcels were piled between the two paddle-wheel housings,
and the clamour mingled with the sound of escaping steam, which issued through the iron plates
and wrapped everything in a whitish mist.`,[],[]),
              col(`flaubert-sent-dolin`,`Geoffrey Wall`,2004,`Modern Penguin`,`wall-sentimental`,['Prose','Contemporary'],
                `On the fifteenth of September, eighteen-forty, at six in the morning,
La Ville de Montereau, on the point of departure, was belching great swirls of smoke
beside the quay Saint-Bernard.
People arrived breathless; barrels, ropes, baskets of washing lay in everyone's way;
the sailors answered nobody; people bumped into each other;
the packages piled up between the two paddle-wheels,
and the din dissolved in the hissing of steam,
which, escaping through the iron plates, wrapped everything in a whitish cloud.`,[],[]),
            ]
          },
          {
            label:`Part III — The Final Chapter (Looking Back)`,
            cols:[
              col(`flaubert-sent-end-baldick`,`Robert Baldick`,1964,`Clear Penguin prose`,`baldick-sentimental`,['Prose'],
                `He came to know the melancholy of the steamboat, the cold awakening in the tent,
the tedium of landscapes and ruins, the bitterness of interrupted friendships.
He returned home.
He went into society, and he had other loves.
But the ever-present memory of the first made them insipid;
and besides, the vehemence of desire, the very flower of feeling, was gone.
His intellectual ambitions had also dwindled. Years passed;
and he endured the idleness of his mind and the inertia of his heart.`,[],[]),
              col(`flaubert-sent-end-wall`,`Geoffrey Wall`,2004,`Restrained modern rendering`,`wall-sentimental`,['Prose','Contemporary'],
                `He came to know the melancholy of the steamboat, the chill of waking in a tent,
the tedium of landscapes and ruins, the bitterness of interrupted friendships.
He returned. He went into society and had other loves.
But the ever-present memory of the first had made them insipid;
and besides, the violence of desire, the sharp bloom of feeling itself, had gone.
His intellectual ambitions had also dwindled.
Years passed. And he endured the idleness of his intelligence and the inertia of his heart.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'proust', name:'Marcel Proust', dates:'1871–1922', lang:'French',
    desc:`The great novelist of time, memory, and consciousness. *In Search of Lost Time* is the longest novel in the French literary canon and one of the most translated.`,
    acc:`proust`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Marcel_Proust_1900.jpg/440px-Marcel_Proust_1900.jpg`,
    works:[
      {
        id:'swann', title:`Swann's Way (Vol. I)`, year:1913,
        desc:`The opening volume of *In Search of Lost Time* — from the famous madeleine to Swann's obsessive love for Odette.`,
        chips:[`Modernism`,`Memory`,`Stream-of-consciousness`],
        passages:[
          {
            label:`Opening — Longtemps, je me suis couché`,
            cols:[
              col(`proust-scott-moncrieff`,`C.K. Scott Moncrieff`,1922,`The original landmark English translation`,`scott-moncrieff`,['Prose','Classic'],
                `For a long time I used to go to bed early.
Sometimes, when I had put out my candle,
my eyes would close so quickly that I had not even time to say "I'm going to sleep."
And half an hour later the thought that it was time to go to sleep would awaken me;
I would try to put away the book which I imagined was still in my hands,
and to blow out the light; I had been thinking all the time, while I was asleep,
of what I had just been reading, but my thoughts had run into a channel of their own,
until I myself seemed actually to have become the subject of my book.`,[],[]),
              col(`proust-kilmartin`,`Terence Kilmartin`,1981,`Revised Scott Moncrieff; standard for decades`,`kilmartin-proust`,['Prose'],
                `For a long time I used to go to bed early.
Sometimes, when I had put out my candle,
my eyes would close so quickly that I had not even time to say "I'm going to sleep."
And half an hour later the thought that it was time to go to sleep would awaken me;
I would try to put away the book which I imagined was still in my hands,
and to blow out the light; I had been thinking all the time, while I was asleep,
of what I had just been reading, but my thoughts had taken a wrong turning,
and I myself seemed actually to have become the subject of my book.`,[],[]),
              col(`proust-madeleine-kilmartin`,`Terence Kilmartin`,1981,`Revised version`,`kilmartin-proust`,['Prose'],
                `And suddenly the memory revealed itself.
The taste was that of the little piece of madeleine
which on Sunday mornings at Combray
(because on those mornings I did not go out before mass)
when I went to say good morning to her in her bedroom,
my aunt Leonie used to give me, dipping it first in her own cup of real or of lime-flower tea.
The sight of the little madeleine had recalled nothing to my mind before I tasted it;
perhaps because I had so often seen such things in the meantime,
without tasting them, on the trays in pastry-cooks' windows.`,[],[]),
              col(`proust-madeleine-davis`,`Lydia Davis`,2002,`Spare modern version`,`davis-proust`,['Prose','Contemporary'],
                `And suddenly the memory appeared.
That taste was the taste of the little piece of madeleine
which on Sunday mornings at Combray
— because on those mornings I did not go out before it was time for mass —
when I went to say good morning to her in her bedroom,
my aunt Leonie would give me, after dipping it in her infusion of tea or lime-blossom.
The sight of the little madeleine had recalled nothing to me before I tasted it;
perhaps because, having seen them so many times since without eating them,
on the shelves of pastry cooks, their image had dissociated itself from those Combray days.`,[],[]),
            ]
          },
          {
            label:`Swann in Love — The Little Phrase`,
            cols:[
              col(`proust-swann-love-sm`,`C.K. Scott Moncrieff`,1922,`Classic rendering`,`scott-moncrieff`,['Prose','Classic'],
                `He was not jealous at first; he had no desire to know with whom she had been that evening,
where she could have gone at night-time when he had not been there.
He smiled at himself, and thought of the ridiculous things he would say
if he were to suspect this or that person.
He was not jealous then. But as day followed day, and Odette continued to lie to him,
he began to be tortured by uncertainty.
This woman, he told himself, was almost always free at night to spend the evenings with him
since she had not given him the key to her flat.`,[],[]),
              col(`proust-swann-love-davis`,`Lydia Davis`,2002,`Contemporary prose`,`davis-proust`,['Prose','Contemporary'],
                `He was not jealous at first; he did not desire to know where she had been that evening,
with whom she might have spent the night when he was not there.
He smiled to himself when he thought of the ridiculous jealousies he might have felt.
He was not jealous at that time. But as the days went by, he began to wonder
whether Odette had not had the occasion in his absence to be with other men.
And he was surprised to feel himself tortured by uncertainty.
This woman almost always came to him in the evenings at the most convenient hours for him;
he did not know what she did with the rest of her time.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'time-regained', title:`Time Regained (Vol. VII)`, year:1927,
        desc:`The final volume — the narrator attends a party among ruins of time and discovers his vocation as a writer.`,
        chips:[`Modernism`,`Memory`,`Time`],
        passages:[
          {
            label:`The Paving Stone — Involuntary Memory`,
            cols:[
              col(`proust-tr-kilmartin`,`Terence Kilmartin`,1981,`Standard English prose`,`kilmartin-proust`,['Prose'],
                `And I understood that all these materials for a work of literature were simply my past life;
I understood that they had come to me, in frivolous pleasures, in laziness, in tenderness, in unhappiness,
and that I had stored them up without divining the purpose for which they were destined
or even their continued existence any more than a seed does
when it forms within itself a reserve of all the nutritive substances from which it will feed a plant.
Like the seed, I could die once the plant had developed, and I found that I had lived for the sake of the plant without knowing it.`,[],[]),
              col(`proust-tr-treharne`,`Ian Patterson`,2003,`Penguin new translation`,`patterson-proust`,['Prose','Contemporary'],
                `And I understood that all the material for a literary work was my past life;
I understood that it had come to me, in frivolous pleasures, in idleness, in tenderness, in grief,
and that I had stored it up without knowing what it was destined for,
without even suspecting that it would prove viable, any more than the seed,
as it lays down its reserves of nourishment for the plant that will develop from it.
Like the seed, I might have died, once the plant was developed;
and I found that I had been living only for the sake of the plant without knowing it.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'camus', name:'Albert Camus', dates:'1913–1960', lang:'French',
    desc:`Algerian-French Nobel laureate. *The Outsider* and *The Plague* form the core of his philosophical literature of the absurd.`,
    acc:`camus`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg/440px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg`,
    works:[
      {
        id:'outsider', title:`The Outsider (L'Étranger)`, year:1942,
        desc:`Meursault kills an Arab on an Algerian beach — and is tried as much for his emotional detachment as for the act itself.`,
        chips:[`Absurdism`,`Existentialism`,`Novel`],
        passages:[
          {
            label:`Part I — The Opening Line`,
            cols:[
              col(`camus-gilbert`,`Stuart Gilbert`,1946,`First English translation; the benchmark`,`gilbert-stranger`,['Prose'],
                `Mother died today. Or, maybe, yesterday; I can't be sure.
The telegram from the Home says: YOUR MOTHER PASSED AWAY. FUNERAL TOMORROW. DEEP SYMPATHY.
Which leaves the matter doubtful; it could have been yesterday.
The Home for Aged Persons is at Marengo, some fifty miles from Algiers.
With the two o'clock bus I should get there well before nightfall.
Then I can spend the night there, keeping the usual vigil beside the body,
and be back here by tomorrow evening.
I have applied to my employer for two days' leave of absence.`,[],[]),
              col(`camus-laredo`,`Joseph Laredo`,1982,`British Penguin text`,`laredo-outsider`,['Prose'],
                `My mother died today. Or maybe yesterday, I don't know.
I had a telegram from the home: "Mother deceased. Funeral tomorrow. Yours sincerely."
That doesn't mean anything. It may have been yesterday.
The old people's home is at Marengo, about eighty kilometres from Algiers.
I'll take the two o'clock bus and get there in the afternoon.
That way I can be there for the vigil and come back tomorrow night.
I asked my employer for two days off and he couldn't refuse.`,[],[]),
              col(`camus-ward`,`Matthew Ward`,1988,`US Vintage standard; aimed at idiomatic accuracy`,`ward-stranger`,['Prose','Contemporary'],
                `Maman died today. Or yesterday maybe, I don't know.
I got a telegram from the home: "Mother deceased. Funeral tomorrow. Faithfully yours."
That doesn't mean anything. Maybe it was yesterday.
The old people's home is at Marengo, about eighty kilometers from Algiers.
I'll take the two o'clock bus and get there in the afternoon.
That way I can be there for the vigil and come back tomorrow night.
I asked my employer for two days off and there was no way he was going to refuse.`,[],[]),
              col(`camus-smith`,`Sandra Smith`,2012,`Recent translation; restores the French emotional distance`,`smith-outsider`,['Prose','Contemporary'],
                `My mother died today. Or perhaps yesterday, I don't know.
I received a telegram from the retirement home: "Mother deceased. Burial tomorrow. Yours sincerely."
That doesn't tell me anything. It might have been yesterday.
The retirement home is in Marengo, eighty kilometres from Algiers.
I'll take the two o'clock bus and arrive in the afternoon,
so I can be there for the vigil and come back tomorrow evening.
I asked my employer for two days off and he couldn't refuse.`,[],[]),
            ]
          },
          {
            label:`Part I — The Beach (Shooting the Arab)`,
            cols:[
              col(`camus-beach-gilbert`,`Stuart Gilbert`,1946,`First translation`,`gilbert-stranger`,['Prose'],
                `The beach was now deserted, for the Arabs had gone.
The air seemed to strum with heat; it pressed on my eyelids.
I stood quite still, and the glare beat up on me from the sand.
I tried to step forward but knew that it was folly, futile.
Sweat was running down my face. The sun was the same as it had always been,
the same relentless glare. The Arab was still there.
He had not moved. He was looking at me still.
Then everything began to reel before my eyes.`,[],[]),
              col(`camus-beach-ward`,`Matthew Ward`,1988,`US standard`,`ward-stranger`,['Prose','Contemporary'],
                `The scorching air came shimmering with heat. The whole beach was throbbing in the sunlight,
and I could feel the sweat beading on my eyebrows.
The sun was the same as it had always been, just as relentless as that other day
when I had escorted Maman to the grave. To the left there was a rock,
and I started toward it, but the Arab kept watching me.
At the sound of my footsteps on the sand, the Arab turned over.
His hand closed over the knife, and he held it toward me, in the sun.
A shaft of light shot up from the steel.`,[],[]),
              col(`camus-beach-smith`,`Sandra Smith`,2012,`Contemporary British rendering`,`smith-outsider`,['Prose','Contemporary'],
                `The whole beach was throbbing in the sunlight and the sea was thick and heavy.
I could feel the sweat running down my face.
The sun was the same as it had always been: relentless and cruel.
Far away, the Arab lying in the shade of the rock seemed to me no more than a shadow.
I walked towards him. I could feel the sweat gathering under my arm.
The heat was unbearable. When I got to within two metres of him he stopped moving.
I could hear nothing but the soft lapping of the sea against the sand.
The Arab looked at me, and my fingers closed around the gun in my pocket.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'plague', title:`The Plague (La Peste)`, year:1947,
        desc:`Bubonic plague strikes Oran, Algeria. An allegory of occupation, resistance, and the limits of heroism.`,
        chips:[`Allegory`,`Existentialism`,`Novel`],
        passages:[
          {
            label:`Part I — Dr. Rieux Sees the First Rat`,
            cols:[
              col(`camus-plague-gilbert`,`Stuart Gilbert`,1948,`Pioneering translation`,`gilbert-plague`,['Prose'],
                `The concierge had noticed the rat on the landing, had kicked it aside,
and only realized it was dead when it fell quite still at the foot of the wall.
He stooped to look at it, and then — repulsed — he kicked it hard against the wall.
Only then did the creature move, but only to turn over on its back,
its paws in the air and a thin trickle of blood oozing from its snout.
The concierge stared at it for a moment, then went slowly back to his room.
He rang me up a little later to tell me about it, and thought it worth describing
in some detail — a rat comes out to die in the open air, something you don't see every day.`,[],[]),
              col(`camus-plague-conforth`,`Robin Buss`,2001,`Penguin modern translation`,`buss-plague`,['Prose','Contemporary'],
                `The concierge had seen the rat on the landing, given it a kick,
and only realized it was dead when it rolled over against the foot of the wall.
He stood looking at it and then kicked it away.
But then the rat moved, just turned over on its back, with its legs in the air
and a little blood coming from its snout.
The concierge stared at it for a moment.
Then he went slowly back into his room and called me a little later to tell me about it.
He thought it worth describing in some detail.`,[],[]),
            ]
          },
          {
            label:`Part V — The Final Reflection`,
            cols:[
              col(`camus-plague-end-gilbert`,`Stuart Gilbert`,1948,`Classic version`,`gilbert-plague`,['Prose'],
                `And, indeed, as he listened to the cries of joy rising from the town,
Rieux remembered that such joy is always imperiled.
He knew what those jubilant crowds did not know but could have learned from books:
that the plague bacillus never dies or disappears for good;
that it can lie dormant for years and years in furniture and linen-chests;
that it bides its time in bedrooms, cellars, trunks, and bookshelves;
and that perhaps the day would come when, for the bane and enlightening of men,
it would rouse up its rats again and send them forth to die in a happy city.`,[],[]),
              col(`camus-plague-end-buss`,`Robin Buss`,2001,`Contemporary Penguin`,`buss-plague`,['Prose','Contemporary'],
                `And it was he, too, who knew — as Rambert had said — that he had won nothing.
The plague does not care about mankind. It comes; it goes. It will return.
For indeed, as he listened to the cries of joy rising from the town,
Rieux remembered that this joy was always under threat.
He knew what the jubilant crowd did not know, and what one can read in books:
that the plague bacillus never dies or vanishes entirely;
that it can remain dormant for dozens of years in furniture and clothing;
that it waits patiently in bedrooms, cellars, trunks, handkerchiefs and old papers.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'hugo', name:'Victor Hugo', dates:'1802–1885', lang:'French',
    desc:`The towering figure of French Romanticism. *Les Misérables* is simultaneously a novel of social protest, historical panorama, and spiritual redemption.`,
    acc:`hugo`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg/440px-Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg`,
    works:[
      {
        id:'miserables', title:`Les Misérables`, year:1862,
        desc:`Jean Valjean's decades-long struggle for redemption against the pursuing Inspector Javert.`,
        chips:[`Historical`,`Social`,`Romanticism`],
        passages:[
          {
            label:`Volume I — Jean Valjean Released`,
            cols:[
              col(`hugo-wilbour`,`Charles Wilbour`,1862,`First English translation; literal Victorian prose`,`wilbour-miserables`,['Prose','Victorian'],
                `Jean Valjean had paused.
The Bishop's candlesticks were on the mantel. He saw them.
He thought of all the happiness and all the peace which he could procure for his sister
and her children with that silver.
He began to move toward the door, crossed the room,
took the candlesticks,
broke into a rapid walk, went out by the window,
leaving the door open.
And then he stopped in the middle of the road and thought for a long time.`,[],[]),
              col(`hugo-fahnestock`,`Lee Fahnestock & Norman MacAfee`,1987,`Signet classic; readable modern prose`,`fahnestock-miserables`,['Prose'],
                `He paused. The Bishop's candlesticks were on the mantelpiece.
He thought of his sister, her children, his own life, what peace a little silver could buy.
He moved toward the door, crossed the room,
picked up the candlesticks.
He went quickly out the window, leaving the door open behind him.
And then he stopped in the middle of the road.
He stood there a long time, motionless.
He looked at the candlesticks. He looked at the sky.
Something in him shifted. He began to weep.`,[],[]),
              col(`hugo-rose`,`Christine Donougher`,2013,`Penguin Deluxe; scholarly notes`,`donougher-miserables`,['Prose','Contemporary'],
                `He was still, and Valjean stood in silence.
What was happening inside him?
It was impossible to say. He was undergoing one of those violent inner transitions.
He was looking at the Bishop. It was clear, palpably clear, that this old man,
this Bishop, this venerable man who was no more to him than a stranger
— had wept for him.
Those tears were the decisive event. If he had not wept, Valjean might have remained hardened.
But those tears softened him. He felt something extraordinary stir within him.`,[],[]),
            ]
          },
          {
            label:`Volume IV — Gavroche on the Barricade`,
            cols:[
              col(`hugo-iv-wilbour`,`Charles Wilbour`,1862,`Victorian prose`,`wilbour-miserables`,['Prose','Victorian'],
                `Gavroche, exposed to the fire, teased the musketry.
He seemed to be greatly enjoying himself.
He was the sparrow pecking at the hunters.
He replied to each discharge by a jest.
They aimed at him incessantly, and always missed him.
The National Guards and the soldiers laughed at him.
He lay down, then sprang up, hid in a doorway,
then leaped out, disappeared, reappeared, escaped, returned,
made faces at the fusillade, and meanwhile pilfered cartridges from the fallen.`,[],[]),
              col(`hugo-iv-fahnestock`,`Fahnestock & MacAfee`,1987,`Modern prose`,`fahnestock-miserables`,['Prose'],
                `Gavroche, exposed to the fire, teased the musketry.
He seemed to be greatly enjoying himself.
He was the sparrow pecking at the hunters.
He replied to each discharge by a jest.
They aimed at him incessantly, and always missed him.
The National Guards and the soldiers laughed as they took aim at him.
He lay down flat, then sprang up, hid himself in a doorway,
then bounded out, disappeared, reappeared, escaped, returned,
made faces at the fusillade, and meanwhile pilfered cartridges.`,[],[]),
              col(`hugo-iv-donougher`,`Christine Donougher`,2013,`Recent scholarly version`,`donougher-miserables`,['Prose','Contemporary'],
                `Gavroche under fire was baiting the fusillade.
He appeared to be having a great deal of fun.
He was the sparrow pecking at the huntsmen.
He responded to each shot with a gibe.
They aimed at him constantly, constantly missing.
The National Guardsmen and soldiers laughed as they took aim at him.
He lay flat, then jumped up, disappeared into a doorway,
then reappeared, vanished, fled, returned,
answered the volleys with antics, and all the while plundered cartridges.`,[],[]),
            ]
          },
          {
            label:`Volume V — The Death of Javert`,
            cols:[
              col(`hugo-v-fahnestock`,`Fahnestock & MacAfee`,1987,`Modern prose`,`fahnestock-miserables`,['Prose'],
                `There was a great noise in the city.
The thunder of cannon, the volleys of musketry, the uproar of the people,
the alarm-bells — all this had been going on for three days.
At the corner of the Rue Saint-Denis, a woman sat on a doorstep, nursing a child.
She had been there since morning. Men with guns went past, but she did not move.
Her face was pale. Her dress was in tatters.
She did not even look at the men going by.
She was humming quietly to the child in her arms.`,[],[]),
              col(`hugo-v-donougher`,`Christine Donougher`,2013,`Contemporary Penguin`,`donougher-miserables`,['Prose','Contemporary'],
                `There was an enormous commotion in the city.
Cannon fire, volleys of musketry, the tumult of the crowd,
alarm-bells ringing in the churches — this had been going on for three days.
On the corner of the Rue Saint-Denis, a woman was sitting on a doorstep, nursing a child.
She had been there since morning. Men bearing arms went past her but she did not stir.
Her face was pale. Her clothes were in rags.
She paid no attention to the men going by.
She was quietly humming to the child at her breast.`,[],[]),
            ]
          },
        ]
      },
    ]
  },

  {
    id:'celine', name:`Louis-Ferdinand Céline`, dates:'1894–1961', lang:'French',
    desc:`The most controversial and original voice in 20th-century French prose. Journey to the End of the Night shattered all existing conventions of literary language.`,
    acc:`#6a7a5a`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/C%C3%A9line_vers_1932.jpg/440px-C%C3%A9line_vers_1932.jpg`,
    works:[{
      id:'journey', title:`Journey to the End of the Night`, year:1932,
      chips:[`Modernism`,`War`,`Antiheroic`],
      passages:[{
        label:`Opening — Ferdinand Goes to War`,
        cols:[
          col(`celine-manheim`,`Ralph Manheim`,1983,`Long-standard; praised for capturing Céline's register`,`manheim-journey`,['Prose','Contemporary'],
            `It all started just like that, without any warning.
I'd never done anything to him. I mean it.
It was foolishness, pure foolishness that got me mixed up in that journey.
I was standing outside a café in Paris when a Colonel came riding up on a horse.
He was a man who liked his food, the Colonel.
He sat his horse well, straight in the saddle.
The band was playing a march on the pavement,
and people were pushing against each other to get a better look.
The Colonel didn't seem to notice that I was there.`,[],[]),
          col(`celine-marks`,`John H.P. Marks`,1934,`First English translation`,`marks-journey`,['Prose'],
            `It all started just like that, on account of my getting mixed up with it.
I'd never done anything to him. Just like that, on account of sheer foolishness.
I was standing outside a café when the Colonel rode up on horseback.
He was a man who looked as if he enjoyed his dinner — the Colonel.
He was a good horseman too.
The band was playing a military march on the pavement,
and the soldiers were marching.
The Colonel patted his horse on the neck to keep it quiet.
He didn't seem to see me at all.`,[],[]),
        ]
      }]
    }]
  },
  {
    id:'sartre', name:`Jean-Paul Sartre`, dates:'1905–1980', lang:'French',
    desc:`The defining figure of French existentialism. Nausea is his first and most enduring novel — the world stripped of meaning, seen through a nauseous, exhilarating clarity.`,
    acc:`#5a6a7a`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Jean-Paul_Sartre_FP.jpg/440px-Jean-Paul_Sartre_FP.jpg`,
    works:[{
      id:'nausea', title:`Nausea (La Nausée)`, year:1938,
      chips:[`Existentialism`,`Novel`,`Diary`],
      passages:[{
        label:`The Chestnut Tree Root`,
        cols:[
          col(`sartre-baldick`,`Robert Baldick`,1965,`Penguin standard for decades`,`baldick-nausea`,['Prose'],
            `So I was in the park just now.
The roots of the chestnut tree sank into the ground just below my bench.
I no longer remembered that it was a root.
Words had disappeared, and with them the meaning of things,
the ways in which they could be used,
the feeble landmarks which men have traced on their surfaces.
I was sitting, slightly hunched, my head bowed, alone in front of that black, knotty mass,
entirely naked and shapeless, which terrified me.
Then I had this vision.`,[],[]),
          col(`sartre-alexander`,`Lloyd Alexander`,1949,`First English translation`,`lloyd-nausea`,['Prose'],
            `So I was in the park just now.
The roots of the chestnut tree were sunk in the ground just under my bench.
I couldn't remember it was a root any more.
The words had vanished and with them the significance of things,
their methods of use, and the feeble points of reference
which men have traced on their surface.
I was sitting, stooping forward, head bowed, alone in front of that black, knotty mass,
entirely beastly, which frightened me.
Then I had this flash of understanding.`,[],[]),
        ]
      }]
    }]
  },
  {
    id:'dumas', name:'Alexandre Dumas', dates:'1802–1870', lang:'French',
    desc:`The supreme popular novelist of 19th-century France. The Count of Monte Cristo is the greatest revenge novel in world literature.`,
    acc:`#8a6a40`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Alexandre_Dumas_p%C3%A8re.jpg/440px-Alexandre_Dumas_p%C3%A8re.jpg`,
    works:[{
      id:'monte-cristo', title:`The Count of Monte Cristo`, year:`1844–1846`,
      chips:[`Adventure`,`Revenge`,`Historical`],
      passages:[{
        label:`Chapter 1 — Arrival at Marseilles`,
        cols:[
          col(`dumas-buss`,`Robin Buss`,1996,`Penguin Classics; most complete and praised`,`buss-cristo`,['Prose','Contemporary'],
            `On February 24, 1815, the watchtower at Marseilles reported the arrival of the three-masted vessel Pharaon,
coming from Smyrna, Trieste and Naples.
As usual, a harbor pilot immediately put out from shore,
passed between the Château d'If and the tower of Planier,
and brought her in to lie between the islands of Pomègues and Ratonneau.
Immediately, as customary, a shore boat from Saint-Nicolas approached and provided an escort.
On the deck of the ship, observing everything with keen attention, was a young man
who seemed to be in command of the vessel from the way the crew watched his every movement.`,[],[]),
          col(`dumas-coward`,`Chapman and Hall`,1846,`First English translation`,`chapman-cristo`,['Prose','Victorian'],
            `On the 24th of February, 1815, the look-out at Notre-Dame de la Garde signalled
the three-master, the Pharaon, from Smyrna, Trieste, and Naples.
As usual, a pilot put off immediately, and rounding the Château d'If, got on board the vessel
between Cape Morgiou and Rion island.
Immediately, and according to custom, the ramparts of Fort Saint-Jean
were covered with spectators; it is always an event at Marseilles for a ship to come into port,
especially when this ship, like the Pharaon, has been built, rigged, and laden at the old Phocee docks.`,[],[]),
        ]
      }]
    }]
  },
],

russian: [
  {
    id:'tolstoy', name:'Leo Tolstoy', dates:'1828–1910', lang:'Russian',
    desc:`The titan of Russian realism. *Anna Karenina* and *War and Peace* are monuments of the novel form, each attracting generations of translators.`,
    acc:`tolstoy`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg/440px-L.N.Tolstoy_Prokudin-Gorsky.jpg`,
    works:[
      {
        id:'anna', title:`Anna Karenina`, year:1878,
        desc:`Anna's passionate love affair destroys her marriage, reputation, and finally her life.`,
        chips:[`Realism`,`Love`,`Society`],
        passages:[
          {
            label:`Part I — Opening`,
            cols:[
              col(`tolstoy-anna-garnett`,`Constance Garnett`,1901,`The foundational English translation`,`garnett-anna`,['Prose','Classic'],
                `Happy families are all alike; every unhappy family is unhappy in its own way.
Everything was in confusion in the Oblonskys' house.
The wife had discovered that the husband was carrying on an intrigue with a French girl,
who had been a governess in their family,
and she had announced to her husband that she could not go on living in the same house with him.
This position of affairs had now lasted three days,
and not only the husband and wife themselves, but all the members of their family
and household, were painfully conscious of it.`,[],[]),
              col(`tolstoy-anna-maude`,`Louise & Aylmer Maude`,1918,`Oxford World's Classics standard`,`maude-anna`,['Prose'],
                `Happy families are all alike; every unhappy family is unhappy in its own way.
Everything was upset in the Oblonsky household.
The wife had found out that her husband was carrying on an intrigue with their former French governess,
and had announced to him that she could not continue to live in the same house with him.
This state of things had now lasted for three days,
and not only the husband and wife themselves,
but the rest of the family and the whole household, felt it painfully.`,[],[]),
              col(`tolstoy-anna-edmonds`,`Rosemary Edmonds`,1954,`Penguin Classic; long the standard`,`edmonds-anna`,['Prose'],
                `All happy families resemble one another; every unhappy family is unhappy in its own way.
Everything was confusion in the Oblonsky household.
The wife had found out that her husband was having an intrigue with the French governess
who had been in the house before, and she had told her husband
that she could not live in the same house with him.
This state of things had already been going on for three days,
and not only the husband and wife themselves,
but all the members of the family, were painfully aware of it.`,[],[]),
              col(`tolstoy-anna-pvk`,`Pevear & Volokhonsky`,2000,`Acclaimed for fidelity to Russian idiom`,`pvk-anna`,['Prose','Contemporary'],
                `All happy families are alike; each unhappy family is unhappy in its own way.
Everything was mixed up in the Oblonsky household.
The wife had found out that the husband was having an affair with the French governess
who had been with them, and had announced to the husband
that she could not live in the same house with him.
This situation had continued for three days now,
and was painfully felt by the couple themselves,
by all the members of the family, and by the household.`,[],[]),
              col(`tolstoy-anna-bartlett`,`Rosamund Bartlett`,2014,`Oxford; attentive to Tolstoy's style`,`bartlett-anna`,['Prose','Contemporary'],
                `All happy families resemble one another, but each unhappy family is unhappy in its own way.
The Oblonsky household was in a state of chaos.
The mistress of the house had found out that her husband was having an affair
with the French governess who had been living with them,
and she had told her husband that she was unable to continue living in the same house as him.
Three days had now gone by since then,
and the situation was being acutely felt by the couple themselves,
by all the members of the family, and by the servants.`,[],[]),
            ]
          },
          {
            label:`Part III — Levin Mowing`,
            cols:[
              col(`tolstoy-anna-mow-garnett`,`Constance Garnett`,1901,`Classic rendering`,`garnett-anna`,['Prose','Classic'],
                `The longer Levin mowed, the oftener he experienced those moments of unconsciousness
in which it seemed not his hands that swung the scythe, but the scythe mowing of itself,
a body full of life and consciousness of its own,
and as though by magic, without thinking of it,
the work accomplished itself, regular and careful.
These were the most blissful moments.`,[],[]),
              col(`tolstoy-anna-mow-maude`,`Louise & Aylmer Maude`,1918,`Oxford standard`,`maude-anna`,['Prose'],
                `The longer Levin went on mowing, the oftener he experienced those moments of oblivion
during which his arms no longer seemed to swing the scythe,
but the scythe itself his whole body, so full of life and consciousness;
and as if by magic, regularly and definitely without a thought being given to it,
the work accomplished itself of its own accord.
These were blessed moments.`,[],[]),
              col(`tolstoy-anna-mow-pvk`,`Pevear & Volokhonsky`,2000,`Contemporary version`,`pvk-anna`,['Prose','Contemporary'],
                `The longer Levin mowed, the more often he felt those moments of oblivion
during which it was no longer his arms swinging the scythe,
but the scythe itself that propelled his whole body,
filled with life and conscious of itself,
and the work was done of itself, as if by magic,
precisely and neatly, without thought.
Those were the most blessed moments.`,[],[]),
              col(`tolstoy-anna-mow-bartlett`,`Rosamund Bartlett`,2014,`Oxford; close to Tolstoy's rhythms`,`bartlett-anna`,['Prose','Contemporary'],
                `The longer Levin mowed, the more frequently he experienced those moments of oblivion
in which it was no longer his arms which swung the scythe,
but the scythe itself seemed to propel a body
that was full of life and self-awareness,
and, as if by magic, the work completed itself of its own accord,
precisely and evenly, with no thought on his part.
These were his most blissful moments.`,[],[]),
            ]
          },
          {
            label:`Part VII — Anna's Death`,
            cols:[
              col(`tolstoy-anna-death-garnett`,`Constance Garnett`,1901,`Victorian rendering`,`garnett-anna`,['Prose','Classic'],
                `And the candle by which she had read the book filled with trouble and deceit,
sorrow and evil, flared up with greater brightness than she had ever known,
revealing to her all that before had been in darkness,
then flickered, grew dim, and was quenched for ever.
Anna saw herself lying on the track, and the candle by which she had been reading
— the book filled with trouble and deceit, sorrow and evil —
flared up more brightly than before, lighting up for her
everything that had been dark before, sputtered, began to fade, and went out forever.`,[],[]),
              col(`tolstoy-anna-death-pvk`,`Pevear & Volokhonsky`,2000,`Acclaimed fidelity`,`pvk-anna`,['Prose','Contemporary'],
                `And the candle by the light of which she had been reading the book filled with anxieties,
deceptions, grief and evil, flared up with a brighter light than ever before,
lit up for her all that had been in darkness, sputtered, grew dim
and went out forever.
Anna felt that she was dying — and she did not fear death.
She only felt that it had been better before.
But the candle by whose light she had been reading the book
— that book filled with fear, deception, grief and evil —
flared up with a brighter light than it had ever had, illuminating
for her all that before had been in darkness, sputtered once and went out.`,[],[]),
              col(`tolstoy-anna-death-bartlett`,`Rosamund Bartlett`,2014,`Recent Oxford version`,`bartlett-anna`,['Prose','Contemporary'],
                `And the candle by the light of which she had been reading a book
filled with anxieties, deceptions, grief, and evil
flared up with a brighter light than it had ever had before,
illuminating for her everything that before had been in darkness,
sputtered, grew faint, and went out forever.
She thought: was all this real?
That first encounter, the snow on the road,
his face — young, open, his eyes full of feeling.
Levin at the window, the moonlit snow,
the pale lamp in the corridor.
All these things had been real. They had been good.
Now they were gone.`,[],[]),
            ]
          },
          {
            label:`Epilogue — Levin's Faith`,
            cols:[
              col(`tolstoy-anna-faith-garnett`,`Constance Garnett`,1901,`Classic rendering`,`garnett-anna`,['Prose','Classic'],
                `He had been living now, not knowing and not seeing any chance of knowing,
what he was and what he was living for,
and he had been so harassed by this ignorance that he was afraid of suicide,
and yet he had firmly laid down his own individual road in life.
The day before he had gone to bed thinking and feeling that he had found a solution.
He awoke before dawn, and in the dark he began to reconsider what had been solved:
"I know what is good and what is evil.
And I know it not because I reason it out,
but because I feel it directly in myself."
He said these words to himself, and felt calm.`,[],[]),
              col(`tolstoy-anna-faith-pvk`,`Pevear & Volokhonsky`,2000,`Contemporary version`,`pvk-anna`,['Prose','Contemporary'],
                `He had been living without knowing what he was or what he was living for,
and had been so tormented by the question that he was afraid of life,
yet he had gone on living.
Now he had stopped tormenting himself.
He knew. Not by reason — reason was still the same as before.
But by some other means.
"I know what is good" — and with this knowledge came a peace,
a quiet joy, as if something whole and unbroken had settled
in the center of his life, and all the rest of it
simply moved around this thing, undisturbed.`,[],[]),
              col(`tolstoy-anna-faith-bartlett`,`Rosamund Bartlett`,2014,`Oxford close reading`,`bartlett-anna`,['Prose','Contemporary'],
                `He was living without knowing what he was,
or what he was living for — and yet he went on living.
The question had tormented him. He had felt himself on the edge.
But now a new peace had come — not by reasoning his way to it,
but by some other path entirely, some direct, interior knowledge.
"I know what is right," he said to himself.
And this was enough.
The sky above was the same. The peasants were the same.
But Levin felt that something had settled in him
that would not come undone.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'war-peace', title:`War and Peace`, year:1869,
        desc:`Five aristocratic families across Napoleon's invasion of Russia — the most ambitious novel in any language.`,
        chips:[`Historical`,`Epic`,`War`],
        passages:[
          {
            label:`Book I — Natasha's First Ball`,
            cols:[
              col(`tolstoy-wp-ball-garnett`,`Constance Garnett`,1904,`Classic rendering`,`garnett-wp`,['Prose','Classic'],
                `Natasha was not dancing. She stood in her girlish dress, with her bare slender arms hanging,
and her slightly bended feet in thin dancing-slippers.
Her face expressed not the least sign of fear or embarrassment.
She only looked serious, looked at the dancing people,
and now and then turned to Prince Andrei with an earnest, questioning look.
When the mazurka began, Prince Andrei looked at her again.
"Shall we dance?" he said. She answered at once, readily.
He took her hand and led her out.`,[],[]),
              col(`tolstoy-wp-ball-maude`,`Louise & Aylmer Maude`,1922,`Oxford standard`,`maude-wp`,['Prose'],
                `Natasha was not dancing. She stood in her girlish white dress, with bare slender arms,
her slightly bent feet in thin dancing-slippers, and her neck innocent of any ornament,
at the very edge of the ball, looking on at everything with a smile.
When the mazurka began, Prince Andrei walked up to her.
"May I have this dance?" She answered without embarrassment,
without the coyness of a debutante: "Of course."
He took her hand. She turned to him with an open, childlike gaze.`,[],[]),
              col(`tolstoy-wp-ball-pvk`,`Pevear & Volokhonsky`,2007,`Major contemporary version`,`pvk-wp`,['Prose','Contemporary'],
                `Natasha was not dancing. She stood in her girlish white dress, her slender bare arms hanging,
her slightly bent feet in the thin dancing-slippers,
with a glad, bright smile on her face, which was not at all that of a coquette.
When the mazurka started, Prince Andrei approached her.
"Will you allow me?" he said, with a slight bow and an embarrassed smile.
She recognized him at once, and felt something joyful rise in her.
She gave him her hand.`,[],[]),
              col(`tolstoy-wp-ball-briggs`,`Anthony Briggs`,2005,`Penguin; praised for readability`,`briggs-wp`,['Prose','Contemporary'],
                `Natasha stood a little apart, watching the dancing.
Her white girlish dress, her bare arms, the slight bend in her feet —
she looked poised and alive.
When Prince Andrei approached and asked her to dance,
she looked at him with such open joy that he found himself smiling.
No shyness. No performance. Just a girl ready to dance,
who took his hand and followed him onto the floor
as if she had been expecting him all evening.`,[],[]),
            ]
          },
          {
            label:`Book III — Borodino: Prince Andrei Wounded`,
            cols:[
              col(`tolstoy-wp-borodino-garnett`,`Constance Garnett`,1904,`Classic Victorian prose`,`garnett-wp`,['Prose','Classic'],
                `He lay on the slope of the Pratzen heights.
The sky was high and clear, with slowly drifting clouds.
It was not dark. There was still light in the sky.
He felt he was lying on his back far from the battle.
The joy of it. The vast expanse.
There was no pain. He could hear nothing but the far-off sounds.
Andrei thought: "Here is death. I am dying. And yet I feel good."
He heard someone say: "He is alive."
He did not know who said it. He did not want to know.
He wanted only to stay in this sky forever.`,[],[]),
              col(`tolstoy-wp-borodino-pvk`,`Pevear & Volokhonsky`,2007,`Contemporary accuracy`,`pvk-wp`,['Prose','Contemporary'],
                `He lay on the slope of Pratzen hill.
The sky above him was high and clear, with slowly drifting clouds.
"How quiet, how peaceful and solemn, not as when I was running," thought Prince Andrei,
"not as when we were running, shouting, fighting. How different from when the Frenchman
and the artillerist, with angry and frightened faces, were pulling at the swab —
not at all as the clouds creep over this lofty, infinite sky.
How did I not see that lofty sky before?
And how happy I am to have found it at last.
Yes! All is vanity, all falsehood, except this infinite sky."`,[],[]),
              col(`tolstoy-wp-borodino-briggs`,`Anthony Briggs`,2005,`Readable Penguin prose`,`briggs-wp`,['Prose','Contemporary'],
                `He lay on the Pratzen slopes.
Above him the sky stretched high and clear, with slow-moving clouds.
He had never seen the sky look like this before — so deep and high and blue.
"How quiet, how peaceful and solemn," he thought,
"quite different from when I was running. Not like us, the way we were running and shouting,
and fighting; not like the French soldier and the artilleryman pulling at the swab —
it was nothing like those clouds drifting across this lofty, infinite sky.
How is it I have not seen this lofty sky before?
Oh, how happy I am to have found it at last.
Yes! All is vanity, all falsehood, except this infinite sky."`,[],[]),
            ]
          },
          {
            label:`Book III — Pierre at Borodino`,
            cols:[
              col(`tolstoy-wp-pierre-garnett`,`Constance Garnett`,1904,`Victorian rendering`,`garnett-wp`,['Prose','Classic'],
                `Pierre was right when he said that one must believe in the possibility of happiness
in order to be happy, and he now believed in it.
But it was not the happiness he had thought to find.
It was a simple thing, immediate and present.
He had friends. He had a home.
He had Natasha.
And he understood that what he had been seeking all his life —
what he had sought in philanthropy, in freemasonry, in the dissipations of society,
in wine, in heroic feats of self-sacrifice, in romantic love for Natasha —
had all been a striving toward this simple thing.`,[],[]),
              col(`tolstoy-wp-pierre-pvk`,`Pevear & Volokhonsky`,2007,`Contemporary accuracy`,`pvk-wp`,['Prose','Contemporary'],
                `Pierre was right that one must believe in the possibility of happiness
in order to be happy, and he now believed in it.
But it was not the happiness that he had formerly imagined.
It was simply this.
"How good! How simple!" he thought.
When the French sergeant came in to take away the prisoners,
he found Pierre playing chess with a French soldier.
Neither of them noticed the sergeant come in.
Pierre was happy with this life. He did not know why.
He was content to play chess in a dirty peasant hut
with a man who had no name.`,[],[]),
              col(`tolstoy-wp-pierre-briggs`,`Anthony Briggs`,2005,`Penguin; praised for narrative drive`,`briggs-wp`,['Prose','Contemporary'],
                `What Pierre had discovered by the fire was something indestructible in the human soul.
He saw that every human being holds within himself,
below all the debris of social conditioning,
a life of the spirit which is pure, undestroyed, untainted.
Not in his search for happiness, but in his abandonment of it,
had he found this truth.
Not in Freemasonry, not in philanthropy, not in romantic love,
not in his plans to assassinate Napoleon —
but here, in the dark, next to a cheerful peasant soldier
who asked nothing of him.`,[],[]),
            ]
          },
          {
            label:`Epilogue — Pierre and Natasha`,
            cols:[
              col(`tolstoy-wp-epilogue-garnett`,`Constance Garnett`,1904,`Classic rendering`,`garnett-wp`,['Prose','Classic'],
                `When seven years had passed, the marriage of Pierre and Natasha had settled
into a firm and warm routine, built from small things and large silences.
He was still heavy and clumsy. She was no longer beautiful in the way she had been.
She had put aside all the arts of society.
It was not necessary. Pierre saw only her.
And Natasha had taken on a dignity that she had not had as a girl —
the dignity of a woman who has chosen what she wants
and has not regretted it.`,[],[]),
              col(`tolstoy-wp-epilogue-pvk`,`Pevear & Volokhonsky`,2007,`Contemporary version`,`pvk-wp`,['Prose','Contemporary'],
                `After seven years of marriage, Pierre felt a firm, joyful awareness of himself,
of the fact that he was not a bad man,
and he felt this because he saw himself reflected in his wife.
In himself he felt all the good and bad mixed up together.
But in Natasha's eyes he saw only the good — and that reflection
had become, over years, something he could not do without.
She had stopped being coquettish. She was no longer afraid.
She was simply there — and that was enough for both of them.`,[],[]),
              col(`tolstoy-wp-epilogue-briggs`,`Anthony Briggs`,2005,`Readable Penguin version`,`briggs-wp`,['Prose','Contemporary'],
                `Seven years on, Pierre and Natasha were settled together with the ease
that comes not from the absence of difficulty
but from having passed through it.
They argued often, and made up just as often.
She was absorbed in their children. He was absorbed in his ideas.
And in the evening, when he returned from his meetings
and sat down across from her at the table,
neither of them said what they felt.
They didn't need to. They already knew.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'ivan-ilyich', title:`The Death of Ivan Ilyich`, year:1886,
        desc:`A judge's comfortable, conventional life is shattered by a terminal illness — and a crisis of meaning.`,
        chips:[`Novella`,`Death`,`Existential`],
        passages:[
          {
            label:`Chapter II — Ivan's Illness Begins`,
            cols:[
              col(`tolstoy-ivan-garnett`,`Constance Garnett`,1902,`Victorian prose`,`garnett-ivan`,['Prose','Classic'],
                `Ivan Ilyich's life had been most simple and most ordinary and therefore most terrible.
He was the son of a minor official who had spent his whole life in Petersburg
— that Petersburg which produces so many civil servants of a certain type.
He had entered law school, done reasonably well,
had been invited to work in a provincial court,
had been transferred from there to another place,
and had worked his way up step by step
to the position of member of the Court of Justice in Petersburg.`,[],[]),
              col(`tolstoy-ivan-maude`,`Louise & Aylmer Maude`,1935,`Oxford rendering`,`maude-ivan`,['Prose'],
                `Ivan Ilyich's life had been most simple and most ordinary, and therefore most terrible.
He was the son of an official who had made — in various ministries and departments in Petersburg —
that kind of career which brings men to positions from which by reason of their long service
they cannot be dismissed, though they are obviously unfit to hold any responsible position,
and for whom therefore posts are specially created,
which though fictitious carry salaries of from six to ten thousand rubles
that are not fictitious, and in receipt of which they live on to a great age.`,[],[]),
              col(`tolstoy-ivan-pvk`,`Pevear & Volokhonsky`,2009,`Recent precise version`,`pvk-ivan`,['Prose','Contemporary'],
                `The life of Ivan Ilyich had been most simple and most ordinary, and therefore most terrible.
He had been a member of the Court of Justice and had died at the age of forty-five.
His father had been an official who, after serving in various ministries and departments,
had established for himself a position which, though fictitious,
brought him a salary that was not fictitious — from six to ten thousand.
Ivan Ilyich was the second of three sons. The eldest had gone to pieces.
The youngest was doing well in the army. Ivan Ilyich was the Phoenix of the family.`,[],[]),
            ]
          },
          {
            label:`Chapter IV — Gerasim`,
            cols:[
              col(`tolstoy-ivan-gerasim-garnett`,`Constance Garnett`,1902,`Victorian rendering`,`garnett-ivan`,['Prose','Classic'],
                `The peasant Gerasim alone did not lie to him.
Everything showed that he alone understood what was happening and did not think it necessary to disguise it,
and simply felt sorry for his weak and emaciated master.
Once when Ivan Ilyich was sending him away, he actually said straight out:
"We shall all of us die, so why should I grudge a little trouble?"
He did not think of it as troublesome.
He did it with a simple, good-natured peasant directness,
and that directness was what comforted Ivan Ilyich most.`,[],[]),
              col(`tolstoy-ivan-gerasim-maude`,`Louise & Aylmer Maude`,1935,`Oxford version`,`maude-ivan`,['Prose'],
                `Gerasim alone did not lie; everything showed that he alone understood what was happening
and did not consider it necessary to disguise it,
and simply felt sorry for his weak and ailing master.
On one occasion when Ivan Ilyich was sending him away he even said directly:
"We shall all of us die, so why should I grudge a little trouble?"
expressing the fact that he did not think his work burdensome,
because he was doing it for a dying man and hoped someone would do the same for him when his time came.`,[],[]),
              col(`tolstoy-ivan-gerasim-pvk`,`Pevear & Volokhonsky`,2009,`Contemporary version`,`pvk-ivan`,['Prose','Contemporary'],
                `Only the peasant Gerasim did not lie.
Everything in him showed that he alone understood what was happening
and did not find it necessary to conceal it, and simply felt sorry for his weak, dying master.
He once even said outright, when Ivan Ilyich was sending him away:
"We'll all of us die someday, so why not take a little trouble?"
He did not consider his work burdensome. Ivan Ilyich felt this,
and it comforted him. Gerasim's uncomplicated goodness was
the single clean thing in Ivan Ilyich's dying.`,[],[]),
            ]
          },
          {
            label:`Chapter XII — The Light at the End`,
            cols:[
              col(`tolstoy-ivan-end-garnett`,`Constance Garnett`,1902,`Classic rendering`,`garnett-ivan`,['Prose','Classic'],
                `Instead of death there was light.
"So that's what it is!" he suddenly exclaimed aloud. "What joy!"
To him all this happened in a single instant, and the meaning of that instant did not change.
For those present his agony continued for another two hours.
Something rattled in his throat; his emaciated body twitched.
Then the rattling and the wheezing came less and less frequently.
"It is finished!" said someone near him.
He heard these words and repeated them in his soul.
"Death is finished," he said to himself. "It is no more!"`,[],[]),
              col(`tolstoy-ivan-end-pvk`,`Pevear & Volokhonsky`,2009,`Contemporary version`,`pvk-ivan`,['Prose','Contemporary'],
                `Instead of death there was light.
"So that's what it is!" he suddenly exclaimed aloud. "What joy!"
To him all this happened in a single instant, and the meaning of that instant did not change.
For those present his agony continued for another two hours.
Something rattled in his throat, his emaciated body twitched;
then the wheezing and the rattling became less and less frequent.
"It is finished!" someone said above him.
He heard those words and repeated them in his soul.
"Death is finished," he said to himself. "It is no more!"`,[],[]),
              col(`tolstoy-ivan-end-maude`,`Louise & Aylmer Maude`,1935,`Oxford rendering`,`maude-ivan`,['Prose'],
                `In place of death there was light.
"So that's it!" he exclaimed. "What happiness!"
All this happened to him in a single moment, and the sense of that moment did not change.
For those present, his agony continued two hours more.
Something rattled in his throat, his emaciated body shuddered.
Then the gasping and the rattle grew less frequent, less frequent.
"It is ended!" said someone standing over him.
He caught these words and repeated them in his own mind.
"Death is ended. There is no more death."
He drew in a breath, stopped midway, stretched out, and was still.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'resurrection', title:`Resurrection`, year:1899,
        desc:`A nobleman on a jury recognizes the convict before him as a woman he seduced and abandoned years before — and resolves to atone.`,
        chips:[`Realism`,`Justice`,`Redemption`],
        passages:[
          {
            label:`Part I — Nekhlyudov Sees Katyusha`,
            cols:[
              col(`tolstoy-res-maude`,`Louise & Aylmer Maude`,1900,`First complete English version`,`maude-res`,['Prose','Classic'],
                `He tried not to look at her, but his eyes were drawn to her face.
She was not the same, and yet she was the same.
The fine eyebrows — the same. The slight smile — the same.
But there was something new in her bearing, something lower,
something that spoke of suffering endured and questions not resolved.
He had known her as a girl.
He had not thought about her since.
Now he saw her across a courtroom, a prisoner at the bar,
and he understood — not with his mind, but with something deeper —
that he was responsible.`,[],[]),
              col(`tolstoy-res-pvk`,`Pevear & Volokhonsky`,2009,`Modern translation`,`pvk-res`,['Prose','Contemporary'],
                `He remembered her as she had been.
Gay, lively, with those dark eyes that laughed without knowing they were laughing.
He had been twenty-six. She had been seventeen.
He had called it love. He had not stayed to see what it became.
Now she stood in the dock, in the gown of a prisoner,
her face older, quieter, harder —
and he was seated among the jurors who would decide her fate.
He could not look at her. He could not look away.
He knew, with a certainty that had no need of reasoning,
that whatever had happened to her, it had begun with him.`,[],[]),
              col(`tolstoy-res-garnett`,`Constance Garnett`,1900,`Victorian translation`,`garnett-res`,['Prose','Classic'],
                `She was much changed. The girl he remembered —
vivid, quick, always on the edge of laughter —
had left some trace in this woman's face,
but only a trace. The rest had been worn away.
By what? He did not let himself think.
He sat in the jurors' box and kept his eyes on his hands.
Once he looked up and met her gaze directly,
and what he saw there was not reproach, not recognition —
only a tired composure, a woman who expected nothing
from any room she was called into.
That look was worse than anything he had imagined.`,[],[]),
            ]
          },
          {
            label:`Part III — Resolution`,
            cols:[
              col(`tolstoy-res-res-maude`,`Louise & Aylmer Maude`,1900,`First English version`,`maude-res`,['Prose','Classic'],
                `He had tried to approach it as a matter of duty and had failed.
He had tried to approach it as a matter of justice and had come no closer.
Then, one evening in Siberia, reading the Gospels
which Katyusha had left by his bunk without a word,
he found what had escaped him all his life:
the simple instruction to stop calculating,
to stop weighing guilt and restitution,
and simply to act as a man should act.
From that moment he did not look back.`,[],[]),
              col(`tolstoy-res-res-pvk`,`Pevear & Volokhonsky`,2009,`Modern version`,`pvk-res`,['Prose','Contemporary'],
                `He slept and woke and slept again,
and each time he woke the same thought was there:
he had ruined her life. He had not meant to. It did not matter.
The calculation of intention was the very thing he had spent his life hiding behind.
He put the book down. He looked out the window of the rail car at the Siberian dark.
He decided — not heroically, not with drama —
simply decided that he would marry her, if she would have him,
and if she would not, he would see her settled, and then he would go
and try to live differently, in some way he did not yet know how to name.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'hadji-murat', title:`Hadji Murat`, year:1912,
        desc:`A Chechen warlord defects to the Russians to rescue his family — Tolstoy's final completed work, a masterpiece of concentrated power.`,
        chips:[`Novella`,`War`,`Freedom`],
        passages:[
          {
            label:`Opening — The Thistle`,
            cols:[
              col(`tolstoy-hm-maude`,`Louise & Aylmer Maude`,1912,`First English translation`,`maude-hm`,['Prose','Classic'],
                `I was returning home through the fields. It was midsummer.
The meadows had been mown and they were just beginning to move the rye.
At this charming season of the year there is a delightful variety of flowers —
red, white, and pink clover, milk-white ox-eye daisies with their bright yellow centres
and pleasant spicy smell, yellow honey-scented rape blossoms,
tall campanulas with white and lilac bells, creeping vetch,
yellow, red, and pink scabious, faintly scented, neatly arranged plantains
with blossoms slightly tinged with pink,
cornflowers of a vivid blue in the sunshine but of a tender colour when plucked,
and delicate quickly-withering almond-scented dodder blossoms.`,[],[]),
              col(`tolstoy-hm-pvk`,`Pevear & Volokhonsky`,2009,`Contemporary version`,`pvk-hm`,['Prose','Contemporary'],
                `I was going home across the fields. It was the height of summer.
The hay had been mown and they were just beginning to cut the rye.
There is a delightful abundance of flowers at this blessed time of year.
I plucked one of each kind that I came across —
red clover, white clover, pink clover; daisies with their yellow centres;
the strong sweet smell of rape; tall bellflowers, blue and white;
vetch with its small blossoms; the flat, faint scent of plantain;
and the brilliant blue of cornflowers, which fades so quickly once you've picked them.
I gathered a large bouquet and was going home.`,[],[]),
              col(`tolstoy-hm-flath`,`Michael R. Katz`,2008,`Norton Critical Edition`,`katz-hm`,['Prose','Contemporary'],
                `I had gathered a large and varied bunch of flowers
and was walking home when I noticed in the ditch
a magnificent thistle of the species called tatarnik by the peasants.
Everything around it had been mown — the rye stood in sheaves,
the grass had been cut and dried into hay.
Only this thistle stood in the very center of the ditch,
holding up its purple flower proud and uncrushed,
still blooming with all its strength.
I picked it to add to my bouquet.
It was ugly, as all thistles are ugly.
But it would not give way.`,[],[]),
            ]
          },
          {
            label:`The Death of Hadji Murat`,
            cols:[
              col(`tolstoy-hm-death-maude`,`Louise & Aylmer Maude`,1912,`First English version`,`maude-hm`,['Prose','Classic'],
                `Hadji Murat lay with his face to the ground, his body riddled with shot.
He had been the first to fall. He had tried to rise twice and could not.
Those who had come to take him alive now stood around what he had been,
uncertain what to do next.
He was not quite dead. They could see him breathing.
His hand moved once in the dirt. Then was still.
He had come across a great distance to save his family.
He had not saved them. He had saved nothing.
And yet — it was Hadji Murat who had fallen, and something in how he fell
made the men standing over him reluctant to speak.`,[],[]),
              col(`tolstoy-hm-death-pvk`,`Pevear & Volokhonsky`,2009,`Contemporary version`,`pvk-hm`,['Prose','Contemporary'],
                `Hadji Murat was dead, but his body went on living its own life.
He moved, shuddered, and the blood came out in streams on the ground about him.
But he was no longer aware of it, any of it —
not the sky above him, not the voices of the men around him,
not the hands that turned him over.
He had thought of his son. He had thought of his wife.
He had been thinking of them at the moment the bullet found him.
He had thought: I will go back. I will find a way.
But there was no way. There had not been for a long time.
The thistle in the field — broken at the stem — and yet.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'kreutzer', title:`The Kreutzer Sonata`, year:1889,
        desc:`A man on a night train confesses to his fellow passengers that he murdered his wife — a furious, unsettling examination of marriage and jealousy.`,
        chips:[`Novella`,`Marriage`,`Violence`],
        passages:[
          {
            label:`Chapter I — The Argument Begins`,
            cols:[
              col(`tolstoy-ks-garnett`,`Constance Garnett`,1890,`First English translation`,`garnett-ks`,['Prose','Classic'],
                `We were all sitting in different corners of the carriage when
a grey-haired man of medium height got in at one of the stations.
He sat down opposite a lady dressed in silk.
I was watching them without meaning to.
They began talking. She said something about love.
He said: "Love is nonsense. Love is a word that means very different things to different people.
There is the love of the body and the love of the soul —
and men and women have never, in all of history,
agreed on which they mean when they say the word."
The lady looked displeased. He looked as though he had expected that.`,[],[]),
              col(`tolstoy-ks-maude`,`Louise & Aylmer Maude`,1924,`Oxford version`,`maude-ks`,['Prose','Classic'],
                `It began with a conversation in a railway carriage between strangers.
A woman spoke of modern love. A lawyer spoke of marriage.
And then the grey man in the corner, who had been silent until then,
said: "None of you knows what love is. You talk about it as though it were comfortable.
It is not comfortable. It is a disease.
It disfigures everything it touches.
And the worst of it is that people call it good.
They build their lives on it. They destroy each other with it.
And then they wonder why they are unhappy."
No one replied. Everyone pretended not to have heard him.`,[],[]),
            ]
          },
          {
            label:`Chapter XXVII — The Confession`,
            cols:[
              col(`tolstoy-ks-conf-garnett`,`Constance Garnett`,1890,`Victorian rendering`,`garnett-ks`,['Prose','Classic'],
                `"I went in to her. She was lying down. She opened her eyes and looked at me.
She understood everything from my face.
She said: 'Do it.'
I did not do it. Not then. I stood there.
I had the knife in my hand.
I had been carrying it for days without knowing why.
She did not look afraid. That was the worst of it —
that she was not afraid.
She looked at me with those tired eyes, those eyes that had been tired
for years, and she said nothing more.
She had expected this. She had always expected this.
I understood it only then."`,[],[]),
              col(`tolstoy-ks-conf-maude`,`Louise & Aylmer Maude`,1924,`Oxford version`,`maude-ks`,['Prose','Classic'],
                `"She looked at me. And I saw that she was not afraid.
That is what I cannot forgive myself — not the act, but that look.
She had long since stopped being afraid of me.
I do not know when it happened. Some time in the years of our marriage,
fear had given way to something worse — a kind of settled, exhausted knowledge.
She knew what I was. I had shown her, by degrees, everything I was.
And in that last moment, when she might have pleaded,
she only looked at me with a face that said: yes, I thought so.
And then it was done."`,[],[]),
            ]
          },
        ]
      },
      {
        id:'childhood', title:`Childhood`, year:1852,
        desc:`Tolstoy's debut: a ten-year-old boy's last summer on the family estate, rendered with extraordinary psychological precision.`,
        chips:[`Autobiographical`,`Memory`,`Youth`],
        passages:[
          {
            label:`Chapter I — Karl Ivanych`,
            cols:[
              col(`tolstoy-child-maude`,`Louise & Aylmer Maude`,1930,`Oxford rendering`,`maude-child`,['Prose','Classic'],
                `On the 12th of August, 18—, exactly three days after my tenth birthday,
Karl Ivanych woke me by hitting a fly just above my head
with a flap made of sugar-paper fastened to a stick.
He did this so awkwardly that he hit the image of my patron saint
fastened to the oak headpiece of my bed,
and the fly fell on my curls.
I looked out from under the quilt.
Karl Ivanych, in his wadded dressing-gown, in red slippers,
was standing with his flap in one corner of the room.
He saw that I was awake, but pretended not to.`,[],[]),
              col(`tolstoy-child-garnett`,`Constance Garnett`,1922,`Classic Victorian version`,`garnett-child`,['Prose','Classic'],
                `On the 12th of August, 18—, three days after my tenth birthday,
Karl Ivanych woke me at seven in the morning,
striking a fly with a flap of sugar paper on a stick
just above my head.
He did it so clumsily that he caught the holy image hanging at the head of my bed,
and the dead fly fell on my curls.
I peered out from under the blanket.
Karl Ivanych, in his old woolen dressing-gown and red slippers,
was standing in the corner.
He had seen that I was awake, but he affected not to notice.`,[],[]),
              col(`tolstoy-child-foote`,`Paul Foote`,1964,`Penguin rendering`,`foote-child`,['Prose'],
                `On the twelfth of August in the year 18—, just three days after my tenth birthday,
Karl Ivanych woke me at seven o'clock in the morning
by hitting a fly directly above my head
with a swat made of paper fastened to a stick.
He did it so awkwardly that the swat caught the icon of my patron saint
which hung at the bedhead, and the dead fly dropped onto my hair.
I poked my nose out from under the bedclothes.
Karl Ivanych, wearing his dressing gown and red slippers,
stood in the corner of the room with his swatter at his side.
He had seen that I was awake, but was pretending he had not.`,[],[]),
            ]
          },
          {
            label:`Chapter XV — Grief`,
            cols:[
              col(`tolstoy-child-grief-maude`,`Louise & Aylmer Maude`,1930,`Oxford rendering`,`maude-child`,['Prose','Classic'],
                `I cannot describe my feelings on seeing her.
I only remember that as soon as I entered the room I wanted to weep.
I knew it was grief. I had not known grief before.
She was lying there so still, so changed,
that I could not at first make myself go near her.
Mimi took my hand and led me closer.
Her face was the same and not the same.
The stillness of it. The wax of the skin.
I understood, standing there, that she would not open her eyes.
I understood it without being told.
I had always known it, I think. I had known it for days.`,[],[]),
              col(`tolstoy-child-grief-garnett`,`Constance Garnett`,1922,`Victorian version`,`garnett-child`,['Prose','Classic'],
                `I cannot describe the feelings that came over me on entering that room.
I only know that as I stepped across the threshold I began to weep.
It was grief, real grief, and I had not known it before.
She lay composed on the bed, in her white cap,
and her face was the same and different.
It was smaller. It was still. The hands on the coverlet
were the color of old wax.
I did not want to go near. I went near.
I stood beside her for a long time and felt something settle in me
that has not quite shifted since.`,[],[]),
              col(`tolstoy-child-grief-foote`,`Paul Foote`,1964,`Penguin version`,`foote-child`,['Prose'],
                `I do not know how to say what I felt when I came into that room.
I only know that I began crying before I had seen her properly.
The door was open. There was silence inside.
Maman lay on the bed, her hands arranged on the blanket.
Her face was calm — calmer than I had ever seen it when she was alive.
I had not understood until then what the word 'final' meant.
I understood it now.
I stood at the foot of the bed and looked at her
and cried not from sadness only, but from something larger —
the sense that the world had changed in a way that did not consult me,
and would not change back.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'dostoevsky', name:'Fyodor Dostoevsky', dates:'1821–1881', lang:'Russian',
    desc:`Master of psychological intensity. *The Brothers Karamazov* and *Crime and Punishment* are among the most debated novels in world literature.`,
    acc:`dostoevsky`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dostoevsky_1876.jpg/440px-Dostoevsky_1876.jpg`,
    works:[
      {
        id:'brothers', title:`The Brothers Karamazov`, year:1880,
        desc:`Three brothers, a murdered father, and the burning questions of God, freedom, and moral responsibility.`,
        chips:[`Novel`,`Philosophy`,`Crime`],
        passages:[
          {
            label:`Book V — The Grand Inquisitor`,
            cols:[
              col(`dost-bk-garnett`,`Constance Garnett`,1912,`The foundational English version`,`garnett-brothers`,['Prose','Classic'],
                `"Go, and come no more... come not at all, never, never!"
And he let him out into the dark streets of the city. The prisoner went away.
"And the old man?"
"The kiss burns in his heart, but the old man holds to his idea."
"And you're with him, you too?" Alyosha asked sadly.
Ivan laughed. "It's all nonsense, Alyosha.
It's just a muddled poem of a muddled student who never wrote two lines of verse.
Why are you taking it so seriously?"`,[],[]),
              col(`dost-bk-pvk`,`Pevear & Volokhonsky`,1990,`Major contemporary retranslation`,`pvk-brothers`,['Prose','Contemporary'],
                `"Go, and come no more... do not come at all... never, never!"
And he released him into the dark streets of the city.
The prisoner left.
"And the old man?"
"The kiss burns in his heart, but the old man holds to his idea."
"And you are with him, you too?" Alyosha asked mournfully.
Ivan laughed.
"Alyosha, it's nonsense. It's the incoherent poem of an incoherent student
who never wrote two lines of verse. Why take it so seriously?"`,[],[]),
              col(`dost-bk-mcduff`,`David McDuff`,2003,`Penguin version`,`mcduff-brothers`,['Prose','Contemporary'],
                `"Go, and come no more... come never again... never, never!"
He released him and let him out into the dark alleys of the city.
The prisoner left.
"And the Inquisitor?"
"The kiss burns in his heart, but he stays with his old idea."
"And you — are you with him?" Alyosha asked sadly.
Ivan laughed.
"It's all nonsense, Alyosha.
It's only the senseless poem of a senseless student
who never in his life wrote two lines of verse.
Why take it so seriously?"`,[],[]),
            ]
          },
          {
            label:`Book V — The Rebellion`,
            cols:[
              col(`dost-bk-rebel-garnett`,`Constance Garnett`,1912,`Victorian prose`,`garnett-brothers`,['Prose','Classic'],
                `Imagine that you are creating a fabric of human destiny
with the object of making men happy in the end,
giving them peace and rest at last,
but that it was essential and inevitable to torture to death
only one tiny creature — that baby beating its breast with its fist, for instance —
and to found that edifice on its unavenged tears.
Would you consent to be the architect on those conditions?
Tell me, and tell the truth.
"No, I wouldn't consent," said Alyosha softly.`,[],[]),
              col(`dost-bk-rebel-pvk`,`Pevear & Volokhonsky`,1990,`Contemporary standard`,`pvk-brothers`,['Prose','Contemporary'],
                `Tell me yourself — I challenge you: let's say you were called upon
to build the edifice of human destiny
so that men would finally be happy and would find peace and tranquillity.
If you knew that, in order to attain this,
you would have to torture just one tiny creature —
that same child beating her chest with her little fist —
and raise your edifice on the foundation of her unrequited tears:
would you agree to be the architect?
Tell me the truth.
"No, I would not agree," said Alyosha softly.`,[],[]),
              col(`dost-bk-rebel-mcduff`,`David McDuff`,2003,`Penguin version`,`mcduff-brothers`,['Prose','Contemporary'],
                `Imagine that you yourself are erecting the edifice of human destiny
with the aim of making people happy in the finale,
of giving them peace and tranquillity at last —
but for that you would have to torture to death
just one tiny little creature, that same child
who beat her breast with her little fist,
and erect your edifice on the foundation of her unavenged tears.
Would you agree to be the architect on such conditions?
Tell me the truth.
"No, I would not agree," Alyosha said quietly.`,[],[]),
            ]
          },
          {
            label:`Book XI — Ivan and the Devil`,
            cols:[
              col(`dost-bk-devil-garnett`,`Constance Garnett`,1912,`Classic rendering`,`garnett-brothers`,['Prose','Classic'],
                `"You are lying! You are my hallucination. You are not existing.
You are my imagination and nothing more."
"No, I am not existing perhaps, but that is beside the point.
I am the embodiment of your doubts, of your negations —
the part of you that has always desired to believe and cannot.
Look at me, Ivan: I am all that is left of your faith,
turned inside out."
Ivan closed his eyes. The figure did not go away.`,[],[]),
              col(`dost-bk-devil-pvk`,`Pevear & Volokhonsky`,1990,`Contemporary version`,`pvk-brothers`,['Prose','Contemporary'],
                `"You are a lie! You are my illness, a hallucination.
You do not exist!"
"No, I am not, perhaps, but that is beside the point.
I am your mirror, Ivan Fyodorovich — just one side of you,
the side you have always fought against.
I am made of your own doubt. I am the voice that says:
what if it is all true?
I have come because you can no longer argue me away."
Ivan pressed his hands to his eyes. The voice continued.`,[],[]),
              col(`dost-bk-devil-mcduff`,`David McDuff`,2003,`Penguin version`,`mcduff-brothers`,['Prose','Contemporary'],
                `"You don't exist! You are my sickness, an invention!
You are my hallucination!"
"If you like, but that is beside the point.
I am everything in you that you cannot reconcile,
the doubt that lives at the bottom of your mind
which your fine intellect has never been able to dissolve.
I come to you now not because you have summoned me —
you never summoned me. You only stopped denying me.
That is enough for a beginning."
Ivan was silent. He could not look at the figure directly.`,[],[]),
            ]
          },
          {
            label:`Epilogue — At Ilyusha's Stone`,
            cols:[
              col(`dost-bk-stone-garnett`,`Constance Garnett`,1912,`Classic rendering`,`garnett-brothers`,['Prose','Classic'],
                `"Karamazov," cried Kolya, "can it be true what religion says,
that we shall all rise again from the dead and shall live and see each other again,
all, Ilyusha too?"
"Certainly we shall all rise again, certainly we shall see each other
and shall tell each other with joy and gladness all that has happened to us,"
Alyosha answered, half laughing, half enthusiastic.
"Ah, how splendid it will be!" broke from Kolya.
"Well, now we will go!" said Alyosha. "We go hand in hand."
"And always so, all our lives hand in hand! Hurrah for Karamazov!" Kolya cried.`,[],[]),
              col(`dost-bk-stone-pvk`,`Pevear & Volokhonsky`,1990,`Contemporary version`,`pvk-brothers`,['Prose','Contemporary'],
                `"Karamazov!" Kolya called out. "Is it true what religion says,
that we will all rise from the dead, and come to life,
and see one another again — everyone, and Ilyushechka?"
"Certainly we will rise, certainly we will see each other,
and joyfully, gladly, we will tell one another everything that has been,"
Alyosha answered, half laughing, half in rapture.
"Ah, how good that will be!" Kolya said.
"Well, let's go now, let's go!" Alyosha said. "We'll go hand in hand."
"And always so, all our lives like that! Long live Karamazov!" Kolya cried in a rapture.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'crime', title:`Crime and Punishment`, year:1866,
        desc:`A student murders a pawnbroker to test his theory that extraordinary men stand beyond morality — and discovers he is not extraordinary.`,
        chips:[`Psychological`,`Crime`,`Redemption`],
        passages:[
          {
            label:`Part I — Raskolnikov Leaves His Room`,
            cols:[
              col(`dost-cp-garnett`,`Constance Garnett`,1914,`The foundational English translation`,`garnett-crime`,['Prose','Classic'],
                `On an exceptionally hot evening early in July a young man came out of the garret in which he lodged
in S. Place and walked slowly, as though in hesitation, towards K. bridge.
He had successfully avoided meeting his landlady on the staircase.
His garret was under the roof of a high, five-storeyed house
and was more like a cupboard than a room.
The landlady who provided him with garret, dinners, and attendance,
lived on the floor below, and every time he went out
he was obliged to pass her kitchen, the door of which invariably stood open.
And each time he passed, the young man felt a sick, frightened feeling.`,[],[]),
              col(`dost-cp-pvk`,`Pevear & Volokhonsky`,1993,`Contemporary standard`,`pvk-crime`,['Prose','Contemporary'],
                `At the beginning of July, during an exceptionally hot spell, towards evening,
a young man came down on to the street from the little room he was renting from tenants in S—— Lane
and slowly, as if indecisively, headed for the K——n Bridge.
He had successfully avoided meeting his landlady on the stairs.
His little room was just under the roof of a tall five-storeyed house
and looked more like a cupboard than a living quarter.
His landlady, who rented him this room along with a supply of meals and servants,
lived one landing below, and every time he went out
he was obliged to pass her kitchen, almost always with the door wide open.`,[],[]),
              col(`dost-cp-mcduff`,`David McDuff`,1991,`Penguin modern version`,`mcduff-crime`,['Prose','Contemporary'],
                `On an unusually hot evening at the beginning of July
a young man walked out of the tiny room he rented from tenants in S—— Lane
into the street and headed slowly, as though indecisively, towards K—— Bridge.
On the stairs he had successfully avoided meeting his landlady.
His tiny room was just under the roof of a tall five-storey building
and looked more like a cupboard than a room.
His landlady, who rented him this room along with dinner and attention,
occupied a flat one floor below.
The young man had been avoiding her of late,
and meeting her filled him with an unpleasant, cowardly feeling.`,[],[]),
            ]
          },
          {
            label:`Part IV — Sonya Reads Lazarus`,
            cols:[
              col(`dost-cp-laz-garnett`,`Constance Garnett`,1914,`Classic rendering`,`garnett-crime`,['Prose','Classic'],
                `He asked Sonya to read him the story of the raising of Lazarus.
She found the place and began to read, he listening without a word.
By the time she reached the seventeenth verse of the eleventh chapter of St. John's Gospel,
there was a candle burning low. The room was very still.
Her voice shook; she had read the passage many times before and knew it by heart.
But this time she read it as if for the first time,
as if she herself did not yet know how it would end —
as if the miracle were still uncertain, still possible,
and she were holding her breath to see.`,[],[]),
              col(`dost-cp-laz-pvk`,`Pevear & Volokhonsky`,1993,`Contemporary version`,`pvk-crime`,['Prose','Contemporary'],
                `Raskolnikov asked her to read the Lazarus passage.
She found the place. She had a little candle.
She began to read. He listened without moving.
At the thirty-fifth verse: "Jesus wept" — she stopped.
She had read these words a hundred times and yet this time
she could not go on. Something in the way he was listening,
something in the stillness between them,
made the words mean something they had not meant before.
She went on. He did not look at her.
When she finished, neither of them spoke for a long time.`,[],[]),
              col(`dost-cp-laz-mcduff`,`David McDuff`,1991,`Penguin version`,`mcduff-crime`,['Prose','Contemporary'],
                `He asked her to read him about Lazarus.
She found the page without difficulty; she knew it by heart.
The candle guttered. The room was silent.
She began to read in a trembling voice, controlling herself.
At the words "And Jesus wept" her throat caught.
She read on anyway — read on to the end,
where the stone is rolled away
and the dead man walks out.
Raskolnikov sat still through all of it.
He did not look at her. He did not move.
She had no idea what he was thinking.`,[],[]),
            ]
          },
          {
            label:`Part V — Raskolnikov Confesses to Sonya`,
            cols:[
              col(`dost-cp-conf-garnett`,`Constance Garnett`,1914,`Classic rendering`,`garnett-crime`,['Prose','Classic'],
                `"I wanted to become a Napoleon, that is why I killed her....
Do you understand now?"
"N-no," Sonya whispered naively and timidly. "Only speak, speak, I shall understand,
I shall understand in myself," she kept repeating in entreaty.
"You'll understand afterwards.
I wanted to have the daring... that was the whole cause of it!
You know now?" said Raskolnikov, turning to her, his face pale and distorted.
"I wanted to find out then and quickly whether I was a louse like everybody else
or a man. Whether I can step over barriers or not."
"To kill? The right to kill?" Sonya clasped her hands.`,[],[]),
              col(`dost-cp-conf-pvk`,`Pevear & Volokhonsky`,1993,`Contemporary standard`,`pvk-crime`,['Prose','Contemporary'],
                `"I wanted to become a Napoleon — that is why I killed her.
Now do you understand?"
"N-no," Sonya whispered. "Speak, speak, I'll understand everything!"
she implored, still scarcely audibly.
"You'll understand later.
I wanted to dare — that was the whole reason!
I wanted to find out — was I a louse like all the rest, or was I a man?
Can I step across, or can I not?
Can I bend down and take it — or not?
Am I a trembling creature, or do I have the right?"
"To kill? The right to kill?" Sonya pressed her hands together.`,[],[]),
            ]
          },
          {
            label:`Epilogue — Raskolnikov and Sonya`,
            cols:[
              col(`dost-cp-epi-garnett`,`Constance Garnett`,1914,`Classic rendering`,`garnett-crime`,['Prose','Classic'],
                `Seven years later, at the end of February, the thaw had begun,
and Raskolnikov was sitting by the river bank in Siberia.
It was a bright, warm, still day. The river was beginning to flood its banks.
On the other bank the steppe opened out, bare and boundless,
stretching to the far horizon.
He had been sitting there a long time, looking at the opposite bank.
From behind him came the sound of footsteps.
It was Sonya, who had come to meet him as she did every Sunday.
He took her hand and they sat side by side in silence.`,[],[]),
              col(`dost-cp-epi-pvk`,`Pevear & Volokhonsky`,1993,`Contemporary standard`,`pvk-crime`,['Prose','Contemporary'],
                `Seven years later. The thaw had just set in;
a mild, sunny day; and Raskolnikov was sitting on a hillside
that sloped down to the river bank.
He gazed before him. The opposite bank was broad and flat;
in the distance he could see a village sending up a wisp of smoke.
He sat there a long time, lost in thought.
Then steps were heard behind him.
It was Sonya. She came to meet him quietly and sat down beside him.
He did not look at her.
He took her hand and held it.`,[],[]),
              col(`dost-cp-epi-mcduff`,`David McDuff`,1991,`Penguin version`,`mcduff-crime`,['Prose','Contemporary'],
                `He had been in Siberia for two years.
February was over. The thaw had set in.
He sat by the river bank. The far bank was wide and flat.
He had sat there a long time before he heard footsteps behind him.
It was Sonya. She came each Sunday.
He looked up. She sat down beside him without speaking.
Then something happened that neither of them had expected.
He reached for her hands, and she let him take them,
and suddenly, in spite of all the distance between them,
something began to diminish.
It was not over. It was only beginning.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'idiot', title:`The Idiot`, year:1869,
        desc:`A genuinely good man — epileptic, guileless, Christ-like — is destroyed by the society he tries to love.`,
        chips:[`Novel`,`Psychology`,`Russian`],
        passages:[
          {
            label:`Part I — Prince Myshkin Arrives`,
            cols:[
              col(`dost-idiot-garnett`,`Constance Garnett`,1913,`Classic Victorian rendering`,`garnett-idiot`,['Prose','Classic'],
                `In the latter days of November, during a thaw, at nine o'clock in the morning,
a train on the Warsaw and Petersburg line was approaching the latter city at full speed.
The morning was so damp and misty that it was difficult to distinguish anything
ten paces from the carriage window on either side.
Among the passengers there were two young men sitting opposite each other, near the very stove,
both travelling without much luggage, both rather plainly dressed,
both with rather remarkable faces and both apparently anxious to enter into conversation.`,[],[]),
              col(`dost-idiot-pvk`,`Pevear & Volokhonsky`,2001,`Modern standard`,`pvk-idiot`,['Prose','Contemporary'],
                `Towards the end of November, during a thaw, at nine o'clock in the morning,
the train from Warsaw was approaching Petersburg at full steam.
The air was so damp and foggy that it was barely light;
it was hard to make anything out ten steps to the left or right of the tracks.
Among the passengers were some returning from abroad;
but the third-class compartments were the most crowded,
mainly with people of modest means on business.
Two men were seated opposite each other by the window, both young, both travelling light.`,[],[]),
              col(`dost-idiot-mcduff`,`David McDuff`,2004,`Penguin version`,`mcduff-idiot`,['Prose','Contemporary'],
                `Towards the end of November, during a thaw, at around nine o'clock in the morning,
the Warsaw train was approaching St Petersburg at full speed.
It was so damp and foggy that dawn had barely broken;
it was hard to see more than ten paces to either side of the train windows.
Among the passengers returning from abroad, in one of the third-class carriages,
two young men sat facing each other by the window.
Both were travelling light, both were shabbily dressed,
and the faces of both were remarkable enough to attract attention.`,[],[]),
            ]
          },
          {
            label:`Part I — On Seeing an Execution`,
            cols:[
              col(`dost-idiot-exec-garnett`,`Constance Garnett`,1913,`Victorian rendering`,`garnett-idiot`,['Prose','Classic'],
                `"They led him out and all seemed to understand that it would happen in a few minutes.
He began to look around with great attention. He looked at the people.
He looked at the scaffold, the executioner, the priest.
He counted the steps. One. Two. Three. Four.
He kept thinking: there are still several minutes left.
Several minutes, and then there will be nothing.
Or there will be something. But what?
Where?
He was thinking all this in the last few seconds."`,[],[]),
              col(`dost-idiot-exec-pvk`,`Pevear & Volokhonsky`,2001,`Contemporary version`,`pvk-idiot`,['Prose','Contemporary'],
                `"The main thing is those five minutes.
He was convinced he had five minutes left to live.
He told me those five minutes seemed like an enormous time to him —
an enormous wealth.
He thought: in five minutes I can live through so much.
I will sleep during the first two minutes.
During the next two I will say goodbye to my neighbours.
The last minute I will give to simply looking around.
He actually carried out the plan. But then the pardon came.
And he told me afterwards: those five minutes were the most alive of his life."`,[],[]),
              col(`dost-idiot-exec-mcduff`,`David McDuff`,2004,`Penguin version`,`mcduff-idiot`,['Prose','Contemporary'],
                `"He was twenty-seven then, healthy, strong.
He stood on the scaffold and had perhaps three minutes left to live.
He said that during those three minutes he lived through more
than all the years before — more thought, more feeling.
He divided the time: two minutes for farewell,
one minute to look at the scaffold and the sky.
He later told me the sky was very blue.
He said it was strange to be looking at the sky
and to know it would continue after him —
that this particular blue would not stop for him."`,[],[]),
            ]
          },
          {
            label:`Part II — Nastasya and the Money`,
            cols:[
              col(`dost-idiot-money-garnett`,`Constance Garnett`,1913,`Victorian prose`,`garnett-idiot`,['Prose','Classic'],
                `Nastasya Philipovna sat perfectly still, watching Rogozhin.
She did not tremble. She was pale.
Rogozhin had thrown the money into the fire.
He stood looking at her.
"If you take it out," he said, "it's yours. The lot of it."
She sat still.
The flames rose. The edges of the notes darkened.
Then she laughed — a strange, ringing laugh — and plunged her bare arms
into the fireplace and swept the burning bundle out onto the hearth.`,[],[]),
              col(`dost-idiot-money-pvk`,`Pevear & Volokhonsky`,2001,`Contemporary version`,`pvk-idiot`,['Prose','Contemporary'],
                `Nastasya Philipovna did not move. She was white as chalk.
Rogozhin watched her. Nobody else in the room breathed.
"Rake it out with your bare hands," he said, "and it's all yours.
Every rouble. Go on."
She did not look at the money. She looked at him.
Then she laughed — a high, clear laugh, unlike anything the room had heard —
and thrust both hands into the fire and pulled the bundle out,
scattering burning notes across the floor,
and stood there with her arms still smoking,
looking at Ganya where he had fainted.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'notes-underground', title:`Notes from Underground`, year:1864,
        desc:`A bitter, hyper-conscious clerk rages at reason, progress, and other people — Dostoevsky's most radical and prophetic voice.`,
        chips:[`Novella`,`Philosophy`,`Psychology`],
        passages:[
          {
            label:`Part I — The Underground Man Speaks`,
            cols:[
              col(`dost-notes-garnett`,`Constance Garnett`,1913,`The foundational English version`,`garnett-notes`,['Prose','Classic'],
                `I am a sick man.... I am a spiteful man. I am an unattractive man.
I believe my liver is diseased. However, I know nothing at all about my disease,
and do not know for certain what ails me.
I don't consult a doctor for it, and never have, though I have a respect for medicine and doctors.
Besides, I am extremely superstitious, sufficiently so to respect medicine, anyway.
(I am well-educated enough not to be superstitious, but I am superstitious.)
No, I refuse to consult a doctor from spite.`,[],[]),
              col(`dost-notes-pvk`,`Pevear & Volokhonsky`,1993,`Acclaimed contemporary version`,`pvk-notes`,['Prose','Contemporary'],
                `I am a sick man... I am a spiteful man. I am an unpleasant man.
I think my liver is diseased. Then again, I don't know a thing about my illness;
I'm not even sure what hurts.
I'm not being treated and never have been, though I respect medicine and doctors.
I'm also extremely superstitious — well, not enough to respect medicine.
(I'm perfectly capable of not being superstitious, but I am, nevertheless.)
No, I refuse to be treated out of spite.`,[],[]),
              col(`dost-notes-mcduff`,`David McDuff`,1991,`Penguin version`,`mcduff-notes`,['Prose','Contemporary'],
                `I am a sick man... I am an angry man. I am not a pleasant-looking man.
I think I have a diseased liver. Then again, I know nothing about my illness —
I'm not sure what's wrong with me.
I'm not in treatment and never have been, although I have a lot of respect for medicine and doctors.
I'm also extremely superstitious, although there's no reason for me to be superstitious.
(I'm perfectly capable of not being superstitious, but somehow I still am.)
No, I refuse to be treated out of spite.`,[],[]),
            ]
          },
          {
            label:`Part I — Against the Crystal Palace`,
            cols:[
              col(`dost-notes-crystal-garnett`,`Constance Garnett`,1913,`Victorian rendering`,`garnett-notes`,['Prose','Classic'],
                `Oh, tell me, who was it first announced, who was it first proclaimed,
that man only does nasty things because he does not know his own interests;
and that if he were enlightened, if his eyes were opened to his real normal interests,
man would at once cease to do nasty things,
would at once become good and noble because, being enlightened and understanding his real advantage,
he would see his own advantage in the good and nothing else,
and we all know that not one man can, consciously, act against his own interests.`,[],[]),
              col(`dost-notes-crystal-pvk`,`Pevear & Volokhonsky`,1993,`Contemporary version`,`pvk-notes`,['Prose','Contemporary'],
                `You say: science will teach men that they have no will of their own
and have never had any, and that they themselves are nothing but a sort of piano key or organ stop,
and that, over and above this, there are in the world the laws of nature;
so that whatever he does is not done by his willing it,
but is done of itself, by the laws of nature.
Consequently we have only to discover these laws of nature, and man will no longer have to answer
for his actions and life will become exceedingly easy for him.
All human actions will then, of course, be tabulated according to these laws.`,[],[]),
              col(`dost-notes-crystal-mcduff`,`David McDuff`,1991,`Penguin version`,`mcduff-notes`,['Prose','Contemporary'],
                `Try to tell me this: suppose everything could be so arranged
that it would be entirely reasonable, that everything would be bright,
that life could have no disorder, no darkness, no confusion —
would that be good?
You are laughing? Very well. I will answer for you:
yes, it would be very good.
But I tell you: I would sooner smash my head against a wall
than live in a crystal palace in which you cannot stick out your tongue.
I do not want my desires satisfied. I want my desires — full stop.
I want freedom. Even if it costs me everything. Even if it costs me reason itself.`,[],[]),
            ]
          },
          {
            label:`Part II — The Officer on Nevsky`,
            cols:[
              col(`dost-notes-officer-garnett`,`Constance Garnett`,1913,`Victorian prose`,`garnett-notes`,['Prose','Classic'],
                `There was one officer at the billiards-room. He was a tall fellow,
about six foot three or four, and he was fond of showing off his height.
One day he moved me from where I was standing and simply passed by as though he had not noticed me.
I could have forgiven blows, but I could not forgive his treating me as if I simply did not exist.
The devil knows what I would have given for a real, a more regular quarrel —
a more decent, a more literary one, so to speak.
But this one treated me as though I were a fly.`,[],[]),
              col(`dost-notes-officer-pvk`,`Pevear & Volokhonsky`,1993,`Contemporary version`,`pvk-notes`,['Prose','Contemporary'],
                `There was an officer in the billiard room.
He was a tall man, and a bully. Once, without any cause,
he moved me aside by my shoulder so as to make room for himself —
not even noticing me. I could have forgiven a blow.
But he did not notice me. That was the wound.
I brooded on it for two years.
I wrote about it in my journal. I imagined encounters.
I imagined saying to him: "How dare you?"
I imagined him going pale.
He did not go pale. He did not do anything.
He did not know I existed.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'demons', title:`Demons`, year:1872,
        desc:`A provincial town is overrun by a revolutionary cell — Dostoevsky's furious prophecy of political violence and nihilism.`,
        chips:[`Novel`,`Politics`,`Nihilism`],
        passages:[
          {
            label:`Part I — Stavrogin's Entrance`,
            cols:[
              col(`dost-dem-garnett`,`Constance Garnett`,1916,`The foundational English version`,`garnett-demons`,['Prose','Classic'],
                `Nikolai Vsevolodovich had the reputation of being a society man.
He was remarkably handsome, well-built, taller than average, with very dark hair.
His face was almost too regular — the kind of face found in portraits of ideal beauty —
and yet people found it cold, even unpleasant.
Some people said he was proud; others that he was simply reserved.
But everyone, whether they liked him or not,
agreed that he was quite unlike anyone else.`,[],[]),
              col(`dost-dem-pvk`,`Pevear & Volokhonsky`,1994,`Contemporary standard`,`pvk-demons`,['Prose','Contemporary'],
                `Nikolai Vsevolodovich Stavrogin had spent a long time abroad.
He had returned, and his appearance in our town had the quality of an event.
He was tall, with dark hair, handsome in a way that disturbed people.
His face was somehow too regular — a face from a classical medal —
and this regularity gave it a strangeness.
No one liked him, exactly. But everyone felt him.
The women watched him. The men kept track of where he stood in a room.
He seemed to carry in him a history none of them knew,
and which he showed no interest in sharing.`,[],[]),
              col(`dost-dem-mcduff`,`David McDuff`,2008,`Penguin version`,`mcduff-demons`,['Prose','Contemporary'],
                `Nikolai Vsevolodovich had a handsome face. Too handsome, some said.
A face like an icon, but lacking the warmth of an icon.
Something in it was missing — not expression, exactly,
but the sense that expression connected to anything inside.
His eyes were dark and direct. He looked at people as if they did not surprise him —
as if he had already considered everything they could be
and had found it no more than he expected.
This is what frightened them, though they would not have said so.`,[],[]),
            ]
          },
          {
            label:`Part III — Stepan Verkhovensky's Death`,
            cols:[
              col(`dost-dem-stepan-garnett`,`Constance Garnett`,1916,`Victorian rendering`,`garnett-demons`,['Prose','Classic'],
                `He lay dying on a strange bed in a stranger's house.
He had spent his life talking about Russia and had never known it.
He had spent his life imagining a liberal utopia and had produced instead a son
who was burning the country down.
He felt this clearly now. The fever had stripped away everything else.
"I have been telling lies all my life," he said to Sofya Matveyevna.
"Not in words. In how I lived.
I have never once been what I said I believed in.
And now I am dying, and I believe for the first time —
and there is no time left to do anything about it."`,  [],[]),
              col(`dost-dem-stepan-pvk`,`Pevear & Volokhonsky`,1994,`Contemporary version`,`pvk-demons`,['Prose','Contemporary'],
                `He asked to have the Gospel read to him — the passage about the Gadarene swine.
Sofya Matveyevna found it and read it.
He listened with his eyes closed.
When she finished he was quiet for a while.
Then he said: "Those swine — that is us. All of us.
The devils have entered into us, into the whole of Russia.
We are the swine. We rush headlong into the sea.
But the sick man will be healed and will sit at the feet of Jesus
and all will look at him in wonder.
That is what I believe. That is what I believe at last."`,  [],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'gogol', name:'Nikolai Gogol', dates:'1809–1852', lang:'Russian',
    desc:`The wild genius of Russian prose. *Dead Souls* is a comic-satirical masterpiece; *The Overcoat* became the seed of all subsequent Russian fiction.`,
    acc:`gogol`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nikolay_Gogol.jpg/440px-Nikolay_Gogol.jpg`,
    works:[
      {
        id:'dead-souls', title:`Dead Souls`, year:1842,
        desc:`The swindler Chichikov travels provincial Russia buying the names of dead serfs — a grotesque comedy of greed and emptiness.`,
        chips:[`Satire`,`Comedy`,`Russia`],
        passages:[
          {
            label:`Chapter 1 — Chichikov Arrives`,
            cols:[
              col(`gogol-ds-garnett`,`Constance Garnett`,1922,`Victorian prose`,`garnett-dead`,['Prose','Classic'],
                `Into the gates of the inn of the provincial town of N.
drove a fairly handsome, small spring chaise
of the type used by bachelors:
retired lieutenant-colonels, staff captains, country squires with about a hundred souls of serfs —
in short, all those who are designated as gentlemen of the middling sort.
In the chaise sat a gentleman neither too stout nor too thin,
not exactly old, but not so very young either,
who had nothing remarkable about his appearance,
nothing to make one stop and stare.`,[],[]),
              col(`gogol-ds-reavey`,`George Reavey`,1948,`Mid-century translation`,`reavey-dead`,['Prose'],
                `A somewhat passable, light spring chaise drove in through the gates
of the hotel of the provincial town of N.
It was the sort of chaise used by bachelors:
retired lieutenant-colonels, staff-captains, landowners with about a hundred serfs — in short,
by all those who are known as the middling sort of gentry.
Sitting in the chaise was a gentleman who was neither too fat nor too thin,
not exactly old but not particularly young either,
who had no unusual distinguishing feature about him.`,[],[]),
              col(`gogol-ds-pvk`,`Pevear & Volokhonsky`,1996,`Acclaimed rendering`,`pvk-dead`,['Prose','Contemporary'],
                `Into the gates of the inn of the provincial capital of N.
there drove a rather handsome, smallish chaise on springs,
of the sort favored by bachelors: retired lieutenant colonels,
staff captains, landlords with a hundred souls of serfs —
in short, all those called middle-rank gentry.
In the chaise sat a gentleman neither too portly nor too thin,
neither too old nor too young,
who had no remarkable feature about his appearance, nothing singular.
His arrival caused no particular stir in the town.
Two Russian peasants standing at the door of a tavern across the way made a few remarks.`,[],[]),
              col(`gogol-ds-sherry`,`Robert Chandler`,2012,`Penguin new version`,`chandler-dead`,['Prose','Contemporary'],
                `A small, good-looking chaise rolled through the gates of a hotel in the provincial capital of N.
The chaise was of the kind used by bachelors:
retired lieutenant colonels, staff captains, landowners with around a hundred serfs —
in short, all those known as middle-gentry.
In the chaise sat a gentleman who was neither handsome nor ugly,
neither too fat nor too thin, not too old either, though not exactly young.
His arrival caused no particular stir in the town.
Only two muzhiks standing at the door of a tavern across the street
made some remarks about it — the kind of remarks directed more at the carriage than the traveler.`,[],[]),
            ]
          },
          {
            label:`Chapter XI — Russia, Whither Fliest Thou?`,
            cols:[
              col(`gogol-ds-xi-garnett`,`Constance Garnett`,1922,`Lyrical Victorian prose`,`garnett-dead`,['Prose','Classic'],
                `Russia! Russia! I see thee, from my lovely enchanted distance I see thee:
poor, scattered and uncomfortable — thou art not cheering, thou dost not frighten.
What is the mystery concealed in thee? What is the boundless space that breathes from thee?
What is the force in thee? What means this vast expanse, reaching from sea to sea?
What does it bode? Whither art thou sped, Russia? What is the answer?
She gives no answer. The bells break into a divine clanging.
The air, torn to shreds, thunders and becomes wind;
everything on earth flies by, and the other states and nations,
with looks askance, step aside to give her the road.`,[],[]),
              col(`gogol-ds-xi-pvk`,`Pevear & Volokhonsky`,1996,`Contemporary`,`pvk-dead`,['Prose','Contemporary'],
                `Rus! Rus! I see you; from my beautiful, far-away vantage I see you:
poor, scattered, and uncomfortable in you — no bold wonders of nature crowned by bolder wonders of art;
no cities with many-windowed tall palaces grown into crags,
no picturesque trees, no ivy on the walls amid the roar and eternal spray of waterfalls.
The head does not lean back to look at the stony masses piled without end over it.
Dark, scattered, level lowlands look through you;
like dots, like specks, your low-lying towns stick out imperceptibly amid the plains.
Nothing seduces or ravishes the eye.
But what then is this incomprehensible, mysterious force that draws me to you?`,[],[]),
            ]
          },
        ]
      },
      {
        id:'overcoat', title:`The Overcoat`, year:1842,
        desc:`Akaky Akakievich, a lowly copying clerk, saves desperately for a new overcoat — a tale Dostoevsky said all Russian literature emerged from.`,
        chips:[`Short Story`,`Satire`,`Bureaucracy`],
        passages:[
          {
            label:`Opening — Akaky Introduced`,
            cols:[
              col(`gogol-oc-garnett`,`Constance Garnett`,1923,`Victorian prose`,`garnett-overcoat`,['Prose','Classic'],
                `In the department of — but I had better not mention in what department.
There is nothing in the world more irritable than a department,
a regiment, a government office, and, in fact, any sort of official body.
Nowadays every private individual considers all society insulted in his person.
I have been told that very lately a complaint was lodged by a police inspector of which town I don't remember,
and that in this complaint he set forth clearly that the institutions of the state were in danger
and that his sacred name was being taken in vain;
and, in proof thereof, he appended to his complaint an enormously long volume entitled some romantic work, in which a police inspector appeared on every tenth page, occasionally, indeed, in an intoxicated condition.`,[],[]),
              col(`gogol-oc-pvk`,`Pevear & Volokhonsky`,1998,`Playful contemporary`,`pvk-overcoat`,['Prose','Contemporary'],
                `In the department of — but it is better not to mention the department.
There is nothing touchier than a department, a regiment, a government office,
or, in fact, any sort of official body.
Nowadays every private individual thinks all of society is insulted in his person.
Quite recently, so I hear, a complaint was filed by a certain police captain,
I forget from which town, in which he stated clearly that the institutions of the government were perishing
and his sacred name was being taken in vain;
and as evidence he appended to his complaint a most enormous tome, some romantic opus,
in which a police captain appeared on every tenth page.`,[],[]),
              col(`gogol-oc-maguire`,`Robert Maguire`,2011,`Scholarly Farrar Straus version`,`maguire-overcoat`,['Prose','Scholarly'],
                `In a certain department — but it had better not be named:
nothing is more touchy than a department, a regiment, a guild, indeed any rank of official.
Nowadays every private person considers the whole of society to be insulted in his own person.
I have been told that only recently a police captain in some town or other
actually submitted a complaint in which he clearly demonstrated that all the institutions of the state
were collapsing and his very sacred name was being taken in vain; and as evidence
he appended to his complaint an enormous work of fiction
in which a police captain appeared on every tenth page, sometimes in a downright drunken condition.`,[],[]),
            ]
          },
        ]
      },
    ]
  },

  {
    id:'bulgakov', name:'Mikhail Bulgakov', dates:'1891–1940', lang:'Russian',
    desc:`Soviet Russia's most subversive writer. The Master and Margarita — suppressed for decades — is one of the most joyously dark novels of the 20th century.`,
    acc:`#7a4a5a`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bulgakov.jpg/440px-Bulgakov.jpg`,
    works:[{
      id:'master-margarita', title:`The Master and Margarita`, year:1967,
      chips:[`Fantasy`,`Satire`,`Soviet`],
      passages:[{
        label:`Chapter 1 — Woland Arrives at Patriarch's Ponds`,
        cols:[
          col(`bulgakov-glenny`,`Michael Glenny`,1967,`First major English translation`,`glenny-mm`,['Prose'],
            `At the hour of the hot spring sunset two citizens were to be found at Patriarch's Ponds.
The first of them — aged about forty, dressed in a greyish summer suit — was short, dark-haired, well-fed and bald.
He carried his hat in his hand and his neatly shaved face was adorned by spectacles in black tortoiseshell frames.
The second — a broad-shouldered young man with curly reddish hair,
a check cap on the back of his head —
was wearing a cowboy shirt, crinkled white trousers and black shoes.
The first was none other than Mikhail Alexandrovich Berlioz,
editor of a literary magazine and chairman of the board of one of the largest Moscow literary clubs.`,[],[]),
          col(`bulgakov-pvk`,`Pevear & Volokhonsky`,1997,`Major contemporary translation`,`pvk-mm`,['Prose','Contemporary'],
            `At the hour of the hot spring sunset two citizens were to be found at Patriarch's Ponds.
The first of them — aged about forty, dressed in a grey summer suit —
was short, dark-haired, well-fed and bald.
He was carrying his hat decorously in his hand and his freshly shaved face
was adorned with spectacles of supernatural size in black horn-rimmed frames.
The second — a broad-shouldered young man with reddish curly hair
and a check cap cocked on his head —
wore a cowboy shirt, crinkled white trousers and black shoes.
The first was Mikhail Alexandrovich Berlioz, editor of a fat literary journal.`,[],[]),
          col(`bulgakov-aplin`,`Hugh Aplin`,2008,`Hesperus Press; fresh modern voice`,`aplin-mm`,['Prose','Contemporary'],
            `At the hour of the hot spring sunset two citizens appeared at Patriarch's Ponds.
The first of them — a short, dark-haired, well-fed bald man of around forty —
had on a neat grey summer suit; he was carrying his hat in his hand;
his smooth-shaved face was ornamented by spectacles of unusual dimensions, in black horn frames.
The second — a broad-shouldered young man with tousled reddish hair,
his checked cap pushed back on his head —
wore a cowboy shirt, white crumpled trousers and black shoes.
The first was Mikhail Alexandrovich Berlioz, editor of a thick literary journal.`,[],[]),
        ]
      }]
    }]
  },
  {
    id:'lermontov', name:'Mikhail Lermontov', dates:'1814–1841', lang:'Russian',
    desc:`The doomed Romantic who died in a duel at 26. A Hero of Our Time is the first great Russian psychological novel — Pechorin the first modern antihero.`,
    acc:`#5a7a6a`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mikhail_Lermontov_portrait_by_Zabolotsky_1837.jpg/440px-Mikhail_Lermontov_portrait_by_Zabolotsky_1837.jpg`,
    works:[{
      id:'hero-our-time', title:`A Hero of Our Time`, year:1840,
      chips:[`Psychological`,`Romanticism`,`Novel`],
      passages:[{
        label:`Preface — The Author Speaks`,
        cols:[
          col(`lermontov-nabokov`,`Vladimir Nabokov`,1958,`Famous translation by Nabokov himself; highly literal`,`nabokov-hero`,['Prose','Literary'],
            `Our public is so young and naive that it cannot understand a fable unless it finds a moral at the end of it.
It does not understand irony and has no sense of humor.
It is still in the stage where it mistakes crude clichés for artistic invention,
and where sarcasm strikes it as cutting.
This portrait is composed of the vices of our whole generation in their fullest development.
You will again tell me that no human being can be so wicked,
and I shall tell you that if you have believed in the possibility of so many tragic and romantic villains,
why can you not believe in Pechorin?`,[],[]),
          col(`lermontov-schwartz`,`Marian Schwartz`,2004,`Penguin modern translation`,`schwartz-hero`,['Prose','Contemporary'],
            `Our public is so young and naive that it cannot understand a fable unless it finds a moral at the end.
It fails to detect irony and has no sense of humour.
It is still at the stage where it considers crude drawing to be artistic,
and where sarcasm hits home.
This portrait has been composed of the vices of our whole generation at their full development.
You will tell me once again that it is impossible for a person to be as bad as this.
And I will tell you: if you have believed in the possibility of all the tragic and romantic scoundrels you have read about,
why can you not believe in the reality of Pechorin?`,[],[]),
        ]
      }]
    }]
  },
],

german: [
  {
    id:'kafka', name:'Franz Kafka', dates:'1883–1924', lang:'German (Prague)',
    desc:`Kafka's uncanny bureaucratic nightmares — *The Trial*, *The Castle*, *The Metamorphosis* — have generated a translation industry. Every rendering of his deceptively simple prose makes crucial interpretive choices.`,
    acc:`kafka`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Franz_Kafka%2C_1923.jpg/440px-Franz_Kafka%2C_1923.jpg`,
    works:[
      {
        id:'trial', title:`The Trial`, year:1925,
        desc:`Josef K. is arrested and tried for a crime that is never specified — a parable of guilt, power, and impenetrable systems.`,
        chips:[`Existentialism`,`Absurdism`,`Bureaucracy`],
        passages:[
          {
            label:`Chapter 1 — The Arrest`,
            cols:[
              col(`kafka-trial-muir`,`Willa & Edwin Muir`,1937,`The first and long-standard English translation`,`muir-trial`,['Prose','Classic'],
                `Someone must have been telling lies about Joseph K.,
for without having done anything wrong he was arrested one fine morning.
His landlady's cook, who always brought him his breakfast at eight o'clock,
failed to appear on this occasion. That had never happened before.
K. waited for a little while, looked from his pillow at the old lady opposite,
who seemed to be peering at him with a curiosity unusual even for her,
and then, feeling both hungry and disconcerted, rang the bell.
At once there was a knock at the door, and a man entered
whom he had never seen before in the house.`,[],[]),
              col(`kafka-trial-mitchell`,`Mike Mitchell`,1998,`Alternative contemporary rendering`,`mitchell-trial`,['Prose','Contemporary'],
                `Someone must have traduced Joseph K., for without having done anything wrong,
he was arrested one morning.
The landlady's cook, who usually brought him his breakfast at eight o'clock,
failed to appear on this occasion.
That had never happened before.
K. waited a little while, looked from his pillow at the old lady across the way
who seemed to be observing him from her window with a curiosity unusual even for her,
and then, both puzzled and hungry, rang the bell.
There was a knock at once and a man appeared, someone he had never seen before in the house.`,[],[]),
              col(`kafka-trial-underwood`,`Breon Mitchell`,2009,`Schocken critical edition`,`bmitchell-trial`,['Prose','Contemporary'],
                `Someone must have slandered Josef K., for one morning, without having done anything wrong, he was arrested.
His landlady's cook, who brought him breakfast each day at around eight o'clock,
failed to arrive on this particular morning.
That had never happened before.
K. waited a little while longer, watched from his pillow the old lady across the way
who was watching him with an inquisitiveness quite unusual for her,
then, feeling both puzzled and hungry, rang the bell.
At once there was a knock on the door, and a man entered
whom he had never seen before in the house.`,[],[]),
            ]
          },
          {
            label:`Chapter 9 — In the Cathedral`,
            cols:[
              col(`kafka-trial-ix-muir`,`Willa & Edwin Muir`,1937,`Classic version`,`muir-trial`,['Prose','Classic'],
                `K. went into the cathedral.
He looked around: the cathedral was almost completely deserted.
He was not sure why he had come. Looking up at the walls and ceiling,
he saw that every one of the stone carvings glimmering high above him
showed some episode from the life of some saint.
A light was burning before one of them.
He stood still, thinking. Then a priest appeared in the pulpit high above him
and began to speak. K. was startled, though the priest's voice was quiet.
"Josef K.," the priest said. K. looked up. "Yes?" he said.`,[],[]),
              col(`kafka-trial-ix-bmitchell`,`Breon Mitchell`,2009,`Scholarly Schocken edition`,`bmitchell-trial`,['Prose','Contemporary'],
                `K. heard a voice. "Josef K.!"
K. stopped. A man in a dark robe was standing in the pulpit, looking down at him.
"You are the defendant Josef K.?" the man said.
"Yes," said K.
"You stand accused."
"I know," said K. "I have been under accusation for some time. But of what, exactly?"
"You should know that," the priest said. "It is written in your face."
K. looked up at the face in the pulpit.
He could not see it clearly in the half-darkness.
"What am I supposed to do?" K. asked.`,[],[]),
              col(`kafka-met-corngold`,`Stanley Corngold`,1972,`Scholarly Bantam; important for 'vermin'`,`corngold-met`,['Prose','Scholarly'],
                `When Gregor Samsa woke up one morning from unsettling dreams,
he found himself changed in his bed into a monstrous vermin.
He was lying on his hard, armor-like back, and when he raised his head a little,
he could see his curved brown belly, divided by stiff arched segments,
on top of which the blanket, ready to slip off altogether, was barely holding on.
His many legs, which were pitifully thin compared to the rest of his bulk,
flickered helplessly before his eyes.
"What has happened to me?" he thought. It was no dream.`,[],[]),
              col(`kafka-met-hofmann`,`Michael Hofmann`,2007,`Penguin Modern Classics`,`hofmann-met`,['Prose','Contemporary'],
                `When Gregor Samsa woke one morning from troubled dreams,
he found himself transformed right there in his bed into some kind of monstrous insect.
He was lying on his hard, shell-like back, and when he raised his head a little,
he could see his curved brown belly, with the hard arched segments of his armor showing clearly,
on top of which the cover was just barely managing to stay in place.
His many legs, pathetically thin compared to the rest of his bulk,
flickered uncertainly before his eyes.
"What's happened to me?" he thought. It was no dream.`,[],[]),
              col(`kafka-met-bmitchell2014`,`Breon Mitchell`,2014,`Norton critical edition`,`bmitchell-met`,['Prose','Scholarly'],
                `When Gregor Samsa woke one morning from uneasy dreams,
he found himself transformed in his bed into a monstrous vermin.
He lay on his hard, carapace-like back, and when he raised his head a little
he could see his curved brown belly, divided by stiff, arching segments,
on top of which the bedclothes, ready to slip off altogether, were barely managing to cling.
His many legs, pathetically thin compared to his otherwise massive body,
quivered helplessly before his eyes.
"What's happened to me?" he thought. It was no dream.`,[],[]),
            ]
          },
          {
            label:`Section III — Gregor's Death`,
            cols:[
              col(`kafka-met-death-muir`,`Willa & Edwin Muir`,1937,`Classic prose`,`muir-met`,['Prose','Classic'],
                `He thought back on his family with tenderness and love.
His conviction that he would have to disappear was, if possible, even firmer than his sister's.
He remained in this state of empty and peaceful meditation until the tower clock
struck three in the morning.
He lived to see the beginning of the general brightening outside the window.
Then his head sank down involuntarily, and from his nostrils streamed his last faint breath.
When the charwoman arrived early in the morning — they had often asked her not to keep slamming the doors
but with her strength and in her haste she could not avoid it —
she found Gregor already quite still.`,[],[]),
              col(`kafka-met-death-corngold`,`Stanley Corngold`,1972,`Scholarly precision`,`corngold-met`,['Prose','Scholarly'],
                `He thought back on his family with tenderness and love.
His conviction that he had to disappear was, if possible, even firmer than his sister's.
He remained in this state of peaceful and empty meditation until the clock struck three in the morning.
He saw the beginning of the general brightening outside the window.
Then his head sank down involuntarily and from his nostrils flowed his last faint breath.
When the charwoman arrived early in the morning —
in her vigor and in her haste she slammed all the doors so hard, however often she had been asked not to,
that once she arrived, quiet sleep was no longer possible anywhere in the apartment —
she noticed nothing unusual upon first paying her customary brief visit to Gregor.`,[],[]),
              col(`kafka-met-death-hofmann`,`Michael Hofmann`,2007,`Contemporary rendering`,`hofmann-met`,['Prose','Contemporary'],
                `He thought back on his family with tenderness and love.
His own conviction that he must disappear was, if possible, even more firmly held than his sister's.
He remained in that condition of emptiness and peace until the tower clock struck three.
He saw the beginning of the overall brightening outside the window.
Then his head involuntarily drooped, and his last breath flowed weakly from his nostrils.
When the charwoman arrived at dawn — in her strength and impetuosity
she banged all the doors, however often she was asked not to —
she could not at first believe what she saw on paying her daily call on Gregor.
She thought he was lying completely still, playing dead.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'mann', name:'Thomas Mann', dates:'1875–1955', lang:'German',
    desc:`Nobel laureate and architect of the German Bildungsroman. *The Magic Mountain* and *Buddenbrooks* command a permanent place in the literary canon.`,
    acc:`mann`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Thomas_Mann_1929.jpg/440px-Thomas_Mann_1929.jpg`,
    works:[
      {
        id:'magic-mountain', title:`The Magic Mountain`, year:1924,
        desc:`Hans Castorp spends seven years in an Alpine TB sanatorium — a philosophical novel about time, disease, and European civilization on the eve of war.`,
        chips:[`Modernism`,`Novel`,`Ideas`],
        passages:[
          {
            label:`Chapter 1 — Hans Arrives`,
            cols:[
              col(`mann-mm-lowe-porter`,`H.T. Lowe-Porter`,1927,`The founding English version; long standard`,`lowe-porter-mm`,['Prose','Classic'],
                `An unassuming young man was traveling, in midsummer, from his native city of Hamburg
to Davos-Platz in the Canton of the Grisons, on a three weeks' visit.
From Hamburg to Davos is a long journey — too long, indeed, for so brief a stay.
It passes through many ups and downs, over plateaux and through lowlands,
it winds through tunnels, goes through country where nature is wild and rough,
and at last, after a good long climb, reaches the high plateaux where breathing becomes cleaner.
Certain considerations of time and space, which it would be out of place to develop here,
lend the traveler, especially to the young man who goes out into the world to learn,
a moral value analogous to that of distance.`,[],[]),
              col(`mann-mm-woods`,`John E. Woods`,1995,`Major retranslation; acclaimed for modernity`,`woods-mm`,['Prose','Contemporary'],
                `A young man — an ordinary, if also engaging young man —
was traveling in midsummer from his hometown of Hamburg to Davos-Platz in the canton of Graubünden.
He would be gone for three weeks.
From Hamburg to Davos is a long journey, indeed too long for so short a stay.
It leads through many landscapes, past ups and downs, across plateaux, through lowlands,
it winds through tunnels, over mountain passes,
and finally, after a long climb, the air becomes lighter and cleaner,
reaching the heights of the plateau.
Hans Castorp — that was the young man's name — was traveling alone.`,[],[]),
            ]
          },
          {
            label:`Chapter 6 — The Snowstorm`,
            cols:[
              col(`mann-mm-snow-lowe`,`H.T. Lowe-Porter`,1927,`Classic version`,`lowe-porter-mm`,['Prose','Classic'],
                `Hans Castorp lay awake in the snow. For a long time he had not known he was asleep.
He opened his eyes. Before him was a vast white expanse.
He had been lying on his side; now he tried to turn over, but could not.
His legs refused. He looked down and saw that he was lying in deep snow.
He had fallen asleep in the snow — he must have walked a long way from the shelter.
He remembered now: there had been a storm. He had lost his way.
He had sat down to rest. And then the sleep had come — the deep, soft, white sleep of the mountain.`,[],[]),
              col(`mann-mm-snow-woods`,`John E. Woods`,1995,`Modern rendering`,`woods-mm`,['Prose','Contemporary'],
                `Hans Castorp was lying in deep snow.
He did not know how long he had been sleeping.
He struggled to sit up. He felt heavy, sluggish, cold.
The storm had passed. The sky was dark, and far above him the stars were out.
He had wandered far from the path, far from the shelter.
He should not have sat down. Sitting down in snow was the one thing they warned you about.
He had sat down, and the sleep had come, sweet and white,
the sleep of the mountain that has no morning in it.
He was lucky to be alive.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'buddenbrooks', title:`Buddenbrooks`, year:1901,
        desc:`The decline of a merchant family over four generations in Lübeck — Mann's first novel and Nobel-winning magnum opus of German naturalism.`,
        chips:[`Realism`,`Family`,`Decline`],
        passages:[
          {
            label:`Part I — The Family Dinner`,
            cols:[
              col(`mann-bud-lowe`,`H.T. Lowe-Porter`,1924,`Founding English version`,`lowe-porter-bud`,['Prose','Classic'],
                `"And — and — what comes next?"
"Oh, yes. I believe, I trust in God, the Father Almighty —"
"No, no! I mean in the catechism. In my book."
"Oh, pardon, my dear. The whole of Buddenbrock property, both real and personal —"
"Yes, but I mean after that too."
"Something about the apostolic succession, I suppose, my dear."
"You are always so clever."
The little girl looked at her grandmother with those earnest blue eyes —
how enormous they were in that tiny face —
and smiled back with that expression of enchanting childlike sweetness
which is found in little girls between the ages of seven and twelve.`,[],[]),
              col(`mann-bud-woods`,`John E. Woods`,1994,`Modern prize-winning translation`,`woods-bud`,['Prose','Contemporary'],
                `Tony Buddenbrook sat quite still, her eyes wide open,
listening to the grown-ups talk.
The Consul was explaining, in a serious and authoritative voice,
what it meant to own a house.
It meant responsibility. It meant permanence. It meant belonging to a place and a time.
Tony looked down at her folded hands.
She was only eight years old, but she understood responsibility.
She had been born into it.
One day all of this would be hers to manage,
or so the grown-ups seemed to believe.
She was not sure she wanted it.`,[],[]),
            ]
          },
          {
            label:`Part XI — Hanno's Death`,
            cols:[
              col(`mann-bud-death-lowe`,`H.T. Lowe-Porter`,1924,`Classic prose`,`lowe-porter-bud`,['Prose','Classic'],
                `Tony stood by the bed for a long time after her mother had stopped breathing.
The room was very still. The white coverlet was drawn up to the chin.
The old face was peaceful, even a little smiling —
as though it knew something, as though it had found something out.
Outside the windows, it was an ordinary autumn afternoon.
Tony took her mother's cold hand and held it.
She thought of all the things her mother had never said, all the things she would never know now.
She wept, though she was fifty-two years old, and thought that women of fifty-two did not weep like this.`,[],[]),
              col(`mann-bud-death-woods`,`John E. Woods`,1994,`Contemporary version`,`woods-bud`,['Prose','Contemporary'],
                `When the Senator died, Tony felt nothing for several days.
She sat in the house and answered the condolences with the appropriate words.
She ate the food that was brought to her.
She slept at the prescribed hours.
It was only later — weeks later — that the grief came,
arriving without warning one evening while she was sitting alone
in the room that had been her brother's study.
She wept for a long time. She wept for the family.
She wept for the name that would now disappear from the firm's letterhead.
She wept for herself.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'sebald', name:'W.G. Sebald', dates:'1944–2001', lang:'German',
    desc:`Sebald's melancholy prose-picture essays defy genre. *The Emigrants* and *The Rings of Saturn* are considered the most original German-language works of the late 20th century.`,
    acc:`sebald`, tonkin:false,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/W.G._Sebald.jpg/440px-W.G._Sebald.jpg`,
    works:[
      {
        id:'emigrants', title:`The Emigrants`, year:1992,
        desc:`Four accounts of uprooted lives — a meditation on memory, loss, and the Holocaust's long shadow.`,
        chips:[`Prose`,`Memory`,`Holocaust`],
        passages:[
          {
            label:`Paul Bereyter — The Teacher`,
            cols:[
              col(`sebald-em-hulse`,`Michael Hulse`,1996,`The standard English translation`,`hulse-emigrants`,['Prose','Contemporary'],
                `In January 1984, some years after Paul Bereyter had retired from teaching,
I heard through a distant relation that he had taken his own life.
The news came to me at a time when I too was finding it difficult to write,
and it took me a long while to set out what little I knew about Paul Bereyter
and what he had meant to me.
He was my teacher during my first four years at school.
At the time I knew nothing of his history.
Only later did I learn that he came from a family in which there had always been teachers,
that his father had been a teacher, and his father's father too.
He never spoke of this. He spoke of almost nothing personal.`,[],[]),
            ]
          },
          {
            label:`Paul Bereyter — The Railway`,
            cols:[
              col(`sebald-em-railway-hulse`,`Michael Hulse`,1996,`Only existing English translation`,`hulse-emigrants`,['Prose','Contemporary'],
                `There are places — Bereyter knew of them —
that exist at the intersection of what is remembered and what cannot be spoken.
He had grown up in S. He had left S. and come back.
He had been a teacher in S. for thirty years.
But there had always been something that S. could not contain:
a history that he carried with him, a wound,
the origin of which he had tried to keep from his pupils and colleagues
and perhaps even from himself.
The local paper had carried a brief notice about his death.
It said that he had gone to the railway line at night
and laid himself down to wait for the morning train.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'rings-saturn', title:`The Rings of Saturn`, year:1995,
        desc:`A walking tour of Suffolk unfolds into meditations on history, ruins, and the passage of empire.`,
        chips:[`Prose`,`History`,`Memory`],
        passages:[
          {
            label:`Chapter I — The Walk Begins`,
            cols:[
              col(`sebald-rs-hulse`,`Michael Hulse`,1998,`Standard English translation`,`hulse-rings`,['Prose','Contemporary'],
                `On the seventeenth of August 1992, when the dog days were drawing to an end,
I set out to walk the county of Suffolk,
in the hope of dispelling the emptiness that takes hold of me
whenever I have completed a long stint of work.
And in fact my hope was realized, up to a point;
for I have seldom felt so carefree as I did then, walking for hours in the tidal air,
unshadowed by anything except the aerial roots of the elder trees
and the weirs of the river.
The very name of the county — Suffolk — seemed to me consoling.`,[],[]),
            ]
          },
          {
            label:`Chapter VIII — The Herring Industry`,
            cols:[
              col(`sebald-rs-herring-hulse`,`Michael Hulse`,1998,`Melancholy prose`,`hulse-rings`,['Prose','Contemporary'],
                `The herring are far older than we are.
The seas they swim in were old before the first human voice cried out.
They have their own purposes and their own directions,
and these purposes and directions take no account of us.
The fishermen of Lowestoft knew this.
They knew that the sea gives and takes according to its own logic,
that you can read the signs and still be wrong,
that the most experienced fisherman can be surprised by the sea in the end.
There had been a time when the herring came in such numbers
that the boats could barely hold them.
That time had gone. Where the herring had gone, no one could say.`,[],[]),
            ]
          },
        ]
      },
    ]
  },

  {
    id:'goethe', name:'Johann Wolfgang von Goethe', dates:'1749–1832', lang:'German',
    desc:`The defining writer of German culture. Faust is the supreme achievement of German literature — a verse drama that absorbed Goethe for over sixty years.`,
    acc:`#5a4a70`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Goethe_%28Stieler_1828%29.jpg/440px-Goethe_%28Stieler_1828%29.jpg`,
    works:[{
      id:'faust', title:`Faust Part I`, year:1808,
      chips:[`Verse Drama`,`Philosophy`,`German`],
      passages:[{
        label:`Part I — Faust's Opening Lament`,
        cols:[
          col(`goethe-kaufmann`,`Walter Kaufmann`,1961,`Eminent scholar-poet; widely praised for verse`,`kaufmann-faust`,['Verse','Scholarly'],
            `I've studied, alas, philosophy,
law and medicine, recto and verso,
and, God help me, theology,
with ardent zeal, and even so
I stand here now, poor fool, no whit
more wise than when I first began.
They call me doctor, even master,
and for ten years, up hill and dale,
I've led my pupils by the nose —
and we can't know a single thing.`,[],[]),
          col(`goethe-luke`,`David Luke`,1987,`Oxford World's Classics; praised for lyrical quality`,`luke-faust`,['Verse','Contemporary'],
            `I've studied now, to my regret,
philosophy, law, medicine,
and — worst of all — theology
from end to end with diligence.
Yet here I am, a wretched fool,
no wiser than I was before.
They call me Doctor, even Master,
and for these ten years I have led
my students by the nose, up, down,
crosswise — and see that nothing can be known.`,[],[]),
          col(`goethe-hamlin`,`Cyrus Hamlin ed.`,2001,`Norton Critical; multiple translations compared`,`hamlin-faust`,['Verse'],
            `I have, alas, studied philosophy,
jurisprudence, and medicine too,
and, to my cost, theology —
all of them through and through.
And here I stand, with all my lore,
poor fool, no wiser than before.
Magister — doctor — for ten years now
I've led my students by the nose,
up, down, across, and all about —
and see how vain our knowledge is.`,[],[]),
        ]
      }]
    }]
  },
  {
    id:'hesse', name:'Hermann Hesse', dates:'1877–1962', lang:'German',
    desc:`Nobel laureate whose novels of spiritual quest captured a century of seekers. Siddhartha and Steppenwolf remain among the most widely read German novels in translation.`,
    acc:`#4a7a5a`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Hermann_Hesse_2.jpg/440px-Hermann_Hesse_2.jpg`,
    works:[
      {
        id:'siddhartha', title:`Siddhartha`, year:1922,
        chips:[`Spiritual`,`India`,`Novella`],
        passages:[{
          label:`Chapter 1 — The Brahmin's Son`,
          cols:[
            col(`hesse-rosner`,`Hilda Rosner`,1951,`First widely distributed English version`,`rosner-siddhartha`,['Prose'],
              `In the shade of the house, in the sunshine of the riverbank near the boats,
in the shade of the Sal-wood forest, in the shade of the fig tree is where Siddhartha grew up,
the handsome Brahmin's son, together with his friend Govinda.
The sun tanned his fair shoulders by the banks of the river
when bathing, performing the sacred ablutions, the sacred offerings.
Shadow flowed into his dark eyes in the mango grove when playing as a boy,
when his mother sang, when his father taught him, when the wise men talked.`,[],[]),
            col(`hesse-bernofsky`,`Susan Bernofsky`,2006,`Shambhala modern version; fresh prose`,`bernofsky-siddhartha`,['Prose','Contemporary'],
              `In the shade of the house, in the sun of the riverbank by the boats,
in the shade of the sal-wood forest, in the shade of the fig tree —
that is where Siddhartha grew up, the beautiful son of the Brahmin,
young falcon, along with his friend Govinda, also a Brahmin's son.
The sun tanned his fair shoulders at the riverbank,
while bathing, at the sacred ablutions, at the sacred sacrifices.
Shadows passed through his dark eyes in the mango grove.`,[],[]),
          ]
        }]
      },
      {
        id:'steppenwolf', title:`Steppenwolf`, year:1927,
        chips:[`Modernism`,`Alienation`,`Jazz`],
        passages:[{
          label:`Preface — The Manuscript is Found`,
          cols:[
            col(`hesse-creighton`,`Basil Creighton`,1929,`First English translation; long the standard`,`creighton-steppenwolf`,['Prose'],
              `This book contains the records left us by a man whom, according to the expression he often used himself, we called the Steppenwolf.
Whether this manuscript needs any such foreword is doubtful;
I, however, feel the need of adding a few pages to those of the Steppenwolf
in which I try to record my recollections of him.
Of his personality I knew little enough; and yet the impression he left behind him was strong
and, in spite of everything, good.`,[],[]),
            col(`hesse-horrocks`,`David Horrocks`,2012,`Penguin Modern Classics; current standard`,`horrocks-steppenwolf`,['Prose','Contemporary'],
              `This book contains the records left behind by a man who,
using an expression he himself often employed, we called the Steppenwolf.
Whether this manuscript requires a preface at all is a question;
however, I feel the need to add a few pages of my own to those of the Steppenwolf,
in which I try to set down my recollections of him.
I knew little enough about his actual personality;
yet the impression he left on me was both strong and, despite everything, positive.`,[],[]),
          ]
        }]
      },
    ]
  },
  {
    id:'nietzsche', name:'Friedrich Nietzsche', dates:'1844–1900', lang:'German',
    desc:`The philosopher whose hammer shattered Victorian certainties. Thus Spoke Zarathustra is philosophy as prose-poem — one of the most translated German texts.`,
    acc:`#7a5a40`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/440px-Nietzsche187a.jpg`,
    works:[{
      id:'zarathustra', title:`Thus Spoke Zarathustra`, year:`1883–1885`,
      chips:[`Philosophy`,`Prose-Poetry`,`German`],
      passages:[{
        label:`Part I — The Three Metamorphoses`,
        cols:[
          col(`nietz-hollingdale`,`R.J. Hollingdale`,1969,`Penguin standard; most widely assigned for decades`,`hollingdale-zarathustra`,['Prose','Contemporary'],
            `I want to tell you of three metamorphoses of the spirit: how the spirit shall become a camel,
the camel a lion, and the lion at last a child.
There are many heavy things for the spirit, the strong weight-bearing spirit in which reverence dwells:
its strength longs for the heavy, for the heaviest.
What is heavy? the weight-bearing spirit asks, then kneels down like the camel and wants to be well loaded.
What is the heaviest thing, you heroes? so asks the weight-bearing spirit,
that I may take it upon me and rejoice in my strength.`,[],[]),
          col(`nietz-common`,`Thomas Common`,1909,`First major English translation; shaped early reception`,`common-zarathustra`,['Prose','Victorian'],
            `Three metamorphoses of the spirit do I designate to you:
how the spirit becometh a camel, the camel a lion, and the lion at last a child.
Many heavy things are there for the spirit, the strong load-bearing spirit in which reverence dwelleth:
for the heavy and the heaviest longeth its strength.
What is heavy? so asketh the load-bearing spirit;
then kneeleth it down like the camel, and wanteth to be well laden.
What is the heaviest thing, ye heroes? asketh the load-bearing spirit,
that I may take it upon me and rejoice in my strength.`,[],[]),
          col(`nietz-delcaro`,`Adrian Del Caro`,2006,`Cambridge critical edition`,`delcaro-zarathustra`,['Prose','Scholarly'],
            `Of three metamorphoses of the spirit I tell you: how the spirit becomes a camel,
the camel a lion, and the lion finally a child.
There is much that is difficult for the spirit, the strong weight-bearing spirit
that is filled with reverence: its strength longs for the difficult, for the most difficult.
What is difficult? asks the weight-bearing spirit, then kneels down like the camel and wants to be well loaded.
What is most difficult, O heroes, asks the weight-bearing spirit?
So that I may take it upon myself and rejoice in my strength.`,[],[]),
        ]
      }]
    }]
  },
],

spanish: [
  {
    id:'cervantes', name:'Miguel de Cervantes', dates:'1547–1616', lang:'Spanish',
    desc:`The inventor of the modern novel. *Don Quixote* has been translated into English more than any other work except the Bible.`,
    acc:`cervantes`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Cervantes_J%C3%A1uregui.jpg/440px-Cervantes_J%C3%A1uregui.jpg`,
    works:[
      {
        id:'quixote', title:`Don Quixote`, year:`1605–1615`,
        desc:`The mad knight of La Mancha and his squire Sancho Panza — chivalry and delusion collide with ordinary reality.`,
        chips:[`Novel`,`Comedy`,`Chivalry`],
        passages:[
          {
            label:`Part I Chapter 1 — In a Village of La Mancha`,
            cols:[
              col(`cervantes-shelton`,`Thomas Shelton`,1612,`First English translation ever made`,`shelton-quixote`,['Prose','Early Modern'],
                `In a village of la Mancha, whose name I have no desire to call to mind,
there lived not long since one of those gentlemen that keep a lance in the lance-rack,
an old buckler, a lean horse, and a greyhound for coursing.
An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays,
lentils on Fridays, and a pigeon or so extra on Sundays,
made away with three-quarters of his income.
The rest of it went in a doublet of fine cloth and velvet breeches
and shoes to match for holidays.`,[],[]),
              col(`cervantes-smollett`,`Tobias Smollett`,1755,`Novelist's translation; vigorous prose`,`smollett-quixote`,['Prose','Neoclassical'],
                `In a certain village of La Mancha, which I shall not name,
there lived, not long ago, one of those old-fashioned gentlemen
who are never without a lance upon a rack, an old target, a lean horse, and a greyhound.
His diet consisted more of beef than mutton; and with minced meat on most nights,
lentils on Fridays, gripes and groans on Saturdays, and a pigeon extraordinary on Sundays,
he consumed three-fourths of his revenue.
The rest was laid out in a plush coat, velvet breeches, with slippers of the same.`,[],[]),
              col(`cervantes-ormsby`,`John Ormsby`,1885,`Victorian scholarly standard`,`ormsby-quixote`,['Prose','Victorian'],
                `In a village of La Mancha, the name of which I have no desire to call to mind,
there lived not long since one of those gentlemen that keep a lance in the lance-rack,
an old buckler, a lean hack, and a greyhound for coursing.
An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays,
lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.
The rest of it went in a doublet of fine cloth and velvet breeches
and shoes to match for holidays, while on week-days he made a brave figure
in his best homespun.`,[],[]),
              col(`cervantes-cohen`,`J.M. Cohen`,1950,`Penguin; first readable 20th-century version`,`cohen-quixote`,['Prose'],
                `Somewhere in La Mancha, in a place whose name I do not care to remember,
a gentleman lived not long ago, one of those who has a lance and ancient shield on a shelf
and keeps a skinny nag and a greyhound for racing.
An occasional stew, beef more often than lamb, hash most nights, eggs and abstinence on Fridays,
lentils on Saturdays, a young pigeon as a special treat on Sundays,
consumed three-quarters of his income.
The rest went for a coat of fine cloth and velvet breeches and shoes to match
for feast days, while on weekdays he cut a fine figure in his best homespun.`,[],[]),
              col(`cervantes-raffel`,`Burton Raffel`,1996,`Scholarly Norton version`,`raffel-quixote`,['Prose','Scholarly'],
                `Somewhere in La Mancha, in a place I don't care to remember, there lived not long ago
one of those old-fashioned gentlemen who keeps a lance in the lance-holder,
an old shield, a scrawny horse, and a fast greyhound.
A stew with more beef than mutton, cold salad most nights, eggs and lard on Fridays,
a small pigeon or so as a treat on Sundays — this consumed three-quarters of his income.
The rest went on a fine woolen coat, velvet breeches, and shoes of the same material
for feasts and holidays, while on weekdays he went in his best homespun.`,[],[]),
              col(`cervantes-grossman`,`Edith Grossman`,2003,`The acclaimed modern standard`,`grossman-quixote`,['Prose','Contemporary'],
                `Somewhere in La Mancha, in a place whose name I do not care to remember,
a gentleman lived not long ago, one of those who has a lance and ancient shield on a shelf
and keeps a skinny nag and a greyhound for racing.
An occasional stew, beef more often than lamb, hash most nights,
eggs and abstinence on Fridays, lentils on Saturdays,
a young pigeon as a special treat on Sundays —
these consumed three-quarters of his income.
The rest went for a broadcloth greatcoat and velvet breeches
and slippers of the same material for feast days.`,[],[]),
            ]
          },
          {
            label:`Part I Chapter 8 — The Windmills`,
            cols:[
              col(`cervantes-wm-shelton`,`Thomas Shelton`,1612,`Earliest English`,`shelton-quixote`,['Prose','Early Modern'],
                `In this discourse, they discovered some thirty or forty windmills that are in that field;
and as soon as Don Quixote espied them, he said to his squire:
"Fortune addresseth our affairs better than we could desire;
look there, friend Sancho Panza, where thou mayst see thirty or forty hulking giants,
with whom I mean to do battle, and take away all their lives;
with whose spoils we will begin to be rich:
for this is a righteous war, and the service of God,
who will do away with that wicked race."
"What giants?" quoth Sancho Panza.`,[],[]),
              col(`cervantes-gov-grossman`,`Edith Grossman`,2003,`Contemporary standard`,`grossman-quixote`,['Prose','Contemporary'],
                `"Fortune is guiding our affairs better than we ourselves could have desired.
Look there, Sancho Panza, my friend, and see those thirty or so wild giants
with whom I intend to do battle and whose lives I intend to take,
and with the spoils from this battle we shall begin to make our fortunes,
for this is righteous warfare, and it is a great service to God to rid the earth of this vile brood."
"What giants?" said Sancho Panza.
"Those you see over there," replied his master, "with their long arms." `,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'garcia-marquez', name:'Gabriel García Márquez', dates:'1927–2014', lang:'Spanish',
    desc:`The Colombian Nobel laureate who defined magical realism. *One Hundred Years of Solitude* has been translated into 46 languages.`,
    acc:`garcia-marquez`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Gabriel_Garcia_Marquez.jpg/440px-Gabriel_Garcia_Marquez.jpg`,
    works:[
      {
        id:'solitude', title:`One Hundred Years of Solitude`, year:1967,
        desc:`Seven generations of the Buendía family in the mythical Macondo — a chronicle of creation, war, passion, and apocalypse.`,
        chips:[`Magical Realism`,`Novel`,`Latin America`],
        passages:[
          {
            label:`Opening — Many Years Later`,
            cols:[
              col(`gm-rab`,`Gregory Rabassa`,1970,`The famous English translation; praised by García Márquez himself`,`rabassa-solitude`,['Prose','Contemporary'],
                `Many years later, as he faced the firing squad,
Colonel Aureliano Buendía was to remember that distant afternoon when his father
took him to discover ice.
At that time Macondo was a village of twenty adobe houses,
built on the bank of a river of clear water that ran along a bed of polished stones,
which were white and enormous, like prehistoric eggs.
The world was so recent that many things lacked names,
and in order to indicate them it was necessary to point.`,[],[]),
              col(`gm-hobhouse`,`Edith Grossman`,2024,`New translation after Rabassa's copyright expired`,`grossman-solitude`,['Prose','Contemporary'],
                `Many years later, when facing the firing squad,
Colonel Aureliano Buendía would recall that remote afternoon
when his father took him to discover ice.
Back then Macondo was a village of twenty adobe houses
built on the bank of a river of limpid water that rushed along a bed of polished stones,
large and white like prehistoric eggs.
The world was so recent that many things lacked names,
and one had to point at them to identify them.
Every year, in the month of March, a family of ragged gypsies
would set up their tents near the village.`,[],[]),
            ]
          },
          {
            label:`Part IV — The Insomnia Plague`,
            cols:[
              col(`gm-insomnia-rab`,`Gregory Rabassa`,1970,`Classic prose`,`rabassa-solitude`,['Prose','Contemporary'],
                `When José Arcadio Buendía realized that the plague had invaded his house,
he gathered together the heads of the family and for several hours, in vain,
he tried to give them an account of what had been happening.
Then he took the initiative of marking things with their names.
He tied a tag to the leg of the cow with the word COW, a sign to remind everyone
that the cow must be milked every morning, and the milk boiled and mixed with coffee
to make coffee and milk, and thus they could go on living without the plague
causing them to forget the function of things.`,[],[]),
              col(`gm-insomnia-grossman`,`Edith Grossman`,2024,`New translation`,`grossman-solitude`,['Prose','Contemporary'],
                `When José Arcadio Buendía realized the plague had invaded his house,
he gathered the heads of the family and for several hours tried in vain
to explain to them what the situation was.
Then he took the initiative of tagging things with their names.
He tied a tag to the leg of the cow that said COW, placed a sign where the milk was kept
saying MILK, and wrote another: "This is the great invention of our time, called a CALENDAR."
He put the word DOOR on the door and WINDOW on the window.
He began to tag everything.`,[],[]),
            ]
          },
          {
            label:`Final Chapter — The Last Buendía`,
            cols:[
              col(`gm-last-rab`,`Gregory Rabassa`,1970,`Classic American prose`,`rabassa-solitude`,['Prose','Contemporary'],
                `It was as if God had decided to put to the test every capacity for surprise
and was keeping the inhabitants of Macondo in a permanent alternation
between excitement and disappointment, doubt and revelation, to such an extreme
that no one knew for certain where the limits of reality lay.
It was an intricate stew of truths and mirages that convulsed the ghost of José Arcadio Buendía
under the chestnut tree with impatience and made him wander all through the house
even in broad daylight.`,[],[]),
              col(`gm-last-grossman`,`Edith Grossman`,2024,`New version`,`grossman-solitude`,['Prose','Contemporary'],
                `It was as if God had decided to put to the test every capacity for surprise
and was keeping the inhabitants of Macondo in a state of perpetual alternation
between excitement and disappointment, doubt and revelation.
No one could say for certain where the limits of reality lay.
The boundaries between what was real and what was dreamed
had become so blurred that few could say which world they inhabited.
It was an intricate mixture of truths and illusions
that shook the ghost of José Arcadio Buendía beneath the chestnut tree.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'love-cholera', title:`Love in the Time of Cholera`, year:1985,
        desc:`Florentino Ariza waits fifty-three years for the woman he loves. An epic meditation on aging, desire, and fidelity.`,
        chips:[`Novel`,`Love`,`Latin America`],
        passages:[
          {
            label:`Opening — The Smell of Almonds`,
            cols:[
              col(`gm-ltc-grossman1988`,`Edith Grossman`,1988,`The standard English translation`,`grossman-cholera`,['Prose','Contemporary'],
                `It was inevitable: the scent of bitter almonds always reminded him of the fate of unrequited love.
Dr. Juvenal Urbino noticed it as soon as he entered the still-darkened house
where he had hurried on an urgent call
to attend a case that for him had lost all urgency many years before.
The Antillean refugee Jeremiah de Saint-Amour, disabled war veteran, photographer of children,
and his most sympathetic opponent in chess,
had escaped the torments of memory with the aromatic fumes of gold cyanide.
He found him on the floor of his dark photography studio,
lying on a cot, with an expression on his face of someone who had been given excellent news.`,[],[]),
            ]
          },
          {
            label:`Final Chapter — Forever`,
            cols:[
              col(`gm-ltc-end-grossman`,`Edith Grossman`,1988,`Contemporary prose`,`grossman-cholera`,['Prose','Contemporary'],
                `Old Florentino Ariza stood at the prow of the ship,
watching the river bank slide past in the darkness.
He had been on this boat before, many years ago,
when Fermina Daza was still alive to him in a different way.
He thought about the passage of time.
He thought about the cholera flag that flew above the ship,
keeping the world at bay.
Captain de Saint-Amour came to stand beside him.
"So?" said the captain. "How long do you think we can keep this up —
going up and down the river like this, just the two of us?"
Florentino Ariza thought for a moment.
"Forever," he said.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'rulfo', name:'Juan Rulfo', dates:'1917–1986', lang:'Spanish',
    desc:`Mexico's most enigmatic modernist. *Pedro Páramo* — a brief, dazzling novel of the dead — influenced García Márquez, Toni Morrison, and Susan Sontag.`,
    acc:`rulfo`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Juan_Rulfo%2C_c._1970.jpg/440px-Juan_Rulfo%2C_c._1970.jpg`,
    works:[
      {
        id:'pedro-paramo', title:`Pedro Páramo`, year:1955,
        desc:`Juan Preciado travels to his father's village of Comala — and finds it inhabited only by whispers of the dead.`,
        chips:[`Modernism`,`Mexico`,`Death`],
        passages:[
          {
            label:`Opening — I Came to Comala`,
            cols:[
              col(`rulfo-page`,`Lysander Kemp`,1959,`First English translation`,`kemp-pedro`,['Prose'],
                `I came to Comala because I had been told that my father, a man named Pedro Páramo, lived there.
My mother told me so. And I had promised her that after she died I would go to see him.
I squeezed her hands as a sign I would do it. She was near death,
and I would have promised her anything.
"Don't fail to go see him," she insisted. "Some call him one thing, some another.
I'm sure he'll want to know you." At that time all I could do was tell her I would do it.`,[],[]),
              col(`rulfo-esteves`,`Margaret Sayers Peden`,1994,`Revised scholarly standard`,`peden-pedro`,['Prose','Scholarly'],
                `I came to Comala because they told me that my father, a man named Pedro Páramo, lived here.
My mother told me. And I had promised her that after she died I would come find him.
I pressed her hands as a sign that I would. She was dying
and I was in no condition to make any promises, but I made them anyway.
"Be sure to go see him," she had insisted. "Some people call him one thing, some another.
I know he will want to see you." All I could do then was say I would.
I promised more to relieve her distress than because I truly intended to fulfill the promise.`,[],[]),
              col(`rulfo-schmidt`,`Douglas J. Weatherford`,2023,`New University of Texas version`,`weatherford-pedro`,['Prose','Contemporary'],
                `I came to Comala because I'd been told my father lived there — a man called Pedro Páramo.
My mother told me. And I'd promised her, when she was dying, that I'd go find him.
I squeezed her hands and made the promise.
She was at the edge of death and I would have promised anything.
"Don't fail to go see him," she'd said. "Some call him one thing, some another.
I am sure he will want to know you."
So I only told her I would go. I promised, more to ease her pain than from real intention.`,[],[]),
            ]
          },
          {
            label:`The Dead Village — Voices in the Dark`,
            cols:[
              col(`rulfo-dead-kemp`,`Lysander Kemp`,1959,`First English version`,`kemp-pedro`,['Prose'],
                `It's a long way to Comala from here. "But it won't seem so long to you once you've arrived."
I expected to find something there, some trace of a life, some meaning, some explanation.
The town was dead.
The houses were empty. Their doorways open to the ground.
The weeds had crept in.
The streets were grown over.
There were only ruins, walls that had crumbled and been reclaimed by the earth,
stones and weeds and silence.
And in the middle of it all, I began to hear the voices.
The voices of the dead.`,[],[]),
              col(`rulfo-dead-peden`,`Margaret Sayers Peden`,1994,`Scholarly version`,`peden-pedro`,['Prose'],
                `The town was deserted. The streets overgrown.
I had expected something — signs of life, traces of my father.
Instead there was only silence and weeds and the hollow sounds my footsteps made
echoing off broken walls.
The houses were ruins. Doors hung open on nothing.
The roofs had caved in years before and the rooms were exposed to the sky.
Later I would learn that the people were there all along —
but not the living.
The dead were there. They had never left.
They were waiting for someone to remember them.`,[],[]),
            ]
          },
          {
            label:`Susana San Juan — The Sea`,
            cols:[
              col(`rulfo-susana-kemp`,`Lysander Kemp`,1959,`First translation`,`kemp-pedro`,['Prose'],
                `Pedro Páramo sat by the fireplace and thought of Susana San Juan.
He sat there every evening, looking into the fire, thinking of her.
He had loved her since he was a child. He had never stopped.
She was the one thing in his life that was not his to own.
He had bought the whole of Comala, house by house, acre by acre.
He had ruined men, dispossessed families, let the fields go dry.
But Susana he could not buy.
She was someone else's wife. She was mad.
She was beyond him. And so she was all he wanted.`,[],[]),
              col(`rulfo-susana-peden`,`Margaret Sayers Peden`,1994,`Careful prose`,`peden-pedro`,['Prose'],
                `Pedro Páramo sat by the fire every evening after sunset.
He sat for hours, looking into the coals, thinking of her.
He had loved Susana San Juan since he was a boy running barefoot in the streets of Comala.
He had never told her. He had sent her away — her father had taken her away —
and for years he had pushed her memory down beneath the work of building his empire.
But it had stayed there. It had always been there.
Now he was old and the empire was built
and Susana was coming back to Comala
and none of it had been for anything but this.`,[],[]),
            ]
          },
        ]
      },
    ]
  },

  {
    id:'borges', name:'Jorge Luis Borges', dates:'1899–1986', lang:'Spanish',
    desc:`The Argentine master of the labyrinthine short story. Ficciones redefined what fiction could be — a single volume that influenced every major writer of the last half-century.`,
    acc:`#5a6a8a`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg/440px-Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg`,
    works:[{
      id:'ficciones', title:`Ficciones`, year:1944,
      chips:[`Short Stories`,`Metafiction`,`Philosophy`],
      passages:[
        {
          label:`The Library of Babel — Opening`,
          cols:[
            col(`borges-hurley`,`Andrew Hurley`,1998,`Penguin Collected Fictions; current standard`,`hurley-borges`,['Prose','Contemporary'],
              `The universe (which others call the Library) is composed of an indefinite,
and perhaps infinite, number of hexagonal galleries,
with vast air shafts between them, surrounded by very low railings.
From any of the hexagons one can see, interminably, the upper and lower floors.
The distribution of the galleries is invariable.
Twenty shelves — five long shelves per side — cover all sides except two;
their height, the height of each floor, scarcely exceeds that of a normal bookcase.
One of the free sides leads to a narrow hallway, which opens onto another gallery,
identical to the first and to all the rest.`,[],[]),
            col(`borges-irby`,`James E. Irby`,1962,`New Directions; earliest collected translation`,`irby-borges`,['Prose'],
              `The universe (which others call the Library) is composed of an indefinite,
perhaps infinite, number of hexagonal galleries.
In the center of each gallery is a ventilation shaft, bounded by a low railing.
From any hexagon one can see the floors above and below — one after another, endlessly.
The arrangement of the galleries is always the same:
twenty bookshelves, five to each side, line four of the six sides of each hexagon;
the height of the bookshelves, floor to ceiling, hardly exceeds that of a normal bookcase.`,[],[]),
          ]
        },
        {
          label:`The Garden of Forking Paths — The Premise`,
          cols:[
            col(`borges-hurley-gfp`,`Andrew Hurley`,1998,`Standard Penguin`,`hurley-borges`,['Prose','Contemporary'],
              `On page 22 of Liddell Hart's History of the World War I,
it is stated that an Allied offensive against the Serre-Montauban line,
scheduled for July 24, 1916, had to be postponed until the morning of the 29th.
The torrential rains, Captain Liddell Hart comments, caused this delay — an insignificant one, surely.
The following declaration, dictated, reread, and signed by Dr. Yu Tsun,
former professor of English at the Hochschule at Tsingtao,
throws an unexpected light on the event.
The first two pages of the document are missing.`,[],[]),
          ]
        },
      ]
    }]
  },
],

italian: [
  {
    id:'calvino', name:'Italo Calvino', dates:'1923–1985', lang:'Italian',
    desc:`Calvino — fabulist, postmodernist, cosmicomic — is among the most translated Italian writers. His playful experiments with form have inspired writers worldwide.`,
    acc:`calvino`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Italo-Calvino.jpg/440px-Italo-Calvino.jpg`,
    works:[
      {
        id:'winters-night', title:`If on a winter's night a traveler`, year:1979,
        desc:`A novel about a Reader trying to read a novel — ten different opening chapters, none continuing, and a story about reading itself.`,
        chips:[`Postmodern`,`Metafiction`,`Novel`],
        passages:[
          {
            label:`Chapter 1 — You Are About to Begin`,
            cols:[
              col(`calvino-wn-weaver`,`William Weaver`,1981,`The standard English translation`,`weaver-winters`,['Prose','Contemporary'],
                `You are about to begin reading Italo Calvino's new novel,
If on a winter's night a traveler.
Relax. Concentrate. Dispel every other thought.
Let the world around you fade.
Best to close the door; the TV is always on in the next room.
Tell the others right away, "No, I don't want to watch TV!"
Raise your voice — they won't hear you otherwise —
"I'm reading! I don't want to be disturbed!"
Maybe they haven't heard you, with all that racket;
speak louder, yell: "I'm beginning to read Italo Calvino's new novel!" `,[],[]),
            ]
          },
          {
            label:`Chapter 2 — The Reader Reads`,
            cols:[
              col(`calvino-wn-2-weaver`,`William Weaver`,1981,`Weaver's rendering`,`weaver-winters`,['Prose','Contemporary'],
                `You are the Reader. The book begins. A train station. A man with a suitcase.
He waits. He watches. He does not know what he is waiting for.
Outside, the first autumn rain is falling.
The station buffet is still open. The loudspeaker announces a delay.
He orders a cup of something hot and thinks:
this is the beginning of something. He does not know what.
Only that it is beginning.
The train will arrive or it won't. Either way something is starting.
You, reading this, are part of it. You always were.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'invisible-cities', title:`Invisible Cities`, year:1972,
        desc:`Marco Polo describes fifty-five fantastical cities to Kublai Khan — each a meditation on memory, desire, or loss.`,
        chips:[`Fable`,`Postmodern`,`Travel`],
        passages:[
          {
            label:`Cities and Memory — Zora`,
            cols:[
              col(`calvino-ic-weaver`,`William Weaver`,1974,`Standard translation`,`weaver-invisible`,['Prose','Contemporary'],
                `Beyond six rivers and three mountain ranges rises Zora, a city that no one, having seen it, can forget.
But not because, like other memorable cities, it leaves an unusual image in your recollections.
Zora has the quality of remaining in your memory point by point,
in its succession of streets, of houses along the streets, and of doors and windows in the houses,
though nothing in them possesses a special beauty or rarity.
Zora's secret lies in the way your gaze runs over patterns following one another
as in a musical score where not a single note can be altered.
The man who knows by heart how Zora is made, if he is unable to sleep at night,
can imagine he is walking along the streets and he remembers the order
in which the copper clock, the barber's striped awning, the fountain, appear.`,[],[]),
            ]
          },
          {
            label:`Cities and Desire — Anastasia`,
            cols:[
              col(`calvino-ic-anastasia-weaver`,`William Weaver`,1974,`Lyrical rendering`,`weaver-invisible`,['Prose','Contemporary'],
                `In the center of Anastasia, a city of canals that cross each other,
is a square where merchants offer their wares.
The desires which Anastasia produces — some say "feeds," others say "seduces" —
wake the city to its full capacity to function.
In the morning you wake to the sound of water and voices,
you see through the window of the hotel a harbor jammed with boats,
men loading and unloading crates, the fishermen hauling their nets.
You lean out and in the distance you recognize the market.
Anastasia, treacherous city, makes you believe that you have a future here.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'lampedusa', name:'Giuseppe Tomasi di Lampedusa', dates:'1896–1957', lang:'Italian',
    desc:`The reclusive Sicilian prince published only one novel, *The Leopard* — but it stands among the masterpieces of the 20th century.`,
    acc:`lampedusa`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lampedusa.jpg/440px-Lampedusa.jpg`,
    works:[
      {
        id:'leopard', title:`The Leopard (Il Gattopardo)`, year:1958,
        desc:`Don Fabrizio, the aging Prince of Salina, watches Sicily and his class transformed by Garibaldi's revolution.`,
        chips:[`Historical`,`Aristocracy`,`Sicily`],
        passages:[
          {
            label:`Part I — The Prince at Prayer`,
            cols:[
              col(`lampedusa-colquhoun`,`Archibald Colquhoun`,1960,`The first and long-definitive English translation`,`colquhoun-leopard`,['Prose','Classic'],
                `Nunc et in hora mortis nostrae. Amen.
The daily recital of the Rosary was over.
For half an hour the steady voice of the Prince had recalled the Glorious and the Sorrowful Mysteries;
for half an hour other voices had interwoven a lilting hum
from which, every now and then, some word would emerge:
"...ora pro nobis peccatoribus..."
the whole exhaling a perfume of sanctity and decay.
The women had kept their eyes on their small books, the three younger men on the floor;
the dining room, hung with yellow damask, was vibrating with the eternal drone.`,[],[]),
              col(`lampedusa-waldman`,`Archibald Colquhoun & revision`,2007,`Revised Pantheon edition`,`waldman-leopard`,['Prose','Contemporary'],
                `Nunc et in hora mortis nostrae. Amen.
The daily rosary was over.
For half an hour the composed voice of the Prince had recalled joyful and sorrowful mysteries;
for half an hour other voices had woven in a murmuring undertone
from which every so often a word emerged clearly:
"...ora pro nobis peccatoribus..."
the whole exhaling a scent of sanctity and decay.
The women kept their eyes on their prayer-books, the three younger men on the floor;
the dining room, hung with yellow damask, hummed with the eternal litany.`,[],[]),
            ]
          },
          {
            label:`Part IV — Don Fabrizio and the Stars`,
            cols:[
              col(`lampedusa-stars-colquhoun`,`Archibald Colquhoun`,1960,`Classic prose`,`colquhoun-leopard`,['Prose','Classic'],
                `"How long have I been here?" was the thought that crossed his mind.
He lay on a hard couch, in this room that smelled of camphor and old lace.
Through the window he could see the stars.
They were innumerable, imperturbable, and cold.
"Fidele," he called. "Bendicò."
But neither the priest nor the dog came.
He was alone.
He had been the Prince. He had lived seventy-three years.
He had seen it all change and remained the same.
Now he was dying, and the stars were indifferent to it.`,[],[]),
              col(`lampedusa-stars-waldman`,`Archibald Colquhoun & revision`,2007,`Revised version`,`waldman-leopard`,['Prose','Contemporary'],
                `Don Fabrizio lay in the room they had given him in the hotel, looking at the ceiling.
The journey from Palermo had exhausted him.
He could feel, without knowing what he felt, that something was ending.
The stars were still there when he looked out. They always were.
He had always found comfort in the stars.
They alone did not change; they were always as indifferent, as beautiful, as cold.
He thought of Palermo. He thought of Concetta.
He thought of the long afternoons in his observatory
looking through the lens at things that were millions of miles away
and absolutely untroubleable.`,[],[]),
            ]
          },
          {
            label:`Part VI — The Ball`,
            cols:[
              col(`lampedusa-ball-colquhoun`,`Archibald Colquhoun`,1960,`Classic rendering`,`colquhoun-leopard`,['Prose','Classic'],
                `For a minute he was afraid that Angelica had surrendered to a young subaltern who had been pursuing her.
He caught sight of her though, dancing with Tancredi.
He watched them sadly.
They were the most handsome couple at the ball,
moving together with an abandon which to Don Fabrizio seemed frankly excessive,
lost in a world of their own, oblivious of the rest, the room, the music, the dancers.
It was as if they inhabited a crystal globe, the two of them,
as if they were already sealed off from the noise and movement around them,
already in a world where only they existed.`,[],[]),
              col(`lampedusa-ball-waldman`,`Archibald Colquhoun & revision`,2007,`Contemporary revision`,`waldman-leopard`,['Prose','Contemporary'],
                `For a moment he feared that Angelica had surrendered to a young officer who had been pursuing her.
Then he caught sight of her dancing with Tancredi.
He watched them with sadness.
They were the most beautiful couple at the ball,
moving together with an abandon that, to Don Fabrizio, seemed frankly excessive.
They were lost in their own world, oblivious to everything else —
the room, the music, the other dancers.
It was as if they alone inhabited a crystal globe,
already sealed off from the noise and movement around them,
already in a world where only they existed.`,[],[]),
            ]
          },
        ]
      },
    ]
  },

],

euro20: [
  {
    id:'kundera', name:'Milan Kundera', dates:'1929–2023', lang:'Czech/French',
    desc:`The Czech-French novelist explored the politics of memory and desire. *The Unbearable Lightness of Being* made him the most widely translated Czech author.`,
    acc:`kundera`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Milan_Kundera_2013.jpg/440px-Milan_Kundera_2013.jpg`,
    works:[
      {
        id:'laughter-forgetting', title:`The Book of Laughter and Forgetting`, year:1979,
        desc:`A polyphonic novel in seven parts — variations on the theme of forgetting and totalitarianism.`,
        chips:[`Postmodern`,`Politics`,`Memory`],
        passages:[
          {
            label:`Part I — Litost`,
            cols:[
              col(`kundera-lf-heim`,`Michael Henry Heim`,1980,`First English translation`,`heim-laughter`,['Prose','Contemporary'],
                `Children, it's simple. Everything in life is a matter of going around.
That's the essence of the joke. But no one gets it the first time.
It took me years to understand it.
My uncle Ladislav was a pianist. He had a repertoire of thirty-seven jokes.
That was exactly the number. No more, no less.
He told them in sequence, one after another, evening after evening,
so that his listeners who came regularly to his table
could follow the jokes as one follows the episodes of a serial. Nobody tired of this.`,[],[]),
              col(`kundera-lf-asher`,`Aaron Asher`,1996,`Revised from French by Kundera himself`,`asher-laughter`,['Prose','Contemporary'],
                `Children, it's simple. Everything in life is a matter of going around.
That is the essence of the joke. But nobody understands this the first time.
It took me years.
My Uncle Ladislav was a pianist who had a repertoire of thirty-seven jokes.
That was the exact number. Not one more, not one fewer.
He told them in sequence, one after another, evening after evening,
so that his regular table companions could follow the jokes
the way one follows the episodes of a serial.
Nobody tired of it.`,[],[]),
            ]
          },
          {
            label:`Part Six — The Angels`,
            cols:[
              col(`kundera-lf-6-heim`,`Michael Henry Heim`,1980,`Clear contemporary prose`,`heim-laughter`,['Prose','Contemporary'],
                `They had been walking for about twenty minutes, and the town had grown invisible in the mist.
Tamina walked with her companion, whose name she had forgotten.
This didn't matter. She was thinking about something else.
She was thinking about the notebooks.
All those notebooks, all those letters, all those photographs.
Her past. Her Pavel. Her life before this present life.
She walked and thought about the notebooks.
The notebooks were the proof that she had existed.
Without them she was only a ghost,
walking through this gray town toward whatever the man beside her was taking her to.`,[],[]),
              col(`kundera-lf-6-asher`,`Aaron Asher`,1996,`Author-approved revision`,`asher-laughter`,['Prose','Contemporary'],
                `They had been walking for about twenty minutes and the town had become invisible in the mist.
Tamina walked beside him. She had forgotten his name.
This didn't bother her. She was thinking about the notebooks.
All of those notebooks, all of those letters, all of those photographs.
The evidence of her past. Of Pavel.
She walked and thought about the notebooks.
The notebooks were proof that she had existed, that her love had been real.
Without them she was nothing but a memory without a body,
walking through a gray town toward an end
she could not quite see.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'unbearable-lightness', title:`The Unbearable Lightness of Being`, year:1984,
        desc:`Four lives in Prague and after the 1968 Soviet invasion — a meditation on lightness, weight, love, and betrayal.`,
        chips:[`Novel`,`Philosophy`,`Politics`],
        passages:[
          {
            label:`Part I — Lightness and Weight`,
            cols:[
              col(`kundera-ulb-heim`,`Michael Henry Heim`,1984,`Defining English translation`,`heim-lightness`,['Prose','Contemporary'],
                `The idea of eternal return is a mysterious one, and Nietzsche has often perplexed other philosophers with it:
to think that everything recurs as we once experienced it,
and that the recurrence itself recurs ad infinitum!
What does this mad myth signify?
Putting it negatively, the myth of eternal return states that a life which disappears once and for all,
which does not return, is like a shadow, without weight, dead in advance,
and whether it was horrible, beautiful, or sublime,
its horror, sublimity, and beauty mean nothing.
We need take no more note of it than of a war between two African kingdoms in the fourteenth century,
a war that altered nothing in the destiny of the world.`,[],[]),
            ]
          },
          {
            label:`Part III — Tereza Arrives`,
            cols:[
              col(`kundera-ulb-iii-heim`,`Michael Henry Heim`,1984,`Standard translation`,`heim-lightness`,['Prose','Contemporary'],
                `She came to him at last. She had come because she had no place to stay.
She had come to him the way a bird falls into an open palm.
She had come to him with her heavy suitcase and her body exhausted by the long night journey.
He gave her his hand and she fell asleep,
her hand in his, both of them forgetting the other's existence, yet joined the entire night.
He did not let go of her hand until morning.
The vertigo he felt was not the vertigo of falling,
but the vertigo of reaching down to lift up something that has fallen.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'musil', name:'Robert Musil', dates:'1880–1942', lang:'German',
    desc:`Musil spent three decades on *The Man Without Qualities*, an unfinished Austro-Hungarian monument combining novel and philosophical essay.`,
    acc:`musil`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Robert_Musil_1900.jpg/440px-Robert_Musil_1900.jpg`,
    works:[
      {
        id:'man-without', title:`The Man Without Qualities`, year:`1930–1943`,
        desc:`Ulrich, a mathematician, drifts through the last year of Austro-Hungarian civilization without conviction or identity.`,
        chips:[`Modernism`,`Philosophy`,`Austria`],
        passages:[
          {
            label:`Book I Chapter 1 — A Fine Day`,
            cols:[
              col(`musil-mwq-wilkins`,`Eithne Wilkins & Ernst Kaiser`,1953,`First partial English translation`,`wilkins-musil`,['Prose','Classic'],
                `There was a depression over the Atlantic.
It was travelling eastward, towards an area of high pressure over Russia,
and still showed no tendency to move northwards around it.
The isotherms and isotheres were functioning as they should.
The air temperature was appropriate relative to the annual mean temperature
and to the aperiodic monthly fluctuations of the temperature.
The rising and the setting of the sun, the moon, the phases of the moon,
of Venus, of the rings of Saturn, and many other significant phenomena
were all in accordance with the forecasts in the astronomical yearbooks.`,[],[]),
              col(`musil-mwq-pike`,`Sophie Wilkins & Burton Pike`,1995,`The complete standard translation`,`pike-musil`,['Prose','Contemporary'],
                `A barometric low hung over the Atlantic.
It moved eastward toward a high-pressure area over Russia
without as yet showing any inclination to bypass this high in a northerly direction.
The isotherms and isothers were functioning as intended.
The air temperature was appropriate relative to the annual mean temperature
and to the aperiodic monthly fluctuations.
The rising and setting of the sun and moon, the phases of the moon,
Venus, the rings of Saturn, and many other significant phenomena
were in full conformity with the forecasts in astronomical yearbooks.
The water vapor in the atmosphere was at its normal level of tension.`,[],[]),
            ]
          },
          {
            label:`Book I — Ulrich and Clarisse`,
            cols:[
              col(`musil-ulrich-pike`,`Sophie Wilkins & Burton Pike`,1995,`Standard translation`,`pike-musil`,['Prose','Contemporary'],
                `The truth is, Ulrich had not chosen this profession of his own free will.
In his youth he had had three answers to give when people asked him what he intended to do.
He wanted to be either a great man or an important man or a genius.
As time went on, it had become clear to him that he could not be all three at once,
and this led him to further reflection.
He concluded that in the modern world there was no such thing as genius,
that it had died with Goethe, that the word was used today only to glorify mediocrity.
He therefore decided to become important, and this meant an important specialist.`,[],[]),
            ]
          },
          {
            label:`Book II — The Essay on Vagueness`,
            cols:[
              col(`musil-essay-pike`,`Sophie Wilkins & Burton Pike`,1995,`Standard rendering`,`pike-musil`,['Prose','Contemporary'],
                `The essay, as a form, is the strictest and most consistent expression
of the idea that the world can be looked at from many angles
and that each angle yields a different truth.
An essayist does not arrive. An essayist circles.
This is also what Ulrich was doing — he was circling a problem
he could not solve, because the problem was himself.
He had intelligence. He had facility. He had irony.
What he lacked was a soul. Or perhaps only the will to use it.
He wrote an essay about this once. It did not help.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'hasek', name:`Jaroslav Hašek`, dates:'1883–1923', lang:'Czech',
    desc:`The anarchic genius of Czech literature. *The Good Soldier Švejk* is a vast satirical anti-war novel, never quite finished — and endlessly translated.`,
    acc:`hasek`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Jaroslav_Ha%C5%A1ek.jpg/440px-Jaroslav_Ha%C5%A1ek.jpg`,
    works:[
      {
        id:'svejk', title:`The Good Soldier Švejk`, year:`1921–1923`,
        desc:`Švejk's bumbling complicity with the Austro-Hungarian war machine — a masterpiece of comic subversion.`,
        chips:[`Satire`,`War`,`Comedy`],
        passages:[
          {
            label:`Book I Chapter 1 — Švejk Is Certified`,
            cols:[
              col(`hasek-sadlon`,`Sadlon (anon.)`,1930,`Early prose translation`,`anon-svejk`,['Prose'],
                `When they brought Svejk in, the detective inspector looked at him searchingly
for a moment and then said: "So you're Svejk, are you?"
"Yes, sir, I'm Svejk."
"And do you know what you're charged with?"
"I know that, sir."
"And what do you think of it?"
"Well, sir," said Svejk, with his good-natured smile,
"it seems to me that there's been a mistake.
I haven't done anything wrong.
I've always been loyal to His Imperial Majesty." `,[],[]),
              col(`hasek-selver`,`Paul Selver`,1930,`Abridged classic version`,`selver-svejk`,['Prose'],
                `Svejk entered the establishment of the recruiting commission
with the expression of an innocent lamb being led to the slaughter.
He had been certified as an imbecile by the military doctors
and discharged from service years before.
Now there was a war on, and the military had reconsidered.
The clerk looked at Svejk. Svejk looked at the clerk.
"Name?" said the clerk.
"Josef Svejk," said Svejk, beaming with goodwill.
"Occupation?"
"Selling dogs. Pedigree dogs." `,[],[]),
              col(`hasek-sadlon2`,`Cecil Parrott`,1973,`Full scholarly translation; standard edition`,`parrott-svejk`,['Prose','Scholarly'],
                `"So they've killed our Ferdinand," said the charwoman to Mr. Svejk,
who had been discharged from military service years before,
after having been found by an army medical board to be an imbecile,
and who now lived by selling dogs — ugly, mongrel monstrosities whose pedigrees he forged.
Apart from this activity, which was not entirely legal,
Svejk also suffered from rheumatism and was at this very moment
rubbing his knees with embrocation.
"Which Ferdinand, Mrs. Muller?" he asked, going on with his massaging.
"I know two Ferdinands." `,[],[]),
            ]
          },
          {
            label:`Book II — Švejk and the Army Chaplain`,
            cols:[
              col(`hasek-chaplain-parrott`,`Cecil Parrott`,1973,`Standard scholarly text`,`parrott-svejk`,['Prose','Scholarly'],
                `The chaplain's orderly was a man of about fifty
who had been through the campaigns of '66 and '78
and had a very philosophical outlook on life.
He had been assigned to the chaplain because no one else would have him.
He slept during divine service, ate the candles when food was scarce,
and on one occasion had been found asleep in the confessional.
He had also been known to substitute water for the communion wine.
The chaplain endured all this with Christian forbearance,
which is to say: he never noticed.`,[],[]),
              col(`hasek-chaplain-sadler`,`Zdeněk Sadlón`,1986,`Later Czech scholarly version`,`sadlon-svejk`,['Prose','Contemporary'],
                `The chaplain's batman was a soldier of the old school.
He had been in the army since the time of the Turkish wars,
or so it seemed; his face was the map of a hundred campaigns.
He had served under three chaplains and learned from all of them
the art of disappearing at the moment of greatest need.
He could sleep standing up, in a crowded mess, in the rain.
He could eat anything, including the candles.
When the chaplain lost his temper, the batman waited patiently.
When the chaplain was sober, the batman was drunk.
They understood each other perfectly.`,[],[]),
            ]
          },
          {
            label:`Book III — The Malingerers' Ward`,
            cols:[
              col(`hasek-mal-parrott`,`Cecil Parrott`,1973,`Scholarly rendering`,`parrott-svejk`,['Prose','Scholarly'],
                `On his way to the front, Svejk made a number of observations.
He observed that the soldiers around him smelled of unwashed clothes and fear.
He observed that the officers smelled of brandy and impatience.
He observed that the train was moving in what seemed to him the wrong direction,
though he was not certain of this as he had never been in this part of the country.
"We're going to Galicia," said the man next to him.
"Is that far?" asked Svejk.
"Far enough," said the man.
"I've never been to Galicia," said Svejk. "I've always wanted to go somewhere I've never been." `,[],[]),
            ]
          },
        ]
      },
    ]
  },

  {
    id:'beckett', name:'Samuel Beckett', dates:'1906–1989', lang:'French/English',
    desc:`The Irish Nobel laureate who wrote his greatest prose in French, then translated it himself into English. The Molloy trilogy is the supreme achievement of post-war European fiction.`,
    acc:`#4a5a6a`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Samuel_Beckett%2C_Pic%2C_1_%28cropped%29.jpg/440px-Samuel_Beckett%2C_Pic%2C_1_%28cropped%29.jpg`,
    works:[{
      id:'molloy-trilogy', title:`Molloy / Malone Dies / The Unnamable`, year:`1951–1953`,
      chips:[`Modernism`,`Absurdism`,`Self-Translated`],
      passages:[
        {
          label:`Molloy — Opening`,
          cols:[
            col(`beckett-molloy-self`,`Samuel Beckett`,1955,`Author's own English translation from his French original`,`beckett-molloy`,['Prose','Self-Translated'],
              `I am in my mother's room. It's I who live there now.
I don't know how I got there. Perhaps in an ambulance, certainly a vehicle of some kind.
I was helped. I'd never have got there alone.
There's this man who comes every week. Perhaps I got here thanks to him.
He says not. He gives me money and takes away the pages.
So many pages, so much money. Yes, I work now, a little like I used to,
except that I don't know how to work any more.
That doesn't matter apparently.`,[],[]),
          ]
        },
        {
          label:`The Unnamable — Opening`,
          cols:[
            col(`beckett-unnamable-self`,`Samuel Beckett`,1958,`Author's self-translation; the trilogy's culmination`,`beckett-unnamable`,['Prose','Self-Translated'],
              `Where now? Who now? When now?
Unquestioning. I, say I. Unbelieving.
Questions, hypotheses, call them that.
Keep going, going on, call that going, call that on.
Can it be that one day, off it goes on, that one day I simply stayed in, in where,
instead of going out, in the old way, out to spend day and night as far away as possible,
it wasn't far. Perhaps that is how it began.
You think you are simply resting, the better to act when the time comes,
or for no reason, and you soon find yourself powerless ever to do anything again.`,[],[]),
          ]
        },
      ]
    }]
  },
],

asian: [
  {
    id:'soseki', name:`Natsume Sōseki`, dates:'1867–1916', lang:'Japanese',
    desc:`The pivotal figure of modern Japanese literature. Sōseki's novels trace the alienation that came with Japan's forced modernization.`,
    acc:`soseki`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Natsume_Soseki_photo.jpg/440px-Natsume_Soseki_photo.jpg`,
    works:[
      {
        id:'gate', title:`The Gate (Mon)`, year:1910,
        desc:`A couple live quietly in Tokyo, shadowed by a guilt they cannot name — and Sōsuke's failed search for peace in a Zen monastery.`,
        chips:[`Novel`,`Modernism`,`Zen`],
        passages:[
          {
            label:`Chapter 1 — The Couple in the Sun`,
            cols:[
              col(`soseki-gate-turney`,`Francis Mathy`,1972,`First English translation`,`mathy-gate`,['Prose'],
                `Sosuke sat in the warm autumn sun on the narrow porch.
He was idly watching his wife Oyone spread clean laundry on the wooden rack
in a patch of sunlight beyond the eaves.
He had no particular reason to watch her —
it was simply that there was nothing else to do.
From time to time he would open a book and skim a few lines,
but he would soon let it fall back onto the porch beside him
and fix his eyes, vacant and unfocused, on his wife's movements.
The sky was a clear, deep blue.`,[],[]),
              col(`soseki-gate-mckinney`,`William Johnston`,2004,`Tuttle version`,`johnston-gate`,['Prose','Contemporary'],
                `Sosuke sat on the narrow back veranda basking in the autumn sun.
He was watching his wife Oyone, without particular reason,
as she stretched laundry on the drying pole beyond the eaves.
He had nothing else to do. He had been sitting here since morning.
Now and then he would pick up the book on the veranda beside him
and read for a few minutes, then set it back down.
His mind was somewhere else.
It had been somewhere else for weeks.
The problem he was turning over was not one that could be solved by reading.`,[],[]),
              col(`soseki-gate-meredith`,`William F. Sibley`,2013,`Columbia University Press — most recent`,`sibley-gate`,['Prose','Contemporary'],
                `Sosuke was sitting out on the narrow veranda at the back of the house,
basking in the pleasant autumn sunshine.
He watched listlessly as his wife Oyone spread the freshly washed laundry
on the bamboo drying-pole in the yard beyond the eaves.
There was no particular reason for him to watch her — simply nothing better to do.
Now and then he would open his book and scan a few lines,
then set it back down on the veranda beside him and gaze out vacantly at Oyone.
She moved back and forth, pinning up the laundry.
He watched her movements and felt nothing. This too had become familiar.`,[],[]),
            ]
          },
          {
            label:`Chapter 18 — The Zen Temple`,
            cols:[
              col(`soseki-gate-zen-mathy`,`Francis Mathy`,1972,`First translation`,`mathy-gate`,['Prose'],
                `He was finally called before the roshi.
He crossed the frost-covered garden and entered the dim room.
The old monk sat without moving.
Sosuke bowed. He waited.
The roshi did not speak immediately.
When he did speak, it was only to ask the question
that Sosuke had been given to work on for the past week.
Sosuke could not answer.
He had sat with the question for seven days
and it had given him nothing.
He bowed again and left, stepping back out into the cold garden.`,[],[]),
              col(`soseki-gate-zen-sibley`,`William F. Sibley`,2013,`Contemporary rendering`,`sibley-gate`,['Prose','Contemporary'],
                `He was finally called before the master.
He crossed the frost-hardened garden and entered the low room where the roshi sat.
The old man was motionless, his back perfectly straight.
Sosuke bowed. The roshi regarded him without expression.
A long silence passed.
Then the master spoke, asking the question Sosuke had been given a week before.
Sosuke had no answer. He had sat with this question since dawn.
He had turned it over in the night.
He had come no closer to it.
He bowed and retreated into the frozen garden, emptier than when he came.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'kokoro', title:`Kokoro`, year:1914,
        desc:`A student's friendship with an enigmatic older man, "Sensei," whose secret connects the Meiji era's ideals to its failures.`,
        chips:[`Novel`,`Meiji Japan`,`Honor`],
        passages:[
          {
            label:`Part I — The Student Meets Sensei`,
            cols:[
              col(`soseki-kokoro-mcclellan`,`Edwin McClellan`,1957,`Long the standard English translation`,`mcclellan-kokoro`,['Prose'],
                `I met the man I shall call "Sensei" at Kamakura.
I had gone there alone to swim; I was young, and I was very much alive to the world then.
I noticed Sensei on the beach. He was already in the water.
As I swam, I kept my eyes on him.
He was alone. He swam alone. He came to the beach alone.
He had a kind of self-containment I had never seen before in a man.
I did not speak to him that day.
But I came back to the beach the next day, and the day after,
hoping to see him again.
I did not know why. I only knew that I wanted to.`,[],[]),
              col(`soseki-kokoro-meredith2`,`Meredith McKinney`,2010,`Penguin Classics new translation`,`mckinney-kokoro`,['Prose','Contemporary'],
                `I shall call the man I met at Kamakura "Sensei."
I will say nothing else about him here.
But from the time I first saw him on the beach at Kamakura,
swimming alone, I wanted to be near him.
I was a young man. I did not yet know what solitude was.
I only knew that this man had something I did not have,
some quality or wound or depth of experience
that showed itself in the way he moved through the water
and the way he walked up the beach alone,
wrapping his towel around him and not looking at anyone.`,[],[]),
            ]
          },
          {
            label:`Part III — Sensei's Letter (The Secret)`,
            cols:[
              col(`soseki-kokoro-letter-mcclellan`,`Edwin McClellan`,1957,`Classic prose`,`mcclellan-kokoro`,['Prose'],
                `By the time you read this, I shall be no more.
I have decided to follow my wife.
You will think me a coward. Perhaps I am.
But I have been thinking about this for many years.
I have been living in the past, and the past has come to claim me at last.
I cannot explain to you — I can barely explain to myself —
what it is that I am atoning for.
Perhaps you will understand when you have read what I have written.
Perhaps you will not understand.
Either way, you are the only person I wished to tell.`,[],[]),
              col(`soseki-kokoro-letter-mckinney`,`Meredith McKinney`,2010,`Contemporary rendering`,`mckinney-kokoro`,['Prose','Contemporary'],
                `By the time you read this I will no longer be in this world.
I have chosen to follow my friend Ojisan into death.
You will find this difficult to understand.
I find it difficult to explain.
But I have been waiting for this moment for a long time —
since the day I understood what I had done and what it had cost.
I have written these pages so that someone, at least,
would understand who I was and what I carried.
I do not ask for forgiveness.
I ask only to be understood.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'tanizaki', name:`Jun'ichirō Tanizaki`, dates:'1886–1965', lang:'Japanese',
    desc:`Tanizaki's writing is suffused with aesthetic obsession, the tension between traditional and modern Japan, and dark eroticism.`,
    acc:`tanizaki`, tonkin:true,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tanizaki_Jun%27ichiro.jpg/440px-Tanizaki_Jun%27ichiro.jpg`,
    works:[
      {
        id:'makioka', title:`The Makioka Sisters`, year:`1943–1948`,
        desc:`Four sisters of an Osaka merchant family navigate the twilight of their world between the wars.`,
        chips:[`Novel`,`Family`,`Pre-war Japan`],
        passages:[
          {
            label:`Chapter 1 — The Opening`,
            cols:[
              col(`tanizaki-mk-seidensticker`,`Edward G. Seidensticker`,1957,`The classic and long-standard translation`,`seidensticker-makioka`,['Prose','Classic'],
                `Yukiko's diarrhea had not stopped, and yet she insisted on making the trip to Osaka.
Sachiko protested that she was in no condition to travel.
Yukiko protested that she had never felt better.
In the end, Sachiko gave in, as she always did.
The four sisters were very different from one another.
Tsuruko was the eldest, reserved and correct.
Sachiko was the second, gentle and thoughtful.
Yukiko was the third — slow, delicate, difficult to know.
Taeko was the youngest — the wild one, the modern one,
the one who had already caused the family three separate scandals.`,[],[]),
              col(`tanizaki-mk-chambers`,`Anthony H. Chambers`,1995,`Updated translation`,`chambers-makioka`,['Prose','Contemporary'],
                `The problem was to get Yukiko to Tokyo in time for the omiai.
Sachiko was not sure it was possible.
Yukiko was not the kind of person who could be rushed.
She had never been rushed in her life.
She moved through the world at her own pace,
as though the world had been arranged for her convenience.
The cherry blossoms were already falling.
They should have left two days ago.
Sachiko looked at her younger sister, who was gazing out the window
at the falling petals, serene and unreachable.`,[],[]),
            ]
          },
          {
            label:`Chapter 12 — The Cherry Blossoms`,
            cols:[
              col(`tanizaki-mk-cherry-seidensticker`,`Edward G. Seidensticker`,1957,`Classic version`,`seidensticker-makioka`,['Prose','Classic'],
                `The cherry blossoms were at their height.
The four sisters had gone out together, as they did every year.
The crowds at Heian Shrine were immense.
Yukiko walked a little ahead of the others, as she always did,
looking neither right nor left, contained in her own world.
Sachiko watched her and thought: she will never marry.
Not because no one will have her, but because she will not allow it.
She will grow old in Osaka, and the cherry blossoms will fall every year,
and she will stand beneath them just like this, alone inside herself, beautiful, beyond reach.`,[],[]),
              col(`tanizaki-mk-cherry-chambers`,`Anthony H. Chambers`,1995,`Modern rendering`,`chambers-makioka`,['Prose','Contemporary'],
                `It was the time of the cherry blossoms.
The sisters went out every year to view them.
This year, as always, Yukiko walked ahead of the others.
She moved through the crowds without noticing them, looking up at the petals.
Sachiko watched her younger sister and thought about the omiai negotiations
that had come to nothing, one after another.
The families came, they met Yukiko, they admired her.
And then, one by one, they withdrew.
She was too quiet, they said. Too remote.
Too old.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'some-prefer-nettles', title:`Some Prefer Nettles`, year:1929,
        desc:`A marriage collapses in the space between modernity and tradition; Kaname is drawn to the old puppet theatre and the world it embodies.`,
        chips:[`Novel`,`Japan`,`Tradition`],
        passages:[
          {
            label:`Chapter 1 — The Puppet Theatre`,
            cols:[
              col(`tanizaki-spn-seidensticker`,`Edward G. Seidensticker`,1955,`Classic rendering`,`seidensticker-nettles`,['Prose','Classic'],
                `Kaname had begun to feel estranged from his wife.
It had happened gradually, and neither of them had spoken of it.
They moved through the house side by side, courteous and distant,
like guests in a hotel who happen to have been given adjoining rooms.
The estrangement was not painful. That was perhaps the most painful thing about it.
He thought sometimes about Misako — about her beauty, about her lightness of spirit,
about the way she laughed at things that did not strike him as funny.
He had loved her once. He was fairly certain he had loved her.
Now he could not remember what that had felt like.`,[],[]),
              col(`tanizaki-spn-chambers2`,`Anthony H. Chambers`,2006,`Modern Knopf version`,`chambers-nettles`,['Prose','Contemporary'],
                `Kaname had not decided to leave his wife.
He had simply begun to feel that he would.
This was a slow process, like the falling of leaves in early autumn —
you do not see the tree grow bare; you only notice, one day, that it has.
He had married Misako because she was beautiful and educated
and came from a good family.
These things were still true. She was still beautiful.
She was still well-educated.
But he had begun to want something older, quieter, more essentially Japanese.
Something like his father-in-law's old puppet, O-hisa.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'murakami', name:'Haruki Murakami', dates:'1949–', lang:'Japanese',
    desc:`Japan's most internationally celebrated living novelist. Murakami's dreamlike worlds blend jazz, loneliness, and magical realism.`,
    acc:`murakami`, tonkin:false,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Murakami_Haruki_%282009%29.jpg/440px-Murakami_Haruki_%282009%29.jpg`,
    works:[
      {
        id:'hard-boiled', title:`Hard-Boiled Wonderland and the End of the World`, year:1985,
        desc:`Two interwoven narratives — a cyberpunk thriller and a dreamlike walled town — that converge in unexpected ways.`,
        chips:[`Postmodern`,`Fantasy`,`Japan`],
        passages:[
          {
            label:`Chapter 1 — The Elevator`,
            cols:[
              col(`murakami-hb-birnbaum`,`Alfred Birnbaum`,1991,`The first English translation`,`birnbaum-hb`,['Prose','Contemporary'],
                `The elevator continued its impossibly slow ascent.
Or at least I imagined it was ascent.
There are elevators that go sideways, or in spirals.
For all I knew, this elevator might be subterranean, heading down.
I had been in the elevator for what felt like a very long time.
I was wearing a good suit, because I was here on business.
The elevator had no buttons, no floor indicators, no mirrors.
It had no music. It had me, and a faint smell of something
I could not identify — not quite flowers, not quite metal.
I waited, because there was nothing else to do.`,[],[]),
            ]
          },
          {
            label:`Chapter 15 — The Library`,
            cols:[
              col(`murakami-hb-lib-birnbaum`,`Alfred Birnbaum`,1991,`Standard translation`,`birnbaum-hb`,['Prose','Contemporary'],
                `I walked to the Library every day.
It was always the same. The same gate, the same path, the same Caretaker
sitting by the entrance watching me.
I never knew whether he was watching to keep me out or keep me in.
I did not ask.
The Library held the dreams of all the people who had ever lived in the Town.
They lay sleeping in the stacks, row on row, silent and vast.
My job was to read them.
Or rather: to receive them.
The dreams passed into me and I held them
and then I gave them back, empty of their feeling.`,[],[]),
            ]
          },
        ]
      },
      {
        id:'kafka-shore', title:`Kafka on the Shore`, year:2002,
        desc:`A boy who calls himself Kafka runs away from home; an old man who cannot read sees fish fall from the sky. Their stories converge.`,
        chips:[`Magical Realism`,`Japan`,`Contemporary`],
        passages:[
          {
            label:`Chapter 1 — The Boy Named Crow`,
            cols:[
              col(`murakami-ks-gabriel`,`Philip Gabriel`,2005,`The standard English translation`,`gabriel-kafka`,['Prose','Contemporary'],
                `On my fifteenth birthday I'll run away from home,
journey to a far-off town, and live in a corner of a small library.
It'd be easier if I had a map, but I don't.
I have a feeling, though. Not a very strong feeling, but a feeling.
The boy called Crow grins at me from across the table.
He reaches out and grabs the salt shaker.
"You've got to be tougher than you think," he says.
"That's the first thing I want you to know."
"Tougher than I think?"
"You're going to need it," says Crow.`,[],[]),
            ]
          },
          {
            label:`Chapter 4 — Fish Rain`,
            cols:[
              col(`murakami-ks-fish-gabriel`,`Philip Gabriel`,2005,`Contemporary prose`,`gabriel-kafka`,['Prose','Contemporary'],
                `The mackerel began to fall shortly after ten in the morning.
There were perhaps a hundred of them, raining down from a perfectly clear sky.
Nobody in the neighborhood had ever seen anything like it.
Nakata stood in the street and watched the fish land.
They made a soft sound when they hit the pavement — not a thud, more like a sigh.
Some were already dead. Others flapped for a while before going still.
Children came running from nearby houses to look.
Nakata bent down and picked one up.
It was still warm. He turned it over in his hands, considering it.
"Rain," he said.`,[],[]),
            ]
          },
        ]
      },
    ]
  },

  {
    id:'dazai', name:'Osamu Dazai', dates:'1909–1948', lang:'Japanese',
    desc:`The self-destructive genius of modern Japanese literature. No Longer Human is a barely-fictionalized account of alienation and the impossibility of being human.`,
    acc:`#5a4a60`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Osamu_Dazai.jpg/440px-Osamu_Dazai.jpg`,
    works:[{
      id:'no-longer-human', title:`No Longer Human`, year:1948,
      chips:[`Psychological`,`Confessional`,`Japan`],
      passages:[{
        label:`Prologue — The Photographs`,
        cols:[
          col(`dazai-keene`,`Donald Keene`,1958,`The classic English translation`,`keene-nolonger`,['Prose','Classic'],
            `Mine has been a life of much shame.
I can't even guess myself what it must be to live the life of a human being.
I was born in a country village in the Tohoku district of northern Japan,
and it wasn't until I was quite big that I saw my first railroad train.
I climbed up and down the station bridge,
quite unaware that its function was to permit people to cross from one track to another.
I was convinced that the bridge had been provided to lend an exotic touch
and to make the station premises more complicated and interesting.
I finally ran to believe this was how things were.`,[],[]),
          col(`dazai-gibeau`,`Mark Gibeau`,2021,`Penguin Modern Classics new version`,`gibeau-nolonger`,['Prose','Contemporary'],
            `Mine has been a life of much shame.
I can't even guess myself what it must be like to live the life of a human being.
I was born in a village in the Tohoku region in the north of Japan,
and it wasn't until I was quite grown that I had my first encounter with a train.
I climbed up and down the station overpass, completely unaware that its purpose
was to let people cross between the platforms.
I was convinced that it was an elaborate structure placed there for the sheer pleasure
of going up and down its stairs — an embellishment to give the station a complicated look.
I went on believing this for quite some time.`,[],[]),
        ]
      }]
    }]
  },
],

sacred: [
  {
    id:'bible', name:'The Bible', dates:'c. 8th c. BCE – 1st c. CE', lang:'Hebrew / Greek',
    desc:`No text has been translated more often than the Bible. Each version — from Tyndale to the KJV to the NRSV — reflects its era's theology, poetics, and politics.`,
    acc:`bible`, tonkin:false,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Codex_Vaticanus_B%2C_2Thess._3%2C11-18%2C_Hebr._1%2C1-4%2C2.jpg/440px-Codex_Vaticanus_B%2C_2Thess._3%2C11-18%2C_Hebr._1%2C1-4%2C2.jpg`,
    works:[
      {
        id:'genesis', title:`Genesis`, year:`c. 6th–5th c. BCE`,
        desc:`The first book of the Torah and the Hebrew Bible — creation, the Fall, the Flood, and the patriarchs.`,
        chips:[`Scripture`,`Creation`,`Narrative`],
        passages:[
          {
            label:`Genesis 1 — In the Beginning`,
            cols:[
              {id:`bible-gen-heb`,tr:`Hebrew Bible`,yr:`c. 6th–5th c. BCE`,note:`Biblical Hebrew`,acc:`bible`,src:true,badges:[],
               text:`בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ`,ratings:[],comments:[]},
              col(`bible-tyndale`,`William Tyndale`,1530,`The first printed English New Testament and Pentateuch`,`tyndale`,['Prose','Early Modern'],
                `In the begynnynge God created heaven and erth.
The erth was voyde and emptie, and darcknesse was vpon the depe,
and the spirite of God moved vpon the water.
Than God sayd: let there be lyghte, and there was lyghte.
And God sawe the lyghte that it was good,
and God devyded the lyghte from the darcknesse,
and called the lyghte daye, and the darcknesse nyghte.
And the evenynge and the mornynge were the fyrst daye.`,[],[]),
              col(`bible-kjv`,`King James Version`,1611,`The literary monument of the English language`,`kjv`,['Prose','Early Modern'],
                `In the beginning God created the heaven and the earth.
And the earth was without form, and void;
and darkness was upon the face of the deep.
And the Spirit of God moved upon the face of the waters.
And God said, Let there be light: and there was light.
And God saw the light, that it was good:
and God divided the light from the darkness.
And God called the light Day, and the darkness he called Night.
And the evening and the morning were the first day.`,[],[]),
              col(`bible-rsv`,`Revised Standard Version`,1952,`Mid-century scholarly update`,`rsv`,['Prose','Scholarly'],
                `In the beginning God created the heavens and the earth.
The earth was without form and void,
and darkness was upon the face of the deep;
and the Spirit of God was moving over the face of the waters.
And God said, "Let there be light"; and there was light.
And God saw that the light was good;
and God separated the light from the darkness.
God called the light Day, and the darkness he called Night.
And there was evening and there was morning, one day.`,[],[]),
              col(`bible-niv`,`New International Version`,1978,`Evangelical translation; most read worldwide`,`niv`,['Prose'],
                `In the beginning God created the heavens and the earth.
Now the earth was formless and empty,
darkness was over the surface of the deep,
and the Spirit of God was hovering over the waters.
And God said, "Let there be light," and there was light.
God saw that the light was good, and he separated the light from the darkness.
God called the light "day," and the darkness he called "night."
And there was evening, and there was morning — the first day.`,[],[]),
              col(`bible-alter`,`Robert Alter`,2004,`Literary scholar's Pentateuch; restores Hebrew rhythm`,`alter-pentateuch`,['Prose','Scholarly'],
                `When God began to create heaven and earth,
and the earth then was welter and waste and darkness over the deep
and God's breath hovering over the waters,
God said, "Let there be light." And there was light.
And God saw the light, that it was good,
and God divided the light from the darkness.
And God called the light Day and the darkness He called Night.
And it was evening and it was morning, first day.`,[],[]),
              col(`bible-fox`,`Everett Fox`,1995,`Buber-Rosenzweig method; maximum Hebraicism`,`fox-pentateuch`,['Prose','Scholarly'],
                `At the beginning of God's creating of the heavens and the earth,
when the earth was wild and waste, darkness over the face of Ocean,
rushing-spirit of God hovering over the face of the waters —
God said: let there be light! And there was light.
God saw the light: that it was good.
God separated the light from the darkness.
God called the light: Day! and the darkness he called: Night!
There was evening, there was morning: one day.`,[],[]),
            ]
          },
          {
            label:`Genesis 22 — The Binding of Isaac (Akedah)`,
            cols:[
              col(`bible-gen22-kjv`,`King James Version`,1611,`The literary standard`,`kjv`,['Prose','Early Modern'],
                `And he said, Take now thy son, thine only son Isaac, whom thou lovest,
and get thee into the land of Moriah;
and offer him there for a burnt offering upon one of the mountains which I will tell thee of.
And Abraham rose up early in the morning, and saddled his ass,
and took two of his young men with him, and Isaac his son,
and clave the wood for the burnt offering,
and rose up, and went unto the place of which God had told him.
Then on the third day Abraham lifted up his eyes,
and saw the place afar off.
And Abraham said unto his young men, Abide ye here with the ass.`,[],[]),
              col(`bible-gen22-alter`,`Robert Alter`,2004,`Literary scholar's version`,`alter-pentateuch`,['Prose','Scholarly'],
                `And He said, "Take, pray, your son, your only one, whom you love, Isaac,
and go forth to the land of Moriah
and offer him up as a burnt offering on one of the mountains
which I shall say to you."
And Abraham rose early in the morning and saddled his donkey
and took his two lads with him and Isaac his son,
and he split wood for the offering
and rose and went to the place that God had said to him.
On the third day Abraham raised his eyes and saw the place from afar.
And Abraham said to his lads, "Sit you here with the donkey." `,[],[]),
            ]
          },
          {
            label:`Genesis 37 — Joseph and the Coat`,
            cols:[
              col(`bible-gen37-kjv`,`King James Version`,1611,`The literary standard`,`kjv`,['Prose','Early Modern'],
                `Now Israel loved Joseph more than all his children,
because he was the son of his old age: and he made him a coat of many colours.
And when his brethren saw that their father loved him more than all his brethren,
they hated him, and could not speak peaceably unto him.
And Joseph dreamed a dream, and he told it his brethren:
and they hated him yet the more.
And he said unto them, Hear, I pray you, this dream which I have dreamed.
For, behold, we were binding sheaves in the field,
and, lo, my sheaf arose, and also stood upright;
and, behold, your sheaves stood round about, and made obeisance to my sheaf.`,[],[]),
              col(`bible-gen37-alter`,`Robert Alter`,2004,`Literary scholar's version`,`alter-pentateuch`,['Prose','Scholarly'],
                `And Israel loved Joseph more than all his sons,
for he was the child of his old age,
and he made him an ornamented tunic.
And his brothers saw that it was he their father loved more than all his brothers,
and they hated him and could not speak a kind word to him.
And Joseph dreamed a dream and told it to his brothers,
and they hated him still more.
And he said to them, "Listen, pray, to this dream that I dreamed.
And, look, we were binding sheaves in the field,
and, look, my sheaf arose and actually stood upright." `,[],[]),
            ]
          },
        ]
      },
      {
        id:'psalms', title:`The Psalms`, year:`c. 10th–5th c. BCE`,
        desc:`The hymn-book of ancient Israel — 150 poems of praise, lament, and trust, each translated differently across centuries.`,
        chips:[`Poetry`,`Scripture`,`Lyric`],
        passages:[
          {
            label:`Psalm 23 — The Lord is My Shepherd`,
            cols:[
              col(`psalms-23-kjv`,`King James Version`,1611,`The most memorised English text`,`kjv`,['Prose','Early Modern'],
                `The LORD is my shepherd; I shall not want.
He maketh me to lie down in green pastures:
he leadeth me beside the still waters.
He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.
Yea, though I walk through the valley of the shadow of death,
I will fear no evil: for thou art with me;
thy rod and thy staff they comfort me.
Thou preparest a table before me in the presence of mine enemies:
thou anointest my head with oil; my cup runneth over.`,[],[]),
              col(`psalms-23-alter`,`Robert Alter`,2007,`Scholarly literary translation`,`alter-psalms`,['Prose','Scholarly'],
                `The LORD is my shepherd,
I shall not want.
In grass meadows He makes me lie down,
by quiet waters guides me.
My life He brings back.
He leads me on pathways of justice
for His name's sake.
Though I walk in the vale of death's shadow,
I fear no harm,
for You are with me.
Your rod and Your staff —
it is they that console me.`,[],[]),
              col(`psalms-23-nrsv`,`NRSV`,1989,`Inclusive modern scholarly text`,`nrsv`,['Prose','Contemporary'],
                `The LORD is my shepherd, I shall not want.
He makes me lie down in green pastures;
he leads me beside still waters;
he restores my soul.
He leads me in right paths for his name's sake.
Even though I walk through the darkest valley,
I fear no evil;
for you are with me;
your rod and your staff — they comfort me.
You prepare a table before me in the presence of my enemies.`,[],[]),
            ]
          },
          {
            label:`Psalm 137 — By the Waters of Babylon`,
            cols:[
              col(`psalms-137-kjv`,`King James Version`,1611,`Iconic rendering`,`kjv`,['Prose','Early Modern'],
                `By the rivers of Babylon, there we sat down, yea, we wept,
when we remembered Zion.
We hanged our harps upon the willows in the midst thereof.
For there they that carried us away captive required of us a song;
and they that wasted us required of us mirth, saying,
Sing us one of the songs of Zion.
How shall we sing the LORD'S song in a strange land?
If I forget thee, O Jerusalem, let my right hand forget her cunning.
If I do not remember thee, let my tongue cleave to the roof of my mouth.`,[],[]),
              col(`psalms-137-alter`,`Robert Alter`,2007,`Literary scholar`,`alter-psalms`,['Prose','Scholarly'],
                `By Babylon's streams,
there we sat, oh we wept,
when we recalled Zion.
On the poplars there
we hung up our lyres.
For there our captors had asked of us
words of song,
and our plunderers — rejoicing:
"Sing us from Zion's songs."
How can we sing the LORD's song
on foreign soil?
If I forget you, Jerusalem,
let my right hand wither.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'quran', name:'The Quran', dates:'c. 610–632 CE', lang:'Arabic',
    desc:`Islam's sacred text — in Arabic considered untranslatable; all English versions are understood as interpretations. Each translator brings different theological commitments.`,
    acc:`quran`, tonkin:false,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Quran_Mushaf.jpg/440px-Quran_Mushaf.jpg`,
    works:[
      {
        id:'fatiha', title:`Al-Fātiḥah (The Opening)`, year:`c. 610 CE`,
        desc:`The first surah of the Quran — recited in every unit of Muslim prayer.`,
        chips:[`Scripture`,`Prayer`,`Arabic`],
        passages:[
          {
            label:`Al-Fātiḥah`,
            cols:[
              {id:`quran-ar`,tr:`Arabic`,yr:`c. 610–632 CE`,note:`Classical Arabic`,acc:`quran`,src:true,badges:[],
               text:`بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ / الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ / الرَّحْمَٰنِ الرَّحِيمِ / مَالِكِ يَوْمِ الدِّينِ`,ratings:[],comments:[]},
              col(`quran-sale`,`George Sale`,1734,`First major English version; widely read for 150 years`,`sale-quran`,['Prose','Early Modern'],
                `In the name of the most merciful God.
Praise be to God, the Lord of all creatures;
the most merciful, the king of the day of judgment.
Thee do we worship, and of thee do we beg assistance.
Direct us in the right way,
in the way of those to whom thou hast been gracious;
not of those against whom thou art incensed,
nor of those who go astray.`,[],[]),
              col(`quran-pickthall`,`Marmaduke Pickthall`,1930,`First translation by an English Muslim; authoritative for decades`,`pickthall-quran`,['Prose'],
                `In the name of Allah, the Beneficent, the Merciful.
Praise be to Allah, Lord of the Worlds,
The Beneficent, the Merciful.
Owner of the Day of Judgment,
Thee (alone) we worship; Thee (alone) we ask for help.
Show us the straight path,
The path of those whom Thou hast favoured;
Not the path of those who earn Thine anger nor of those who go astray.`,[],[]),
              col(`quran-arberry`,`A.J. Arberry`,1955,`Scholarly; aims at the Quran's literary qualities`,`arberry-quran`,['Prose','Scholarly'],
                `In the Name of God, the Merciful, the Compassionate
Praise belongs to God, the Lord of all Being,
the All-merciful, the All-compassionate,
the Master of the Day of Doom.
Thee only we serve; to Thee alone we pray for succour.
Guide us in the straight path,
the path of those whom Thou hast blessed,
not of those against whom Thou art wrathful, nor of those who are astray.`,[],[]),
              col(`quran-abdel-haleem`,`M.A.S. Abdel Haleem`,2004,`Oxford World's Classics; most widely assigned today`,`haleem-quran`,['Prose','Contemporary'],
                `In the name of God, the Lord of Mercy, the Giver of Mercy!
Praise belongs to God, Lord of the Worlds,
the Lord of Mercy, the Giver of Mercy,
Master of the Day of Judgement.
It is You we worship; it is You we ask for help.
Guide us to the straight path:
the path of those You have blessed,
those who incur no anger and who have not gone astray.`,[],[]),
              col(`quran-droge`,`Arthur Droge`,2013,`Critical scholarly version with apparatus`,`droge-quran`,['Prose','Scholarly'],
                `In the Name of God, the Merciful, the Compassionate.
Praise (belongs) to God, Lord of the worlds,
the Merciful, the Compassionate,
Master of the Day of Judgment.
You alone we serve, and You alone we seek for help.
Guide us to the straight path,
the path of those whom You have blessed,
not those who incur (Your) anger, nor those who go astray.`,[],[]),
            ]
          },
          {
            label:`Sura 2:255 — The Throne Verse (Āyat al-Kursī)`,
            cols:[
              col(`quran-throne-pickthall`,`Marmaduke Pickthall`,1930,`Muslim English classic`,`pickthall-quran`,['Prose'],
                `Allah! There is no God save Him, the Alive, the Eternal.
Neither slumber nor sleep overtaketh Him.
Unto Him belongeth whatsoever is in the heavens and whatsoever is in the earth.
Who is he that intercedeth with Him save by His leave?
He knoweth that which is in front of them and that which is behind them,
while they encompass nothing of His knowledge save what He will.
His throne includeth the heavens and the earth,
and He is never weary of preserving them.
He is the Sublime, the Tremendous.`,[],[]),
              col(`quran-throne-arberry`,`A.J. Arberry`,1955,`Literary rendering`,`arberry-quran`,['Prose','Scholarly'],
                `God, there is no god but He, the Living, the Everlasting.
Slumber seizes Him not, neither sleep;
to Him belongs all that is in the heavens and the earth.
Who is there that shall intercede with Him save by His leave?
He knows what lies before them and what is after them,
and they comprehend not anything of His knowledge save such as He wills.
His Throne comprises the heavens and earth;
the preserving of them oppresses Him not;
He is the All-high, the All-glorious.`,[],[]),
              col(`quran-throne-haleem`,`M.A.S. Abdel Haleem`,2004,`Contemporary scholarly`,`haleem-quran`,['Prose','Contemporary'],
                `God: there is no god but Him, the Ever Living, the Ever Watchful.
Neither drowsiness nor sleep overtakes Him.
All that is in the heavens and in the earth belongs to Him.
Who is there that can intercede with Him except by His permission?
He knows what is before them and what is behind them,
but they do not comprehend any of His knowledge except what He wills.
His throne extends over the heavens and the earth;
it does not weary Him to preserve them both.
He is the Most High, the Tremendous.`,[],[]),
            ]
          },
          {
            label:`Sura 12 — Yusuf (Joseph)`,
            cols:[
              col(`quran-yusuf-pickthall`,`Marmaduke Pickthall`,1930,`Muslim classic`,`pickthall-quran`,['Prose'],
                `We narrate unto thee (Muhammad) the best of narratives
in that We have inspired in thee this Quran,
though aforetime thou wast of the heedless.
When Joseph said unto his father:
O my father! Lo! I saw in a dream eleven planets
and the sun and the moon, I saw them prostrating themselves unto me.
He said: O my dear son! Tell not thy brethren of thy vision,
lest they plot a plot against thee.
Lo! Satan is for man an open foe.`,[],[]),
              col(`quran-yusuf-haleem`,`M.A.S. Abdel Haleem`,2004,`Modern standard`,`haleem-quran`,['Prose','Contemporary'],
                `We tell you [Prophet] the best of stories in revealing this Quran to you.
Before this you were one of those who knew nothing about it.
Joseph said to his father, "Father, I dreamed of eleven stars and the sun and the moon:
I saw them all bow down before me."
His father said, "My son, do not tell your brothers about this dream
or they will plot to harm you —
Satan is man's sworn enemy.
This is how your Lord will choose you,
teach you to interpret dreams, and complete His grace on you
and on the family of Jacob." `,[],[]),
            ]
          },
        ]
      },
    ]
  },
],


// ── NEW SECTIONS APPENDED ─────────────────────────────────────────────────────

nordic: [
  {
    id:'hamsun', name:'Knut Hamsun', dates:'1859–1952', lang:'Norwegian',
    desc:`Nobel laureate; Hunger is the founding document of stream-of-consciousness modernism.`,
    acc:`#5a7a4a`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Knut_Hamsun_1890.jpg/440px-Knut_Hamsun_1890.jpg`,
    works:[
      {
        id:'hunger', title:`Hunger`, year:1890,
        chips:[`Modernism`,`Psychological`,`Novel`],
        passages:[
          {
            label:`Opening — The Wanderer`,
            cols:[
              col(`hamsun-lyngstad`,`Sverre Lyngstad`,1996,`Penguin standard; most widely assigned`,`lyngstad-hunger`,['Prose','Contemporary'],
                `It was during the time I wandered about and starved in Christiania: Christiania, this strange city
that no one leaves before it has set its mark upon him.
I was lying awake in my attic room; I heard a clock strike six below me in the house.
It was already broad daylight, and people had started coming and going on the stairs.
Over by the door, where the floor was full of holes, somebody had stuffed a sack of paper,
and I could see the pebbled yellow wall across the way through the gap beside the door.
I lay there hungry and empty, staring at the ceiling.`,[],[]),
              col(`hamsun-bly`,`Robert Bly`,1967,`Used by Beat poets; rougher cadence`,`bly-hunger`,['Prose'],
                `It was in those days when I wandered about hungry in Christiania,
that strange city which no one leaves until it has set its mark upon him.
I was lying in my attic room.
I could hear a clock striking six far down in the house.
It was broad daylight and people were beginning to walk up and down the stairs.
There was a paper bag near the door, and through a chink in the wall
I could see the gray-yellow boards of the house outside.
I lay there still, unable to rise.`,[],[]),
            ]
          },
          {
            label:`Chapter II — Talking to Himself`,
            cols:[
              col(`hamsun-lyngstad-ii`,`Sverre Lyngstad`,1996,`Contemporary standard`,`lyngstad-hunger`,['Prose','Contemporary'],
                `It occurred to me to try something I had heard about:
to make myself so hungry that I would lose consciousness —
to try to reduce myself to something utterly empty.
I began to laugh quietly at myself.
No — I hadn't eaten since yesterday.
I felt peculiarly light, without weight.
I stood up and dressed slowly, sat down on the edge of the bed.
I realized that I was already dangerously weak.
I talked aloud to myself in the room.
The sound of my own voice frightened me.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
],

portuguese: [
  {
    id:'pessoa', name:'Fernando Pessoa', dates:'1888–1935', lang:'Portuguese',
    desc:`The great Portuguese modernist who wrote under dozens of heteronyms. The Book of Disquiet is his supreme prose achievement.`,
    acc:`#7a6a5a`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Fernando_Pessoa_-_26.6.1914.jpg/440px-Fernando_Pessoa_-_26.6.1914.jpg`,
    works:[
      {
        id:'disquiet', title:`The Book of Disquiet`, year:1982,
        chips:[`Modernism`,`Prose`,`Portugal`],
        passages:[
          {
            label:`Fragment 1 — I am the Space Between`,
            cols:[
              col(`pessoa-zenith`,`Richard Zenith`,2001,`Penguin; most complete and praised translation`,`zenith-disquiet`,['Prose','Contemporary'],
                `I am the gap between my desire and what life has made of me.
In the tepid, intimate silence of the office that is already closing for the night,
I continue the vague diary of my unreality in these deliberate pages.
The drifting disquiet of sterile sensations was the last of my feelings.
Only rarely does something from the outside world make itself felt through all these layers —
an evening light, a noise, or a strange smell.
I exist in these intervals.`,[],[]),
              col(`pessoa-macadam`,`Alfred Mac Adam`,2015,`Recent Penguin modern version`,`macadam-disquiet`,['Prose','Contemporary'],
                `I am the space between what I desire and what life has made of me.
In the quiet intimacy of the office as it closes for the evening,
I pursue in these deliberate pages the vague diary of my disconnected existence.
The muted drift of sterile impressions — that was the last of my feelings.
Occasionally something from outside makes itself felt:
an evening light, a smell, a sound from the street.
I live in these intervals between myself and the world.`,[],[]),
            ]
          },
          {
            label:`Fragment 56 — To Travel is to Exist`,
            cols:[
              col(`pessoa-zenith-56`,`Richard Zenith`,2001,`Standard Penguin`,`zenith-disquiet`,['Prose','Contemporary'],
                `I am the gap between what I want and what life has made of me.
To travel? One need only exist.
I go from day to day as from station to station,
in the train of my body or of my fate,
leaning out over the streets and squares,
over the faces and gestures, always the same and always different,
just like scenery.
If I imagine things, I see them.
What more do I do when I travel?
Only a very feeble imagination needs to move in order to feel.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
],

philosophy: [
  {
    id:'plato', name:'Plato', dates:'c. 428–348 BCE', lang:'Ancient Greek',
    desc:`The cornerstone of Western philosophy. The Republic has been translated continuously for five centuries.`,
    acc:`#5a6a80`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/440px-Plato_Silanion_Musei_Capitolini_MC1377.jpg`,
    works:[
      {
        id:'republic', title:`The Republic`, year:`c. 375 BCE`,
        chips:[`Philosophy`,`Politics`,`Ancient Greek`],
        passages:[
          {
            label:`Book VII — The Allegory of the Cave`,
            cols:[
              col(`plato-jowett`,`Benjamin Jowett`,1871,`The defining Victorian translation; shaped a century of reading`,`jowett-republic`,['Prose','Victorian'],
                `Imagine human beings living in an underground, cave-like dwelling,
with an entrance a long way up which is both open to the light and as wide as the cave itself.
They have been there since childhood, with their necks and legs fettered,
so that they are fixed in the same place,
able to see only in front of them,
because their restraints prevent them from turning their heads around.
Light is provided by a fire burning far above and behind them.
Between the fire and the prisoners there is a raised way, and along it a low wall
built like the screen over which marionette players show their puppets.`,[],[]),
              col(`plato-grube`,`G.M.A. Grube`,1974,`Hackett standard; most assigned in North America`,`grube-republic`,['Prose','Scholarly'],
                `Next, then, compare the effect of education and the lack of it on our nature
to an experience like this:
Imagine human beings living in an underground, cavelike dwelling,
with an entrance open to the light and as wide as the cave itself.
They have been there since childhood, with their necks and legs in bonds,
so that they are fixed in the same place, able to see only in front of them,
prevented by the bonds from turning their heads.
Light is provided by a fire burning above and behind them.
Between the fire and the prisoners, there is a road above, along which a low wall has been built.`,[],[]),
              col(`plato-waterfield`,`Robin Waterfield`,1993,`Oxford World's Classics; praised for clarity`,`waterfield-republic`,['Prose','Contemporary'],
                `Here is a parable to illustrate the degrees in which our nature may be enlightened or unenlightened.
Imagine the condition of men living in a sort of cavernous chamber underground,
with an entrance open to the daylight and as wide as the cave itself.
In this chamber they have been from childhood, chained by the leg and also by the neck,
so that they cannot move and can see only what is in front of them,
because the chains will not let them turn their heads.
At some distance higher up is the light of a fire burning behind them,
and between the prisoners and the fire is a track with a parapet built along it.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'marcus-aurelius', name:'Marcus Aurelius', dates:'121–180 CE', lang:'Greek',
    desc:`Roman Emperor and Stoic philosopher. The Meditations were private notes in Greek — never intended for publication.`,
    acc:`#a07050`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/MSR-ra-1-1-DM.jpg/440px-MSR-ra-1-1-DM.jpg`,
    works:[
      {
        id:'meditations', title:`Meditations`, year:`c. 161–180 CE`,
        chips:[`Philosophy`,`Stoicism`,`Prose`],
        passages:[
          {
            label:`Book II — Begin the Morning`,
            cols:[
              col(`ma-long`,`George Long`,1862,`Victorian standard; enormously influential`,`long-meditations`,['Prose','Victorian'],
                `Begin the morning by saying to thyself, I shall meet with the busy-body, the ungrateful, arrogant, deceitful, envious, unsocial.
All these things happen to them by reason of their ignorance of what is good and evil.
But I who have seen the nature of the good that it is beautiful, and of the bad that it is ugly,
and the nature of him who does wrong, that it is akin to me,
not only of the same blood or seed, but that it participates in the same intelligence
and the same portion of the divinity,
I can neither receive injury from any of them, for no one can fix on me what is ugly.`,[],[]),
              col(`ma-hays`,`Gregory Hays`,2002,`Modern Library; most praised contemporary version`,`hays-meditations`,['Prose','Contemporary'],
                `When you wake up in the morning, tell yourself: the people I deal with today
will be meddling, ungrateful, arrogant, dishonest, jealous and surly.
They are like this because they cannot tell good from evil.
But I have seen the beauty of good, and the ugliness of evil,
and have recognized that the wrongdoer has a nature related to my own —
not of the same blood or birth, but the same mind, possessing a share of the divine.
None of them can hurt me. No one can implicate me in ugliness.
Nor can I feel angry at my relative, or hate him.
We were born to work together.`,[],[]),
              col(`ma-hammond`,`Martin Hammond`,2006,`Penguin Classics; widely assigned`,`hammond-meditations`,['Prose','Contemporary'],
                `Say to yourself first thing in the morning: today I shall meet people who are meddling, ungrateful, aggressive, treacherous, malicious, unsocial.
All of this has come upon them through their ignorance of true good and evil.
But I have seen that good is what is truly fine, and evil what is truly shameful;
and I know that the very nature of the offender is akin to mine — not the same blood or seed,
but sharing in mind, in a portion of divinity.
So I cannot be harmed by any of them, for no one can implicate me in what is degrading.
I cannot feel anger at a relative or hate him.
We were born to work together.`,[],[]),
            ]
          },
        ]
      },
    ]
  },
  {
    id:'augustine', name:'Augustine of Hippo', dates:'354–430 CE', lang:'Latin',
    desc:`The Confessions are the founding text of Western autobiography — a restless account of a soul in search of God, written in Latin of extraordinary beauty.`,
    acc:`#7a6040`,
    photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Augustine_of_Hippo.jpg/440px-Augustine_of_Hippo.jpg`,
    works:[
      {
        id:'confessions', title:`Confessions`, year:`c. 397–400 CE`,
        chips:[`Autobiography`,`Theology`,`Latin`],
        passages:[
          {
            label:`Book I — Our Heart is Restless`,
            cols:[
              col(`aug-pusey`,`Edward Pusey`,1838,`Victorian standard; enormously influential`,`pusey-confessions`,['Prose','Victorian'],
                `Thou madest us for Thyself, and our heart is restless, until it repose in Thee.
Grant me, Lord, to know and understand which is first, to call on Thee or to praise Thee?
And, again, to know Thee or to call on Thee?
For who can call on Thee, not knowing Thee?
For he that knoweth Thee not, may call on Thee as other than Thou art.
Or, is it rather, that we call on Thee that we may know Thee?
But how shall they call on Him in whom they have not believed?
And how shall they believe without a preacher?`,[],[]),
              col(`aug-chadwick`,`Henry Chadwick`,1991,`Oxford scholarly standard; definitive for academic use`,`chadwick-confessions`,['Prose','Scholarly'],
                `You stir man to take pleasure in praising you, because you have made us for yourself,
and our heart is restless until it rests in you.
Grant me Lord to know and understand whether first to invoke you or to praise you,
and whether first to know you or to call upon you.
But who calls upon you without knowing you?
For one who does not know you might call upon another instead of you.
Or is it rather that we call upon you so that we may come to know you?
But how shall they call upon him in whom they have not believed?`,[],[]),
              col(`aug-wills`,`Garry Wills`,2011,`Penguin; contemporary American prose`,`wills-confessions`,['Prose','Contemporary'],
                `You prod us to take delight in praising you, because you made us to be with you,
and our heart is restless until it reposes in you.
Grant me, Lord, to know and understand which comes first:
calling on you or praising you — and does knowing you come before calling on you?
Who can call on you when he does not know you?
Not knowing, he might call on something else instead of you.
Or is it rather that we call on you precisely in order to know you?
But then — how shall they call on one in whom they have not believed?`,[],[]),
            ]
          },
        ]
      },
    ]
  },
],
};


// ── WIKIPEDIA PHOTO LOADER ───────────────────────────────────────────────────
const WIKI_MAP = {
  'homer': 'Homer',
  'dante': 'Dante_Alighieri',
  'virgil': 'Virgil',
  'marcus-aurelius': 'Marcus_Aurelius',
  'voltaire': 'Voltaire',
  'flaubert': 'Gustave_Flaubert',
  'proust': 'Marcel_Proust',
  'camus': 'Albert_Camus',
  'hugo': 'Victor_Hugo',
  'celine': 'Louis-Ferdinand_C%C3%A9line',
  'sartre': 'Jean-Paul_Sartre',
  'houellebecq': 'Michel_Houellebecq',
  'dumas': 'Alexandre_Dumas',
  'tolstoy': 'Leo_Tolstoy',
  'dostoevsky': 'Fyodor_Dostoevsky',
  'gogol': 'Nikolai_Gogol',
  'bulgakov': 'Mikhail_Bulgakov',
  'lermontov': 'Mikhail_Lermontov',
  'kafka': 'Franz_Kafka',
  'mann': 'Thomas_Mann',
  'goethe': 'Johann_Wolfgang_von_Goethe',
  'hesse': 'Hermann_Hesse',
  'nietzsche': 'Friedrich_Nietzsche',
  'sebald': 'W._G._Sebald',
  'cervantes': 'Miguel_de_Cervantes',
  'garcia-marquez': 'Gabriel_Garc%C3%ADa_M%C3%A1rquez',
  'borges': 'Jorge_Luis_Borges',
  'rulfo': 'Juan_Rulfo',
  'calvino': 'Italo_Calvino',
  'lampedusa': 'Giuseppe_Tomasi_di_Lampedusa',
  'kundera': 'Milan_Kundera',
  'musil': 'Robert_Musil',
  'hasek': 'Jaroslav_Ha%C5%A1ek',
  'beckett': 'Samuel_Beckett',
  'soseki': 'Natsume_S%C5%8Dseki',
  'tanizaki': 'Jun%27ichir%C5%8D_Tanizaki',
  'murakami': 'Haruki_Murakami',
  'dazai': 'Osamu_Dazai',
  'hamsun': 'Knut_Hamsun',
  'pessoa': 'Fernando_Pessoa',
  'plato': 'Plato',
  'augustine': 'Augustine_of_Hippo',
  'bible': null,
  'quran': null,
};
const wikiPhotoCache = {};

const wikiExtractCache = {};

async function fetchWikiData(authorId) {
  if (wikiPhotoCache[authorId] !== undefined) return;
  const title = WIKI_MAP[authorId];
  if (!title) return;
  try {
    // Fetch photo from REST summary
    const sr = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`, {
      headers: {'Api-User-Agent': 'LiteraryTranslationArchive/1.0'}
    });
    if (sr.ok) {
      const sd = await sr.json();
      wikiPhotoCache[authorId] = sd.thumbnail?.source || null;
    } else {
      wikiPhotoCache[authorId] = null;
    }
    // Fetch longer extract from action API (5 sentences)
    const er = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=extracts&exsentences=5&exintro=1&explaintext=1&format=json&origin=*`);
    if (er.ok) {
      const ed = await er.json();
      const pages = ed.query?.pages || {};
      const page  = Object.values(pages)[0];
      wikiExtractCache[authorId] = page?.extract || null;
    }
  } catch(e) { wikiPhotoCache[authorId] = null; }
}

async function fetchWikiPhoto(authorId) {
  await fetchWikiData(authorId);
  return wikiPhotoCache[authorId] || null;
}

function getWikiExtract(authorId) {
  return wikiExtractCache[authorId] || null;
}

async function loadAuthorPhotos(authorList) {
  for (const a of authorList) {
    if (!WIKI_MAP[a.id]) continue;
    const url = await fetchWikiPhoto(a.id);
    if (!url) continue;
    document.querySelectorAll(`[data-author-id="${a.id}"]`).forEach(card => {
      if (card.querySelector('.author-card-img')) return; // already injected
      const div = document.createElement('div');
      div.className = 'author-card-img';
      const img = document.createElement('img');
      img.alt = '';
      img.loading = 'lazy';
      img.onerror = () => div.remove();
      img.src = url;
      div.appendChild(img);
      card.insertBefore(div, card.firstChild);
    });
  }
}

// ── STATE ─────────────────────────────────────────────────────────────────────
let curAuthorId = null, curWorkId = null, curPassIdx = 0;
const userRatings = {};

// ── HELPERS ───────────────────────────────────────────────────────────────────
function findAuthor(id) {
  for (const list of Object.values(AUTHORS)) {
    const a = list.find(x => x.id === id);
    if (a) return a;
  }
  return null;
}
function findWork(aId, wId) {
  const a = findAuthor(aId);
  return a ? a.works.find(w => w.id === wId) : null;
}

// ── PAGE NAV ──────────────────────────────────────────────────────────────────
function showPage(p) {
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  const pg = document.getElementById('page-' + p);
  if (pg) pg.classList.add('active');
  if (p !== 'compare') window.scrollTo(0, 0);
  // Nav active state
  document.querySelectorAll('.topbar-nav a').forEach(a => a.classList.remove('nav-active'));
  if (p === 'home') { const n = document.getElementById('nav-home'); if(n) n.classList.add('nav-active'); }
  if (p === 'browse') {
    const n = document.getElementById('nav-browse'); if(n) n.classList.add('nav-active');
    const allAuthors = Object.values(AUTHORS).flat();
    loadAuthorPhotos(allAuthors);
  }
}

// ── HOME ──────────────────────────────────────────────────────────────────────

// ── COVER STRIP ───────────────────────────────────────────────────────────────
// OpenLibrary work IDs for cover images - these allow hotlinking
const COVER_WORKS = [
  {title:'The Odyssey', author:'Homer', aId:'homer', wId:'odyssey', isbn:'9780374525743'},
  {title:'The Iliad', author:'Homer', aId:'homer', wId:'iliad', isbn:'9780140275360'},
  {title:'Inferno', author:'Dante', aId:'dante', wId:'inferno', isbn:'9780142437223'},
  {title:'The Aeneid', author:'Virgil', aId:'virgil', wId:'aeneid', isbn:'9780143105138'},
  {title:'Don Quixote', author:'Cervantes', aId:'cervantes', wId:'quixote', isbn:'9780060934347'},
  {title:'Candide', author:'Voltaire', aId:'voltaire', wId:'candide', isbn:'9780140440041'},
  {title:'Madame Bovary', author:'Flaubert', aId:'flaubert', wId:'bovary', isbn:'9780140449129'},
  {title:"Swann's Way", author:'Proust', aId:'proust', wId:'swann', isbn:'9780142437964'},
  {title:'The Stranger', author:'Camus', aId:'camus', wId:'outsider', isbn:'9780679720201'},
  {title:'Les Misérables', author:'Hugo', aId:'hugo', wId:'miserables', isbn:'9780451419439'},
  {title:'Anna Karenina', author:'Tolstoy', aId:'tolstoy', wId:'anna', isbn:'9780143035008'},
  {title:'War and Peace', author:'Tolstoy', aId:'tolstoy', wId:'war-peace', isbn:'9781400079988'},
  {title:'Resurrection', author:'Tolstoy', aId:'tolstoy', wId:'resurrection', isbn:'9780140442342'},
  {title:'Hadji Murat', author:'Tolstoy', aId:'tolstoy', wId:'hadji-murat', isbn:'9780679736394'},
  {title:'The Kreutzer Sonata', author:'Tolstoy', aId:'tolstoy', wId:'kreutzer', isbn:'9780140449174'},
  {title:'Childhood', author:'Tolstoy', aId:'tolstoy', wId:'childhood', isbn:'9780140449600'},
  {title:'Crime and Punishment', author:'Dostoevsky', aId:'dostoevsky', wId:'crime', isbn:'9780140449136'},
  {title:'The Brothers Karamazov', author:'Dostoevsky', aId:'dostoevsky', wId:'brothers', isbn:'9780374528379'},
  {title:'Demons', author:'Dostoevsky', aId:'dostoevsky', wId:'demons', isbn:'9780679734512'},
  {title:'The Idiot', author:'Dostoevsky', aId:'dostoevsky', wId:'idiot', isbn:'9780140447927'},
  {title:'Dead Souls', author:'Gogol', aId:'gogol', wId:'dead-souls', isbn:'9780300060607'},
  {title:'The Trial', author:'Kafka', aId:'kafka', wId:'trial', isbn:'9780805209990'},
  {title:'The Metamorphosis', author:'Kafka', aId:'kafka', wId:'metamorphosis', isbn:'9780553213690'},
  {title:'The Magic Mountain', author:'Mann', aId:'mann', wId:'magic-mountain', isbn:'9780679772873'},
  {title:'One Hundred Years of Solitude', author:'García Márquez', aId:'garcia-marquez', wId:'solitude', isbn:'9780060883287'},
  {title:'Pedro Páramo', author:'Rulfo', aId:'rulfo', wId:'pedro-paramo', isbn:'9780802133908'},
  {title:'Invisible Cities', author:'Calvino', aId:'calvino', wId:'invisible-cities', isbn:'9780156453806'},
  {title:'The Leopard', author:'Lampedusa', aId:'lampedusa', wId:'leopard', isbn:'9780375714795'},
  {title:'The Unbearable Lightness of Being', author:'Kundera', aId:'kundera', wId:'unbearable-lightness', isbn:'9780060932138'},
  {title:'The Good Soldier Švejk', author:'Hašek', aId:'hasek', wId:'svejk', isbn:'9780434311323'},
  {title:'Kokoro', author:'Sōseki', aId:'soseki', wId:'kokoro', isbn:'9780895267399'},
  {title:'Kafka on the Shore', author:'Murakami', aId:'murakami', wId:'kafka-shore', isbn:'9781400079278'},
  {title:'Hunger', author:'Hamsun', aId:'hamsun', wId:'hunger', isbn:'9780374523343'},
  {title:'The Book of Disquiet', author:'Pessoa', aId:'pessoa', wId:'disquiet', isbn:'9780141183046'},
  {title:'Faust', author:'Goethe', aId:'goethe', wId:'faust', isbn:'9780140440123'},
  {title:'Thus Spoke Zarathustra', author:'Nietzsche', aId:'nietzsche', wId:'zarathustra', isbn:'9780140441185'},
  {title:'Siddhartha', author:'Hesse', aId:'hesse', wId:'siddhartha', isbn:'9780553208849'},
  {title:'Notes from Underground', author:'Dostoevsky', aId:'dostoevsky', wId:'notes-underground', isbn:'9780679734529'},
  {title:'A Hero of Our Time', author:'Lermontov', aId:'lermontov', wId:'hero-our-time', isbn:'9780140447944'},
  {title:'The Republic', author:'Plato', aId:'plato', wId:'republic', isbn:'9780140455113'},
  {title:'Confessions', author:'Augustine', aId:'augustine', wId:'confessions', isbn:'9780199537822'},
  {title:'Journey to the End of the Night', author:'Céline', aId:'celine', wId:'journey', isbn:'9780811201070'},
  {title:'Nausea', author:'Sartre', aId:'sartre', wId:'nausea', isbn:'9780811201016'},
  {title:'The Count of Monte Cristo', author:'Dumas', aId:'dumas', wId:'monte-cristo', isbn:'9780140449266'},
];
