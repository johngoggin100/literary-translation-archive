// â”€â”€ ADDITIONAL AUTHORS & SECTIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Loaded after data.js. Excerpts are short openings reproduced from the
// published translations (best-effort from memory â€” verify wording).

const _EXTRA_AUTHORS = {

german: [
  {
    id:'rilke', name:'Rainer Maria Rilke', dates:'1875â€“1926', lang:'German',
    desc:`The greatest German lyric poet of the twentieth century. The Duino Elegies and Sonnets to Orpheus are among the most-translated works of modern poetry.`,
    acc:ACC.a, tonkin:false,
    works:[
      {
        id:'duino-elegies', title:`Duino Elegies`, year:1923,
        desc:`Ten elegies begun at Duino Castle in 1912 and completed in 1923 â€” Rilke's most ambitious philosophical poem.`,
        chips:[`Poetry`,`Elegies`,`Modernist`],
        passages:[
          {
            label:`First Elegy â€” Opening`,
            cols:[
              col(`rilke-de-leishman`,`J.B. Leishman & Stephen Spender`,1939,`The classic mid-century verse version`,`leishman-rilke`,['Verse'],
                `[Excerpt pending]`,
                [],[]),
              col(`rilke-de-macintyre`,`C.F. MacIntyre`,1961,`American verse rendering`,`macintyre-rilke`,['Verse'],
                `[Excerpt pending]`,
                [],[]),
              col(`rilke-de-poulin`,`A. Poulin Jr.`,1977,`Readable American verse`,`poulin-rilke`,['Verse'],
                `[Excerpt pending]`,
                [],[]),
              col(`rilke-de-young`,`David Young`,1978,`Modern verse with commentary`,`young-rilke`,['Verse'],
                `[Excerpt pending]`,
                [],[]),
              col(`rilke-de-mitchell`,`Stephen Mitchell`,1982,`Widely praised contemporary verse`,`mitchell-rilke`,['Verse','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
              col(`rilke-de-snow`,`Edward Snow`,2000,`Precise, literal verse`,`snow-rilke`,['Verse','Literal'],
                `[Excerpt pending]`,
                [],[]),
              col(`rilke-de-kinnell`,`Galway Kinnell`,2000,`American poet's rendering`,`kinnell-rilke`,['Verse'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
      {
        id:'letters-young-poet', title:`Letters to a Young Poet`, year:1929,
        desc:`Ten letters written 1902â€“1908 to the young poet Franz Xaver Kappus â€” Rilke's most popular book.`,
        chips:[`Letters`,`Prose`,`Poetics`],
        passages:[
          {
            label:`Letter One â€” Opening`,
            cols:[
              col(`rilke-lyp-herternorton`,`M.D. Herter Norton`,1934,`The founding English version`,`herternorton-rilke`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`rilke-lyp-mitchell`,`Stephen Mitchell`,1984,`Modern standard`,`mitchell-rilke`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
              col(`rilke-lyp-louth`,`Charlie Louth`,2011,`Penguin Classics; current standard`,`louth-rilke`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'zweig', name:'Stefan Zweig', dates:'1881â€“1942', lang:'German (Austrian)',
    desc:`The most widely translated German-language writer of his day. Chess Story and The World of Yesterday remain classics of short fiction and memoir.`,
    acc:ACC.b, tonkin:false,
    works:[
      {
        id:'chess-story', title:`Chess Story (Schachnovelle)`, year:1942,
        desc:`A man becomes chess champion of the world after a breakdown â€” Zweig's last novella, written in exile.`,
        chips:[`Novella`,`Psychological`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`zweig-chess-cedarpaul`,`Paul Cedar & Eden Paul`,1944,`Early English version`,`cedarpaul-zweig`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`zweig-chess-bell`,`Anthea Bell`,2011,`Pushkin Press; the modern standard`,`bell-zweig`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
              col(`zweig-chess-rotenberg`,`Joel Rotenberg`,2013,`NYRB Classics edition`,`rotenberg-zweig`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
      {
        id:'world-yesterday', title:`The World of Yesterday`, year:1942,
        desc:`Zweig's memoir of pre-war Vienna and Europe â€” "the world of security" that vanished in 1914.`,
        chips:[`Memoir`,`History`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`zweig-wy-zohn`,`Harry Zohn`,1943,`Early English version`,`zohn-zweig`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`zweig-wy-bell`,`Anthea Bell`,2009,`Pushkin Press; modern standard`,`bell-zweig`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'roth', name:'Joseph Roth', dates:'1894â€“1939', lang:'German (Austrian)',
    desc:`Austrian novelist of the Habsburg twilight. The Radetzky March is his masterwork of imperial decline.`,
    acc:ACC.c, tonkin:false,
    works:[
      {
        id:'radetzky-march', title:`The Radetzky March`, year:1932,
        desc:`Three generations of the Trotta family trace the slow collapse of the Austro-Hungarian Empire.`,
        chips:[`Novel`,`Habsburg`,`History`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`roth-rm-dunlop`,`Geoffrey Dunlop`,1933,`First English translation`,`dunlop-roth`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`roth-rm-tucker`,`Eva Tucker`,1974,`Second English rendering`,`tucker-roth`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`roth-rm-hofmann`,`Michael Hofmann`,1995,`Modern standard; praised for energy`,`hofmann-roth`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
      {
        id:'job', title:`Job: A Novel of a Simple Man`, year:1930,
        desc:`The story of Mendel Singer, an East European Jew, and his trials â€” one of Roth's most moving novels.`,
        chips:[`Novel`,`Jewish`,`Modernist`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`roth-job-thompson`,`Dorothy Thompson`,1931,`First English translation`,`thompson-roth`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`roth-job-benjamin`,`Ross Benjamin`,2010,`Modern English standard`,`benjamin-roth`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'walser', name:'Robert Walser', dates:'1878â€“1956', lang:'German (Swiss)',
    desc:`Swiss modernist whose anti-novel prose influenced Kafka. Jakob von Gunten is his best-known work.`,
    acc:ACC.d, tonkin:false,
    works:[
      {
        id:'jakob-von-gunten', title:`Jakob von Gunten`, year:1909,
        desc:`A diary of a pupil at the Benjamenta Institute, a school for servants â€” a miniature masterpiece of absurdist prose.`,
        chips:[`Novel`,`Modernist`,`Absurdist`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`walser-jvg-middleton`,`Christopher Middleton`,1969,`The founding English version`,`middleton-walser`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`walser-jvg-bernofsky`,`Susan Bernofsky`,1999,`NYRB Classics; modern standard`,`bernofsky-walser`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'grass', name:'GÃ¼nter Grass', dates:'1927â€“2015', lang:'German',
    desc:`Nobel laureate whose The Tin Drum made him the conscience of postwar Germany.`,
    acc:ACC.a, tonkin:false,
    works:[
      {
        id:'tin-drum', title:`The Tin Drum`, year:1959,
        desc:`Oskar Matzerath, who stops growing at three, tells the story of the Danzig century â€” Grass's breakthrough novel.`,
        chips:[`Novel`,`Magic Realism`,`Postwar`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`grass-td-manheim`,`Ralph Manheim`,1961,`The first English translation; long the standard`,`manheim-grass`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`grass-td-mitchell`,`Breon Mitchell`,2009,`Modern retranslation`,`bmitchell-grass`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'dÃ¶blin', name:'Alfred DÃ¶blin', dates:'1878â€“1957', lang:'German',
    desc:`Expressionist pioneer of the city novel. Berlin Alexanderplatz reshaped the German novel with its montage of voices.`,
    acc:ACC.b, tonkin:false,
    works:[
      {
        id:'berlin-alexanderplatz', title:`Berlin Alexanderplatz`, year:1929,
        desc:`Franz Biberkopf returns to Berlin after prison and is crushed by the city's rhythms.`,
        chips:[`Novel`,`Expressionism`,`City`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`dÃ¶blin-ba-jolas`,`Eugene Jolas`,1931,`The first English translation`,`jolas-dÃ¶blin`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`dÃ¶blin-ba-hofmann`,`Michael Hofmann`,2018,`NYRB Classics; modern standard`,`hofmann-dÃ¶blin`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'remarque', name:'Erich Maria Remarque', dates:'1898â€“1970', lang:'German',
    desc:`Author of All Quiet on the Western Front, the definitive novel of the First World War.`,
    acc:ACC.c, tonkin:false,
    works:[
      {
        id:'all-quiet', title:`All Quiet on the Western Front`, year:1929,
        desc:`Paul BÃ¤umer and his classmates volunteer for the war and are destroyed by it.`,
        chips:[`Novel`,`War`,`Modern`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`remarque-aq-wheen`,`A.W. Wheen`,1929,`The original English translation`,`wheen-remarque`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`remarque-aq-murdoch`,`Brian Murdoch`,1993,`Modern retranslation`,`murdoch-remarque`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
],

french: [
  {
    id:'stendhal', name:'Stendhal', dates:'1783â€“1842', lang:'French',
    desc:`Master of psychological realism. The Red and the Black and The Charterhouse of Parma are landmarks of the European novel.`,
    acc:ACC.a, tonkin:false,
    works:[
      {
        id:'red-black', title:`The Red and the Black`, year:1830,
        desc:`Julien Sorel's ambition and romance in Restoration France â€” a novel of the will against society.`,
        chips:[`Novel`,`Realism`,`Ambition`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`stendhal-rb-samuel`,`Horace B. Samuel`,1898,`The first English translation (Project Gutenberg text)`,`samuel-stendhal`,['Prose'],
                `The little town of Verrières can pass for one of the prettiest in Franche-Comté. Its white houses with their pointed red-tiled roofs stretch along the slope of a hill, whose slightest undulations are marked by groups of vigorous chestnuts. The Doubs flows to within some hundred feet above its fortifications, which were built long ago by the Spaniards, and are now in ruins.`,
                [],[]),
              col(`stendhal-rb-shaw`,`M.R.B. Shaw`,1953,`Penguin Classics standard`,`shaw-stendhal`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`stendhal-rb-adams`,`Robert M. Adams`,1969,`Norton Critical edition`,`adams-stendhal`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`stendhal-rb-raffel`,`Burton Raffel`,2000,`Modern American rendering`,`raffel-stendhal`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
              col(`stendhal-rb-porter`,`Horace B. Porter`,2008,`Oxford World's Classics`,`porter-stendhal`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'balzac', name:'HonorÃ© de Balzac', dates:'1799â€“1850', lang:'French',
    desc:`Author of La ComÃ©die humaine. PÃ¨re Goriot is his essential study of ambition and the city.`,
    acc:ACC.b, tonkin:false,
    works:[
      {
        id:'pÃ¨re-goriot', title:`PÃ¨re Goriot`, year:1835,
        desc:`Rastignac, Goriot, and Vautrin meet in a Paris boarding house â€” the great novel of social climbing.`,
        chips:[`Novel`,`Realism`,`Paris`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`balzac-pg-marriage`,`Ellen Marriage`,1896,`The classic Victorian translation (Project Gutenberg text)`,`marriage-balzac`,['Prose','Victorian'],
                `Mme. Vauquer (née de Conflans) is an elderly person, who for the past forty years has kept a lodging-house in the Rue Nueve-Sainte-Geneviève, in the district that lies between the Latin Quarter and the Faubourg Saint-Marcel.`,
                [],[]),
              col(`balzac-pg-crawford`,`M.A. Crawford`,1951,`Penguin Classics standard`,`crawford-balzac`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`balzac-pg-coward`,`David Coward`,1991,`Oxford World's Classics`,`coward-balzac`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`balzac-pg-raffel`,`Burton Raffel`,1994,`Norton Critical edition`,`raffel-balzac`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'zola', name:'Ã‰mile Zola', dates:'1840â€“1902', lang:'French',
    desc:`Leader of French naturalism. Germinal and Nana are among the most enduring novels of the Rougon-Macquart cycle.`,
    acc:ACC.c, tonkin:false,
    works:[
      {
        id:'germinal', title:`Germinal`, year:1885,
        desc:`A miners' strike in northern France â€” Zola's great novel of labor and the coal mine.`,
        chips:[`Novel`,`Naturalism`,`Labor`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`zola-germ-eldis`,`Havelock Ellis`,1894,`The classic Victorian translation (Project Gutenberg text)`,`ellis-zola`,['Prose','Victorian'],
                `Over the open plain, beneath a starless sky as dark and thick as ink, a man walked alone along the highway from Marchiennes to Montsou, a straight paved road ten kilometres in length, intersecting the beetroot fields. He could not even see the black soil before him, and only felt the immense flat horizon by the gusts of March wind, squalls as strong as on the sea, and frozen from sweeping leagues of marsh and naked earth. No tree could be seen against the sky, and the road unrolled as straight as a pier in the midst of the blinding spray of darkness.`,
                [],[]),
              col(`zola-germ-tancock`,`Leonard Tancock`,1954,`Penguin Classics standard`,`tancock-zola`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`zola-germ-collier`,`Peter Collier`,1993,`Oxford World's Classics`,`collier-zola`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`zola-germ-pearson`,`Roger Pearson`,2004,`Modern Penguin Classics`,`pearson-zola`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
      {
        id:'nana', title:`Nana`, year:1880,
        desc:`The rise and fall of a Parisian courtesan â€” Zola's scandalous portrait of the Second Empire.`,
        chips:[`Novel`,`Naturalism`,`Paris`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`zola-nana-plarr`,`Victor Plarr`,1895,`Victorian translation`,`plarr-zola`,['Prose','Victorian'],
                `[Excerpt pending]`,
                [],[]),
              col(`zola-nana-holden`,`George Holden`,1972,`Penguin Classics`,`holden-zola`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`zola-nana-parmee`,`Douglas ParmÃ©e`,1992,`Oxford World's Classics`,`parmee-zola`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
],

russian: [
  {
    id:'solzhenitsyn', name:'Alexander Solzhenitsyn', dates:'1918â€“2008', lang:'Russian',
    desc:`Nobel laureate and chronicler of the Gulag. One Day in the Life of Ivan Denisovich was the book that broke the silence.`,
    acc:ACC.a, tonkin:false,
    works:[
      {
        id:'one-day', title:`One Day in the Life of Ivan Denisovich`, year:1962,
        desc:`A single day in a Soviet labour camp, from reveille to lights-out.`,
        chips:[`Novella`,`Gulag`,`Testimony`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`solzh-one-parker`,`Ralph Parker`,1963,`The first English translation`,`parker-solzhenitsyn`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`solzh-one-haywardhingley`,`Max Hayward & Ronald Hingley`,1963,`Concurrent English rendering`,`hayward-solzhenitsyn`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`solzh-one-willetts`,`Harry Willetts`,1991,`Later standard rendering`,`willetts-solzhenitsyn`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'shalamov', name:'Varlam Shalamov', dates:'1907â€“1982', lang:'Russian',
    desc:`Kolyma Tales â€” his cycle of stories from the Gulag â€” is one of the century's great testimonies.`,
    acc:ACC.b, tonkin:false,
    works:[
      {
        id:'kolyma-tales', title:`Kolyma Tales`, year:1978,
        desc:`Stories of Kolyma, the harshest Soviet labour camp region, written over three decades.`,
        chips:[`Stories`,`Gulag`,`Testimony`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`shalamov-kt-glad`,`John Glad`,1980,`Early English selection`,`glad-shalamov`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`shalamov-kt-chandler`,`Robert Chandler et al.`,2018,`NYRB; complete modern translation`,`chandler-shalamov`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
],

italian: [
  {
    id:'svevo', name:'Italo Svevo', dates:'1861â€“1928', lang:'Italian',
    desc:`Italian modernist whose Zeno's Conscience anticipates much of European modernism.`,
    acc:ACC.a, tonkin:false,
    works:[
      {
        id:'zeno', title:`Zeno's Conscience`, year:1923,
        desc:`Zeno Cosini's mock-confession, full of neurosis, self-deception, and comic irony.`,
        chips:[`Novel`,`Modernism`,`Psychology`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`svevo-zeno-dezoete`,`Beryl de Zoete`,1930,`First English translation, as Confessions of Zeno`,`dezoete-svevo`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`svevo-zeno-weaver`,`William Weaver`,2001,`Modern standard translation`,`weaver-svevo`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'pirandello', name:'Luigi Pirandello', dates:'1867â€“1936', lang:'Italian',
    desc:`Nobel laureate; Six Characters in Search of an Author rewrote the modern theatre.`,
    acc:ACC.b, tonkin:false,
    works:[
      {
        id:'six-characters', title:`Six Characters in Search of an Author`, year:1921,
        desc:`Six unfinished characters interrupt a rehearsal and demand to be given their story.`,
        chips:[`Drama`,`Metatheatre`,`Modernism`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`pirandello-sc-storer`,`Edward Storer`,1922,`Early English version`,`storer-pirandello`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`pirandello-sc-linstrum`,`John Linstrum`,1979,`Modern stage translation`,`linstrum-pirandello`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`pirandello-sc-may`,`Frederick May`,1987,`Oxford World's Classics`,`may-pirandello`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'pavese', name:'Cesare Pavese', dates:'1908â€“1950', lang:'Italian',
    desc:`Poet and novelist of postwar Italy. The Moon and the Bonfires is his finest novel.`,
    acc:ACC.c, tonkin:false,
    works:[
      {
        id:'moon-bonfires', title:`The Moon and the Bonfires`, year:1950,
        desc:`An emigrant returns to the Piedmontese hills and finds the past unreachable.`,
        chips:[`Novel`,`Italy`,`Return`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`pavese-mb-flint`,`R.W. Flint`,1950,`First English translation`,`flint-pavese`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`pavese-mb-sinclair`,`Louise Sinclair`,1953,`Early rendering`,`sinclair-pavese`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`pavese-mb-bergin`,`T.G. Bergin`,1953,`Concurrent rendering`,`bergin-pavese`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'ginzburg', name:'Natalia Ginzburg', dates:'1916â€“1991', lang:'Italian',
    desc:`Italian writer of spare, domestic prose. Family Lexicon is her masterpiece of memory.`,
    acc:ACC.d, tonkin:false,
    works:[
      {
        id:'family-lexicon', title:`Family Lexicon`, year:1963,
        desc:`A portrait of her family and their private sayings â€” at once comic and elegiac.`,
        chips:[`Memoir`,`Family`,`Modern`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`ginzburg-fl-low`,`D.M. Low`,1963,`Early English version`,`low-ginzburg`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`ginzburg-fl-mcphee`,`Jenny McPhee`,2017,`NYRB Classics; modern standard`,`mcphee-ginzburg`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'morante', name:'Elsa Morante', dates:'1912â€“1985', lang:'Italian',
    desc:`One of Italy's great postwar novelists. Arturo's Island and History are her finest works.`,
    acc:ACC.a, tonkin:false,
    works:[
      {
        id:'arturos-island', title:`Arturo's Island`, year:1957,
        desc:`Arturo grows up alone on Procida, idolizing his absent father â€” a coming-of-age novel of strange beauty.`,
        chips:[`Novel`,`Bildungsroman`,`Italy`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`morante-ai-quigly`,`Isabel Quigly`,1959,`First English translation`,`quigly-morante`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`morante-ai-goldstein`,`Ann Goldstein`,2019,`Liveright; modern translation`,`goldstein-morante`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
],

portuguese: [
  {
    id:'machado', name:'Machado de Assis', dates:'1839â€“1908', lang:'Portuguese (Brazilian)',
    desc:`Brazil's greatest novelist. Dom Casmurro and The Posthumous Memoirs of BrÃ¡s Cubas are masterpieces of ironic modernism.`,
    acc:ACC.a, tonkin:false,
    works:[
      {
        id:'dom-casmurro', title:`Dom Casmurro`, year:1899,
        desc:`Bento Santiago's jealous memoir of his marriage â€” the classic case of Capitu's imagined betrayal.`,
        chips:[`Novel`,`Irony`,`Brazil`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`machado-dc-caldwell`,`Helen Caldwell`,1953,`Early standard translation`,`caldwell-machado`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`machado-dc-gledson`,`John Gledson`,1997,`Oxford World's Classics`,`gledson-machado`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`machado-dc-jullcosta`,`Margaret Jull Costa`,2016,`Penguin Classics; modern standard`,`jullcosta-machado`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
      {
        id:'posthumous-memoirs', title:`The Posthumous Memoirs of BrÃ¡s Cubas`, year:1881,
        desc:`A novel narrated from beyond the grave by its dead protagonist â€” Brazil's modernist manifesto avant la lettre.`,
        chips:[`Novel`,`Irony`,`Modernism`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`machado-pm-grossman`,`William L. Grossman`,1952,`Early English version`,`grossman-machado`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`machado-pm-rabassa`,`Gregory Rabassa`,1997,`Oxford World's Classics`,`rabassa-machado`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`machado-pm-thomson`,`Flora Thomson-DeVeaux`,2020,`Penguin Classics; modern standard`,`thomson-machado`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'lispector', name:'Clarice Lispector', dates:'1920â€“1977', lang:'Portuguese (Brazilian)',
    desc:`Brazilian modernist of startling interiority. The Hour of the Star and Near to the Wild Heart.`,
    acc:ACC.b, tonkin:false,
    works:[
      {
        id:'hour-of-the-star', title:`The Hour of the Star`, year:1977,
        desc:`The impoverished MacabÃ©a and her destiny â€” Lispector's final, mysterious novel.`,
        chips:[`Novel`,`Modernism`,`Brazil`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`lispector-hs-pontiero`,`Giovanni Pontiero`,1986,`First English translation`,`pontiero-lispector`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`lispector-hs-moser`,`Benjamin Moser`,2011,`New Directions; modern translation`,`moser-lispector`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
      {
        id:'near-wild-heart', title:`Near to the Wild Heart`, year:1943,
        desc:`Lispector's debut â€” an interior portrait of Joana, written when she was twenty-three.`,
        chips:[`Novel`,`Modernism`,`Interiority`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`lispector-nw-pontiero`,`Giovanni Pontiero`,1990,`Early English version`,`pontiero-lispector`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`lispector-nw-entrekin`,`Alison Entrekin`,2012,`Penguin Classics; modern translation`,`entrekin-lispector`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
],

nordic: [
  {
    id:'jacobsen', name:'Jens Peter Jacobsen', dates:'1847â€“1885', lang:'Danish',
    desc:`Danish naturalist whose Niels Lyhne was admired by Rilke and shaped Scandinavian modernism.`,
    acc:ACC.a, tonkin:false,
    works:[
      {
        id:'niels-lyhne', title:`Niels Lyhne`, year:1880,
        desc:`The life of a poet-skeptic who fails at love and faith â€” a quiet masterpiece of Danish realism.`,
        chips:[`Novel`,`Realism`,`Denmark`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`jacobsen-nl-larsen`,`Hanna Astrup Larsen`,1919,`Early English translation`,`larsen-jacobsen`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`jacobsen-nl-nunnally`,`Tiina Nunnally`,1990,`Modern translation`,`nunnally-jacobsen`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
],

asian: [
  {
    id:'akutagawa', name:'RyÅ«nosuke Akutagawa', dates:'1892â€“1927', lang:'Japanese',
    desc:`Father of the modern Japanese short story. Rashomon and In a Grove are among the most-studied stories in Japanese fiction.`,
    acc:ACC.a, tonkin:false,
    works:[
      {
        id:'rashomon', title:`Rashomon and Other Stories`, year:1952,
        desc:`The title story and its companions made Akutagawa the most-translated Japanese short-story writer.`,
        chips:[`Stories`,`Japan`,`Modern`],
        passages:[
          {
            label:`Rashomon â€” Opening`,
            cols:[
              col(`akutagawa-rs-kojima`,`Takashi Kojima`,1952,`The classic early collection`,`kojima-akutagawa`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`akutagawa-rs-rubin`,`Jay Rubin`,2006,`Penguin Classics; modern collection`,`rubin-akutagawa`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
],

polish: [
  {
    id:'gombrowicz', name:'Witold Gombrowicz', dates:'1904â€“1969', lang:'Polish',
    desc:`Polish modernist of the grotesque. Ferdydurke is his explosive debut, a satire of immaturity and form.`,
    acc:ACC.a, tonkin:false,
    works:[
      {
        id:'ferdydurke', title:`Ferdydurke`, year:1937,
        desc:`Thirty-year-old Joey is dragged back to school â€” Gombrowicz's attack on form, immaturity, and the Polish psyche.`,
        chips:[`Novel`,`Grotesque`,`Modernism`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`gombrowicz-fd-mosbacher`,`Eric Mosbacher`,1961,`First English translation`,`mosbacher-gombrowicz`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`gombrowicz-fd-borchardt`,`Danuta Borchardt`,2000,`Yale; modern translation`,`borchardt-gombrowicz`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
      {
        id:'cosmos', title:`Cosmos`, year:1965,
        desc:`Two men in a boarding house become obsessed with patterns and clues â€” a metaphysical detective novel.`,
        chips:[`Novel`,`Metaphysics`,`Modernism`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`gombrowicz-co-mosbacher`,`Eric Mosbacher`,1967,`Early English version`,`mosbacher-gombrowicz`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`gombrowicz-co-borchardt`,`Danuta Borchardt`,2005,`Grove; modern translation`,`borchardt-gombrowicz`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
      {
        id:'pornografia', title:`Pornografia`, year:1960,
        desc:`Two middle-aged intellectuals in wartime Poland try to orchestrate a crime of passion.`,
        chips:[`Novel`,`Irony`,`Modernism`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`gombrowicz-po-hamilton`,`Alastair Hamilton`,1966,`Early English version`,`hamilton-gombrowicz`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`gombrowicz-po-borchardt`,`Danuta Borchardt`,2009,`Grove; modern translation`,`borchardt-gombrowicz`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'schulz', name:'Bruno Schulz', dates:'1892â€“1942', lang:'Polish',
    desc:`Polish-Jewish writer whose The Street of Crocodiles is a prose masterpiece of memory and myth.`,
    acc:ACC.b, tonkin:false,
    works:[
      {
        id:'street-of-crocodiles', title:`The Street of Crocodiles`, year:1934,
        desc:`The first collection of the Cinnamon Shops stories â€” dreamlike tales of his provincial town.`,
        chips:[`Stories`,`Surrealism`,`Poland`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`schulz-sc-wieniewska`,`Celina Wieniewska`,1963,`The founding English translation`,`wieniewska-schulz`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`schulz-sc-davis`,`John Curran Davis`,2008,`New complete translation`,`davis-schulz`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'lem', name:'StanisÅ‚aw Lem', dates:'1921â€“2006', lang:'Polish',
    desc:`Poland's great science-fiction novelist. Solaris is his most celebrated work.`,
    acc:ACC.c, tonkin:false,
    works:[
      {
        id:'solaris', title:`Solaris`, year:1961,
        desc:`A psychologist arrives on a space station orbiting a mysterious, sentient ocean.`,
        chips:[`Science Fiction`,`Novel`,`Philosophy`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`lem-sol-kilmartincox`,`Joanna Kilmartin & Steve Cox`,1970,`First English translation, from the French`,`kilmartin-lem`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`lem-sol-johnston`,`Bill Johnston`,2011,`First English translation from the Polish`,`johnston-lem`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
],

chinese: [
  {
    id:'wu-cheng-en', name:'Wu Cheng\u2019en', dates:'c. 1500\u20131582', lang:'Chinese',
    desc:`Ming-dynasty novelist. Journey to the West is one of the Four Great Classical Novels of Chinese literature.`,
    acc:ACC.a, tonkin:false,
    works:[
      {
        id:'journey-west', title:`Journey to the West`, year:`c. 1592`,
        desc:`The monkey king Sun Wukong and the pilgrimage of Tripitaka to India â€” China's great comic-epic fantasy.`,
        chips:[`Epic`,`Fantasy`,`Chinese Classic`],
        passages:[
          {
            label:`Opening â€” The Birth of the Stone Monkey`,
            cols:[
              col(`jtw-waley`,`Arthur Waley`,1942,`Famous abridgement as Monkey`,`waley-journey`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`jtw-yu`,`Anthony C. Yu`,1977,`Complete translation; revised 2012`,`yu-journey`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`jtw-jenner`,`W. J. F. Jenner`,1982,`Complete rendering in four volumes`,`jenner-journey`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`jtw-minford`,`John Minford`,2012,`Abridged retelling`,`minford-journey`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
              col(`jtw-lovell`,`Julia Lovell`,2021,`New abridged retelling as Monkey King`,`lovell-journey`,['Prose','Contemporary'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'cao-xueqin', name:'Cao Xueqin', dates:'c. 1715\u20131763', lang:'Chinese',
    desc:`Author of Dream of the Red Chamber (The Story of the Stone), the great novel of Qing aristocratic life and decline.`,
    acc:ACC.b, tonkin:false,
    works:[
      {
        id:'red-chamber', title:`Dream of the Red Chamber (The Story of the Stone)`, year:`c. 1791`,
        desc:`The rise and ruin of the Jia clan, and the tragic love of Baoyu and Daiyu â€” China's greatest novel.`,
        chips:[`Novel`,`Family`,`Chinese Classic`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`rch-hawkes`,`David Hawkes`,1973,`The Story of the Stone; the founding complete English version`,`hawkes-red`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`rch-yangyang`,`Yang Hsien-yi & Gladys Yang`,1978,`A Dream of Red Mansions; complete Beijing Foreign Languages Press version`,`yang-red`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'shi-naian', name:'Shi Nai\u2019an & Luo Guanzhong', dates:'14th century', lang:'Chinese',
    desc:`Attributed authors of Water Margin, the classic novel of the 108 outlaws of Liangshan Marsh.`,
    acc:ACC.c, tonkin:false,
    works:[
      {
        id:'water-margin', title:`Water Margin (Outlaws of the Marsh)`, year:`14th c.`,
        desc:`One hundred and eight bandits gather at Liangshan to defy the corrupt Song dynasty.`,
        chips:[`Novel`,`Epic`,`Chinese Classic`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`wm-buck`,`Pearl S. Buck`,1933,`Famous rendering as All Men Are Brothers`,`buck-water`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`wm-jackson`,`J. H. Jackson`,1937,`Early English translation as Water Margin`,`jackson-water`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`wm-shapiro`,`Sidney Shapiro`,1980,`Complete Foreign Languages Press translation as Outlaws of the Marsh`,`shapiro-water`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'luo-guannzhong', name:'Luo Guanzhong', dates:'c. 1330\u20131400', lang:'Chinese',
    desc:`Author of Romance of the Three Kingdoms, the historical epic of the fall of the Han and the rise of the Three Kingdoms.`,
    acc:ACC.d, tonkin:false,
    works:[
      {
        id:'three-kingdoms', title:`Romance of the Three Kingdoms`, year:`14th c.`,
        desc:`The wars of Wei, Shu, and Wu â€” a vast historical romance of strategy, loyalty, and betrayal.`,
        chips:[`Novel`,`Historical`,`Chinese Classic`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`tk-brewitttaylor`,`C. H. Brewitt-Taylor`,1925,`Abridged classic translation`,`brewitttaylor-three`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`tk-roberts`,`Moss Roberts`,1991,`Complete University of California Press translation; abridged 1976`,`roberts-three`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
  {
    id:'jin-ping-mei', name:'Lanling Xiaoxiao Sheng', dates:'c. 1610', lang:'Chinese',
    desc:`The pseudonymous author of The Plum in the Golden Vase (Jin Ping Mei), the erotic counter-novel to the great Chinese classics.`,
    acc:ACC.a, tonkin:false,
    works:[
      {
        id:'jin-ping-mei', title:`The Plum in the Golden Vase (Jin Ping Mei)`, year:`c. 1610`,
        desc:`The opulent, degenerate world of Ximen Qing â€” an encyclopedic and scandalous portrait of Ming society.`,
        chips:[`Novel`,`Erotic`,`Chinese Classic`],
        passages:[
          {
            label:`Opening`,
            cols:[
              col(`jpm-egerton`,`Clement Egerton`,1939,`Early translation as The Golden Lotus`,`egerton-plum`,['Prose'],
                `[Excerpt pending]`,
                [],[]),
              col(`jpm-roy`,`David Tod Roy`,1993,`Complete five-volume scholarly translation`,`roy-plum`,['Prose','Scholarly'],
                `[Excerpt pending]`,
                [],[]),
            ]
          }
        ]
      },
    ]
  },
],
};

for (const [sec, list] of Object.entries(_EXTRA_AUTHORS)) {
  AUTHORS[sec] = (AUTHORS[sec] || []).concat(list);
}

// Extend the Wikipedia photo/extract map for the new authors
Object.assign(WIKI_MAP, {
  'rilke': 'Rainer_Maria_Rilke',
  'zweig': 'Stefan_Zweig',
  'roth': 'Joseph_Roth',
  'walser': 'Robert_Walser',
  'grass': 'GÃ¼nter_Grass',
  'dÃ¶blin': 'Alfred_DÃ¶blin',
  'remarque': 'Erich_Maria_Remarque',
  'stendhal': 'Stendhal',
  'balzac': 'HonorÃ©_de_Balzac',
  'zola': 'Ã‰mile_Zola',
  'solzhenitsyn': 'Aleksandr_Solzhenitsyn',
  'shalamov': 'Varlam_Shalamov',
  'svevo': 'Italo_Svevo',
  'pirandello': 'Luigi_Pirandello',
  'pavese': 'Cesare_Pavese',
  'ginzburg': 'Natalia_Ginzburg',
  'morante': 'Elsa_Morante',
  'machado': 'Machado_de_Assis',
  'lispector': 'Clarice_Lispector',
  'jacobsen': 'Jens_Peter_Jacobsen',
  'akutagawa': 'RyÅ«nosuke_Akutagawa',
  'gombrowicz': 'Witold_Gombrowicz',
  'schulz': 'Bruno_Schulz',
  'lem': 'StanisÅ‚aw_Lem',
  'wu-cheng-en': "Wu_Cheng'en",
  'cao-xueqin': 'Cao_Xueqin',
  'shi-naian': "Shi_Nai'an",
  'luo-guannzhong': 'Luo_Guanzhong',
  'jin-ping-mei': 'Jin_Ping_Mei',
});
