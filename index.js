const paragraph = document.getElementById('demo');
const checkedBtn = document.getElementById('check-btn');
const checkbox = document.getElementById('checkbox');
checkedBtn.onclick = function () {
    if(checkbox.checked) {
        paragraph.innerText = "submitted successfully.";
    }
    else {
        paragraph.innerText = "please agree to the terms and conditions.";
    }
};