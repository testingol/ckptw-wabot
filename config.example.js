const {
    bold
} = require('@mengkodingan/ckptw');

// API Key
global.apiKey = {
    imgbb: 'REPLACE_THIS_WITH_YOUR_API_KEY', // Dapatkan di: https://id.imgbb.com/
    lowline: 'REPLACE_THIS_WITH_YOUR_API_KEY' // Dapatkan di: https://www.lowline.ai/
};

// Bot
global.bot = {
    name: 'Rei Ayanami',
    prefix: /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i
};

// MSG (Message / Pesan)
global.msg = {
    // Akses perintah
    admin: 'Perintah hanya dapat diakses oleh admin grup!',
    owner: 'Perintah hanya dapat diakses Owner!',
    group: 'Perintah hanya dapat diakses dalam grup!',
    private: 'Perintah hanya dapat mengakses obrolan pribadi!',

    // Proses perintah
    argument: 'Masukkan argumen!',
    botAdmin: 'Bot bukan admin, tidak bisa menggunakan perintah!',
    notFound: 'Tidak ada hasil yang ditemukan!',
    urlInvalid: 'URL tidak valid!',
    wait: 'Tunggu sebentar...'
};

// Owner
global.owner = {
    name: 'ItsReimau',
    number: '6283838039693',
    organization: 'Kumaha Aing'
};

// Sticker
global.sticker = {
    packname: 'Take care of yourself.',
    author: '@rei-ayanami'
};

// System
global.system = {
    startTime: null
};