# Frontend Website Skhole 2022 - Jumantara

## Penjelasan Struktur
Di sini ada penjelasan beberapa folder beserta fungsinya:
### Components
Folder yang dipake buat nyimpen komponen-komponen yang udah distyling dan biasanya dipake berulang, e.g. card, button, pagination, dsb

### Hooks
Folder yang dipake buat nyimpen keperluan autentikasi/login 
**_Boleh diabaikan_**

### Layout
Folder yang dipake buat nyimpen komponen layouting, e.g. navbar, dsb

### Pages
Folder yang dipake buat nyimpen file typescript utama yang ditampilin di setiap halaman. Dibagi ke:
| No | Pages          | Struktur                   |
|----|----------------|----------------------------|
| 1  | Home Page      | index.tsx                  |
| 2  | Search Page    | .\search\index.tsx         |
| 3  | Rumah Belajar  | .\rumah-belajar\index.tsx  |
| 4  | Rumah Membaca  | .\rumah-membaca\index.tsx  |
| 5  | Bingkai Skhole | .\bingkai-skhole\index.tsx |
| 6  | Tentang Kami   | .\tentang-kami\index.tsx   |
| 7  | Coming Soon    | .\coming-soon\index.tsx    |

### Public
Folder yang dipake buat nyimpen asset-asset public, e.g. image, icon

### Styles
Folder yang dipake buat nyimpen asset css buat styling
**_Boleh diabaikan_**

### Themes
Folder yang dipake buat nyimpen keperluan themes, e.g. font, dsb
**_Boleh diabaikan_**

## Getting Started
### Requirements
Ini requirement yang harus di-install ya
* NodeJS 15.4.0 or newer
    
    Saran: install-nya pake [nvm](https://github.com/nvm-sh/nvm/archive/refs/tags/v0.39.2.zip) aja
    
    Kalau udah ke-install, bisa install node pake ini
    ```
    nvm install latest
    
    nvm use latest
    ```
* NPM

### Instalasi
1. Clone repo
    ```
    git clone "https://github.com/it-skhole/FE-Skhole-2022"
    ```

2. Change directory ke FE-Skhole-2022
    ```
    cd "FE-Skhole-2022"
    ```

3. Install NPM packages
    ```
    npm install
    ```

### Cara Menjalankan Program
1. Lakukan compile terhadap file NextJS
    ```
    npm run dev
    ```

2. Buka link berikut
    [http://localhost:3000](http://localhost:3000)
    