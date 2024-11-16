function isOpenModal() {
    return window.location.href.match(/#exampleModal/);
}
function historyAdd() {
    let stateObj = {
        modal: "true"
    };
    window.history.pushState(stateObj, "", "#exampleModal");
}

function historyBack() {
    window.history.back();
}

function historyChange() {
    const elemModal = document.querySelector("#exampleModal");
    const modal = bootstrap.Modal.getOrCreateInstance(elemModal);
    if (isOpenModal() !== null) {
        modal.show();
    } else {
        modal.hide();
    }
}

function saveValue() {
    window.localStorage.setItem(this.name, this.value);
}

function saveForm(event) {
    event.preventDefault();
    if (!document.querySelector("form").reportValidity()) {
        return;
    }
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("post", "https://formcarry.com/s/iWa5cGiG1X9");
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.setRequestHeader("Accept", "application/json");
    let obj = {};
    let inputs = document.querySelectorAll(".form-control:not(.form-label)");
    inputs.forEach(function (i) {
        obj[i.name] = i.value;
    });
    httpRequest.send(JSON.stringify(obj));
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            let otvet = document.querySelector(".otvet");
            if (this.status === 200) {
                otvet.innerHTML = "Успешно";
                window.localStorage.clear();
            } else {
                otvet.innerHTML = "Повторите попытку";
            }
            historyBack();
        }
    };
}

window.addEventListener("DOMContentLoaded", function () {
    let butM = document.getElementById("buttonModal");
    butM.addEventListener("click", historyAdd);
    let butC = document.getElementById("buttonClose");
    butC.addEventListener("click", historyBack);
    window.addEventListener("popstate", historyChange);
    let inputs = document.querySelectorAll(".form-control:not(.form-label)");
    inputs.forEach(function (i) {
        i.addEventListener("input", saveValue);
    });
    let lStor = window.localStorage;
    Object.keys(lStor).forEach(function (i) {
        document.getElementsByName(i)[0].value = lStor.getItem(i);
    });
    document.getElementById("form").addEventListener("submit", saveForm);
    historyChange();
});
