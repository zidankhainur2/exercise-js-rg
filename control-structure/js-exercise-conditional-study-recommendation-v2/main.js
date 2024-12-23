function studyRecommendation(mathScore, physicsScore, englishScore) {
  const jurusan = {
    "Teknik Informatika": { minMtk: 85, minFisika: 85, minInggris: 85 },
    Teknik: { minMtk: 80, minFisika: 75, minInggris: 0 },
    Ekonomi: { minMtk: 80, minFisika: 0, minInggris: 70 },
    "Sastra Inggris": { minMtk: 0, minFisika: 0, minInggris: 70 },
    Matematika: { minMtk: 80, minFisika: 0, minInggris: 0 },
    Fisika: { minMtk: 0, minFisika: 75, minInggris: 0 },
  };

  let recommendations = [];

  for (const [major, requirements] of Object.entries(jurusan)) {
    if (
      mathScore >= requirements.minMtk &&
      physicsScore >= requirements.minFisika &&
      englishScore >= requirements.minInggris
    ) {
      recommendations.push(major);
    }
  }

  if (recommendations.length === 0) {
    return "Maaf, tidak ada rekomendasi yang dapat kami berikan.";
  } else {
    return `Rekomendasi jurusan yang bisa dipilih: ${recommendations.join(
      ";"
    )};`;
  }
}

console.log(studyRecommendation(0, 0, 0)); // expected Output => Maaf, tidak ada rekomendasi yang dapat kami berikan.
console.log(studyRecommendation(80, 70, 70)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Ekonomi;Sastra Inggris;Matematika;
console.log(studyRecommendation(80, 75, 60)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Teknik;Matematika;Fisika;
console.log(studyRecommendation(60, 85, 85)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;Fisika;
console.log(studyRecommendation(80, 85, 70)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Teknik;Ekonomi;Sastra Inggris;Matematika;Fisika;
console.log(studyRecommendation(85, 70, 70)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Ekonomi;Sastra Inggris;Matematika;
console.log(studyRecommendation(64, 90, 85)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;Fisika;
console.log(studyRecommendation(40, 85, 60)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Fisika;
console.log(studyRecommendation(85, 85, 85)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Teknik Informatika;Teknik;Ekonomi;Sastra Inggris;Matematika;Fisika;

module.exports = studyRecommendation;
