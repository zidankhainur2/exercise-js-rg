function process_argv() {
  const { argv } = process;
  const result = krsApplication(argv[2], argv[3], argv[4]);

  return result;
}

function krsApplication(name, programId, gpa) {
  switch (programId) {
    case "ACC": {
      nameOfProgramId = "Akuntansi";
      break;
    }
    case "HIN": {
      nameOfProgramId = "Hubungan Internasional";
      break;
    }
    case "IAB": {
      nameOfProgramId = "Ilmu Administrasi Bisnis";
      break;
    }
    case "IAP": {
      nameOfProgramId = "Ilmu Administrasi Publik";
      break;
    }
    case "MJN": {
      nameOfProgramId = "Manajemen";
      break;
    }
    case "TKM": {
      nameOfProgramId = "Teknik Kimia";
      break;
    }
  }

  let sks = 0;

  if (gpa > 4 || gpa < 0) {
    return "Invalid gpa number";
  }

  if (gpa >= 3) {
    sks = 24;
    return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  } else if (gpa >= 2.5 && gpa < 3) {
    sks = 21;
  } else if (gpa >= 2 && gpa < 2.49) {
    sks = 18;
  } else if (gpa >= 1.5 && gpa < 2) {
    sks = 15;
  } else if (gpa >= 0 && gpa < 1.49) {
    sks = 12;
  } else {
    sks = 0;
  }

  if (gpa < 3) {
    return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${nameOfProgramId} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  }
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = krsApplication;
