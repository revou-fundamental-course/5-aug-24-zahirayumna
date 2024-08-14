// Objek untuk menyimpan kategori BMI
const BMI_CATEGORIES = {
    UNDERWEIGHT : "Kekurangan berat badan",
    NORMAL : "Normal",
    OVERWEIGHT : "Kelebihan berat badan",
    OBESE : "Kelebihan berat badan berlebih (Obesitas)",
};

// Fungsi untuk meghitung BMI dari berat badan dan tinggi badan
const calculateBMI = (weight, height) => {
    let bmi = weight / ((height/100) ** 2);

    return parseFloat(bmi.toFixed(1));
}

// Menentukan kategori BMI berdasarkan nilai BMI
const getBMICategory = (bmi) => {
  if (bmi < 18.5) {
      return BMI_CATEGORIES.UNDERWEIGHT;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      return BMI_CATEGORIES.NORMAL;
  } else if (bmi >= 25 && bmi <= 29.9) {
      return BMI_CATEGORIES.OVERWEIGHT;
  } else {
      return BMI_CATEGORIES.OBESE;
  }
}

// Menampilkan deskripsi teks berdasarkan status BMI
const getDescText = (status) => {
  if (status === BMI_CATEGORIES.UNDERWEIGHT) {
    return 'Anda berada dalam kategori kekurangan berat badan.';
  } else if (status === BMI_CATEGORIES.NORMAL) {
    return 'Anda memiliki berat badan ideal.';
  } else if (status === BMI_CATEGORIES.OVERWEIGHT) {
    return 'Anda berada dalam kategori overweight atau berat badan berlebih.';
  } else {
    return 'Anda berada dalam kategori obesitas.';
  }
};

// Mnemapilkan teks saran berdasarkan kategori BMI
const getSuggestionText = (status) => {
  if (status === BMI_CATEGORIES.UNDERWEIGHT) {
    return 'Anda dianjurkan untuk menambah asupan kalori dan berkonsultasi dengan ahli gizi.';
  } else if (status === BMI_CATEGORIES.NORMAL) {
    return 'Anda memiliki berat badan ideal. Pertahankan pola makan dan gaya hidup sehat.';
  } else if (status === BMI_CATEGORIES.OVERWEIGHT) {
    return 'Anda dianjurkan untuk mulai mengontrol asupan kalori dan berolahraga secara teratur.';
  } else {
    return 'Anda dianjurkan untuk segera berkonsultasi dengan dokter atau ahli gizi untuk program penurunan berat badan.';
  }
};

// Menampilkan teks saran lebih lanjut berdasarkan kategori BMI
const getAdviceText = (status) => {
  if (status === BMI_CATEGORIES.UNDERWEIGHT) {
    return 'Cobalah untuk meningkatkan konsumsi makanan kaya nutrisi dan konsultasikan dengan dokter untuk mendapatkan rencana peningkatan berat badan.';
  } else if (status === BMI_CATEGORIES.NORMAL) {
    return 'Anda sudah berada di jalur yang tepat! Tetaplah konsisten dengan pola makan sehat dan aktivitas fisik yang teratur.';
  } else if (status === BMI_CATEGORIES.OVERWEIGHT) {
    return 'Mempertimbangkan pengurangan asupan kalori dan peningkatan aktivitas fisik harian adalah langkah yang baik.';
  } else {
    return 'Program penurunan berat badan yang diawasi oleh profesional kesehatan mungkin diperlukan untuk membantu Anda mencapai berat badan yang sehat.';
  }
};

// Menampilkan teks list resiko penyakit berdasarkan kategori BMI
const getListRisk = (status) => {
  if (status === BMI_CATEGORIES.UNDERWEIGHT) {
    return ['Kekurangan nutrisi', 'Anemia', 'Osteoporosis', 'Gangguan sistem kekebalan tubuh', 'Risiko lebih tinggi terhadap infeksi'];
  } else if (status === BMI_CATEGORIES.NORMAL) {
    return ['Tidak ada'];
  } else if (status === BMI_CATEGORIES.OVERWEIGHT) {
    return ['Hipertensi', 'Diabetes tipe 2', 'Penyakit jantung', 'Kolesterol', 'Sleep apnea'];
  } else {
    return ['Penyakit jantung koroner', 'Stroke', 'Kanker payudara dan usus besar', 'Osteoarthritis', 'Penyakit hati berlemak'];
  }
};

// Fungsi untuk menampilkan hasil BMI, status, saran, dan resiko penyakit
function displayBMIResult() {
  // Mengambil nilai dari input form
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  // Fungsi untuk memastikan berat dan tinggi badan sudah diisi
  if (!weight || !height) {
      alert("Silakan masukkan berat dan tinggi badan Anda.");
      return;
  }

  // Hitung BMI
  let bmi = calculateBMI(weight, height);

  // Mentukan kategori BMI
  let status = getBMICategory(bmi);

  // Untuk mendapatkan deskripsi, saran, dan risiko penyakit
  let descText = getDescText(status);
  let suggestionText = getSuggestionText(status);
  let adviceText = getAdviceText(status);
  let riskList = getListRisk(status);

  // Menampilkan hasil ke dalam elemen HTML
  document.getElementById("resultTitle").innerText = status;
  document.getElementById("resultBMI").innerText = bmi;
  document.getElementById("resultDesc").innerText = descText;

  document.getElementById("resultText").innerText = `BMI Anda: ${bmi}`;

  document.getElementById("suggestionText").innerText = suggestionText;
  document.getElementById("adviceText").innerText = adviceText;

  // Menampilkan elemen list untuk risiko penyakit
  let riskTitle = document.getElementById("riskTitle");
  riskTitle.innerHTML = `Beberapa resiko penyakit yang berasal dari tubuh ${status}`;

  let riskContainer = document.getElementById("listRisk");
  riskContainer.innerHTML = ''; 
  riskList.forEach(risk => {
      let li = document.createElement("li");
      li.innerText = risk;
      riskContainer.appendChild(li);
  });

  // Fungsi untuk menampilkan container hasil
  document.getElementById("result").classList.remove("d-hidden");
}

// Menambahkan event listener untuk tombol "Hitung BMI"
document.querySelector('.btn').addEventListener('click', displayBMIResult);

// Fungsi untuk menyembunyikan container hasil saat reset ditekan
function resetBMIResult() {
  document.getElementById("result").classList.add("d-hidden");
}

// Menambahkan event listener untuk tombol "Reset"
document.querySelector('.bg-reset').addEventListener('click', resetBMIResult);
