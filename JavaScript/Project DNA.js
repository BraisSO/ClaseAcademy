// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
      mutate() {
        let baseToMutate = Math.floor(Math.random() * this.dna.length - 1);
        let newBase;
        do {
          //mutation base must be different mutated base
          newBase = returnRandBase();
        } while (this.dna[baseToMutate] === newBase);
        this.dna[baseToMutate] = newBase;
        return this.dna;
      },
  
      compareDNA(pAequor) {
        let count = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === pAequor.dna[i]) {
            count++;
          }
        }
        let percentage = Math.round((count / this.dna.length) * 100);
        console.log(
          `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common`
        );
      },
  
      willLikelySurvive() {
        let count = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === "C" || this.dna[i] === "G") {
            count++;
          }
        }
        let percentage = (count / this.dna.length) * 100;
        return percentage >= 60;
      },
    };
  };
  
  const pAequors = [];
  let pAeqourWillSurvive;
  for (let j = 0; j < 30; j++) {
    do {
      pAeqourWillSurvive = pAequorFactory(j, mockUpStrand());
    } while (!pAeqourWillSurvive.willLikelySurvive());
    pAequors.push(pAeqourWillSurvive);
  }
  
  pAequors.forEach((pAequor) => {
    console.log((specimenNum: pAequor.specimenNum));
    console.log("DNA:         " + pAequor.dna);
    console.log("Likely to Survive: " + pAequor.willLikelySurvive());
    console.log("Mutated DNA: " + pAequor.mutate());
  });
  
  for (let j = 1; j < pAequors.length; j++) {
    pAequors[j - 1].compareDNA(pAequors[j]);
  }
  