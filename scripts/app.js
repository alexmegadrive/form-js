'use strict'

const htmlService = new HTMLService();
const detailsContainer = document.getElementById('details');
const detailsDescription = document.getElementById('details-hide');
const previewContainer = document.getElementById("preview-container");
const fileInput = document.getElementById('fileUploadBtn');

function showPreview(event) {
    if (event.target.files.length > 0) {
        previewContainer.style.display = 'flex'
        for (let i = 0; i < event.target.files.length; i++) {
            let src = URL.createObjectURL(event.target.files[i]);
            previewContainer.insertAdjacentHTML('beforeend', htmlService.createImage(src));
        }
    }
}


$('#category').change(function () {
    htmlService.showElement(detailsContainer);
    htmlService.hideElement(detailsDescription);
    if ($(this).val() === 'car') {
        detailsContainer.innerHTML = htmlService.paintCarDetails();
    }
    if ($(this).val() === 'phone') {
        detailsContainer.innerHTML = htmlService.paintPhoneDetails();
    }
    if ($(this).val() === 'estate') {
        detailsContainer.innerHTML = htmlService.paintEstateDetails();
    }
});