const makeCardDiv = document.getElementById("makeCard");

function selectImage(image) {
    // 첫 페이지 요소 숨기기
    const selectBgDiv = document.getElementById("selectBg");
    selectBgDiv.style.display = "none";

    // 반투명 편지지 표시
    makeCardDiv.style.display = "flex";

    // document.body.style.backdropFilter = "none";

    // 배경 이미지 설정
    const letterContainer = document.getElementById("makeCard");
    letterContainer.style.backgroundImage = `url(${image})`;
}

function saveLetter() {
    const letterContainer = document.getElementById("makeCard");
    html2canvas(letterContainer).then(canvas => {
        const link = document.createElement('a');
        link.download = 'letter.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

function goBack() {
    // 편지지 숨기기
    makeCardDiv.style.display = "none";

    // 첫 페이지 요소 다시 보이기
    const selectBgDiv = document.getElementById("selectBg");
    selectBgDiv.style.display = "block";

    const letterContainer = document.querySelector("makeCard");
    letterContainer.style.backgroundImage = "../img/back.jpg";
}