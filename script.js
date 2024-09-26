if ('SpeechRecognition' in window || "webkitSpeechRecognition" in window) {
    //buat objek recognition yang baru
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    //bahasa yang akan dikenali
    recognition.lang = 'id-ID'; //Bahasa Indonesia
  //   recognition.lang = 'en-US'; //Bahasa Inggris (AS)

    //saat proses pengenalan suara dimulai
    recognition.onstart = function() {
      console.log('Pengenalan suara dimulai. ');
  };

    //ketika hasil pengenalan terdeteksi
    recognition.onresult = function(event) {
      var result = event.results[0][0].transcript;
      document.getElementById('output').textContent = result;
    };

    //Ketika proses pengenalan suara selesai
    recognition.onend = function() {
      console.log('Pengenalan suara berhasil dilakukan');
    };

    //Ketika terdapat kesalahan dalam pengenalan suara
    recognition.onerror = function(event) {
      console.error('Error: ', event.error);
    };

    //Menambah event listener untuk button mulai
    document.getElementById('start-btn').addEventListener('click', function() {
      recognition.start();
    });

    // Menambah event listener untuk button stop
    document.getElementById('stop-btn').addEventListener('click', function() {
      recognition.stop(); // menghentikan pengenalan suara
      console.log('Pengenalan suara dihentikan.');
  });

  // Event listener untuk button clear
  document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('output').textContent = ''; // Menghapus teks
    console.log('Teks dihapus.');
});
  }else {
      //jika browser tidak mendukung Web Speech API
      document.getElementById('output').textContent = 'Maaf, browsermu tidak mendukung fitur record menggunakan mic!';
  }