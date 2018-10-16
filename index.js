var whowhat = [];
function theBeatlesPlay(name, instrument) {
  name = ["John Lennon","Paul McCartney", "George Harrison", "Ringo Starr"];
  instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]; 
    for (var i=0; i<4; i++)
      whowhat[i] = (name[i] + " plays " + instrument[i]);
    return whowhat;
}
theBeatlesPlay();

var facts=[ "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  
