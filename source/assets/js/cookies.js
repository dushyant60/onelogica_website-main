setCookies = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + "; path=/";
}

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let Value;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) Value = val.substring(name.length);
    })

    return Value;
}

document.querySelector("#accept-cookies-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    setCookies("cookie", true, 30);
});

document.querySelector("#decline-cookies-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    setCookies("cookie", false, 30);
});

cookieMessage = () => {
    if (!getCookie("cookie")) {
        document.querySelector("#cookies").style.display = "block";
    }
}

window.addEventListener("load", cookieMessage);
