import type { Movie, Video } from "@/lib/types"

function movie(
  id: number,
  title: string,
  voteAverage: number,
  releaseDate: string | null,
  overview: string | null,
  posterPath: string | null,
  backdropPath: string | null = null
): Movie {
  return {
    id,
    title,
    overview,
    posterPath,
    backdropPath,
    voteAverage,
    releaseDate,
  }
}

export const movies: Movie[] = [
  movie(
    268,
    "Batman",
    7.2,
    "1989-06-21",
    "Batman must face his most ruthless nemesis…",
    "/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg",
    "/2va32apQP97gvUxaMnL5wYt4CRB.jpg"
  ),
  movie(
    364,
    "Batman Returns",
    6.9,
    "1992-06-19",
    "Batman is pulled into a winter feud with the Penguin and Catwoman.",
    "/jKBjeXM7iBBV9UkUcOXx3m7FSHY.jpg"
  ),
  movie(
    414,
    "Batman Forever",
    5.5,
    "1995-06-16",
    "Batman takes on Two-Face while a riddling new ally asks to help.",
    "/l0wdmQl9TDhMgz1f822yjXHdtlf.jpg"
  ),
  movie(
    415,
    "Batman & Robin",
    3.8,
    "1997-06-20",
    null,
    "/i7hEUpDuMN2LOrCEifFyGSHZQSY.jpg"
  ),
  movie(
    272,
    "Batman Begins",
    8.2,
    "2005-06-15",
    "Bruce Wayne learns how to become Batman and comes home to a fearful city.",
    "/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg"
  ),
  movie(
    155,
    "The Dark Knight",
    9,
    "2008-07-18",
    "Batman and the Joker pull Gotham into a test of what the city will believe.",
    "/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  ),
  movie(
    49026,
    "The Dark Knight Rises",
    7.7,
    "2012-07-20",
    "Batman comes out of retirement as Bane cuts Gotham off from the world.",
    "/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg"
  ),
  movie(
    209112,
    "Batman v Superman: Dawn of Justice",
    6.1,
    "2016-03-25",
    "Batman decides Superman is a threat and forces a public reckoning.",
    "/5UsK3grJvtQrtzEgqNlDljJW96w.jpg"
  ),
  movie(
    414906,
    "The Batman",
    7.9,
    "2022-03-04",
    "Batman follows a trail of riddles through a corrupt Gotham.",
    "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"
  ),

  movie(
    1560520,
    "Batman: Knightfall Part 1: Knightfall",
    9.1,
    "2026-06-23",
    "Arkham Asylum has been destroyed, and all its inmates have been unleashed upon Gotham City. As Batman races to round up some of his greatest enemies, he is pushed to his physical and mental limits and into a final confrontation with a new threat: the man called Bane!",
    "/360qdtu2hLnqMu8SVHMywn420w1.jpg"
  ),
  movie(
    980431,
    "Avatar Aang: The Last Airbender",
    9,
    "2026-07-24",
    "Avatar Aang, the world's last Airbender, learns of an ancient power that could save his culture from extinction. With the help of his friends, he embarks on a global quest to find it before it falls into the wrong hands and threatens to upend the peace they sacrificed everything to achieve.",
    "/3sgnSfNT27Bx5O5ukr7B26mhEQq.jpg"
  ),
  movie(
    1007757,
    "Swapped",
    8.8,
    "2026-05-01",
    "A small woodland creature and a majestic bird, two natural sworn enemies of the Valley, magically trade places and set off on an adventure of a lifetime to switch back. Their journey soon uncovers a greater threat—one that could endanger not only their species, but the entire valley they call home.",
    "/tHhxWxge06goXU6ZQH1hj7vK8Hd.jpg"
  ),
  movie(
    1632181,
    "Accidental Partners",
    8.8,
    "2026-03-12",
    "Two women discover they were both scammed by the same man (who also got them pregnant). They form an alliance to take revenge.",
    "/j0CIVzeR7hRAPBPGR54qDZoOQpp.jpg"
  ),
  movie(
    1621552,
    "Facing El Chapo",
    8.8,
    "2026-08-21",
    "Two Mexican officers must survive the final hours of their shift after crossing a ruthless cartel boss.",
    "/alpf5v4UqSFawPmG9RX03Or4BDk.jpg"
  ),
  movie(
    278,
    "The Shawshank Redemption",
    8.7,
    "1994-09-23",
    "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
  ),
  movie(
    238,
    "The Godfather",
    8.7,
    "1972-03-14",
    "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  ),
  movie(
    687163,
    "Project Hail Mary",
    8.6,
    "2026-03-15",
    "Science teacher Ryland Grace wakes up on a spaceship light years from home with no recollection of who he is or how he got there. As his memory returns, he begins to uncover his mission: solve the riddle of the mysterious substance causing the sun to die out. He must call on his scientific knowledge and unorthodox ideas to save everything on Earth from extinction.",
    "/iOb2fjXLbpJgyQXe46n1WtGCnaa.jpg"
  ),
  movie(
    1232449,
    "Young Hearts",
    8.6,
    "2024-10-26",
    "14-year-old Elias increasingly feels like an outsider in his village. When he meets his new neighbour of the same age, Alexander, Elias is confronted with his burgeoning sexuality.",
    "/iGCtYxfuvXfy0BD5m6p7vKuPOxS.jpg"
  ),
  movie(
    936075,
    "Michael",
    8.6,
    "2026-04-22",
    "The story of Michael Jackson, one of the most influential artists the world has ever known, and his life beyond the music. His journey from the discovery of his extraordinary talent as the lead of the Jackson Five, to the visionary artist whose creative ambition fueled a relentless pursuit to become the biggest entertainer in the world, highlighting both his life off-stage and some of the most iconic performances from his early solo career.",
    "/dueFqKLvjftnELZaGYwY7xinfaI.jpg"
  ),
  movie(
    389,
    "12 Angry Men",
    8.6,
    "1957-04-10",
    "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    "/zhG3vKWyDRaZYoaww1UVAi29T9h.jpg"
  ),
  movie(
    240,
    "The Godfather Part II",
    8.6,
    "1974-12-20",
    "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    "/8a1lJs7mFyGhGhZZDT1azJUoQiZ.jpg"
  ),
  movie(
    424,
    "Schindler's List",
    8.6,
    "1993-12-15",
    "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"
  ),
  movie(
    497,
    "The Green Mile",
    8.5,
    "1999-12-10",
    "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg"
  ),
  movie(
    122,
    "The Lord of the Rings: The Return of the King",
    8.5,
    "2003-12-17",
    "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​",
    "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
  ),
  movie(
    157336,
    "Interstellar",
    8.5,
    "2014-11-04",
    "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    "/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg"
  ),
  movie(
    680,
    "Pulp Fiction",
    8.5,
    "1994-09-10",
    "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    "/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg"
  ),
  movie(
    969681,
    "Spider-Man: Brand New Day",
    8.5,
    "2026-07-29",
    "Fighting crime full-time as Spider-Man in a world that doesn't remember him—and the pressure of seeing his old friends move on without him—sparks a change in Peter Parker he may not have the power to control. But that transformation might also be the only thing that can stop a shocking new threat to the city and those he loves - a powerful villain no one can even see.",
    "/bjiS5ipwxb9JFy3XRRN4OAilSeX.jpg"
  ),
  movie(
    429,
    "The Good, the Bad and the Ugly",
    8.5,
    "1966-12-23",
    "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg"
  ),
  movie(
    13,
    "Forrest Gump",
    8.5,
    "1994-06-23",
    "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    "/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
  ),
  movie(
    667257,
    "Impossible Things",
    8.5,
    "2021-06-17",
    "After the death of her abusive husband, Matilde finds her new best friend in Miguel, her young, insecure, and disoriented neighbor.",
    "/t2Ew8NZ8Ci2kqmoecZUNQUFDJnQ.jpg"
  ),
  movie(
    769,
    "GoodFellas",
    8.5,
    "1990-09-12",
    "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    "/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg"
  ),
  movie(
    120,
    "The Lord of the Rings: The Fellowship of the Ring",
    8.4,
    "2001-12-18",
    "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
  ),
  movie(
    1022256,
    "Selena Gomez: My Mind & Me",
    8.4,
    "2022-11-04",
    "After years in the limelight, Selena Gomez achieves unimaginable stardom. But just as she reaches a new peak, an unexpected turn pulls her into darkness. This uniquely raw and intimate documentary spans her six-year journey into a new light.",
    "/oMpsswJv8x4vnOnIKqs4xJs2Kn3.jpg"
  ),
  movie(
    1181678,
    "¿Quieres ser mi hijo?",
    8.4,
    "2023-09-21",
    "Lu, a conformist woman in her forties, learns that her 15-year partner has been having extramarital affairs. Starting from scratch, she gets involved in an unexpected relationship with a young womanizer.",
    "/6PQJsmuvSMZQMmlJfTpjIkrizUh.jpg"
  ),
  movie(
    550,
    "Fight Club",
    8.4,
    "1999-10-15",
    'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    "/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg"
  ),
  movie(
    637,
    "Life Is Beautiful",
    8.4,
    "1997-12-20",
    "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
    "/74hLDKjD5aGYOotO6esUVaeISa2.jpg"
  ),
  movie(
    11216,
    "Cinema Paradiso",
    8.4,
    "1988-11-17",
    "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
    "/aRgPnx4aPS96f7CnhJH7IG5dN1A.jpg"
  ),
  movie(
    576712,
    "Everybody’s Everything",
    8.4,
    "2019-11-12",
    "The story of artist Lil Peep from his birth in Long Island and meteoric rise as a genre blending pop star & style icon, to his death due to an accidental opioid overdose in Arizona at just 21 years of age.",
    "/wbMkjkNX8VylPVLmQ2Dp6i5iayY.jpg"
  ),
  movie(
    359364,
    "Human",
    8.4,
    "2015-09-12",
    "A collection of stories about and images of our world, offering an immersion to the core of what it means to be human. Through these stories full of love and happiness, as well as hatred and violence, it brings us face to face with the Other, making us reflect on our lives. From stories of everyday experiences to accounts of the most unbelievable lives, these poignant encounters share a rare sincerity and underline who we are – our darker side, but also what is most noble in us, and what is universal. Our Earth is shown at its most sublime through never-before-seen aerial images accompanied by soaring music, resulting in an ode to the beauty of the world, providing a moment to draw breath and for introspection. This film is a politically engaged work which allows us to embrace the human condition and to reflect on the meaning of our existence.",
    "/l02W63OGQKYugJrs3Uw8nA9gii4.jpg"
  ),
  movie(
    121,
    "The Lord of the Rings: The Two Towers",
    8.4,
    "2002-12-18",
    "Frodo Baggins and the other members of the Fellowship continue on their sacred quest to destroy the One Ring--but on separate paths. Their destinies lie at two towers--Orthanc Tower in Isengard, where the corrupt wizard Saruman awaits, and Sauron's fortress at Barad-dur, deep within the dark lands of Mordor.",
    "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg"
  ),
  movie(
    664280,
    "David Attenborough: A Life on Our Planet",
    8.4,
    "2020-09-28",
    "The story of life on our planet by the man who has seen more of the natural world than any other. In more than 90 years, Attenborough has visited every continent on the globe, exploring the wild places of our planet and documenting the living world in all its variety and wonder. Addressing the biggest challenges facing life on our planet, the film offers a powerful message of hope for future generations.",
    "/zSKwyUDKDHiFU5syTTvQRDcGBPS.jpg"
  ),
  movie(
    598,
    "City of God",
    8.4,
    "2002-08-30",
    "In the poverty-stricken favelas of Rio de Janeiro in the 1970s, two young men choose different paths. Rocket is a budding photographer who documents the increasing drug-related violence of his neighborhood, while José “Zé” Pequeno is an ambitious drug dealer diving into a dangerous life of crime.",
    "/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg"
  ),
  movie(
    770156,
    "Lucy Shimmers and the Prince of Peace",
    8.4,
    "2020-10-19",
    "Second chances start when a hardened criminal crosses paths with a precocious little girl who is helped by an angel to change hearts during the holiday season.",
    "/yfnJ5qIYx7q33fY4jqv9Pu95RSg.jpg"
  ),
  movie(
    539,
    "Psycho",
    8.4,
    "1960-06-22",
    "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother.",
    "/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg"
  ),
  movie(
    324857,
    "Spider-Man: Into the Spider-Verse",
    8.4,
    "2018-12-06",
    'Struggling to find his place in the world while juggling school and family, Brooklyn teenager Miles Morales is unexpectedly bitten by a radioactive spider and develops unfathomable powers just like the one and only Spider-Man. While wrestling with the implications of his new abilities, Miles discovers a super collider created by the madman Wilson "Kingpin" Fisk, causing others from across the Spider-Verse to be inadvertently transported to his dimension.',
    "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg"
  ),
  movie(
    510,
    "One Flew Over the Cuckoo's Nest",
    8.4,
    "1975-11-19",
    "A petty criminal fakes insanity to serve his sentence in a mental ward rather than prison. He soon finds himself as a leader to the other patients—and an enemy to the cruel, domineering nurse who runs the ward.",
    "/kjWsMh72V6d8KRLV4EOoSJLT1H7.jpg"
  ),
  movie(
    40096,
    "A Dog's Will",
    8.4,
    "2000-09-15",
    "The lively João Grilo and the sly Chicó are poor guys living in the hinterland who cheat a bunch of people in a small town in Northeastern Brazil. When they die, they have to be judged by Christ, the Devil and the Virgin Mary before they are admitted to paradise.",
    "/z9Au9XtK0ARzkKGsZCzMkmKgMPf.jpg"
  ),
  movie(
    1383731,
    "Protector",
    8.4,
    "2026-02-20",
    "Nikki's life is shattered when her daughter is kidnapped. Thrust into the criminal underworld while hunted by cops and military, she must fight to rescue her child.",
    "/icOZpnGuH9YrEaW3wrw5GJaXGih.jpg"
  ),
  movie(
    1891,
    "The Empire Strikes Back",
    8.4,
    "1980-05-20",
    "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
    "/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg"
  ),
  movie(
    807,
    "Se7en",
    8.4,
    "1995-09-22",
    'Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Somerset researches each sin in an effort to get inside the killer\'s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.',
    "/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg"
  ),
  movie(
    696374,
    "Gabriel's Inferno",
    8.4,
    "2020-05-29",
    "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
    "/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg"
  ),
  movie(
    244786,
    "Whiplash",
    8.4,
    "2014-10-10",
    "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    "/7fn624j5lj3xTme2SgiLCeuedmO.jpg"
  ),
  movie(
    27205,
    "Inception",
    8.4,
    "2010-07-15",
    "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    "/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg"
  ),
  movie(
    423,
    "The Pianist",
    8.4,
    "2002-09-17",
    "The true story of pianist Władysław Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.",
    "/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg"
  ),
  movie(
    311,
    "Once Upon a Time in America",
    8.4,
    "1984-05-23",
    "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
    "/i0enkzsL5dPeneWnjl1fCWm6L7k.jpg"
  ),
  movie(
    1330021,
    "Remarkably Bright Creatures",
    8.4,
    "2026-05-07",
    "Through unlikely bonds formed during night shifts at a local aquarium, Tova, an elderly widow, learns of a life-changing discovery that may bring her joy and wonder once again.",
    "/9HcEqn3D4J6b2Z0jK54id9nA0fr.jpg"
  ),
  movie(
    24128,
    "Stop Making Sense",
    8.4,
    "1984-10-19",
    'A concert film documenting Talking Heads at the height of their popularity, on tour for their 1983 album "Speaking in Tongues." The band takes the stage one by one and is joined by a cadre of guest musicians for a career-spanning and cinematic performance that features creative choreography and visuals.',
    "/utNpurUe1MMjEaHqvpkfxgfpSnV.jpg"
  ),
  movie(
    569094,
    "Spider-Man: Across the Spider-Verse",
    8.3,
    "2023-05-31",
    "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse's very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
  ),
  movie(
    274,
    "The Silence of the Lambs",
    8.3,
    "1991-02-14",
    "Clarice Starling is a top student at the FBI's training academy. Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
    "/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg"
  ),
  movie(
    724089,
    "Gabriel's Inferno: Part II",
    8.3,
    "2020-07-31",
    "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
    "/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg"
  ),
  movie(
    1058694,
    "Radical",
    8.3,
    "2023-10-19",
    "In a Mexican border town plagued by neglect, corruption, and violence, a frustrated teacher tries an unorthodox new method to break through his students’ apathy and unlock their curiosity, their potential... and perhaps even their genius.",
    "/lOAJYpX608aT0ApIv63ZTnol27Y.jpg"
  ),
  movie(
    567,
    "Rear Window",
    8.3,
    "1954-08-01",
    "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
    "/ILVF0eJxHMddjxeQhswFtpMtqx.jpg"
  ),
  movie(
    105,
    "Back to the Future",
    8.3,
    "1985-07-03",
    "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
    "/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg"
  ),
  movie(
    1412113,
    "Squid Game: Making Season 2",
    8.3,
    "2025-01-02",
    "From set designs to character arcs, get exclusive cast and director interviews on how Season 2 of the globally most-watched series was brought to life.",
    "/yQGaui0bQ5Ai3KIFBB45nTeIqad.jpg"
  ),
  movie(
    761053,
    "Gabriel's Inferno: Part III",
    8.3,
    "2020-11-19",
    "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
    "/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg"
  ),
  movie(
    73,
    "American History X",
    8.3,
    "1998-07-01",
    "Derek Vineyard is paroled after serving 3 years in prison for killing two African-American men. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
    "/x2drgoXYZ8484lqyDj7L1CEVR4T.jpg"
  ),
  movie(
    1184918,
    "The Wild Robot",
    8.3,
    "2024-09-12",
    "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
    "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
  ),
  movie(
    1377237,
    "Runner",
    8.3,
    "2026-09-07",
    "A former soldier is thrown into a brutal race against time when a critical medical delivery makes him and his unlikely partner the targets of a ruthless cartel. As the mission spirals into a deadly manhunt, every detour, delay, and bullet pushes them closer to failure. With betrayal closing in from every side, they must survive the chase and deliver their cargo to save the life of a little girl.",
    "/vJk2TW1QZAmBiD7oj9ZF9EPTYY1.jpg"
  ),
  movie(
    10494,
    "Perfect Blue",
    8.3,
    "1998-02-28",
    "Rising pop star Mima Kirigoe quits singing to pursue a career as an actress. After she takes up a role on a popular detective show, her handlers and collaborators begin turning up murdered. Harboring feelings of guilt and haunted by visions of her former self, Mima's reality and fantasy meld into a frenzied paranoia.",
    "/6WTiOCfDPP8XV4jqfloiVWf7KHq.jpg"
  ),
  movie(
    396194,
    "Ennio",
    8.3,
    "2022-02-17",
    "A portrait of Ennio Morricone, the most popular and prolific film composer of the 20th century, the one most loved by the international public, a two-time Oscar winner and the author of over five hundred unforgettable scores.",
    "/lEuLAubp74HYztEyNYpEx3AoqOu.jpg"
  ),
  movie(
    614945,
    "Voicemails for Isabelle",
    8.3,
    "2026-06-20",
    "A young woman's hilariously confessional voicemails to her late sister are unknowingly redirected to a stranger, who begins to fall in love from afar.",
    "/canZTWSxACSnAluir3dCtMxKpA1.jpg"
  ),
  movie(
    207,
    "Dead Poets Society",
    8.3,
    "1989-06-02",
    "At an elite, old-fashioned boarding school in New England, a passionate English teacher inspires his students to rebel against convention and seize the potential of every day, courting the disdain of the stern headmaster.",
    "/erzbMlcNHOdx24AXOcn2ZKA7R1q.jpg"
  ),
  movie(
    803,
    "Night and Fog",
    8.3,
    "1956-05-22",
    "Filmmaker Alain Resnais documents the atrocities behind the walls of Hitler's concentration camps.",
    "/2iWYQia8enOai7QEO3TvenleD7r.jpg"
  ),
  movie(
    1317149,
    "I Swear",
    8.3,
    "2025-09-22",
    "Diagnosed with Tourette Syndrome at 15, John Davidson navigates his way against the odds through troubled teenage years and into adulthood, finding inspiration in the kindness of others to discover his true purpose in life.",
    "/vUwyhNWBKkSwK8ELvEeBRwV724h.jpg"
  ),
  movie(
    101,
    "Léon: The Professional",
    8.3,
    "1994-09-14",
    "Léon, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps.",
    "/bxB2q91nKYp8JNzqE7t7TWBVupB.jpg"
  ),
  movie(
    3082,
    "Modern Times",
    8.3,
    "1936-02-05",
    "A bumbling tramp desires to build a home with a young woman, yet is thwarted time and time again by his lack of experience and habit of being in the wrong place at the wrong time...",
    "/AthaPakkuCLROdKxtRbKWclkDBK.jpg"
  ),
  movie(
    914,
    "The Great Dictator",
    8.3,
    "1940-10-15",
    "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
    "/nhMXB8GTdswYMCL9nepDZymJCOr.jpg"
  ),
  movie(
    42269,
    "We All Loved Each Other So Much",
    8.3,
    "1974-12-21",
    "Three partisans bound by a strong friendship return home after the war, but the clash with everyday reality puts a strain on their bond.",
    "/zGGWYpiKNwjpKxelPxOMqJnUgDs.jpg"
  ),
  movie(
    644479,
    "Dedicated to my ex",
    8.3,
    "2019-11-01",
    "The film tells the story of Ariel, a 21-year-old who decides to form a rock band to compete for a prize of ten thousand dollars in a musical band contest, this as a last option when trying to get money to save their relationship and reunite with his ex-girlfriend, which breaks due to the trip she must make to Finland for an internship. Ariel with her friend Ortega, decides to make a casting to find the other members of the band, although they do not know nothing about music, thus forming a band with members that have diverse and opposite personalities.",
    "/xc4bTXVwYNXi10jG9dwcaYt5IpU.jpg"
  ),
  movie(
    1585,
    "It's a Wonderful Life",
    8.3,
    "1946-12-20",
    "George Bailey has spent his entire life giving to the people of Bedford Falls. All that prevents rich skinflint Mr. Potter from taking over the entire town is George's modest building and loan company. But on Christmas Eve the business's $8,000 is lost and George's troubles begin.",
    "/bSqt9rhDZx1Q7UZ86dBPKdNomp2.jpg"
  ),
  movie(
    1084244,
    "Toy Story 5",
    8.3,
    "2026-06-17",
    "When Bonnie receives a Lilypad tablet as a gift and becomes obsessed, Buzz, Woody, Jessie and the rest of the gang's jobs become exponentially harder when they have to go head to head with the all-new threat to playtime.",
    "/sfQtVlIHljToOwYjhe21KPGzZWK.jpg"
  ),
  movie(
    599,
    "Sunset Boulevard",
    8.3,
    "1950-08-10",
    "A hack screenwriter writes a screenplay for a former silent film star who has faded into Hollywood obscurity.",
    "/zt8aQ6ksqK6p1AopC5zVTDS9pKT.jpg"
  ),
  movie(
    77338,
    "The Intouchables",
    8.3,
    "2011-11-02",
    "A true story of two men who should never have met – a quadriplegic aristocrat who was injured in a paragliding accident and a young man from the projects.",
    "/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg"
  ),
  movie(
    1356039,
    "Counterattack",
    8.3,
    "2025-02-27",
    "When a hostage rescue mission creates a new enemy, Capt. Guerrero and his elite soldiers must face an ambush by a criminal group.",
    "/kxnFdLJhi37ZVFDCL1ka0yeQVU5.jpg"
  ),
  movie(
    654299,
    "Out of the Clear Blue Sky",
    8.3,
    "2019-12-24",
    "Returning to Earth as an imitator, the legendary Mexican artist Pedro Infante must prove that he is no longer a womanizer to enter paradise.",
    "/o9cSEHrXzPOO4OIoT9yrdxc216w.jpg"
  ),
  movie(
    18491,
    "Neon Genesis Evangelion: The End of Evangelion",
    8.3,
    "1997-07-19",
    "SEELE orders an all-out attack on NERV, aiming to destroy the Evas before Gendo can advance his own plans for the Human Instrumentality Project. Shinji is pushed to the limits of his sanity as he is forced to decide the fate of humanity.",
    "/j6G24dqI4WgUtChhWjfnI4lnmiK.jpg"
  ),
  movie(
    603,
    "The Matrix",
    8.3,
    "1999-03-31",
    "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    "/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg"
  ),
  movie(
    335,
    "Once Upon a Time in the West",
    8.3,
    "1968-12-21",
    "As the railroad builders advance unstoppably through the Arizona desert on their way to the sea, Jill arrives in the small town of Flagstone with the intention of starting a new life.",
    "/qbYgqOczabWNn2XKwgMtVrntD6P.jpg"
  ),
  movie(
    28,
    "Apocalypse Now",
    8.3,
    "1979-05-19",
    'At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, "does not exist, nor will it ever exist." His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.',
    "/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg"
  ),
  movie(
    92060,
    "Michael Jackson's Thriller",
    8.3,
    "1983-11-21",
    "A night at the movies turns terrifying when Michael and his date are attacked by zombies.",
    "/djv4LM6uanJriwpsOyJzaaSp4gf.jpg"
  ),
  movie(
    1439930,
    "The Punisher: One Last Kill",
    8.3,
    "2026-05-12",
    "As Frank Castle searches for meaning beyond revenge, an unexpected force pulls him back into the fight.",
    "/qQclTgLMDvGBuUBFGHRipxkEwWR.jpg"
  ),
  movie(
    975,
    "Paths of Glory",
    8.3,
    "1957-10-25",
    "A commanding officer defends three scapegoats on trial for a failed offensive that occurred within the French Army in 1916.",
    "/hGg1UCQSHlXfv2HI9bDHT2OQBam.jpg"
  ),
  movie(
    1139087,
    "Once Upon a Studio",
    8.3,
    "2023-09-24",
    "Created for Disney's 100th anniversary, the short features Mickey Mouse corralling a gallery of legendary Disney characters for a group photo.",
    "/aiy3G1cYWV3LgKZHY6a3jL8bjYL.jpg"
  ),
  movie(
    8587,
    "The Lion King",
    8.3,
    "1994-06-15",
    "Young lion prince Simba, eager to one day become king of the Pride Lands, grows up under the watchful eye of his father Mufasa; all the while his villainous uncle Scar conspires to take the throne for himself. Amid betrayal and tragedy, Simba must confront his past and find his rightful place in the Circle of Life.",
    "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
  ),
  movie(
    637920,
    "Miracle in Cell No. 7",
    8.2,
    "2019-10-10",
    "Separated from his daughter, a father with an intellectual disability must prove his innocence when he is jailed for the death of a commander's child.",
    "/bOth4QmNyEkalwahfPCfiXjNh1r.jpg"
  ),
  movie(
    20941,
    "Innocent Voices",
    8.2,
    "2005-01-28",
    "A young boy, attempting to have a normal childhood in 1980s El Salvador, is caught up in a dramatic fight for his life when he desperately tries to avoid the war that is raging all around him.",
    "/hvwB4LdMCLzqXsk5ZjR77vzPkGk.jpg"
  ),
  movie(
    299534,
    "Avengers: Endgame",
    8.2,
    "2019-04-24",
    "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    "/bR8ISy1O9XQxqiy0fQFw2BX72RQ.jpg"
  ),
  movie(
    299536,
    "Avengers: Infinity War",
    8.2,
    "2018-04-25",
    "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
  ),
  movie(
    901,
    "City Lights",
    8.2,
    "1931-02-06",
    "A tramp falls in love with a beautiful blind flower girl. His on-and-off friendship with a wealthy man allows him to be the girl's benefactor and suitor.",
    "/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg"
  ),
  movie(
    630566,
    "Clouds",
    8.2,
    "2020-10-09",
    "Young musician Zach Sobiech discovers his cancer has spread, leaving him just a few months to live. With limited time, he follows his dream and makes an album, unaware that it will soon be a viral music phenomenon.",
    "/2YvT3pdGngzpbAuxamTz4ZlabnT.jpg"
  ),
]

const trendingIds = [155, 272, 414906, 49026, 268, 364, 209112, 414, 415]

export const trendingMovies: Movie[] = trendingIds.map((id) => {
  const movie = movies.find((item) => item.id === id)
  if (!movie) throw new Error(`Missing trending movie ${id}`)
  return movie
})

const trailers: Record<number, Video[]> = {
  155: [
    {
      id: "video-155-trailer",
      key: "EXeTwQWrcwY",
      name: "The Dark Knight — Trailer",
      site: "YouTube",
      type: "Trailer",
      official: true,
    },
  ],
  414906: [
    {
      id: "video-414906-trailer",
      key: "mqqft2x_Aa4",
      name: "The Batman — Trailer",
      site: "YouTube",
      type: "Trailer",
      official: true,
    },
  ],
  49026: [
    {
      id: "video-49026-trailer",
      key: "g8evyE9TuYk",
      name: "The Dark Knight Rises — Trailer",
      site: "YouTube",
      type: "Trailer",
      official: true,
    },
  ],
}

export function findMovie(id: string): Movie | undefined {
  if (!/^\d+$/.test(id)) return undefined
  const numericId = Number(id)
  return movies.find((movie) => movie.id === numericId)
}

export function videosFor(id: string) {
  const movie = findMovie(id)
  if (!movie) return null

  return {
    id: movie.id,
    results: trailers[movie.id] ?? [],
  }
}
