file_place.innerHTML = "";
app_place.innerHTML = "";
// Функция для загрузки и обработки JSON-файла
function loadAndDisplayData() {
    fetch('json/files.json')
        .then(response => response.json())
        .then(data => {
            // Получите ссылки на div'ы
            const file_place = document.getElementById("file_place");
            const app_place = document.getElementById("app_place");
            // Переберите элементы и распределите их по div'ам
            data.forEach(item => {
                const itemType = item.type;
                const files = item.files;

                // Создайте элементы для файлов или приложений и добавьте их в соответствующий div
                files.forEach(file => {
                    const container = document.createElement("div");
                    container.className = "file_container";

                    const file_name = document.createElement("div");
                    file_name.className = "file_name";
                    file_name.textContent = file.name;
                    container.appendChild(file_name);

                    const button = document.createElement("a");
                    button.href = file.path;
                    button.target = "_self";
                    button.download = file.path;
                    button.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M2.73926 19.5199C2.05317 19.5199 1.39517 19.2446 0.910033 18.7545C0.424893 18.2644 0.152344 17.5997 0.152344 16.9066V13.1733C0.152344 12.8763 0.269151 12.5914 0.477068 12.3814C0.684985 12.1713 0.966982 12.0533 1.26102 12.0533C1.55506 12.0533 1.83706 12.1713 2.04497 12.3814C2.25289 12.5914 2.3697 12.8763 2.3697 13.1733V16.9066C2.3697 17.1127 2.53526 17.28 2.73926 17.28H18.2607C18.3588 17.28 18.4528 17.2406 18.5221 17.1706C18.5914 17.1006 18.6303 17.0056 18.6303 16.9066V13.1733C18.6303 12.8763 18.7471 12.5914 18.955 12.3814C19.1629 12.1713 19.4449 12.0533 19.739 12.0533C20.033 12.0533 20.315 12.1713 20.5229 12.3814C20.7308 12.5914 20.8477 12.8763 20.8477 13.1733V16.9066C20.8477 17.5997 20.5751 18.2644 20.09 18.7545C19.6048 19.2446 18.9468 19.5199 18.2607 19.5199H2.73926Z" fill="white"/>
                        <path d="M9.38952 10.0956V1.60009C9.38952 1.30305 9.50632 1.01818 9.71424 0.80814C9.92216 0.598101 10.2042 0.480103 10.4982 0.480103C10.7922 0.480103 11.0742 0.598101 11.2821 0.80814C11.4901 1.01818 11.6069 1.30305 11.6069 1.60009V10.0956L14.519 7.15523C14.6219 7.0513 14.744 6.96885 14.8785 6.9126C15.0129 6.85635 15.157 6.8274 15.3025 6.8274C15.448 6.8274 15.592 6.85635 15.7265 6.9126C15.8609 6.96885 15.983 7.0513 16.0859 7.15523C16.1888 7.25917 16.2704 7.38256 16.3261 7.51836C16.3818 7.65416 16.4104 7.7997 16.4104 7.94669C16.4104 8.09368 16.3818 8.23923 16.3261 8.37503C16.2704 8.51082 16.1888 8.63421 16.0859 8.73815L11.2817 13.5914C11.1788 13.6955 11.0567 13.778 10.9223 13.8343C10.7878 13.8906 10.6437 13.9196 10.4982 13.9196C10.3527 13.9196 10.2086 13.8906 10.0741 13.8343C9.93969 13.778 9.81756 13.6955 9.71473 13.5914L4.91046 8.73815C4.80757 8.63421 4.72596 8.51082 4.67028 8.37503C4.6146 8.23923 4.58594 8.09368 4.58594 7.94669C4.58594 7.7997 4.6146 7.65416 4.67028 7.51836C4.72596 7.38256 4.80757 7.25917 4.91046 7.15523C5.01335 7.0513 5.13549 6.96885 5.26992 6.9126C5.40434 6.85635 5.54842 6.8274 5.69392 6.8274C5.83943 6.8274 5.98351 6.85635 6.11793 6.9126C6.25236 6.96885 6.3745 7.0513 6.47739 7.15523L9.38952 10.0956Z" fill="white"/>
                    </svg>`
                    button.className = "button_container";
                    container.appendChild(button);

    
                    // element.textContent = file.name + " (" + file.path + ")";


                    if (itemType === "file") {
                        container.className = "file_container";
                        file_place.appendChild(container);
                    } else if (itemType === "app") {
                        container.className = "app_container";
                        app_place.appendChild(container);
                    }

                });
            });
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
}

// Вызовите функцию загрузки и обработки данных при загрузке страницы
window.addEventListener('load', loadAndDisplayData);
