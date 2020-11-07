document.getElementById("addDetail").addEventListener("click", () => {
    console.log("haha")
    let statusHtml = `<div id="status-#id#" class="w-100">
            <p style=" font-weight: 400;">#Time#</p>
            <ul class="list-group" style="border:none">
                <li class="list-group-item"  style="border:none; width : 90vw">Details: #detail# </li>
                <li class="list-group-item"  style="border:none; width : 90vw">Doctor: #doctor#</li>
            </ul>
        </div>`
        let newSttHtml;

    newSttHtml = statusHtml.replace('#id#', 3);
    newSttHtml = newSttHtml.replace('#Time#', "7/11/2020");
    newSttHtml = newSttHtml.replace('#detail#', "Stable physical status.");
    newSttHtml = newSttHtml.replace('#doctor#', "Dr. Thavizsor");
    document.getElementById("healthStt").insertAdjacentHTML("beforeend", newSttHtml);
})