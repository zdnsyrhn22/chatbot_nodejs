# Chatbot NodeJS
*Chatbot pintar berbasis Discord dengan mengimplementasikan BardAI*

> Program ini bertujuan untuk meningkatkan pengalaman berbincang terhadap AI melalui Discord tanpa membuka web Chat AI sepeti ChatGPT atau BardAI

## Library
- [Discord.js](https://github.com/discordjs/discord.js)
- [bard-ai](https://github.com/EvanZhouDev/bard-ai)
- [node-fetch](https://github.com/node-fetch/node-fetch) (Optional)

<br>

> ### Discord.js
> library (pustaka) JavaScript yang digunakan untuk membuat bot dan aplikasi yang terintegrasi dengan platform komunikasi Discord. Library ini memungkinkan pengembang untuk berinteraksi dengan API Discord menggunakan JavaScript, memungkinkan pembuatan bot yang dapat mengelola pesan, server, pengguna, dan fitur lainnya dalam ekosistem Discord.
> <br><br>
> **Dibutuhkan**
> - Bot Discord [(source)](https://www.xda-developers.com/how-to-create-discord-bot/#how-to-create-and-add-a-discord-bot-to-your-server)
> - DISCORD_TOKEN [(source)](https://www.xda-developers.com/how-to-create-discord-bot/#how-to-create-and-add-a-discord-bot-to-your-server)
> - DISCORD_CHANNEL_ID [(source)](https://turbofuture.com/internet/Discord-Channel-ID#:~:text=If%20you're%20on%20a,be%20copied%20to%20your%20clipboard!)

<br>

> ### Bard-AI
> Bard-ai adalah perpustakaan Node.js untuk mengakses Google Bard. Ini adalah perpustakaan yang ringan, yang berarti ukurannya kecil dan cepat. Bard-ai dapat digunakan untuk menanyakan pertanyaan kepada Google Bard dan menerima respons. Bard-ai juga dapat digunakan untuk menghasilkan teks, menerjemahkan bahasa, dan menulis berbagai jenis konten kreatif.
> <br><br>
> **Dibutuhkan**
> - BARD_API_KEY
>   - Akses beranda Google Bard AI. (Diperlukan Akun Google)
>   - Cari cookie bernama: __Secure-1PSID (ini adalah token Anda) [ inspect > application > cookie ]
>   - Nilai tersebut diakhiri dengan tanda titik, contoh: WAgzxxx_Zhxxx_xxx_b7XX.

<br>

## Pengguanaan
- Clone repository [ git clone https://github.com/zdnsyrhn22/chatbot_nodejs.git ]
- Buat file .env didalam folder
- Isi file .env dengan DISCORD_TOKEN, DISCORD_CHANNEL_ID, BARD_API_KEY
- contoh BARD_API_KEY=WAgzxxx_Zhxxx_xxx_b7XX
- jalankan code [ npm start ]
