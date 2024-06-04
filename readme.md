# 👋 SignalR Projesi  👋  

SignalR kullanarak basit istemci-sunucu uygulamasıdır.
Bağlantı durumları ve kullanıcı giriş-çıkışları ekranda gösterilmiştir.

## Teknolojiler
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" alt=".NET Core" width="100" style="margin: 10px; border: 2px solid black;" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="100" style="margin: 10px; border: 2px solid black;" />
  <img src="https://vitejs.dev/logo.svg" alt="Vite" width="100" style="margin: 10px; border: 2px solid black;" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" width="100" style="margin: 10px; border: 2px solid black;" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" width="100" style="margin: 10px; border: 2px solid black;" />
</p>

- **Backend**: ASP.NET Core, SignalR
- **Frontend**: React-Vite, SignalR Client for JavaScript
- **Diğerleri**: HTML, CSS

## Kurulum

Projenin yerel makinenizde çalışması için aşağıdaki adımları izleyin.

### Gereksinimler

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js ve npm](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Kurulum

1. Depoyu klonlayın:
    ```bash
    git clone https://github.com/ibrahimTaskin/SignalR.Project.git
    cd signalr-istemci-sunucu
    ```

2. Sunucuyu kurun:
    ```bash
    cd Server
    dotnet restore
    dotnet build
    dotnet run
    ```

3. İstemciyi kurun:
    ```bash
    cd ../Client
    npm install
    npm run dev
    ```

Sunucu `http://localhost:5001` adresinde ve istemci `http://127.0.0.1:5173/` adresinde çalışacaktır.

## Ekran Görüntüleri
<img src="Client/HubClient/src/assets/image.png" alt="Image 1" width="700" style="border: 1px solid black;" />
<p align="center">
  <img src="Client/HubClient/src/assets/image4.png" alt="Image 1" width="300" height="200" style="border: 1px solid black;" />
  <img src="Client/HubClient/src/assets/image3.png" alt="Image 2" width="300" height="200" style="border: 1px solid black;" />
  <img src="Client/HubClient/src/assets/image2.png" alt="Image 3" width="300" height="200" style="border: 1px solid black;" />
</p>


## Katkıda Bulunma

Katkılar memnuniyetle karşılanır! Lütfen depoyu forklayın ve değişikliklerinizle bir pull request oluşturun.

